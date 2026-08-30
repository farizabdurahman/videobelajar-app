import { Link } from "react-router-dom";
import logo from "../assets/Frame 3.png";

export default function Navbar({ onToggleKategori, isKategoriActive, avatarSrc }) {
    return (
        <header className="h-20 bg-white border-b border-[#E5E7EB]">
            <div className="h-full max-w-[1440px] mx-auto px-6 md:px-[120px] flex items-center justify-between">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto"
                />

                {(onToggleKategori || avatarSrc) && (
                    <div className="flex items-center gap-6">
                        {onToggleKategori && (
                            <button
                                type="button"
                                onClick={onToggleKategori}
                                className={`text-sm font-medium transition ${isKategoriActive ? "text-[#22AD5C]" : "text-[#222325]"
                                    }`}
                            >
                                Kategori
                            </button>
                        )}

                        <Link
                            to="/kelola-kelas"
                            className="text-sm font-medium text-[#222325] hover:text-[#22AD5C] transition"
                        >
                            Kelola Kelas
                        </Link>

                        {avatarSrc && (
                            <Link to="/profile" title="Profil Saya">
                                <img
                                    src={avatarSrc}
                                    alt="Avatar pengguna"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}