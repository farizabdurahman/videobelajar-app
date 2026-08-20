// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ tambahkan ini
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import GoogleButton from "../components/GoogleButton";

export default function Login() {
    const navigate = useNavigate(); // ✅

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // simulasi login berhasil
        if (email && password) {
            navigate("/home"); // ✅ ke home
        } else {
            alert("Isi email & password dulu");
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar />

            <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-[120px] py-16">
                <div className="w-full max-w-[590px] bg-white border border-[#E5E7EB] rounded shadow-sm p-9">

                    <div className="mb-9">
                        <h1 className="text-[32px] font-semibold text-center text-[#222325]">
                            Masuk ke Akun
                        </h1>
                        <p className="text-center text-[#6B7280] text-sm mt-2">
                            Yuk, lanjutin belajarmu di videobelajar.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">

                        <InputField
                            label="E-Mail"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <InputField
                            label="Kata Sandi"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* LOGIN */}
                        <AuthButton
                            text="Masuk"
                            variant="primary"
                            onClick={handleLogin} // ✅ penting
                        />

                        {/* PINDAH KE REGISTER */}
                        <AuthButton
                            text="Daftar"
                            variant="secondary"
                            onClick={() => navigate("/register")} // ✅ ini fix utama
                        />

                        <GoogleButton />

                    </div>
                </div>
            </main>
        </div>
    );
}