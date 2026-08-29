import { Link } from "react-router-dom";

export default function CourseCard({
    id,
    image,
    category,
    title,
    author,
    avatar,
    job,
    rating,
    reviews,
    price,
}) {
    return (
        <Link
            to={`/course/${id}`}
            className="block bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-md transition"
        >

            <img
                src={image}
                alt={title}
                className="w-full h-[193px] object-cover"
            />

            <div className="p-4">

                <p className="text-[#22AD5C] text-sm mb-2">
                    {category}
                </p>

                <h3 className="font-semibold text-lg text-[#222325]">
                    {title}
                </h3>

                <p className="text-[#6B7280] text-sm mt-2 line-clamp-2">
                    Mulai transformasi dengan instruktur profesional,
                    harga yang terjangkau, dan...
                </p>

                {/* AUTHOR */}

                <div className="flex items-center gap-3 mt-4">

                    <img
                        src={avatar}
                        alt={author}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="font-medium text-sm">
                            {author}
                        </p>

                        <p className="text-xs text-[#6B7280]">
                            {job}
                        </p>
                    </div>

                </div>

                {/* RATING */}

                <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">
                            ★★★
                        </span>

                        <span className="text-sm text-[#6B7280]">
                            {rating} ({reviews})
                        </span>
                    </div>

                    <p className="font-bold text-[#22AD5C] text-xl">
                        {price}
                    </p>

                </div>

            </div>
        </Link>
    );
}