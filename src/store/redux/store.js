// src/store/redux/store.js
//
// Konfigurasi store Redux terpusat untuk seluruh aplikasi.
// Semua reducer yang dibuat (mis. coursesReducer) didaftarkan
// di sini agar state-nya bisa diakses lewat useSelector di
// komponen manapun setelah dibungkus dengan <Provider>.

import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice";

const store = configureStore({
    reducer: {
        courses: coursesReducer,
    },
});

export default store;
