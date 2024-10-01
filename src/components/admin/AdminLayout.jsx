

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import { Flex, Box } from "@chakra-ui/react";
import Loader from "../common/Loader";
import Footer from "../common/Footer";
import AdminNav from "./AdminNav";
import { useLocation } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!token || !user || !isAdmin(user.roles)) {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('user');
    //   history("/admin");
    //   setIsLogged(false);
    //   setIsChecking(false);
    // } else {
    //   setIsLogged(true);
    //   setIsChecking(false);
    // }
    setIsLogged(true);
    setIsChecking(false);
    console.log(location.pathname);
  }, [history]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (location.pathname === '/admin/') {
    return (
      <div>
        {children}
      </div>
    )
  }

  return (
    <>
      <Loader isLoading={isChecking} message="Verificando autenticación..." />
      {!isChecking && isLogged && (
        <Flex>
          {isSidebarOpen && (
            <Box w="250px" h="100vh" position="fixed">
              <Sidebar toggleSidebar={toggleSidebar} />
            </Box>
          )}

          <Box
            flex="1"
            ml={isSidebarOpen ? "250px" : "0"}
            p={4}
            bg="gray.50"
            minH="100vh"
            transition="margin-left 0.3s ease"
          >
            <AdminNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            {children}
            <Footer />
          </Box>
        </Flex>
      )}
    </>
  );
};

export default AdminLayout;
