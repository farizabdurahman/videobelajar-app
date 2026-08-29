export default function PaymentOptionRow({ label, selected, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm ${selected
                    ? "border-[#22AD5C] bg-[#F0FBF4] text-[#22AD5C] font-medium"
                    : "border-[#E5E7EB] text-[#222325]"
                }`}
        >
            {label}
            <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? "border-[#22AD5C]" : "border-[#D1D5DB]"
                    }`}
            >
                {selected && <span className="w-2 h-2 rounded-full bg-[#22AD5C]" />}
            </span>
        </button>
    );
}
