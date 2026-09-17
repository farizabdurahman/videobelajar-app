import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiBookOpen, FiShoppingBag, FiLogOut } from "react-icons/fi";
import { logout } from "../utils/storage";

const MENU = [
    { key: "profile", label: "Profil Saya", icon: FiUser, to: "/profile" },
    { key: "courses", label: "Kelas Saya", icon: FiBookOpen, to: "/my-courses" },
    { key: "orders", label: "Pesanan Saya", icon: FiShoppingBag, to: "/orders" },
];

export default function AccountSidebar({ active }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/home");
    };

    return (
        <aside className="w-full md:w-[220px] shrink-0">
            <nav className="flex md:flex-col gap-1 bg-white md:bg-transparent border md:border-0 border-[#E5E7EB] rounded-lg p-2 md:p-0">
                {MENU.map(({ key, label, icon: Icon, to }) => {
                    const isActive = key === active;
                    return (
                        <Link
                            key={key}
                            to={to}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive
                                    ? "bg-[#FFF7E5] text-[#B45309]"
                                    : "text-[#222325] hover:bg-[#F3F4F6]"
                                }`}
                        >
                            <Icon size={16} />
                            {label}
                        </Link>
                    );
                })}

                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition md:mt-4"
                >
                    <FiLogOut size={16} />
                    Keluar
                </button>
            </nav>
        </aside>
    );
}
