// src/utils/courseHelpers.js
//
// MockAPI cuma menyimpan field dasar course (title, price, category, dll).
// Field turunan yang dipakai di halaman Course Detail (description,
// curriculum, reviewList, originalPrice, dst) dulunya dihasilkan lewat
// RAW_COURSES.map(...) di src/data/courses.js. Fungsi ini mereplikasi
// logic yang sama, tapi dijalankan di sisi client untuk data yang datang
// dari API, supaya tidak perlu menyimpan data duplikat/redundan di server.

import { LOCAL_ASSETS } from "../data/courses";

export function enrichCourse(course) {
    if (!course) return course;

    const priceNumber = parseInt(String(course.price).replace(/[^\d]/g, ""), 10) || 0;
    const originalPriceNumber = priceNumber * 2;

    // Kalau id-nya cocok dengan salah satu course asli (1-8), pakai asset
    // lokal (src/assets) supaya tidak bergantung pada placeholder dari API.
    // Course baru yang ditambah lewat form (ADD) tetap pakai image/avatar
    // dari API karena tidak ada asset lokal untuk itu.
    const localAsset = LOCAL_ASSETS[String(course.id)];

    return {
        ...course,
        image: localAsset?.image || course.image,
        avatar: localAsset?.avatar || course.avatar,
        originalPrice: `Rp ${originalPriceNumber}K`,
        discount: "Diskon 50%",
        language: "Bahasa Indonesia",
        includes: ["Ujian Akhir", "49 Video", "7 Dokumen", "Sertifikat", "Pretest"],
        description: `${course.title} adalah kelas yang akan membekali kamu dengan keterampilan yang dibutuhkan di bidang ${course.category}. Kamu akan belajar konsep dasar, studi kasus nyata, dan praktik langsung bersama mentor berpengalaman seperti ${course.author}.`,
        curriculum: [
            {
                title: `Introduction to ${course.title}`,
                lessons: [
                    { title: `Dasar-dasar ${course.category?.toLowerCase()}`, duration: "12 Menit" },
                    {
                        title: `Peluang karier di bidang ${course.category?.toLowerCase()}`,
                        duration: "12 Menit",
                    },
                    { title: "Siklus pengembangan produk/layanan", duration: "12 Menit" },
                ],
            },
            { title: "Studi Kasus dan Praktik", lessons: [] },
            { title: "Evaluasi dan Sertifikasi", lessons: [] },
        ],
        reviewList: [
            {
                name: course.author,
                batch: "Alumni Batch 2",
                text: `Berkarier di bidang ${course.category} selama lebih dari 3 tahun. Saat ini bekerja sebagai ${course.job}.`,
                rating: course.rating,
            },
            {
                name: course.author,
                batch: "Alumni Batch 4",
                text: `Berkarier di bidang ${course.category} selama lebih dari 3 tahun. Saat ini bekerja sebagai ${course.job}.`,
                rating: course.rating,
            },
        ],
    };
}

export function enrichCourses(courses) {
    return (courses || []).map(enrichCourse);
}
