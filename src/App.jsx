import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import Orders from "./pages/Orders";
import PaymentMethod from "./pages/checkout/PaymentMethod";
import Payment from "./pages/checkout/Payment";
import ChangeMethod from "./pages/checkout/ChangeMethod";
import PaymentResult from "./pages/checkout/PaymentResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/course/:id" element={<CourseDetail />} />

      {/* Akun */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/orders" element={<Orders />} />

      {/* Checkout flow */}
      <Route path="/checkout/:courseId" element={<PaymentMethod />} />
      <Route path="/checkout/:orderId/pay" element={<Payment />} />
      <Route path="/checkout/:orderId/change-method" element={<ChangeMethod />} />
      <Route
        path="/checkout/:orderId/success"
        element={<PaymentResult variant="success" />}
      />
      <Route
        path="/checkout/:orderId/pending"
        element={<PaymentResult variant="pending" />}
      />
    </Routes>
  );
}

export default App;
