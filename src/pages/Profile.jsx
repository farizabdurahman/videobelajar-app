import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountSidebar from "../components/AccountSidebar";
import { getProfile, updateProfile } from "../utils/storage";
import avatarUser from "../assets/avatarnavbar.png";

export default function Profile() {
    // READ — ambil data profil sekali saat halaman pertama kali dibuka
    const [form, setForm] = useState(() => getProfile());
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password && password !== confirmPassword) {
            setMessage("error:Konfirmasi password tidak cocok.");
            return;
        }

        // READ lama -> UPDATE dengan data form yang baru (localStorage)
        updateProfile({
            name: form.name,
            email: form.email,
            countryCode: form.countryCode,
            phone: form.phone,
            gender: form.gender,
        });

        setPassword("");
        setConfirmPassword("");
        setMessage("success:Profil berhasil diperbarui.");
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-10 flex flex-col md:flex-row gap-8 flex-1">
                <AccountSidebar active="profile" />

                <div className="flex-1 flex flex-col lg:flex-row gap-6 items-start">
                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white border border-[#E5E7EB] rounded-xl p-6 w-full lg:max-w-[420px] flex flex-col gap-4"
                    >
                        <h1 className="font-semibold text-lg text-[#222325]">Ubah Profil</h1>
                        <p className="text-sm text-[#6B7280] -mt-3">Ubah data diri Anda</p>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={handleChange("name")}
                                className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C]"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">E-Mail</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={handleChange("email")}
                                className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C]"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">
                                Jenis Kelamin
                            </label>
                            <select
                                value={form.gender}
                                onChange={handleChange("gender")}
                                className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C] bg-white"
                            >
                                <option>Perempuan</option>
                                <option>Laki-laki</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">No. Hp</label>
                            <div className="flex gap-2">
                                <select
                                    value={form.countryCode}
                                    onChange={handleChange("countryCode")}
                                    className="h-11 px-2 border border-[#D1D5DB] rounded-md bg-white w-20"
                                >
                                    <option value="+62">+62</option>
                                </select>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange("phone")}
                                    className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C] flex-1"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">
                                Password Baru
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Kosongkan jika tidak diubah"
                                className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C]"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-[#4B5563]">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="h-11 px-3 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#22AD5C]"
                            />
                        </div>

                        {message && (
                            <p
                                className={`text-sm ${message.startsWith("error")
                                        ? "text-red-500"
                                        : "text-[#22AD5C]"
                                    }`}
                            >
                                {message.split(":")[1]}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="h-11 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] text-white font-medium transition"
                        >
                            Simpan
                        </button>
                    </form>

                    {/* CARD RINGKASAN AKUN */}
                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 w-full lg:max-w-[280px] flex flex-col items-center text-center gap-3">
                        <img
                            src={avatarUser}
                            alt={form.name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-medium text-[#222325]">{form.name}</p>
                            <p className="text-xs text-[#6B7280]">{form.email}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() =>
                                setMessage("success:Fitur ganti foto belum tersedia di demo ini.")
                            }
                            className="text-[#22AD5C] text-xs font-medium underline"
                        >
                            Ganti Foto Profil
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
