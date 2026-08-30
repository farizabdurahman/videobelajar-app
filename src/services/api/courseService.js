// src/services/api/courseService.js
//
// Kumpulan fungsi pemanggilan API untuk resource "courses" di MockAPI.
// Semua komponen/hook cukup import fungsi dari sini, tidak perlu tahu
// detail axios ataupun URL endpoint-nya.

import axiosInstance from "./axiosInstance";

const ENDPOINT = "/courses";

// GET — ambil semua course
export const getCourses = async () => {
    const res = await axiosInstance.get(ENDPOINT);
    return res.data;
};

// GET by id — ambil satu course
export const getCourseById = async (id) => {
    const res = await axiosInstance.get(`${ENDPOINT}/${id}`);
    return res.data;
};

// ADD (CREATE) — tambah course baru
export const addCourse = async (newCourse) => {
    const res = await axiosInstance.post(ENDPOINT, newCourse);
    return res.data;
};

// UPDATE — edit course berdasarkan id
export const updateCourse = async (id, updatedData) => {
    const res = await axiosInstance.put(`${ENDPOINT}/${id}`, updatedData);
    return res.data;
};

// DELETE — hapus course berdasarkan id
export const deleteCourse = async (id) => {
    const res = await axiosInstance.delete(`${ENDPOINT}/${id}`);
    return res.data;
};
