import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutStepper from "../../components/CheckoutStepper";
import { getOrderById } from "../../utils/storage";
import avatarUser from "../../assets/avatarnavbar.png";

export default function PaymentResult({ variant }) {
    // variant: "success" | "pending"
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order = getOrderById(orderId);

    const isSuccess = variant === "success";

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-6 flex-1">
                <div className="flex justify-center mb-6">
                    <CheckoutStepper currentStep={2} />
                </div>

                <div className="bg-white border border-[#E5E7EB] rounded-xl max-w-[520px] mx-auto p-10 flex flex-col items-center text-center gap-4">
                    <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${isSuccess ? "bg-[#E6F7ED]" : "bg-[#FFF3D9]"
                            }`}
                    >
                        {isSuccess ? "✅" : "⏳"}
                    </div>

                    <h1 className="text-xl font-semibold text-[#222325]">
                        {isSuccess ? "Pembayaran Berhasil!" : "Pembayaran Tertunda!"}
                    </h1>
                    <p className="text-sm text-[#6B7280] max-w-[360px]">
                        {isSuccess
                            ? "Kelas sudah bisa diakses di halaman Kelas Saya. Selamat belajar!"
                            : "Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala."}
                    </p>

                    {order && (
                        <p className="text-xs text-[#6B7280]">
                            No. Invoice: <span className="font-medium">{order.invoice}</span>
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={() => navigate("/orders")}
                        className="h-11 px-6 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] text-white font-medium transition"
                    >
                        Lihat Detail Pesanan
                    </button>

                    {isSuccess && (
                        <Link to="/my-courses" className="text-[#22AD5C] text-sm underline">
                            Mulai Belajar Sekarang
                        </Link>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
