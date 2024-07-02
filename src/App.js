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
import Feed from './pages/manager/Feed';
import Wheather from './pages/services/Wheather';
import Traffic from './pages/services/Traffic';
import GeoFencing from './pages/services/GeoFencing';
import News from './pages/services/News';
import Events from './pages/services/Events';
import Alerts from './pages/services/Alerts';
import Notifications from './pages/services/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>


        {/* Manager Layout Routes */}
        <Route element={<ManagerLayout />}>
          <Route path="/manager" element={<Dashboard/>} />
          <Route path="/manager/content-management" element={<ContentManagement/>} />
          <Route path="/manager/user-management" element={<Usermanagement/>} />
          <Route path="/manager/feed" element={<Feed/>} />
          <Route path="/manager/weather" element={<Wheather/>} />
          <Route path="/manager/traffic" element={<Traffic/>} />
          <Route path="/manager/geo-fencing" element={<GeoFencing/>} />
          <Route path="/manager/news" element={<News/>} />
          <Route path="/manager/events" element={<Events/>} />
          <Route path="/manager/alerts" element={<Alerts/>} />
          <Route path="/manager/notifications" element={<Notifications/>} />
        </Route>


        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode/>} />
          <Route path="/set-new-password" element={<SetNewPassword/>} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;