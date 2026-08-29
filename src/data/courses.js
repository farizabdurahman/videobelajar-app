import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";
import course6 from "../assets/course6.png";
import course7 from "../assets/course7.png";
import course8 from "../assets/course8.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";

export const TABS = ["Semua", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

const RAW_COURSES = [
    {
        id: 1,
        image: course1,
        category: "Pemasaran",
        title: "Digital Marketing",
        author: "Colious Nourman",
        avatar: avatar1,
        job: "Senior Marketing di Gojek",
        rating: "4.5",
        reviews: "37",
        price: "Rp 321K"
    },
    {
        id: 2,
        image: course2,
        category: "Bisnis",
        title: "Bussiness Development",
        author: "Idrus Dermawan",
        avatar: avatar2,
        job: "Senior B to B di HP Indonesia",
        rating: "4",
        reviews: "99",
        price: "Rp 357K"
    },
    {
        id: 3,
        image: course3,
        category: "Desain",
        title: "UI/UX Designer",
        author: "Ahmad Daulay",
        avatar: avatar3,
        job: "Interaction Designer di Tiket.co",
        rating: "4.1",
        reviews: "44",
        price: "Rp 366K"
    },
    {
        id: 4,
        image: course4,
        category: "Bisnis",
        title: "Data Scientist",
        author: "Gita Safira",
        avatar: avatar4,
        job: "Lead Data Analyst di glowing.id",
        rating: "4.7",
        reviews: "132",
        price: "Rp 575K"
    },
    {
        id: 5,
        image: course5,
        category: "Desain",
        title: "UI/UX Graphic Design",
        author: "Muhammad Abbas",
        avatar: avatar5,
        job: "Lead Graphic Designer di glowing.id",
        rating: "4.9",
        reviews: "132",
        price: "Rp 323K"
    },
    {
        id: 6,
        image: course6,
        category: "Pemasaran",
        title: "Digital Marketing Product E-Commerce",
        author: "Nadhifa Kamila",
        avatar: avatar6,
        job: "Digital Marketing Specialist di Glowman",
        rating: "4.2",
        reviews: "88",
        price: "Rp 333K"
    },
    {
        id: 7,
        image: course7,
        category: "Pengembangan Diri",
        title: "Personal Branding",
        author: "Farhan Dewantara",
        avatar: avatar7,
        job: "HR di PT. Gramadia",
        rating: "4.3",
        reviews: "144",
        price: "Rp 444K"
    },
    {
        id: 8,
        image: course8,
        category: "Bisnis",
        title: "Financial Modeling for FP&A",
        author: "Rizky Ananda",
        avatar: avatar8,
        job: "Corporate Finance di MNC",
        rating: "4.5",
        reviews: "190",
        price: "Rp 300K"
    }
];

// Tambahin detail-detail yang dipakai khusus di halaman Detail Produk
// (deskripsi, kurikulum, review, dsb) supaya data course-nya nggak dobel ditulis.
export const COURSES = RAW_COURSES.map((course) => {
    const priceNumber = parseInt(course.price.replace(/[^\d]/g, ""), 10);
    const originalPriceNumber = priceNumber * 2;

    return {
        ...course,
        originalPrice: `Rp ${originalPriceNumber}K`,
        discount: "Diskon 50%",
        language: "Bahasa Indonesia",
        includes: ["Ujian Akhir", "49 Video", "7 Dokumen", "Sertifikat", "Pretest"],
        description: `${course.title} adalah kelas yang akan membekali kamu dengan keterampilan yang dibutuhkan di bidang ${course.category}. Kamu akan belajar konsep dasar, studi kasus nyata, dan praktik langsung bersama mentor berpengalaman seperti ${course.author}.`,
        curriculum: [
            {
                title: `Introduction to ${course.title}`,
                lessons: [
                    { title: `Dasar-dasar ${course.category.toLowerCase()}`, duration: "12 Menit" },
                    { title: `Peluang karier di bidang ${course.category.toLowerCase()}`, duration: "12 Menit" },
                    { title: "Siklus pengembangan produk/layanan", duration: "12 Menit" }
                ]
            },
            { title: "Studi Kasus dan Praktik", lessons: [] },
            { title: "Evaluasi dan Sertifikasi", lessons: [] }
        ],
        reviewList: [
            {
                name: course.author,
                batch: "Alumni Batch 2",
                text: `Berkarier di bidang ${course.category} selama lebih dari 3 tahun. Saat ini bekerja sebagai ${course.job}.`,
                rating: course.rating
            },
            {
                name: course.author,
                batch: "Alumni Batch 4",
                text: `Berkarier di bidang ${course.category} selama lebih dari 3 tahun. Saat ini bekerja sebagai ${course.job}.`,
                rating: course.rating
            }
        ]
    };
});
