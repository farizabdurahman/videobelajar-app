import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutStepper from "../../components/CheckoutStepper";
import { getOrderById, updateOrder, formatRupiah } from "../../utils/storage";
import avatarUser from "../../assets/avatarnavbar.png";
import PaymentOptionRow from "../../components/PaymentOptionRow";

const BANKS = ["Bank BCA", "Bank BNI", "Bank BRI", "Bank Mandiri"];
const WALLETS = ["Dana", "OVO", "LinkAja", "ShopeePay"];

export default function ChangeMethod() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order = getOrderById(orderId);
    const [method, setMethod] = useState(order?.method || "");

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

    const handleSave = () => {
        // UPDATE — ganti metode pembayaran pada pesanan yang sudah ada
        updateOrder(order.id, { method });
        navigate(`/checkout/${order.id}/pay`);
    };


    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-6 flex-1">
                <div className="flex justify-center mb-6">
                    <CheckoutStepper currentStep={1} />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1 w-full flex flex-col gap-6">
                        <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                            <h2 className="font-semibold text-lg mb-4">Ubah Metode Pembayaran</h2>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-sm font-medium text-[#4B5563] mb-2">
                                        Transfer Bank
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {BANKS.map((b) => (
                                            <PaymentOptionRow
                                                key={b}
                                                label={b}
                                                selected={method === b}
                                                onClick={() => setMethod(b)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#4B5563] mb-2">
                                        E-Wallet
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {WALLETS.map((w) => (
                                            <PaymentOptionRow
                                                key={w}
                                                label={w}
                                                selected={method === w}
                                                onClick={() => setMethod(w)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#4B5563] mb-2">
                                        Kartu Kredit/Debit
                                    </p>
                                    <PaymentOptionRow
                                        label="Kartu Kredit/Debit"
                                        selected={method === "Kartu Kredit/Debit"}
                                        onClick={() => setMethod("Kartu Kredit/Debit")}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="w-full lg:w-[360px] shrink-0">
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
                            <h2 className="font-semibold text-lg">Ringkasan Belanja</h2>
                            <div className="flex flex-col gap-2 text-sm">
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
                                disabled={!method}
                                onClick={handleSave}
                                className="h-11 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] disabled:bg-[#A7DFBC] disabled:cursor-not-allowed text-white font-medium transition"
                            >
                                Simpan &amp; Bayar Sekarang
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
}
