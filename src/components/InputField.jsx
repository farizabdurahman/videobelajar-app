// src/components/InputField.jsx

export default function InputField({
    label,
    type,
    value,
    onChange,
    required,
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#4B5563]">
                {label}
                {required && (
                    <span className="text-red-500"> *</span>
                )}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                className="
          h-12
          px-4
          border
          border-[#D1D5DB]
          rounded-md
          focus:outline-none
          focus:ring-1
          focus:ring-[#3ECF4C]
        "
            />
        </div>
    );
}