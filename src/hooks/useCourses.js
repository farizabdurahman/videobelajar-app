// src/hooks/useCourses.js
//
// Custom hook untuk mengambil & mengelola data courses dari API.
// Memisahkan logic pemanggilan API dari komponen React (Home, dll)
// supaya komponen cukup pakai { courses, loading, error, ...actions }.

import { useState, useEffect, useCallback } from "react";
import {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse,
} from "../services/api/courseService";
import { enrichCourses } from "../utils/courseHelpers";

export default function useCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourses = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getCourses();
            setCourses(enrichCourses(data));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // CREATE
    const createCourse = async (newCourse) => {
        const created = await addCourse(newCourse);
        setCourses((prev) => [...prev, enrichCourses([created])[0]]);
        return created;
    };

    // UPDATE
    const editCourse = async (id, updatedData) => {
        const updated = await updateCourse(id, updatedData);
        setCourses((prev) =>
            prev.map((c) => (String(c.id) === String(updated.id) ? enrichCourses([updated])[0] : c))
        );
        return updated;
    };

    // DELETE
    const removeCourse = async (id) => {
        await deleteCourse(id);
        setCourses((prev) => prev.filter((c) => String(c.id) !== String(id)));
    };

    return {
        courses,
        loading,
        error,
        refetch: fetchCourses,
        createCourse,
        editCourse,
        removeCourse,
    };
}
