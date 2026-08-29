const STEPS = ["Pilih Metode", "Bayar", "Selesai"];

export default function CheckoutStepper({ currentStep }) {
    // currentStep: 0 = Pilih Metode, 1 = Bayar, 2 = Selesai
    return (
        <div className="flex items-center gap-2">
            {STEPS.map((label, index) => {
                const isDone = index < currentStep;
                const isCurrent = index === currentStep;
                const isActiveDot = isDone || isCurrent;
                return (
                    <div key={label} className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                            <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${isActiveDot
                                        ? "bg-[#22AD5C] text-white"
                                        : "bg-[#E5E7EB] text-transparent"
                                    }`}
                            >
                                {isDone ? "✓" : ""}
                            </span>
                            <span
                                className={`text-xs font-medium hidden sm:inline ${isActiveDot ? "text-[#222325]" : "text-[#9CA3AF]"
                                    }`}
                            >
                                {label}
                            </span>
                        </div>
                        {index < STEPS.length - 1 && (
                            <span
                                className={`w-6 md:w-10 h-[2px] ${index < currentStep ? "bg-[#22AD5C]" : "bg-[#E5E7EB]"
                                    }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
