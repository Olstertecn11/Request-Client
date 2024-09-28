import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/common/Loader';
import Layout from '../components/common/Layout';
import AdminLayout from '../components/admin/AdminLayout';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import NotFound from '../pages/common/NotFound';

const RouterManager = () => {

  const routes = (
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <Routes>
          {userRoutes.map((entry, index) => {
            return (
              <Route key={index} path={entry.path} element={<Layout page={<entry.page />} type="client" />} />
            )
          })
          }
          {adminRoutes.map((entry, index) => {
            return (
              <Route key={index} path={entry.path} element={<AdminLayout><entry.page /></AdminLayout>} />
            )
          })
          }
          <Route key={'12k'} path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
  return routes;
}


export default RouterManager;

