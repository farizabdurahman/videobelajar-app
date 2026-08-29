import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutStepper from "../../components/CheckoutStepper";
import { getOrderById, updateOrder, formatRupiah } from "../../utils/storage";
import avatarUser from "../../assets/avatarnavbar.png";

const HOW_TO_PAY = [
    {
        title: "ATM",
        steps: [
            'Masukkan kartu ATM dan PIN Anda.',
            'Di menu utama, pilih "Transaksi Lainnya" lalu "Transfer".',
            "Masukkan nomor Virtual Account.",
            "Pastikan data Virtual Account benar, lalu konfirmasi.",
            "Transaksi selesai, simpan struk sebagai bukti bayar.",
        ],
    },
    {
        title: "Mobile Banking",
        steps: [
            "Buka aplikasi Mobile Banking.",
            'Pilih menu "Transfer" ke Virtual Account.',
            "Masukkan nomor Virtual Account yang tertera.",
            "Konfirmasi & masukkan PIN transaksi.",
            "Transaksi selesai.",
        ],
    },
    {
        title: "Internet Banking",
        steps: [
            "Login ke Internet Banking.",
            'Pilih "Transfer" ke Virtual Account.',
            "Masukkan nomor Virtual Account.",
            "Konfirmasi pembayaran dengan token/OTP.",
            "Transaksi selesai.",
        ],
    },
];

function formatCountdown(ms) {
    if (ms <= 0) return "00:00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
}

export default function Payment() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    // READ — ambil data pesanan berdasarkan id di URL
    const [order] = useState(() => getOrderById(orderId));
    const [openSection, setOpenSection] = useState(0);
    const [deadline] = useState(() => Date.now() + 60 * 60 * 1000); // 1 jam
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!order) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                    <p className="text-[#222325] font-medium">Pesanan tidak ditemukan.</p>
                    <Link to="/orders" className="text-[#22AD5C] text-sm underline">
                        Lihat Daftar Pesanan
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const handlePay = () => {
        // UPDATE — simulasikan hasil pembayaran (untuk demo, tanpa payment gateway)
        const isSuccess = Math.random() > 0.3;
        const progress = Math.floor(Math.random() * 3) * 10; // 0/10/20
        updateOrder(order.id, {
            status: isSuccess ? "success" : "pending",
            paidAt: isSuccess ? new Date().toISOString() : null,
            progress: isSuccess ? progress : 0,
        });
        navigate(isSuccess ? `/checkout/${order.id}/success` : `/checkout/${order.id}/pending`);
    };

    const toggleSection = (i) => setOpenSection((prev) => (prev === i ? -1 : i));

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-6 flex-1">
                <div className="flex justify-center mb-4">
                    <CheckoutStepper currentStep={1} />
                </div>

                <div className="bg-[#FFF3D9] text-[#B45309] text-sm text-center rounded-md py-2 px-4 mb-6">
                    Selesaikan pemesanan dalam{" "}
                    <span className="font-semibold">
                        {formatCountdown(deadline - now)}
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1 w-full flex flex-col gap-6">
                        <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                            <h2 className="font-semibold text-lg mb-3">Metode Pembayaran</h2>
                            <div className="border border-[#E5E7EB] rounded-lg p-4">
                                <p className="text-sm text-[#6B7280] mb-1">
                                    Bayar melalui {order.method}
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-lg text-[#222325]">
                                        VA {String(order.id).slice(-8)}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            navigator.clipboard?.writeText(String(order.id).slice(-8));
                                        }}
                                        className="text-xs text-[#22AD5C] font-medium"
                                    >
                                        Salin
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                            <h2 className="font-semibold text-lg mb-4">Tata Cara Pembayaran</h2>
                            <div className="flex flex-col gap-2">
                                {HOW_TO_PAY.map((section, index) => {
                                    const isOpen = openSection === index;
                                    return (
                                        <div
                                            key={section.title}
                                            className="border border-[#E5E7EB] rounded-lg overflow-hidden"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleSection(index)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium"
                                            >
                                                {section.title} {order.method}
                                                <span
                                                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                                >
                                                    ▾
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <ol className="px-4 pb-4 text-sm text-[#6B7280] list-decimal list-inside flex flex-col gap-1">
                                                    {section.steps.map((s, i) => (
                                                        <li key={i}>{s}</li>
                                                    ))}
                                                </ol>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    <aside className="w-full lg:w-[360px] shrink-0">
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
                            <h2 className="font-semibold text-lg">Ringkasan Pesanan</h2>
                            <div className="flex gap-3">
                                <img
                                    src={order.courseImage}
                                    alt={order.courseTitle}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <p className="text-sm text-[#222325] font-medium">
                                    {order.courseTitle}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 text-sm border-t border-[#E5E7EB] pt-4">
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280]">Harga</span>
                                    <span>{formatRupiah(order.price)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280]">Biaya Admin</span>
                                    <span>{formatRupiah(order.adminFee)}</span>
                                </div>
                                <div className="flex justify-between border-t border-[#E5E7EB] pt-2 font-semibold">
                                    <span>Total Pembayaran</span>
                                    <span className="text-[#22AD5C]">
                                        {formatRupiah(order.total)}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => navigate(`/checkout/${order.id}/change-method`)}
                                className="h-11 rounded-md border border-[#22AD5C] text-[#22AD5C] font-medium"
                            >
                                Ganti Metode Pembayaran
                            </button>
                            <button
                                type="button"
                                onClick={handlePay}
                                className="h-11 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] text-white font-medium transition"
                            >
                                Bayar Sekarang
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
}
