import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckoutStepper from "../../components/CheckoutStepper";
import { getCourseById } from "../../services/api/courseService";
import { enrichCourse } from "../../utils/courseHelpers";
import { createOrder, formatRupiah, parsePriceToNumber } from "../../utils/storage";
import avatarUser from "../../assets/avatarnavbar.png";
import PaymentOptionRow from "../../components/PaymentOptionRow";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const BANKS = ["Bank BCA", "Bank BNI", "Bank BRI", "Bank Mandiri"];
const WALLETS = ["Dana", "OVO", "LinkAja", "ShopeePay"];

export default function PaymentMethod() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [method, setMethod] = useState("");

    useEffect(() => {
        let isMounted = true;
        async function loadCourse() {
            setLoading(true);
            setNotFound(false);
            try {
                const data = await getCourseById(courseId);
                if (isMounted) setCourse(enrichCourse(data));
            } catch (err) {
                if (isMounted) setNotFound(true);
            } finally {
                if (isMounted) setLoading(false);
            }
        }
        loadCourse();
        return () => {
            isMounted = false;
        };
    }, [courseId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar avatarSrc={avatarUser} />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-[#6B7280] text-sm">Memuat data kelas...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (notFound || !course) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                    <p className="text-[#222325] font-medium">Kelas tidak ditemukan.</p>
                    <Link to="/home" className="text-[#22AD5C] text-sm underline">
                        Kembali ke Beranda
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const price = parsePriceToNumber(course.price);
    const adminFee = 7000;
    const total = price + adminFee;

    const handleBuy = () => {
        if (!method) return;
        // CREATE — bikin pesanan baru & simpan ke localStorage
        const order = createOrder({ course, method });
        navigate(`/checkout/${order.id}/pay`);
    };


    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-6 flex-1">
                <div className="flex justify-center mb-6">
                    <CheckoutStepper currentStep={0} />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1 w-full flex flex-col gap-6">
                        <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                            <h2 className="font-semibold text-lg mb-4">Metode Pembayaran</h2>

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
                                        label={
                                            <span className="flex items-center gap-2">
                                                <FaCcVisa size={20} /> <FaCcMastercard size={20} />
                                                Kartu Kredit/Debit
                                            </span>
                                        }
                                        selected={method === "Kartu Kredit/Debit"}
                                        onClick={() => setMethod("Kartu Kredit/Debit")}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="w-full lg:w-[360px] shrink-0">
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
                            <h2 className="font-semibold text-lg">Ringkasan Pesanan</h2>
                            <div className="flex gap-3">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <p className="text-sm text-[#222325] font-medium">
                                    {course.title}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 text-sm border-t border-[#E5E7EB] pt-4">
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280]">Harga</span>
                                    <span>{formatRupiah(price)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280]">Biaya Admin</span>
                                    <span>{formatRupiah(adminFee)}</span>
                                </div>
                                <div className="flex justify-between border-t border-[#E5E7EB] pt-2 font-semibold">
                                    <span>Total Pembayaran</span>
                                    <span className="text-[#22AD5C]">{formatRupiah(total)}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                disabled={!method}
                                onClick={handleBuy}
                                className="h-11 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] disabled:bg-[#A7DFBC] disabled:cursor-not-allowed text-white font-medium transition"
                            >
                                Beli Sekarang
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
}
