import { useLocation, useNavigate, Link } from "react-router-dom";

export default function VideoNotFound() {
    const location = useLocation();
    const navigate = useNavigate();

    const { courseTitle, category, backTo } = location.state || {};
    const topic = courseTitle || "materi ini";
    const searchQuery = `belajar dasar ${category || courseTitle || "video course"} untuk pemula`;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;

    return (
        <div className="min-h-screen bg-[#0A093D] flex flex-col items-center justify-center px-6 py-16 text-center text-white">
            <p className="text-7xl font-black tracking-tight text-white/20">404</p>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold">Video Tidak Ditemukan</h1>
            <p className="mt-3 max-w-md text-sm text-white/70 leading-relaxed">
                Video pembelajaran untuk <span className="font-semibold text-white">{topic}</span>{" "}
                belum tersedia di server kami. Sambil menunggu, kamu bisa cari tutorial
                pemula yang relevan di YouTube.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                    href={youtubeSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-red-600 hover:bg-red-700 px-5 py-3 text-sm font-semibold text-white transition"
                >
                    ▶ Cari Tutorial Pemula di YouTube
                </a>
                <button
                    type="button"
                    onClick={() => (backTo ? navigate(backTo) : navigate(-1))}
                    className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                    ← Kembali ke Materi
                </button>
            </div>

            <Link to="/home" className="mt-8 text-xs text-white/50 underline">
                Kembali ke Beranda
            </Link>
        </div>
    );
}
