import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CommonLayout from './components/layouts/CommonLayout'
import Loader from './components/shared/Loader'
import DashboardLayout from './components/layouts/DashboardLayout';
import useDelayedLoader from './components/hooks/useDelayedLoader';

import Student from './components/dashboard/Student';
import Orders from './components/dashboard/Orders';
import ChangeUserPassword from './pages/ChangeUserPassword';
import ResetPassword from './components/ResetPassword';
import OrderDetails from './components/dashboard/OrderDetails';


const RefundPolicy = lazy(() => import('./pages/policypages/RefundPolicy'));
const FairUse = lazy(() => import('./pages/policypages/FairUse'));
const OrderTable = lazy(() => import('./components/admin/OrderTable'));
const PaymentTable = lazy(() => import('./components/admin/PaymentTable'));
const TermsAndConditions = lazy(() => import('./pages/policypages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/policypages/PrivacyPolicy'));
const AdminLayout = React.lazy(() => import('./components/layouts/AdminLayout'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const Home = lazy(() => import('./pages/Home'))
const Profile = lazy(() => import('./pages/Profile'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Admin = lazy(() => import('./pages/Admin'))
// const Reviews = lazy(() => import('./pages/Reviews'))
// const Samples = lazy(() => import('./pages/Samples'))

const Routers = () => {
  const location = useLocation();
  const showLoader = useDelayedLoader(300);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Suspense fallback={showLoader ? <Loader /> : null}>
      <Routes>

        {/* public routes */}
        <Route path='/' index element={<CommonLayout><Home /></CommonLayout>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/change-password' element={<ChangeUserPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        {/* <Route path='/reviews' element={<Reviews />} />
        <Route path='/samples' element={<Samples />} /> */}


        {/* policy routes */}
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/fair-use-policy' element={<FairUse />} />


        {/* admin routes */}
        <Route path='/admin' element={<AdminLayout><Admin /></AdminLayout>} />
        <Route path='/admin/all-orders' element={<AdminLayout><OrderTable /></AdminLayout>} />
        <Route path='/admin/all-payments' element={<AdminLayout><PaymentTable /></AdminLayout>} />
        <Route path='/admin/order-payment/:id' element={<AdminLayout><PaymentTable /></AdminLayout>} />

        {/* Dashboard routes */}
        <Route path='/dashboard' element={<DashboardLayout>{<><Student /></>}</DashboardLayout>} />
        <Route path='/dashboard/orders' element={<DashboardLayout>{<><Orders /></>}</DashboardLayout>} />
        <Route path='/dashboard/customer/:customerId/order/:id' element={<DashboardLayout>{<><OrderDetails /></>}</DashboardLayout>} />



        <Route path='*' element={<CommonLayout><NotFound /></CommonLayout>} />
        <Route path='/coming-soon' element={<CommonLayout><ComingSoon /></CommonLayout>} />

      </Routes>
    </Suspense>
  )
}

export default Routers
