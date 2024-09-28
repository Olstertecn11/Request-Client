import Login from "../pages/admin/Login";
import AdminDashboard from '../pages/admin/AdminDashboard';
import AllWeekends from '../pages/admin/AllWeekends';

const adminRoutes = [
  { path: '/admin', page: Login },
  { path: '/admin/weekends', page: AllWeekends },
  { path: '/admin/dashboard', page: AdminDashboard },
];

export default adminRoutes;



