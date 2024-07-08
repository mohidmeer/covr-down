import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyCode from './pages/auth/VerifyCode';
import SetNewPassword from './pages/auth/SetNewPassword';
import LandingPage from './pages/LandingPage';
import ManagerLayout from './layouts/ManagerLayout';
import Dashboard from './pages/manager/Dashboard';
import ContentManagement from './pages/manager/ContentManagement';
import Usermanagement from './pages/manager/Usermanagement';
import Feed from './pages/services/Feed';
import Wheather from './pages/services/Wheather';
import Traffic from './pages/services/Traffic';
import GeoFencing from './pages/services/GeoFencing';
import News from './pages/services/News';
import Events from './pages/services/Events';
import Alerts from './pages/services/Alerts';
import Notifications from './pages/services/Notifications';
import Profile from './pages/services/Profile';
import SocialMedia from './pages/services/SocialMedia';
import RegionalAwarness from './pages/services/RegionalAwarness';
import PaymentPlan from './pages/services/PaymentPlan';
import PaymentMethods from './pages/services/Paymentmethods';
import Passwords from './pages/services/Passwords';
import DeleteAccount from './pages/services/DeleteAccount';
import UserLayout from './layouts/UserLayout';
import UserDashboard from './pages/user/UserDashboard';

function App() {

  const routes = [
    {
      layout: AuthLayout,
      routes: [
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/forgot-password', element: <ForgotPassword /> },
        { path: '/verify-code', element: <VerifyCode /> },
        { path: '/set-new-password', element: <SetNewPassword /> }
      ]
    },
    {
      layout: MainLayout,
      routes: [
        { path: '/', element: <LandingPage /> }
      ]
    },
    {
      layout: ManagerLayout,
      routes: [
        { path: '/manager', element: <Dashboard /> },
        { path: '/manager/content-management', element: <ContentManagement /> },
        { path: '/manager/user-management', element: <Usermanagement /> },
        { path: '/manager/feed', element: <Feed /> },
        { path: '/manager/weather', element: <Wheather /> },
        { path: '/manager/traffic', element: <Traffic /> },
        { path: '/manager/geo-fencing', element: <GeoFencing /> },
        { path: '/manager/news', element: <News /> },
        { path: '/manager/events', element: <Events /> },
        { path: '/manager/alerts', element: <Alerts /> },
        { path: '/manager/notifications', element: <Notifications /> },
        { path: '/manager/profile', element: <Profile /> },
        { path: '/manager/socialmedia-awareness', element: <SocialMedia /> },
        { path: '/manager/regional-awareness', element: <RegionalAwarness /> },
        { path: '/manager/payment-plan', element: <PaymentPlan /> },
        { path: '/manager/payment-methods', element: <PaymentMethods /> },
        { path: '/manager/passwords', element: <Passwords /> },
        { path: '/manager/delete-account', element: <DeleteAccount /> }
      ]
    },
    {
      layout: UserLayout,
      routes: [
        { path: '/user', element: <UserDashboard /> },
        { path: '/user/feed', element: <Feed /> },
        { path: '/user/weather', element: <Wheather /> },
        { path: '/user/traffic', element: <Traffic /> },
        { path: '/user/geo-fencing', element: <GeoFencing /> },
        { path: '/user/news', element: <News /> },
        { path: '/user/events', element: <Events /> },
        { path: '/user/alerts', element: <Alerts /> },
        { path: '/user/notifications', element: <Notifications /> },
        { path: '/user/profile', element: <Profile /> },
        { path: '/user/socialmedia-awareness', element: <SocialMedia /> },
        { path: '/user/regional-awareness', element: <RegionalAwarness /> },
        { path: '/user/payment-plan', element: <PaymentPlan /> },
        { path: '/user/payment-methods', element: <PaymentMethods /> },
        { path: '/user/passwords', element: <Passwords /> },
        { path: '/user/delete-account', element: <DeleteAccount /> }
      ]
    }
  ];
  return (
    <Router>
       <Routes>
      {routes.map((routeGroup, index) => (
        <Route key={index} element={<routeGroup.layout />}>
          {routeGroup.routes.map((route, subIndex) => (
            <Route key={subIndex} path={route.path} element={route.element} />
          ))}
        </Route>
      ))}
    </Routes>
    </Router>
  );
}

export default App;