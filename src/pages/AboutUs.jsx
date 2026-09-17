import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import avatarUser from "../assets/avatarnavbar.png";

const VALUES = [
    {
        title: "Belajar Tanpa Batas",
        desc: "Kapanpun, di manapun — semua video pembelajaran bisa diakses lewat perangkat apapun sesuai kecepatan belajarmu sendiri.",
    },
    {
        title: "Mentor Berpengalaman",
        desc: "Setiap kelas dibawakan oleh praktisi profesional yang aktif bekerja di bidangnya, bukan sekadar teori.",
    },
    {
        title: "Sertifikasi Nyata",
        desc: "Selesaikan pretest dan materi untuk mendapatkan sertifikat yang bisa kamu lampirkan ke portofolio atau CV.",
    },
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#FDFBF5] flex flex-col">
            <Navbar avatarSrc={avatarUser} />

            {/* HERO */}
            <section className="bg-[#0A093D] text-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 text-center">
                    <p className="text-sm font-semibold tracking-[.2em] text-white/70 uppercase">
                        Tentang Kami
                    </p>
                    <h1 className="mt-3 text-3xl md:text-[40px] font-bold max-w-[720px] mx-auto leading-tight">
                        Videobelajar — Platform Pembelajaran Video Berbasis Web
                    </h1>
                    <p className="mt-4 max-w-[640px] mx-auto text-sm md:text-base text-white/80 leading-relaxed">
                        Videobelajar memberi kamu akses ke beragam kursus dan tutorial berbasis
                        video, mulai dari bisnis, teknologi, kesehatan &amp; kesejahteraan,
                        hingga pengembangan diri — dengan kecepatan dan jadwal belajar yang
                        kamu tentukan sendiri.
                    </p>
                </div>
            </section>

            {/* DESKRIPSI */}
            <section className="max-w-[900px] mx-auto px-6 md:px-0 py-16 text-center">
                <h2 className="text-2xl font-semibold text-[#222325] mb-4">
                    Cerita Kami
                </h2>
                <p className="text-[#6B7280] leading-relaxed">
                    Videobelajar hadir untuk menjawab kebutuhan belajar masyarakat yang
                    semakin sibuk namun tetap ingin terus berkembang. Kami percaya bahwa
                    pengetahuan seharusnya bisa diakses fleksibel — tanpa harus terikat
                    ruang kelas atau jadwal yang kaku. Karena itu, setiap kursus di
                    Videobelajar dirancang dalam format video interaktif yang bisa
                    dipelajari kapan saja, dilengkapi materi pendukung, pretest, dan
                    sertifikat kelulusan di akhir pembelajaran.
                </p>
            </section>

            {/* VALUES */}
            <section className="bg-white border-y border-[#E5E7EB]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16">
                    <h2 className="text-2xl font-semibold text-[#222325] text-center mb-10">
                        Kenapa Belajar di Videobelajar?
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="border border-[#E5E7EB] rounded-xl p-6 bg-[#FDFBF5]"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#E6F7ED] text-[#22AD5C] flex items-center justify-center font-bold mb-4">
                                    ✓
                                </div>
                                <h3 className="font-semibold text-[#222325] mb-2">{v.title}</h3>
                                <p className="text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="max-w-[900px] mx-auto px-6 md:px-0 py-16 text-center flex-1">
                <h2 className="text-2xl font-semibold text-[#222325] mb-3">
                    Hubungi Kami
                </h2>
                <p className="text-[#6B7280]">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                <p className="text-[#6B7280]">+62-877-7123-1234</p>
            </section>

            <Footer />
        </div>
    );
}
