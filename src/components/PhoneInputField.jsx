export default function PhoneInputField({ label, required, value, onChange }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm text-[#222325]">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex gap-2">
                <div className="flex items-center gap-1 border border-[#E5E7EB] rounded px-3 py-2.5 bg-white">
                    <img
                        src="https://flagcdn.com/w20/id.png"
                        alt="ID"
                        className="w-5 h-3.5 object-cover rounded-sm"
                    />
                    <span className="text-sm text-[#222325]">+62</span>
                </div>
                <input
                    type="tel"
                    value={value}
                    onChange={onChange}
                    className="flex-1 border border-[#E5E7EB] rounded px-3 py-2.5 text-sm outline-none focus:border-[#22AD5C]"
                />
            </div>
        </div>
    );
}