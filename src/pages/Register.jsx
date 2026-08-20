import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import PhoneInputField from "../components/PhoneInputField";
import AuthButton from "../components/AuthButton";
import GoogleButton from "../components/GoogleButton";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleRegister = () => {
        const { fullName, email, phone, password, confirmPassword } = form;

        if (!fullName || !email || !phone || !password || !confirmPassword) {
            alert("Semua field wajib diisi");
            return;
        }

        if (password !== confirmPassword) {
            alert("Konfirmasi kata sandi tidak cocok");
            return;
        }

        // simulasi register berhasil
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar />

            <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-[120px] py-16">
                <div className="w-full max-w-[590px] bg-white border border-[#E5E7EB] rounded shadow-sm p-9">

                    <div className="mb-9">
                        <h1 className="text-[32px] font-semibold text-center text-[#222325]">
                            Pendaftaran Akun
                        </h1>
                        <p className="text-center text-[#6B7280] text-sm mt-2">
                            Yuk, daftarkan akunmu sekarang juga!
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">

                        <InputField
                            label="Nama Lengkap"
                            type="text"
                            required
                            value={form.fullName}
                            onChange={handleChange("fullName")}
                        />

                        <InputField
                            label="E-Mail"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange("email")}
                        />

                        <PhoneInputField
                            label="No. Hp"
                            required
                            value={form.phone}
                            onChange={handleChange("phone")}
                        />

                        <InputField
                            label="Kata Sandi"
                            type="password"
                            required
                            value={form.password}
                            onChange={handleChange("password")}
                        />

                        <InputField
                            label="Konfirmasi Kata Sandi"
                            type="password"
                            required
                            value={form.confirmPassword}
                            onChange={handleChange("confirmPassword")}
                        />

                        <p className="text-right text-sm text-[#6B7280] -mt-4 cursor-pointer">
                            Lupa Password?
                        </p>

                        {/* SUBMIT REGISTER */}
                        <AuthButton
                            text="Daftar"
                            variant="primary"
                            onClick={handleRegister}
                        />

                        {/* PINDAH KE LOGIN */}
                        <AuthButton
                            text="Masuk"
                            variant="secondary"
                            onClick={() => navigate("/login")}
                        />

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-[#E5E7EB]" />
                            <span className="text-sm text-[#6B7280]">atau</span>
                            <div className="flex-1 h-px bg-[#E5E7EB]" />
                        </div>

                        <GoogleButton text="Daftar dengan Google" />

                    </div>
                </div>
            </main>
        </div>
    );
}