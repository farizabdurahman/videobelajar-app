// src/components/GoogleButton.jsx

export default function GoogleButton({ text = "Masuk dengan Google", onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        h-12
        border
        border-[#D1D5DB]
        rounded-md
        flex
        items-center
        justify-center
        gap-2
        hover:bg-gray-50
        transition
      "
        >
            <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
            />

            <span className="text-sm font-medium">
                {text}
            </span>
        </button>
    );
}
