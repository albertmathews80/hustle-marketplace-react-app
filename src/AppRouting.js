import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/servicesComponents/footer/Footer";
import logo from "./images/Hustle-logo.png";
import blackRing from "./images/Vector.png";
import About from "./pages/About";
import ActiveOrders from "./pages/ActiveOrders";
import AdminDashboard from "./pages/AdminDashboard";
import BecomeAHustler from "./pages/BecomeHustler";
import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Invoice from "./pages/Invoice";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Others from "./pages/Others";
import OurServices from "./pages/OurServices";
import Profile from "./pages/Profile";
import RegisterList from "./pages/RegisterList";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProfile from "./pages/SellerProfile";
import SellerView from "./pages/SellerView";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesList from "./pages/ServicesList";
import Verification from "./pages/Verification";
import "./styles/App.css";

const AppRouting = () => {
  const location = useLocation();

  return (
    <>
      {/* routing */}
      {location.pathname !== "/dashboard" &&
        location.pathname !== "/sellerdashboard" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/" && <Navbar logo={logo} ring={blackRing} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/:id" element={<ServicesList />} />
        <Route path="/services/:id/service-title" element={<ServiceDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellerview" element={<SellerView />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/sellerprofile" element={<SellerProfile />} />
        <Route path="/orders" element={<ActiveOrders />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/dashboard-main" element={<DashboardMain />} />
          <Route path="/dashboard-services" element={<ServicesComp />} /> */}
        {/* </Route> */}
        <Route path="/register" element={<RegisterList />} />
        <Route path="/others" element={<Others />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hustler" element={<BecomeAHustler />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/services/:id" element={<IndividualServices />} /> */}
        <Route path="/verify" element={<Verification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/dashboard" &&
        location.pathname !== "/sellerdashboard" &&
        location.pathname !== "/admin" && <Footer />}
    </>
  );
};

export default AppRouting;
