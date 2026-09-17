// src/components/RequireAuth.jsx
//
// Pembungkus route yang butuh login (Profil, Kelas Saya, Pesanan,
// Learning/Pretest, Checkout, Sertifikat). Kalau user belum login,
// dilempar ke /login sambil bawa lokasi asal (`from`) supaya setelah
// berhasil masuk, user diarahkan balik ke halaman yang tadi dituju.

import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/storage";

export default function RequireAuth({ children }) {
    const location = useLocation();

    if (!isLoggedIn()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
