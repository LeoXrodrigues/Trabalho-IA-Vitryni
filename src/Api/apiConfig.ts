import { Platform } from "react-native";

const HOST = Platform.select({
  android: "https://chatty-comics-sin.loca.lt", // URL do localtunnel
  default: "http://localhost:8080",
});

export const API_BASE_URL = HOST;

const TIMEOUT_MS = 10000;

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  options?: { method?: string; body?: unknown },
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: options?.method ?? "GET",
      headers: {
        Accept: "application/json",
        "bypass-tunnel-reminder": "true",
        ...(options?.body ? { "Content-Type": "application/json" } : {}),
      },
      body: options?.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      throw new ApiError(
        response.status,
        body?.message ?? `Erro HTTP ${response.status}`,
      );
    }

    return response.json();
  } catch (e) {
    if (e instanceof ApiError) throw e;
    if (e instanceof Error && e.name === "AbortError") {
      throw new ApiError(0, "Tempo de conexão esgotado.");
    }
    throw new ApiError(0, "Falha de conexão com a API.");
  } finally {
    clearTimeout(timer);
  }
}