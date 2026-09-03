import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Rotas } from "./Navigation/rotas";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

export default App;
