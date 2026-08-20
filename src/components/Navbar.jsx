import logo from "../assets/Frame 3.png";

export default function Navbar() {
    return (
        <header className="h-20 bg-white border-b border-[#E5E7EB]">
            <div className="h-full max-w-[1440px] mx-auto px-6 md:px-[120px] flex items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </div>
        </header>
    );
}