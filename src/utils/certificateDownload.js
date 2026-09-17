// src/utils/certificateDownload.js
//
// Render sertifikat (gambar template + teks dinamis) ke <canvas> di
// resolusi asli, lalu diunduh sebagai PNG. Dipisah dari komponen
// preview (CSS) karena butuh ukuran pixel pasti supaya hasil unduhan
// tajam & konsisten di semua browser.

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
    buildCertificateText,
} from "./certificateLayout";

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

async function ensureFontsReady() {
    try {
        await Promise.all([
            document.fonts.load('130px "Alex Brush"'),
            document.fonts.load('500 40px "Baloo 2"'),
            document.fonts.load('600 40px "Baloo 2"'),
        ]);
        await document.fonts.ready;
    } catch {
        // Kalau Font Loading API tidak didukung, tetap lanjut dengan
        // fallback font milik browser.
    }
}

// Word-wrap sederhana berbasis ctx.measureText, dipakai buat paragraf
// deskripsi topik yang panjangnya berubah-ubah sesuai judul kelas.
function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";

    words.forEach((word) => {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word;
        } else {
            line = test;
        }
    });
    if (line) lines.push(line);
    return lines;
}

export async function renderCertificateCanvas({ userName, mentorName, courseTitle }) {
    const text = buildCertificateText({ userName, mentorName, courseTitle });
    const [img] = await Promise.all([loadImage(certificateBlank), ensureFontsReady()]);

    const canvas = document.createElement("canvas");
    canvas.width = CERT_WIDTH;
    canvas.height = CERT_HEIGHT;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, CERT_WIDTH, CERT_HEIGHT);

    // Nama user (cursive, gold), center di kotak nama
    const nameCenterX = (NAME_BOX_PX.x0 + NAME_BOX_PX.x1) / 2;
    const nameCenterY = (NAME_BOX_PX.y0 + NAME_BOX_PX.y1) / 2;
    ctx.fillStyle = GOLD;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let nameFontSize = 120;
    ctx.font = `${nameFontSize}px "Alex Brush", cursive`;
    const nameMaxWidth = (NAME_BOX_PX.x1 - NAME_BOX_PX.x0) * 0.96;
    while (ctx.measureText(text.name).width > nameMaxWidth && nameFontSize > 40) {
        nameFontSize -= 4;
        ctx.font = `${nameFontSize}px "Alex Brush", cursive`;
    }
    ctx.fillText(text.name, nameCenterX, nameCenterY + nameFontSize * 0.08);

    // Deskripsi topik (wrap sampai 2 baris)
    ctx.fillStyle = WHITE;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    const descFontSize = 42;
    ctx.font = `500 ${descFontSize}px "Baloo 2", sans-serif`;
    const descMaxWidth = DESC_BOX_PX.x1 - DESC_BOX_PX.x0;
    const lines = wrapText(ctx, text.description, descMaxWidth);
    const lineHeight = descFontSize * 1.25;
    lines.slice(0, 3).forEach((line, i) => {
        ctx.fillText(line, DESC_BOX_PX.x0, DESC_BOX_PX.y0 + descFontSize + i * lineHeight);
    });

    // Garis + nama mentor
    ctx.strokeStyle = WHITE;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(MENTOR_LINE_PX.x0, MENTOR_LINE_PX.y);
    ctx.lineTo(MENTOR_LINE_PX.x1, MENTOR_LINE_PX.y);
    ctx.stroke();

    const mentorCenterX = (MENTOR_TEXT_PX.x0 + MENTOR_TEXT_PX.x1) / 2;
    ctx.textAlign = "center";
    ctx.fillStyle = WHITE;
    ctx.font = `600 32px "Baloo 2", sans-serif`;
    ctx.fillText(text.mentor, mentorCenterX, MENTOR_TEXT_PX.y0 + 34);
    ctx.font = `500 26px "Baloo 2", sans-serif`;
    ctx.globalAlpha = 0.85;
    ctx.fillText(text.mentorCaption, mentorCenterX, MENTOR_TEXT_PX.y0 + 70);
    ctx.globalAlpha = 1;

    return canvas;
}

export async function downloadCertificate({ userName, mentorName, courseTitle, fileName }) {
    const canvas = await renderCertificateCanvas({ userName, mentorName, courseTitle });
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName || `sertifikat-${(courseTitle || "videobelajar").toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
