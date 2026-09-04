import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    fetchCourses,
    createCourseThunk,
    editCourseThunk,
    removeCourseThunk,
} from "../store/redux/coursesSlice";
import { TABS } from "../data/courses";
import avatarUser from "../assets/avatarnavbar.png";

const CATEGORIES = TABS.filter((t) => t !== "Semua");

const EMPTY_FORM = {
    title: "",
    category: CATEGORIES[0],
    author: "",
    job: "",
    rating: "4.5",
    reviews: "0",
    price: "",
    image: "https://placehold.co/300x200?text=Course",
    avatar: "https://placehold.co/100x100?text=U",
};

export default function KelolaKelas() {
    const dispatch = useDispatch();

    // Ambil data courses dari state Redux (bukan lagi state lokal komponen)
    const courses = useSelector((state) => state.courses.items);
    const loading = useSelector((state) => state.courses.loading);
    const error = useSelector((state) => state.courses.error);

    // Panggil reducer (thunk) untuk mengambil data dari API dan
    // menyimpannya ke state global saat komponen pertama kali dimuat.
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const [form, setForm] = useState(EMPTY_FORM);
    const [editingId, setEditingId] = useState(null); // null = mode tambah, selain itu = mode edit
    const [submitting, setSubmitting] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [formError, setFormError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const resetForm = () => {
        setForm(EMPTY_FORM);
        setEditingId(null);
        setFormError(null);
    };

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const startEdit = (course) => {
        setEditingId(course.id);
        setForm({
            title: course.title || "",
            category: course.category || CATEGORIES[0],
            author: course.author || "",
            job: course.job || "",
            rating: course.rating || "4.5",
            reviews: course.reviews || "0",
            price: course.price || "",
            image: course.image || EMPTY_FORM.image,
            avatar: course.avatar || EMPTY_FORM.avatar,
        });
        setFormError(null);
        setSuccessMsg(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        setSuccessMsg(null);

        if (!form.title.trim() || !form.author.trim() || !form.price.trim()) {
            setFormError("Judul, author, dan harga wajib diisi.");
            return;
        }

        setSubmitting(true);
        try {
            if (editingId) {
                // UPDATE — dispatch thunk yang memanggil fungsi Edit API
                await dispatch(editCourseThunk({ id: editingId, data: form })).unwrap();
                setSuccessMsg(`Kelas "${form.title}" berhasil diupdate.`);
            } else {
                // ADD (CREATE) — dispatch thunk yang memanggil fungsi Add API
                await dispatch(createCourseThunk(form)).unwrap();
                setSuccessMsg(`Kelas "${form.title}" berhasil ditambahkan.`);
            }
            resetForm();
        } catch (err) {
            setFormError(err.message || err || "Gagal menyimpan data.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (course) => {
        const confirmed = window.confirm(`Yakin ingin menghapus kelas "${course.title}"?`);
        if (!confirmed) return;

        setDeletingId(course.id);
        setFormError(null);
        setSuccessMsg(null);
        try {
            // Dispatch thunk yang memanggil fungsi Delete API
            await dispatch(removeCourseThunk(course.id)).unwrap();
            setSuccessMsg(`Kelas "${course.title}" berhasil dihapus.`);
            if (editingId === course.id) resetForm();
        } catch (err) {
            setFormError(err.message || err || "Gagal menghapus data.");
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1000px] mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#222325]">Kelola Kelas</h1>
                        <p className="text-sm text-[#6B7280] mt-1">
                            Tambah, edit, dan hapus data kelas
                        </p>
                    </div>
                    <Link to="/home" className="text-sm text-[#22AD5C] underline">
                        Kembali ke Beranda
                    </Link>
                </div>

                {successMsg && (
                    <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3">
                        {successMsg}
                    </div>
                )}
                {formError && (
                    <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                        {formError}
                    </div>
                )}

                {/* FORM ADD / EDIT */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-6 mb-8"
                >
                    <h2 className="font-semibold text-lg mb-4">
                        {editingId ? "Edit Kelas" : "Tambah Kelas Baru"}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-[#222325]">Judul Kelas</label>
                            <input
                                type="text"
                                value={form.title}
                                onChange={handleChange("title")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Masukkan Judul Kelas"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#222325]">Kategori</label>
                            <select
                                value={form.category}
                                onChange={handleChange("category")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                            >
                                {CATEGORIES.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#222325]">Nama Author</label>
                            <input
                                type="text"
                                value={form.author}
                                onChange={handleChange("author")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Masukkan Nama Author"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#222325]">Jabatan Author</label>
                            <input
                                type="text"
                                value={form.job}
                                onChange={handleChange("job")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Posisi Author Saat Ini"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-[#222325]">Harga</label>
                            <input
                                type="text"
                                value={form.price}
                                onChange={handleChange("price")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Masukkan Harga"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-[#222325]">Rating</label>
                                <input
                                    type="text"
                                    value={form.rating}
                                    onChange={handleChange("rating")}
                                    className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                    placeholder="Rating"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-[#222325]">Jumlah Review</label>
                                <input
                                    type="text"
                                    value={form.reviews}
                                    onChange={handleChange("reviews")}
                                    className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                    placeholder="37"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="text-sm font-medium text-[#222325]">URL Gambar Course</label>
                            <input
                                type="text"
                                value={form.image}
                                onChange={handleChange("image")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Masukkan URL Gambar Course"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="text-sm font-medium text-[#222325]">URL Avatar Author</label>
                            <input
                                type="text"
                                value={form.avatar}
                                onChange={handleChange("avatar")}
                                className="mt-1 w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm"
                                placeholder="Masukkan URL Avatar Author"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="h-10 px-6 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] text-white text-sm font-medium transition disabled:opacity-60"
                        >
                            {submitting
                                ? "Menyimpan..."
                                : editingId
                                    ? "Update Kelas"
                                    : "Tambah Kelas"}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="h-10 px-6 rounded-md border border-[#E5E7EB] text-sm font-medium text-[#222325]"
                            >
                                Batal Edit
                            </button>
                        )}
                    </div>
                </form>

                {/* LIST KELAS */}
                <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-[#E5E7EB]">
                        <h2 className="font-semibold text-lg">Daftar Kelas ({courses.length})</h2>
                    </div>

                    {loading && (
                        <p className="text-sm text-[#6B7280] px-6 py-6">Memuat data...</p>
                    )}

                    {!loading && error && (
                        <p className="text-sm text-red-500 px-6 py-6">Gagal memuat data: {error}</p>
                    )}

                    {!loading && !error && courses.length === 0 && (
                        <p className="text-sm text-[#6B7280] px-6 py-6">Belum ada data kelas.</p>
                    )}

                    {!loading &&
                        !error &&
                        courses.map((course) => (
                            <div
                                key={course.id}
                                className="flex items-center gap-4 px-6 py-4 border-b border-[#E5E7EB] last:border-b-0"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-16 h-12 rounded object-cover shrink-0 bg-gray-100"
                                />

                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm text-[#222325] truncate">
                                        {course.title}
                                    </p>
                                    <p className="text-xs text-[#6B7280]">
                                        {course.category} • {course.author} • {course.price}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => startEdit(course)}
                                        className="h-8 px-3 rounded-md border border-[#E5E7EB] text-xs font-medium text-[#222325] hover:bg-gray-50"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(course)}
                                        disabled={deletingId === course.id}
                                        className="h-8 px-3 rounded-md border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-60"
                                    >
                                        {deletingId === course.id ? "Menghapus..." : "Hapus"}
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
