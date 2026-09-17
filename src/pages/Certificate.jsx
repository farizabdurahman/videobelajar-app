import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";
import { getOrderById, getProfile } from "../utils/storage";
import { downloadCertificate } from "../utils/certificateDownload";
import avatarUser from "../assets/avatarnavbar.png";

export default function Certificate() {
    const { orderId } = useParams();
    const order = useMemo(() => getOrderById(orderId), [orderId]);
    const profile = useMemo(() => getProfile(), []);
    const [downloading, setDownloading] = useState(false);

    const eligible = order && (order.progress >= 100 || (order.pretestScore ?? 0) >= 80);

    const handleDownload = async () => {
        setDownloading(true);
        try {
            await downloadCertificate({
                userName: profile.name,
                mentorName: order.courseAuthor,
                courseTitle: order.courseTitle,
            });
        } finally {
            setDownloading(false);
        }
    };

    if (!order) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar avatarSrc={avatarUser} />
                <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-[#222325] font-medium">Pesanan tidak ditemukan.</p>
                    <Link to="/my-courses" className="text-[#22AD5C] text-sm underline">
                        Kembali ke Kelas Saya
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    if (!eligible) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar avatarSrc={avatarUser} />
                <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-[#222325] font-medium">
                        Selesaikan pre-test "{order.courseTitle}" dengan nilai minimal 80 untuk membuka sertifikat.
                    </p>
                    <Link to={`/learning/${order.id}`} className="text-[#22AD5C] text-sm underline">
                        Lanjutkan Pembelajaran
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1000px] w-full mx-auto px-6 py-10 flex-1 flex flex-col items-center gap-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#222325]">Sertifikat Kelulusan Pre-Test</h1>
                    <p className="text-sm text-[#6B7280] mt-1">
                        Selamat, {profile.name}! Kamu berhasil lulus pre-test kelas{" "}
                        <span className="font-medium text-[#222325]">{order.courseTitle}</span>.
                    </p>
                </div>

                <div className="w-full rounded-xl border border-[#E5E7EB] bg-black/5 p-3 shadow-sm">
                    <CertificateCard
                        userName={profile.name}
                        mentorName={order.courseAuthor}
                        courseTitle={order.courseTitle}
                    />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={handleDownload}
                        disabled={downloading}
                        className="rounded-lg bg-[#22AD5C] hover:bg-[#1c9950] disabled:opacity-60 px-6 py-3 text-sm font-semibold text-white transition"
                    >
                        {downloading ? "Menyiapkan..." : "⬇ Unduh Sertifikat (PNG)"}
                    </button>
                    <Link
                        to="/my-courses"
                        className="rounded-lg border border-[#22AD5C] px-6 py-3 text-sm font-semibold text-[#22AD5C]"
                    >
                        Kembali ke Kelas Saya
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
