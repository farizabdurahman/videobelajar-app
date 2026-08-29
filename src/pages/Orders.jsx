import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountSidebar from "../components/AccountSidebar";
import { queryOrders, deleteOrder, formatRupiah } from "../utils/storage";
import avatarUser from "../assets/avatarnavbar.png";

const TABS = [
    { key: "all", label: "Semua Pesanan" },
    { key: "pending", label: "Menunggu" },
    { key: "success", label: "Berhasil" },
    { key: "failed", label: "Gagal" },
];

const STATUS_STYLE = {
    pending: "bg-[#FFF3D9] text-[#B45309]",
    success: "bg-[#E6F7ED] text-[#22AD5C]",
    failed: "bg-[#FDE8E8] text-[#DC2626]",
};

const STATUS_LABEL = {
    pending: "Belum Bayar",
    success: "Berhasil",
    failed: "Gagal",
};

const PAGE_SIZE = 5;

export default function Orders() {
    const [status, setStatus] = useState("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");
    // READ — dengan filter status, pencarian judul, dan pengurutan
    const [orders, setOrders] = useState(() =>
        queryOrders({ status: "all", search: "", sort: "newest" })
    );
    const [page, setPage] = useState(1);

    const applyFilters = (next) => {
        const merged = { status, search, sort, ...next };
        setOrders(queryOrders(merged));
        setPage(1);
    };

    const handleStatusChange = (key) => {
        setStatus(key);
        applyFilters({ status: key });
    };

    const handleSearchChange = (value) => {
        setSearch(value);
        applyFilters({ search: value });
    };

    const handleSortChange = (value) => {
        setSort(value);
        applyFilters({ sort: value });
    };

    const totalPages = Math.max(1, Math.ceil(orders.length / PAGE_SIZE));
    const pageOrders = orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const handleDelete = (order) => {
        // DELETE — hapus pesanan (dengan konfirmasi)
        const ok = window.confirm(
            `Hapus pesanan "${order.courseTitle}" (${order.invoice})? Tindakan ini tidak bisa dibatalkan.`
        );
        if (!ok) return;
        deleteOrder(order.id);
        setOrders(queryOrders({ status, search, sort }));
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-[120px] py-10 flex flex-col md:flex-row gap-8 flex-1">
                <AccountSidebar active="orders" />

                <div className="flex-1 flex flex-col gap-6">
                    <div>
                        <h1 className="font-semibold text-lg text-[#222325]">Daftar Pesanan</h1>
                        <p className="text-sm text-[#6B7280]">
                            Informasi terperinci mengenai pembelian
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex gap-6 border-b border-[#E5E7EB] lg:border-none overflow-x-auto">
                            {TABS.map((t) => (
                                <button
                                    key={t.key}
                                    onClick={() => handleStatusChange(t.key)}
                                    className={`pb-3 lg:pb-0 text-sm font-medium border-b-2 lg:border-none -mb-px whitespace-nowrap transition ${status === t.key
                                            ? "border-[#22AD5C] text-[#22AD5C]"
                                            : "border-transparent text-[#6B7280]"
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Cari Kelas"
                                className="h-10 px-3 border border-[#D1D5DB] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#22AD5C]"
                            />
                            <select
                                value={sort}
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="h-10 px-3 border border-[#D1D5DB] rounded-md text-sm bg-white"
                            >
                                <option value="newest">Terbaru</option>
                                <option value="oldest">Terlama</option>
                                <option value="price_high">Harga Tertinggi</option>
                                <option value="price_low">Harga Terendah</option>
                            </select>
                        </div>
                    </div>

                    {pageOrders.length === 0 ? (
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 text-center text-sm text-[#6B7280]">
                            Belum ada pesanan yang cocok dengan filter ini.
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {pageOrders.map((order) => (
                                <div
                                    key={order.id}
                                    className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex flex-col gap-3"
                                >
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <p className="text-sm text-[#6B7280]">
                                            No. Invoice:{" "}
                                            <span className="text-[#2563EB] font-medium">
                                                {order.invoice}
                                            </span>{" "}
                                            &middot; Dibuat:{" "}
                                            {new Date(order.createdAt).toLocaleString("id-ID")}
                                        </p>
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded ${STATUS_STYLE[order.status]}`}
                                        >
                                            {STATUS_LABEL[order.status]}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={order.courseImage}
                                            alt={order.courseTitle}
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-sm text-[#222325]">
                                                {order.courseTitle}
                                            </p>
                                            <p className="text-xs text-[#6B7280]">
                                                Metode: {order.method}
                                            </p>
                                        </div>
                                        <p className="text-sm font-medium text-[#222325]">
                                            {formatRupiah(order.price)}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-3 flex-wrap gap-3">
                                        <p className="text-sm">
                                            Total Pembayaran:{" "}
                                            <span className="font-semibold text-[#22AD5C]">
                                                {formatRupiah(order.total)}
                                            </span>
                                        </p>

                                        <div className="flex gap-2">
                                            {order.status === "pending" && (
                                                <Link
                                                    to={`/checkout/${order.id}/pay`}
                                                    className="h-9 px-4 rounded-md bg-[#22AD5C] text-white text-sm font-medium flex items-center"
                                                >
                                                    Lanjutkan Pembayaran
                                                </Link>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(order)}
                                                className="h-9 px-4 rounded-md border border-red-300 text-red-600 text-sm font-medium hover:bg-red-50"
                                            >
                                                Hapus Pesanan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 pt-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-8 h-8 rounded-md text-sm font-medium ${p === page
                                            ? "bg-[#22AD5C] text-white"
                                            : "bg-white border border-[#E5E7EB] text-[#222325]"
                                        }`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
