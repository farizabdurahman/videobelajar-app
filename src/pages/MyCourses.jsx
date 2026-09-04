import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountSidebar from "../components/AccountSidebar";
import { getOrders } from "../utils/storage";
import avatarUser from "../assets/avatarnavbar.png";

const TABS = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

// READ — hanya kelas dari pesanan yang statusnya sudah berhasil dibayar
const loadMyCourses = () => getOrders().filter((o) => o.status === "success");

export default function MyCourses() {
    const navigate = useNavigate();
    const [orders] = useState(() => loadMyCourses());
    const [tab, setTab] = useState("Semua Kelas");

    const filtered = orders.filter((o) => {
        if (tab === "Sedang Berjalan") return o.progress < 100;
        if (tab === "Selesai") return o.progress >= 100;
        return true;
    });

    const handleContinue = (order) => navigate(`/learning/${order.id}`);

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-10 flex flex-col md:flex-row gap-8 flex-1">
                <AccountSidebar active="courses" />

                <div className="flex-1 flex flex-col gap-6">
                    <div>
                        <h1 className="font-semibold text-lg text-[#222325]">Daftar Kelas</h1>
                        <p className="text-sm text-[#6B7280]">
                            Akses Materi Belajar dan Tingkatkan Pengetahuan Anda!
                        </p>
                    </div>

                    <div className="flex gap-6 border-b border-[#E5E7EB]">
                        {TABS.map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`pb-3 text-sm font-medium border-b-2 -mb-px transition ${tab === t
                                        ? "border-[#22AD5C] text-[#22AD5C]"
                                        : "border-transparent text-[#6B7280]"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {filtered.length === 0 ? (
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 text-center text-sm text-[#6B7280]">
                            Belum ada kelas di kategori ini. Yuk mulai belajar dari{" "}
                            <Link to="/home" className="text-[#22AD5C] underline">
                                halaman Beranda
                            </Link>
                            .
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {filtered.map((order) => {
                                const isDone = order.progress >= 100;
                                return (
                                    <div
                                        key={order.id}
                                        className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex flex-col sm:flex-row gap-4"
                                    >
                                        <img
                                            src={order.courseImage}
                                            alt={order.courseTitle}
                                            className="w-full sm:w-40 h-28 object-cover rounded-lg shrink-0"
                                        />
                                        <div className="flex-1 flex flex-col gap-2">
                                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                                <span
                                                    className={`text-xs font-medium px-2 py-0.5 rounded ${isDone
                                                            ? "bg-[#E6F7ED] text-[#22AD5C]"
                                                            : "bg-[#FFF3D9] text-[#B45309]"
                                                        }`}
                                                >
                                                    {isDone ? "Selesai" : "Sedang Berjalan"}
                                                </span>
                                                <span className="text-xs text-[#6B7280]">
                                                    {Math.round((order.progress / 100) * 12)}/12 Modul
                                                    Terselesaikan
                                                </span>
                                            </div>

                                            <p className="font-medium text-[#222325]">
                                                {order.courseTitle}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={order.courseAvatar}
                                                    alt={order.courseAuthor}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                                <span className="text-xs text-[#6B7280]">
                                                    {order.courseAuthor}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#22AD5C]"
                                                        style={{ width: `${order.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-[#6B7280] shrink-0">
                                                    {order.progress}%
                                                </span>
                                            </div>

                                            <div className="flex gap-3 mt-1">
                                                {isDone ? (
                                                    <>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                alert(`Sertifikat "${order.courseTitle}" diunduh.`)
                                                            }
                                                            className="h-9 px-4 rounded-md border border-[#22AD5C] text-[#22AD5C] text-sm font-medium"
                                                        >
                                                            Unduh Sertifikat
                                                        </button>
                                                        <Link
                                                            to={`/course/${order.courseId}`}
                                                            className="h-9 px-4 rounded-md bg-[#22AD5C] text-white text-sm font-medium flex items-center"
                                                        >
                                                            Lihat Detail Kelas
                                                        </Link>
                                                    </>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleContinue(order)}
                                                        className="h-9 px-4 rounded-md bg-[#22AD5C] text-white text-sm font-medium"
                                                    >
                                                        Lanjutkan Pembelajaran
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
