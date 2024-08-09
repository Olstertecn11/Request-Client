import Login from "../pages/admin/Login";
import AdminDashboard from '../pages/admin/AdminDashboard';

const adminRoutes = [
  { path: '/admin', page: Login },
  { path: '/admin/dashboard', page: AdminDashboard }
];

export default adminRoutes;



