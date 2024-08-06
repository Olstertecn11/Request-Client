import PrayerRequest from "./sections/PrayerRequest";
import AdminDashboard from "./sections/AdminDashboard";
import Ayuda from "./pages/Ayuda";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/admin" element={<AdminDashboard />} />
            <Route path="/Ayuda" element={<Ayuda />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
