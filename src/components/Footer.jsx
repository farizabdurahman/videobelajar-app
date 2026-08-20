import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const categories = ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"];
    const company = ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"];
    const community = ["Tips Sukses", "Blog"];

    return (
        <footer className="bg-white text-[#222325] border-t border-[#E5E7EB]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="max-w-[320px]">
                        <img
                            src="src/assets/Frame 3.png"
                            alt="Videobelajar"
                            className="h-10 w-auto"
                        />
                        <p className="mt-4 text-sm font-medium">
                            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                        </p>
                        <p className="mt-3 text-sm text-[#6B7280]">
                            Jl. Usman Effendi No. 50 Lowokwaru, Malang
                        </p>
                        <p className="text-sm text-[#6B7280]">+62-877-7123-1234</p>
                    </div>

                    <div className="flex gap-12 md:gap-20">
                        <div className="flex flex-col gap-3 min-w-[140px]">
                            <h4 className="font-semibold mb-1">Kategori</h4>
                            {categories.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm text-[#6B7280] hover:text-[#F59E0B]"
                                >{item}</a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 min-w-[140px]">
                            <h4 className="font-semibold mb-1">Perusahaan</h4>
                            {company.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm text-[#6B7280] hover:text-[#F59E0B]"
                                >{item}</a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 min-w-[100px]">
                            <h4 className="font-semibold mb-1">Komunitas</h4>
                            {community.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm text-[#6B7280] hover:text-[#F59E0B]"
                                >{item}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#E5E7EB] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[#6B7280]">@2023 Gerobak Sayur All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                            <FaLinkedinIn size={14} />
                        </div>

                        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                            <FaFacebookF size={14} />
                        </div>

                        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                            <FaInstagram size={14} />
                        </div>

                        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                            <FaTwitter size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}