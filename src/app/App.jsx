import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ConsoleLayout from '../layouts/ConsoleLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Apps from '../pages/Apps';
import Users from '../pages/Users';
import Settings from '../pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
        <Route path="/console" element={<ConsoleLayout />}>
          <Route path="/console" element={<Dashboard />} />
          <Route path="/console/profile" element={<Profile />} />
          <Route path="/console/apps" element={<Apps />} />
          <Route path="/console/users" element={<Users />} />
          <Route path="/console/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
