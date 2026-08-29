// src/utils/storage.js
//
// Layer penyimpanan sederhana berbasis localStorage.
// Project ini tidak punya backend, jadi localStorage dipakai sebagai
// "database" agar operasi CREATE / READ / UPDATE / DELETE pada
// entitas "Pesanan" (order) benar-benar tersimpan & persist,
// bukan cuma alert() seperti sebelumnya.

const ORDERS_KEY = "vb_orders";
const PROFILE_KEY = "vb_profile";

const DEFAULT_PROFILE = {
    name: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    countryCode: "+62",
    phone: "81234567890",
    gender: "Perempuan",
};

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

export function parsePriceToNumber(priceStr) {
    // "Rp 321K" -> 321000
    const digits = parseInt(String(priceStr).replace(/[^\d]/g, ""), 10) || 0;
    return digits * 1000;
}

export function formatRupiah(amount) {
    return "Rp " + Number(amount || 0).toLocaleString("id-ID");
}

function readJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}

/* ------------------------------------------------------------------ */
/* PROFIL — Read & Update                                             */
/* ------------------------------------------------------------------ */

export function getProfile() {
    return readJSON(PROFILE_KEY, DEFAULT_PROFILE);
}

export function updateProfile(updates) {
    const current = getProfile();
    const next = { ...current, ...updates };
    writeJSON(PROFILE_KEY, next);
    return next;
}

/* ------------------------------------------------------------------ */
/* PESANAN (Orders) — CRUD penuh                                      */
/* ------------------------------------------------------------------ */

export function getOrders() {
    return readJSON(ORDERS_KEY, []);
}

export function getOrderById(id) {
    return getOrders().find((o) => String(o.id) === String(id)) || null;
}

const ADMIN_FEE = 7000;

// CREATE
export function createOrder({ course, method }) {
    const orders = getOrders();
    const price = parsePriceToNumber(course.price);
    const now = new Date();

    const order = {
        id: `ORD${Date.now()}`,
        invoice: `HEL/${String(now.getMonth() + 1).padStart(2, "0")}${String(
            Date.now()
        ).slice(-5)}`,
        courseId: course.id,
        courseTitle: course.title,
        courseImage: course.image,
        courseAuthor: course.author,
        courseAvatar: course.avatar,
        courseCategory: course.category,
        price,
        adminFee: ADMIN_FEE,
        total: price + ADMIN_FEE,
        method,
        status: "pending", // pending | success | failed
        progress: 0,
        createdAt: now.toISOString(),
        paidAt: null,
    };

    writeJSON(ORDERS_KEY, [order, ...orders]);
    return order;
}

// READ (dengan filter, pencarian, & sort — dipakai di halaman Pesanan Saya)
export function queryOrders({ status = "all", search = "", sort = "newest" } = {}) {
    let orders = getOrders();

    if (status !== "all") {
        orders = orders.filter((o) => o.status === status);
    }

    if (search.trim()) {
        const q = search.trim().toLowerCase();
        orders = orders.filter((o) => o.courseTitle.toLowerCase().includes(q));
    }

    orders = [...orders].sort((a, b) => {
        switch (sort) {
            case "oldest":
                return new Date(a.createdAt) - new Date(b.createdAt);
            case "price_high":
                return b.total - a.total;
            case "price_low":
                return a.total - b.total;
            case "newest":
            default:
                return new Date(b.createdAt) - new Date(a.createdAt);
        }
    });

    return orders;
}

// UPDATE
export function updateOrder(id, updates) {
    const orders = getOrders();
    const next = orders.map((o) =>
        String(o.id) === String(id) ? { ...o, ...updates } : o
    );
    writeJSON(ORDERS_KEY, next);
    return next.find((o) => String(o.id) === String(id)) || null;
}

// DELETE
export function deleteOrder(id) {
    const orders = getOrders();
    const next = orders.filter((o) => String(o.id) !== String(id));
    writeJSON(ORDERS_KEY, next);
    return next;
}
