import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
// import Page1 from "pages/Features/Features";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const Features = lazy(() => import("pages/Features/Features"));
const Pricing = lazy(() => import("pages/Pricing/Pricing"));
const Login = lazy(() => import("pages/Login/Login"));
const Signup = lazy(() => import("pages/Signup/Signup"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
