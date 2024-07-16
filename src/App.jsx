import PrayerRequest from "./sections/PrayerRequest"
import Navbar from "./components/Navbar"

import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <div>
      <Navbar />
      <ChakraProvider>
        <PrayerRequest />
      </ChakraProvider>
    </div>
  )
}

export default App
