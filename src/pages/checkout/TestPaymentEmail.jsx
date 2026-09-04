import { Link, useNavigate, useParams } from "react-router-dom";
import { formatRupiah, getOrderById, getProfile, updateOrder } from "../../utils/storage";

export default function TestPaymentEmail() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order = getOrderById(orderId);
    const profile = getProfile();

    if (!order) {
        return <div className="min-h-screen bg-[#FDFBF5] grid place-items-center p-6"><div className="text-center"><p className="font-medium">Email pembayaran tidak ditemukan.</p><Link to="/orders" className="mt-3 inline-block text-sm text-[#22AD5C] underline">Kembali ke Pesanan Saya</Link></div></div>;
    }

    const handleSettle = () => {
        updateOrder(order.id, { status: "success", paidAt: new Date().toISOString(), progress: Math.max(order.progress || 0, 10) });
        navigate(`/checkout/${order.id}/success`);
    };

    return (
        <main className="min-h-screen bg-[#F3F4F6] px-4 py-8 sm:py-12">
            <section className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm">
                <header className="border-b border-[#E5E7EB] px-6 py-5"><p className="text-lg font-bold text-[#FFB323]">videobelajar</p><p className="mt-4 text-xs text-[#6B7280]">Dari: VideoBelajar &lt;no-reply@videobelajar.test&gt;</p><p className="mt-1 text-xs text-[#6B7280]">Kepada: {profile.email}</p><h1 className="mt-4 text-xl font-semibold text-[#222325]">Selesaikan pembayaran pesanan Anda</h1></header>
                <div className="px-6 py-7 text-sm leading-6 text-[#4B5563]"><p>Halo {profile.name},</p><p className="mt-3">Terima kasih telah melakukan pemesanan kelas <b className="text-[#222325]">{order.courseTitle}</b>. Untuk melanjutkan ke kelas, silakan lunasi pembayaran melalui tombol di bawah.</p><div className="my-6 rounded-lg bg-[#F9FAFB] p-4"><div className="flex justify-between gap-4"><span>Nomor Invoice</span><b className="text-[#222325]">{order.invoice}</b></div><div className="mt-2 flex justify-between gap-4"><span>Total Pembayaran</span><b className="text-[#22AD5C]">{formatRupiah(order.total)}</b></div></div><button type="button" onClick={handleSettle} className="w-full rounded-md bg-[#22AD5C] px-5 py-3 font-semibold text-white hover:bg-[#1c9950]">Lunasi Pembayaran</button><p className="mt-5 text-xs text-[#9CA3AF]">Halaman ini adalah email simulasi untuk testing. Tidak ada pembayaran atau email sungguhan yang diproses.</p></div>
            </section>
        </main>
    );
}
