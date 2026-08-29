const SORT_OPTIONS = [
    { value: "", label: "Urutkan" },
    { value: "harga-rendah", label: "Harga Rendah" },
    { value: "harga-tinggi", label: "Harga Tinggi" },
    { value: "az", label: "A to Z" },
    { value: "za", label: "Z to A" },
    { value: "rating-tertinggi", label: "Rating Tertinggi" },
    { value: "rating-terendah", label: "Rating Terendah" },
];

export default function SearchSortBar({
    sortValue,
    onSortChange,
    searchValue,
    onSearchChange,
}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-6">
            {/* URUTKAN */}
            <select
                value={sortValue}
                onChange={(e) => onSortChange(e.target.value)}
                className="h-12 px-4 rounded-lg border border-[#E5E7EB] text-sm text-[#222325] bg-white outline-none sm:w-[160px]"
            >
                {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {/* CARI KELAS */}
            <div className="relative sm:w-[220px]">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Cari Kelas"
                    className="h-12 w-full pl-4 pr-10 rounded-lg border border-[#E5E7EB] text-sm text-[#222325] outline-none"
                />
                <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>
            </div>
        </div>
    );
}
