import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import AuthButton from "../components/AuthButton";
import heroBg from "../assets/hero-bg.jpg";
import bannerBg from "../assets/banner-bg.jpg";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";
import course6 from "../assets/course6.png";
import course7 from "../assets/course7.png";
import course8 from "../assets/course8.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";

const TABS = ["Semua", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

const COURSES = [
    {
        id: 1,
        image: course1,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar1,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 2,
        image: course2,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar2,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 3,
        image: course3,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "James Ortega",
        avatar: avatar3,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 4,
        image: course4,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "James Ortega",
        avatar: avatar4,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 5,
        image: course5,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar5,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 6,
        image: course6,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar6,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 7,
        image: course7,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar7,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    },
    {
        id: 8,
        image: course8,
        category: "Bisnis",
        title: "Big 4 Auditor Financial Analyst",
        author: "Jenna Ortega",
        avatar: avatar8,
        job: "Senior Accountant di Gojek",
        rating: "3.5",
        reviews: "86",
        price: "Rp 300K"
    }
];

export default function Home() {
    const [activeTab, setActiveTab] = useState("Semua");

    const filtered =
        activeTab === "Semua" ? COURSES : COURSES.filter((c) => c.category === activeTab);

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar />

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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
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