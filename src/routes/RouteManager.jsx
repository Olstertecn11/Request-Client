import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/common/Loader';
import Layout from '../components/common/Layout';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';

const RouterManager = () => {

  const routes = (
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <Routes>
          {userRoutes.map((entry, index) => {
            return (
              <Route key={index} path={entry.path} element={<Layout page={<entry.page />} />} />
            )
          })
          }

          {adminRoutes.map((entry, index) => {
            return (
              <Route key={index} path={entry.path} element={<entry.page />} />
            )
          })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
  return routes;
}


export default RouterManager;

