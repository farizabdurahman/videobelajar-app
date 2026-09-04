// src/store/redux/coursesSlice.js
//
// Reducer (slice) Redux Toolkit untuk resource "courses".
// Bertanggung jawab menyimpan hasil GET data dari API ke dalam state
// global, serta menangani ADD, EDIT (update), dan DELETE data lewat
// fungsi-fungsi yang sudah ada di src/services/api/courseService.js.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse,
} from "../../services/api/courseService";
import { enrichCourse, enrichCourses } from "../../utils/courseHelpers";

// ---- Initial State ----
// State awal berupa array kosong (items) yang nantinya akan diisi
// dengan data dari API setelah fetchCourses berhasil dijalankan.
const initialState = {
    items: [],
    loading: true,
    error: null,
};

// ---- Async Thunks ----
// Setiap thunk memanggil fungsi Get/Add/Edit/Delete API dari
// folder services/api, lalu hasilnya diproses oleh extraReducers
// di bawah untuk disimpan ke dalam state global.

// GET — ambil semua course dari API
export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    async (_, { rejectWithValue }) => {
        try {
            const data = await getCourses();
            return enrichCourses(data);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// ADD — tambah course baru
export const createCourseThunk = createAsyncThunk(
    "courses/createCourse",
    async (newCourse, { rejectWithValue }) => {
        try {
            const created = await addCourse(newCourse);
            return enrichCourse(created);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// EDIT (UPDATE) — perbarui course berdasarkan id
export const editCourseThunk = createAsyncThunk(
    "courses/editCourse",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const updated = await updateCourse(id, data);
            return enrichCourse(updated);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// DELETE — hapus course berdasarkan id
export const removeCourseThunk = createAsyncThunk(
    "courses/removeCourse",
    async (id, { rejectWithValue }) => {
        try {
            await deleteCourse(id);
            return id;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// ---- Slice ----
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            // ADD
            .addCase(createCourseThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            // EDIT
            .addCase(editCourseThunk.fulfilled, (state, action) => {
                const idx = state.items.findIndex(
                    (c) => String(c.id) === String(action.payload.id)
                );
                if (idx !== -1) state.items[idx] = action.payload;
            })

            // DELETE
            .addCase(removeCourseThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (c) => String(c.id) !== String(action.payload)
                );
            });
    },
});

export default coursesSlice.reducer;
