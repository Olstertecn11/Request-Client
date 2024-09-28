import RouterManager from "./routes/RouteManager";
import { ChakraProvider } from "@chakra-ui/react";


const App = () => {
  return (
    <div>
      <ChakraProvider>
        <RouterManager />
      </ChakraProvider>
    </div>
  )
}

export default App;
