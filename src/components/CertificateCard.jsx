import certificateBlank from "../assets/certificate-blank.png";
import {
    GOLD,
    WHITE,
    NAME_BOX_PX,
    DESC_BOX_PX,
    MENTOR_LINE_PX,
    MENTOR_TEXT_PX,
    CERT_WIDTH,
    CERT_HEIGHT,
    toPercentBox,
    buildCertificateText,
} from "../utils/certificateLayout";

export default function CertificateCard({ userName, mentorName, courseTitle }) {
    const text = buildCertificateText({ userName, mentorName, courseTitle });
    const nameBox = toPercentBox(NAME_BOX_PX);
    const descBox = toPercentBox(DESC_BOX_PX);
    const mentorBox = toPercentBox(MENTOR_TEXT_PX);
    const lineLeft = `${(MENTOR_LINE_PX.x0 / CERT_WIDTH) * 100}%`;
    const lineWidth = `${((MENTOR_LINE_PX.x1 - MENTOR_LINE_PX.x0) / CERT_WIDTH) * 100}%`;
    const lineTop = `${(MENTOR_LINE_PX.y / CERT_HEIGHT) * 100}%`;

    return (
        <div className="relative w-full select-none" style={{ aspectRatio: `${CERT_WIDTH} / ${CERT_HEIGHT}` }}>
            <img
                src={certificateBlank}
                alt="Sertifikat Videobelajar"
                className="absolute inset-0 h-full w-full rounded-lg object-contain"
                draggable={false}
            />

            {/* Nama User */}
            <div
                className="absolute flex items-center justify-center px-2 text-center leading-none"
                style={{
                    ...nameBox,
                    color: GOLD,
                    fontFamily: "'Alex Brush', cursive",
                    fontSize: "clamp(14px, 5.3vw, 64px)",
                }}
            >
                {text.name}
            </div>

            {/* Deskripsi topik */}
            <div
                className="absolute flex items-center text-left leading-snug"
                style={{
                    ...descBox,
                    color: WHITE,
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(8px, 1.9vw, 23px)",
                }}
            >
                {text.description}
            </div>

            {/* Garis + nama mentor */}
            <div
                className="absolute border-t"
                style={{ left: lineLeft, top: lineTop, width: lineWidth, borderColor: WHITE }}
            />
            <div
                className="absolute flex flex-col items-center text-center leading-tight"
                style={mentorBox}
            >
                <span
                    style={{
                        color: WHITE,
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(7px, 1.4vw, 17px)",
                    }}
                >
                    {text.mentor}
                </span>
                <span
                    style={{
                        color: WHITE,
                        fontFamily: "'Baloo 2', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(6px, 1.2vw, 14px)",
                        opacity: 0.85,
                    }}
                >
                    {text.mentorCaption}
                </span>
            </div>
        </div>
    );
}
