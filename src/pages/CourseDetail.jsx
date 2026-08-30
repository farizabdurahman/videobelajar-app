import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { getCourseById, getCourses } from "../services/api/courseService";
import { enrichCourse, enrichCourses } from "../utils/courseHelpers";
import avatarUser from "../assets/avatarnavbar.png";

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    // -1 = semua section tertutup, 0/1/2 = index section yang lagi kebuka
    const [openSection, setOpenSection] = useState(0);

    useEffect(() => {
        let isMounted = true;

        async function loadCourse() {
            setLoading(true);
            setNotFound(false);
            try {
                const data = await getCourseById(id);
                if (!isMounted) return;
                setCourse(enrichCourse(data));

                const all = await getCourses();
                if (!isMounted) return;
                setRelated(
                    enrichCourses(all.filter((c) => String(c.id) !== String(id))).slice(0, 3)
                );
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
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar avatarSrc={avatarUser} />
                <div className="flex-1 flex items-center justify-center px-6 text-center">
                    <p className="text-[#6B7280] text-sm">Memuat detail kelas...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (notFound || !course) {
        return (
            <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="text-[#222325] font-medium">Kelas tidak ditemukan.</p>
                    <Link to="/home" className="text-[#22AD5C] text-sm underline">
                        Kembali ke Beranda
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const toggleSection = (index) => {
        setOpenSection((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className="min-h-screen bg-[#FDFBF5]">
            <Navbar avatarSrc={avatarUser} />

            <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] pt-6">
                {/* BREADCRUMB */}
                <p className="text-sm text-[#6B7280] mb-4">
                    <Link to="/home" className="hover:underline">
                        Beranda
                    </Link>
                    {" / "}
                    <span>{course.category}</span>
                    {" / "}
                    <span className="text-[#222325]">{course.title}</span>
                </p>

                {/* HERO */}
                <div
                    className="relative h-[280px] md:h-[400px] rounded-xl overflow-hidden bg-cover bg-center flex items-end"
                    style={{ backgroundImage: `url(${course.image})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative p-6 md:p-8 text-white max-w-[700px]">
                        <h1 className="text-2xl md:text-[32px] font-bold leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-sm text-gray-200 mt-2">
                            Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                            <span className="text-yellow-400">★★★</span>
                            <span className="text-sm">
                                {course.rating} ({course.reviews})
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-10 flex flex-col lg:flex-row gap-8 items-start">
                {/* LEFT COLUMN */}
                <div className="flex-1 w-full flex flex-col gap-6">
                    {/* DESKRIPSI */}
                    <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                        <h2 className="font-semibold text-lg mb-3">Deskripsi</h2>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            {course.description}
                        </p>
                    </section>

                    {/* TUTOR */}
                    <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                        <h2 className="font-semibold text-lg mb-4">
                            Belajar bersama Tutor Profesional
                        </h2>
                        <div className="border border-[#E5E7EB] rounded-lg p-4 max-w-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={course.avatar}
                                    alt={course.author}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-sm">{course.author}</p>
                                    <p className="text-xs text-[#6B7280]">{course.job}</p>
                                </div>
                            </div>
                            <p className="text-xs text-[#6B7280]">
                                Berpengalaman lebih dari 3 tahun di bidang {course.category}.
                            </p>
                        </div>
                    </section>

                    {/* KURIKULUM (ACCORDION) */}
                    <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                        <h2 className="font-semibold text-lg mb-4">Kamu akan Mempelajari</h2>
                        <div className="flex flex-col gap-2">
                            {course.curriculum.map((section, index) => {
                                const isOpen = openSection === index;
                                return (
                                    <div
                                        key={section.title}
                                        className="border border-[#E5E7EB] rounded-lg overflow-hidden"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleSection(index)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-left"
                                        >
                                            <span
                                                className={`text-sm font-medium ${isOpen ? "text-[#22AD5C]" : "text-[#222325]"
                                                    }`}
                                            >
                                                {section.title}
                                            </span>
                                            <svg
                                                className={`w-4 h-4 text-[#6B7280] transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {isOpen && section.lessons.length > 0 && (
                                            <div className="border-t border-[#E5E7EB]">
                                                {section.lessons.map((lesson) => (
                                                    <div
                                                        key={lesson.title}
                                                        className="flex items-center justify-between gap-3 px-4 py-3 text-sm border-b border-[#E5E7EB] last:border-b-0"
                                                    >
                                                        <span className="text-[#222325]">
                                                            {lesson.title}
                                                        </span>
                                                        <div className="flex items-center gap-4 text-xs text-[#6B7280] shrink-0">
                                                            <span>▶ Video</span>
                                                            <span>🕐 {lesson.duration}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* RATING & REVIEW */}
                    <section className="bg-white border border-[#E5E7EB] rounded-xl p-6">
                        <h2 className="font-semibold text-lg mb-4">Rating dan Review</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {course.reviewList.map((review, i) => (
                                <div
                                    key={`${review.name}-${i}`}
                                    className="border border-[#E5E7EB] rounded-lg p-4"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <img
                                            src={course.avatar}
                                            alt={review.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-sm">{review.name}</p>
                                            <p className="text-xs text-[#6B7280]">{review.batch}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-[#6B7280] mb-2">{review.text}</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                        ★★★
                                        <span className="text-xs text-[#6B7280]">
                                            {review.rating}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* SIDEBAR: DESC & BUTTON */}
                <aside className="w-full lg:w-[366px] lg:shrink-0 lg:sticky lg:top-6">
                    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
                        <h2 className="font-semibold text-lg text-[#222325]">{course.title}</h2>

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#22AD5C] font-bold text-xl">
                                {course.price}
                            </span>
                            <span className="text-[#6B7280] text-sm line-through">
                                {course.originalPrice}
                            </span>
                            <span className="bg-[#FFBD3A] text-white text-xs font-medium px-2 py-1 rounded">
                                {course.discount}
                            </span>
                        </div>

                        <p className="text-blue-600 text-sm">
                            Penawaran spesial tersisa 2 hari lagi!
                        </p>

                        <button
                            type="button"
                            onClick={() => navigate(`/checkout/${course.id}`)}
                            className="w-full h-11 rounded-md bg-[#22AD5C] hover:bg-[#1c9950] text-white font-medium transition"
                        >
                            Beli Sekarang
                        </button>

                        <div>
                            <h3 className="font-medium text-sm mb-3 text-[#222325]">
                                Kelas Ini Sudah Termasuk
                            </h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-[#222325]">
                                {course.includes.map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <span className="text-[#22AD5C]">✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium text-sm mb-2 text-[#222325]">
                                Bahasa Pengantar
                            </h3>
                            <p className="text-sm text-[#6B7280] flex items-center gap-2">
                                🌐 {course.language}
                            </p>
                        </div>
                    </div>
                </aside>
            </div>

            {/* VIDEO TERKAIT */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-[120px] pb-16">
                <h2 className="text-xl font-semibold text-[#222325] mb-1">
                    Video Pembelajaran Terkait Lainnya
                </h2>
                <p className="text-[#6B7280] text-sm mb-6">
                    Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {related.map((c) => (
                        <CourseCard key={c.id} {...c} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
