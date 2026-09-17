import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import logo from "../assets/Frame 3.png";
import { isLoggedIn } from "../utils/storage";

export default function Navbar({ onToggleKategori, isKategoriActive, avatarSrc }) {
    const navigate = useNavigate();
    const location = useLocation();
    const loggedIn = isLoggedIn();

    const goToLogin = () => navigate("/login", { state: { from: location } });

    return (
        <header className="h-20 bg-white border-b border-[#E5E7EB]">
            <div className="h-full max-w-[1440px] mx-auto px-6 md:px-[120px] flex items-center justify-between">
                <Link to="/home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </Link>

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
                            loggedIn ? (
                                <Link to="/profile" title="Profil Saya">
                                    <img
                                        src={avatarSrc}
                                        alt="Avatar pengguna"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    onClick={goToLogin}
                                    title="Masuk ke Akun"
                                    className="w-10 h-10 rounded-full bg-[#E5E7EB] border border-[#D1D5DB] flex items-center justify-center text-[#9CA3AF] hover:border-[#22AD5C] hover:text-[#22AD5C] transition"
                                >
                                    <FiUser size={18} />
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}
