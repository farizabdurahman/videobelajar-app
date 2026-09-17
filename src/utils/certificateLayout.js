// src/utils/certificateLayout.js
//
// Koordinat penempatan teks dinamis di atas `certificate-blank.png`,
// dihitung dari deteksi pixel placeholder asli ([nama user], [NAMA
// MENTOR], paragraf topik) pada desain sertifikat yang diberikan.
// Dipakai bareng oleh preview (CSS, dalam %) dan proses download
// (Canvas, dalam px native gambar).

// Ukuran asli certificate-blank.png
export const CERT_WIDTH = 2340;
export const CERT_HEIGHT = 1655;

export const GOLD = "#CC9B3A";
export const WHITE = "#F4F4F5";

// Kotak dalam pixel (koordinat asli gambar)
export const NAME_BOX_PX = { x0: 783, y0: 659, x1: 1657, y1: 798 };
export const DESC_BOX_PX = { x0: 779, y0: 912, x1: 2038, y1: 1030 };
export const MENTOR_LINE_PX = { x0: 1620, x1: 1958, y: 1332 };
export const MENTOR_TEXT_PX = { x0: 1620, y0: 1348, x1: 1958, y1: 1416 };

// Helper: ubah kotak pixel jadi persentase (buat CSS overlay)
export function toPercentBox(box) {
    return {
        left: `${(box.x0 / CERT_WIDTH) * 100}%`,
        top: `${(box.y0 / CERT_HEIGHT) * 100}%`,
        width: `${((box.x1 - box.x0) / CERT_WIDTH) * 100}%`,
        height: `${((box.y1 - box.y0) / CERT_HEIGHT) * 100}%`,
    };
}

export function buildCertificateText({ userName, mentorName, courseTitle }) {
    return {
        name: userName || "Nama Peserta",
        mentor: mentorName || "Mentor Videobelajar",
        description: `As an item provided for completing the pre-test on the ${courseTitle || "kelas ini"} topic on the videobelajar platform.`,
        mentorCaption: `Mentor ${courseTitle || ""}`.trim(),
    };
}
