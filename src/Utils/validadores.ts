export function apenasDigitos(value: string): string {
  return value.replace(/\D/g, "");
}

export function validarNomeCompleto(nome: string): boolean {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (partes.length < 2) return false;
  return partes.every((parte) => parte.length >= 2);
}

export function validarCPF(cpf: string): boolean {
  const digitos = apenasDigitos(cpf);
  if (digitos.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digitos)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(digitos[i], 10) * (10 - i);
  let resto = 11 - (soma % 11);
  const dv1 = resto >= 10 ? 0 : resto;
  if (dv1 !== parseInt(digitos[9], 10)) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(digitos[i], 10) * (11 - i);
  resto = 11 - (soma % 11);
  const dv2 = resto >= 10 ? 0 : resto;
  if (dv2 !== parseInt(digitos[10], 10)) return false;

  return true;
}

export function validarTelefone(telefone: string): boolean {
  const digitos = apenasDigitos(telefone);
  if (digitos.length !== 10 && digitos.length !== 11) return false;
  const ddd = parseInt(digitos.slice(0, 2), 10);
  if (ddd < 11 || ddd > 99) return false;
  if (digitos.length === 11 && digitos[2] !== "9") return false;
  return true;
}

export function validarCNH(cnh: string): boolean {
  const digitos = apenasDigitos(cnh);
  if (digitos.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digitos)) return false;

  let dsc = 0;
  let soma = 0;
  let peso = 9;
  for (let i = 0; i < 9; i++, peso--) soma += parseInt(digitos[i], 10) * peso;
  let dv1 = soma % 11;
  if (dv1 >= 10) {
    dv1 = 0;
    dsc = 2;
  }

  soma = 0;
  peso = 1;
  for (let i = 0; i < 9; i++, peso++) soma += parseInt(digitos[i], 10) * peso;
  let dv2 = soma % 11;
  if (dv2 >= 10) {
    dv2 = 0;
  } else {
    dv2 -= dsc;
    if (dv2 < 0) dv2 += 11;
  }

  return `${dv1}${dv2}` === digitos.slice(9, 11);
}

export function validarPlaca(placa: string): boolean {
  const valor = placa.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  const antigo = /^[A-Z]{3}[0-9]{4}$/;
  const mercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  return antigo.test(valor) || mercosul.test(valor);
}

export function formatarCPF(value: string): string {
  const digitos = apenasDigitos(value).slice(0, 11);
  return digitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatarTelefone(value: string): string {
  const digitos = apenasDigitos(value).slice(0, 11);
  if (digitos.length <= 10) {
    return digitos
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }
  return digitos
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

export function formatarPlaca(value: string): string {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 7);
}

export function formatarCNH(value: string): string {
  return apenasDigitos(value).slice(0, 11);
}
