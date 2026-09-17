import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import KelolaKelas from "./pages/KelolaKelas";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import Orders from "./pages/Orders";
import PaymentMethod from "./pages/checkout/PaymentMethod";
import Payment from "./pages/checkout/Payment";
import ChangeMethod from "./pages/checkout/ChangeMethod";
import PaymentResult from "./pages/checkout/PaymentResult";
import Learning from "./pages/Learning";
import TestPaymentEmail from "./pages/checkout/TestPaymentEmail";
import Certificate from "./pages/Certificate";
import VideoNotFound from "./pages/VideoNotFound";
import AboutUs from "./pages/AboutUs";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      {/* Masuk pertama kali langsung ke Beranda, bukan halaman Login.
          Login hanya dipicu lewat trigger tertentu (avatar, subscribe,
          temukan video, beli kelas) yang melempar ke /login. */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/kelola-kelas" element={<KelolaKelas />} />
      <Route path="/tentang-kami" element={<AboutUs />} />
      <Route path="/video-not-found" element={<VideoNotFound />} />

      {/* Akun — butuh login */}
      <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path="/my-courses" element={<RequireAuth><MyCourses /></RequireAuth>} />
      <Route path="/learning/:orderId" element={<RequireAuth><Learning /></RequireAuth>} />
      <Route path="/orders" element={<RequireAuth><Orders /></RequireAuth>} />
      <Route path="/certificate/:orderId" element={<RequireAuth><Certificate /></RequireAuth>} />

      {/* Checkout flow — beli kelas butuh login */}
      <Route path="/checkout/:courseId" element={<RequireAuth><PaymentMethod /></RequireAuth>} />
      <Route path="/checkout/:orderId/pay" element={<RequireAuth><Payment /></RequireAuth>} />
      <Route path="/checkout/:orderId/change-method" element={<RequireAuth><ChangeMethod /></RequireAuth>} />
      <Route
        path="/checkout/:orderId/success"
        element={<RequireAuth><PaymentResult variant="success" /></RequireAuth>}
      />
      <Route
        path="/checkout/:orderId/pending"
        element={<RequireAuth><PaymentResult variant="pending" /></RequireAuth>}
      />
      <Route path="/checkout/:orderId/test-email" element={<RequireAuth><TestPaymentEmail /></RequireAuth>} />
    </Routes>
  );
}

export default App;
