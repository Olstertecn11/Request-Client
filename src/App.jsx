import PrayerRequest from "./sections/PrayerRequest";
import AdminDashboard from "./sections/AdminDashboard";
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <>
      <Navbar />
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrayerRequest />} />
            <Route path="/app/admin" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
