// src/services/api/axiosInstance.js
//
// Instance Axios terpusat untuk seluruh pemanggilan API di aplikasi ini.
// Base URL diambil dari .env (VITE_API_BASE_URL) supaya tidak hardcode
// dan mudah diganti (mis. saat pindah dari MockAPI ke API production).

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor — titik terpusat untuk header/otorisasi/logging
axiosInstance.interceptors.request.use(
    (config) => {
        if (import.meta.env.DEV) {
            console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor — titik terpusat untuk penanganan error
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error?.response?.data?.message || error?.message || "Terjadi kesalahan pada server";
        console.error("[API Error]", message);
        return Promise.reject(new Error(message));
    }
);

export default axiosInstance;
