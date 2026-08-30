import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import AuthButton from "../components/AuthButton";
import SearchSortBar from "../components/SearchSortBar";
import { TABS } from "../data/courses";
import useCourses from "../hooks/useCourses";
import avatarUser from "../assets/avatarnavbar.png";
import heroBg from "../assets/hero-bg.jpg";
import bannerBg from "../assets/banner-bg.jpg";

export default function Home() {
    const { courses, loading, error } = useCourses();
    const [activeTab, setActiveTab] = useState("Semua");
    const [isKategoriOpen, setIsKategoriOpen] = useState(false);
    const [sortValue, setSortValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const parsePrice = (price) => parseInt(price.replace(/[^\d]/g, ""), 10);

    let filtered =
        activeTab === "Semua" ? [...courses] : courses.filter((c) => c.category === activeTab);

    if (searchValue.trim() !== "") {
        filtered = filtered.filter((c) =>
            c.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
    }

    switch (sortValue) {
        case "harga-rendah":
            filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            break;
        case "harga-tinggi":
            filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            break;
        case "az":
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "za":
            filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "rating-tertinggi":
            filtered = [...filtered].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case "rating-terendah":
            filtered = [...filtered].sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
            break;
        default:
            break;
    }

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar
                onToggleKategori={() => setIsKategoriOpen((prev) => !prev)}
                isKategoriActive={isKategoriOpen}
                avatarSrc={avatarUser}
            />

            {/* HERO */}

            <section
                className="bg-[#0A093D] text-white bg-cover bg-center relative"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-[#0A093D]/70" /> {/* overlay biar teks tetap terbaca */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 relative flex flex-col items-center text-center">
                    <h1 className="text-3xl md:text-[40px] font-bold max-w-[700px] leading-tight">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <div className="max-w-[400px] mt-6">
                        <AuthButton text="Temukan Video Course untuk Dipelajari" variant="primary" />
                    </div>
                </div>
            </section>
            {/* CARD SECTION */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16">
                <h2 className="text-2xl font-semibold text-[#222325]">
                    Koleksi Video Pembelajaran Unggulan
                </h2>
                <p className="text-[#6B7280] text-sm mt-1 mb-8">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami
                </p>

                {isKategoriOpen && (
                    <SearchSortBar
                        sortValue={sortValue}
                        onSortChange={setSortValue}
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                    />
                )}

                <div className="flex gap-3 mb-8 flex-wrap">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-sm border transition ${activeTab === tab
                                ? "bg-[#22AD5C] text-white border-[#22AD5C]"
                                : "bg-white text-[#222325] border-[#E5E7EB]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {loading && (
                    <p className="text-sm text-[#6B7280] py-8 text-center">Memuat data course...</p>
                )}

                {!loading && error && (
                    <p className="text-sm text-red-500 py-8 text-center">
                        Gagal memuat data: {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {filtered.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                )}
            </section>

            {/* BANNER CTA */}

            {/* CTA */}
            <section
                className="relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bannerBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative max-w-[1440px] mx-auto px-[120px] py-16">
                    <div className="w-full h-[400px] flex items-center justify-center">
                        <div className="w-full max-w-[525px] text-center text-white">

                            <p className="text-sm font-semibold tracking-wider uppercase mb-2">
                                Newsletter
                            </p>

                            <h2 className="text-[32px] font-bold leading-tight">
                                Mau Belajar Lebih Banyak?
                            </h2>

                            <p className="text-sm mt-3 text-gray-200">
                                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                                penawaran spesial dari program-program terbaik hariesok.id
                            </p>

                            <div className="mt-8 flex bg-white rounded-lg overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Masukkan Emailmu"
                                    className="flex-1 px-5 py-4 text-black outline-none"
                                />

                                <button className="bg-[#FFBD3A] hover:bg-[#F4AE1D] text-white font-medium px-8">
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}