export default function AuthButton({ text, variant, onClick }) {
    return (
        <button
            onClick={onClick} // ✅ WAJIB
            className={`w-full h-11 rounded-md ${variant === "primary"
                ? "bg-[#3ECF4C] text-white"
                : "bg-[#E5E7EB]"
                }`}
        >
            {text}
        </button>
    );
}