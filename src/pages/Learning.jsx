/* eslint-disable react-hooks/static-components */
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderById, updateOrder } from "../utils/storage";

const QUESTIONS = [
  {
    question: "Apa tujuan utama UX design?",
    options: ["Memperbanyak fitur", "Membuat pengalaman pengguna mudah dan bermakna", "Mengganti seluruh identitas merek", "Membuat halaman lebih panjang"],
    answer: 1,
  },
  {
    question: "Langkah awal yang tepat sebelum mendesain solusi adalah…",
    options: ["Memilih warna", "Menulis kode", "Memahami kebutuhan dan masalah pengguna", "Membuat iklan"],
    answer: 2,
  },
  {
    question: "Persona digunakan tim produk untuk…",
    options: ["Mewakili kelompok pengguna berdasarkan riset", "Mengukur kecepatan server", "Menentukan harga domain", "Menggantikan semua wawancara pengguna"],
    answer: 0,
  },
  {
    question: "Contoh prinsip usability yang baik adalah…",
    options: ["Navigasi berbeda di setiap halaman", "Pesan error yang jelas dan membantu", "Semua tombol memakai ikon tanpa label", "Formulir dengan isian sebanyak mungkin"],
    answer: 1,
  },
  {
    question: "Wireframe paling bermanfaat untuk…",
    options: ["Menguji struktur dan alur layar sejak awal", "Menentukan kampanye pemasaran", "Menghapus kebutuhan pengujian", "Menulis dokumentasi legal"],
    answer: 0,
  },
];

function Banner({ title, eyebrow, tone = "blue" }) {
  const colors = tone === "orange" ? "from-orange-300 via-amber-400 to-orange-500" : "from-cyan-300 via-teal-400 to-emerald-500";
  return <div className={`relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-r ${colors} flex items-center justify-center`}>
    <div className="absolute -left-12 -bottom-16 h-48 w-80 rounded-full bg-emerald-900/50" />
    <div className="absolute right-12 -top-14 h-52 w-52 rounded-full bg-white/75" />
    <div className="relative text-center"><p className="text-xs font-semibold tracking-[.2em] text-white/85">{eyebrow}</p><h1 className="mt-1 text-5xl font-black tracking-tight text-white drop-shadow-[4px_5px_0_#111]">{title}</h1></div>
  </div>;
}

function LearningShell({ children, courseTitle, screen }) {
  const stage = screen === "video" ? "4.1 Video" : screen === "rules" ? "4.2 Aturan" : "Pre-Test";
  return <div className="min-h-screen bg-[#f8faf8]"><header className="border-b bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link to="/my-courses" className="text-sm font-medium text-slate-600 hover:text-emerald-600">← Kelas Saya</Link><span className="hidden text-sm font-semibold text-slate-700 sm:block">{courseTitle}</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{stage}</span></div></header><main className="mx-auto max-w-6xl px-5 py-8">{children}</main></div>;
}

export default function Learning() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const order = useMemo(() => getOrderById(orderId), [orderId]);
  const [screen, setScreen] = useState("video");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [showSubmit, setShowSubmit] = useState(false);
  const [score, setScore] = useState(null);

  const courseTitle = order?.courseTitle || "UI/UX Graphic Design";
  const choose = (index) => setAnswers((prev) => prev.map((value, i) => i === current ? index : value));
  const submit = () => {
    const correct = answers.reduce((total, value, i) => total + (value === QUESTIONS[i].answer ? 1 : 0), 0);
    const result = Math.round((correct / QUESTIONS.length) * 100);
    setScore(result); setShowSubmit(false); setScreen(result >= 80 ? "passed" : "retry");
    if (order) updateOrder(order.id, { progress: result >= 80 ? 100 : Math.max(order.progress || 0, 30), pretestScore: result });
  };
  const retry = () => { setAnswers(Array(QUESTIONS.length).fill(null)); setCurrent(0); setScore(null); setScreen("quiz"); };

  const Shell = ({ children }) => <LearningShell courseTitle={courseTitle} screen={screen}>{children}</LearningShell>;

  if (screen === "video") return <Shell><div className="overflow-hidden rounded-2xl border bg-white shadow-sm"><div className="grid lg:grid-cols-[1fr_280px]"><section><div className="flex aspect-video items-center justify-center bg-slate-900"><button onClick={() => setScreen("rules")} className="grid h-20 w-20 place-items-center rounded-full bg-white text-3xl text-emerald-600 shadow-lg">▶</button></div><div className="p-7"><p className="text-sm font-semibold text-emerald-600">4.1 VIDEO PEMBELAJARAN</p><h1 className="mt-1 text-2xl font-bold text-slate-900">Foundations of User Experience Design</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Pelajari dasar UX, cara memahami kebutuhan pengguna, dan proses membuat solusi digital yang mudah dipakai.</p><button onClick={() => setScreen("rules")} className="mt-6 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Lanjut ke materi berikutnya →</button></div></section><aside className="border-l bg-slate-50 p-5"><h2 className="font-bold text-slate-800">Daftar Modul</h2><div className="mt-4 space-y-3 text-sm"><button className="w-full rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-left font-medium text-emerald-700">✓ 4.1 Video: Foundation UX</button><button onClick={() => setScreen("rules")} className="w-full rounded-lg border bg-white p-3 text-left hover:border-emerald-400">4.2 Foundation of User Experience Design</button><button className="w-full rounded-lg border bg-white p-3 text-left text-slate-500">Pre-Test: 5 Pertanyaan</button></div></aside></div><button onClick={() => setScreen("rules")} className="w-full bg-emerald-500 px-5 py-4 text-left text-sm font-semibold text-white hover:bg-emerald-600">Foundation of User Experience Design <span className="float-right">→</span></button></div></Shell>;

  if (screen === "rules") return <Shell><div className="overflow-hidden rounded-2xl border bg-white shadow-sm"><Banner title="RULES" eyebrow="4.2 • PRE-TEST" /><div className="max-w-2xl p-8"><h2 className="text-xl font-bold">Aturan Pre-Test</h2><p className="mt-3 text-sm leading-6 text-slate-600">Pre-test ini mengukur pemahaman awal Anda mengenai dasar User Experience Design.</p><ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-600"><li>Terdiri dari {QUESTIONS.length} pertanyaan pilihan ganda.</li><li>Pilih satu jawaban terbaik pada setiap pertanyaan.</li><li>Nilai kelulusan minimal adalah 80.</li><li>Anda dapat mengulang jika nilai belum mencapai batas kelulusan.</li></ul><button onClick={() => setScreen("quiz")} className="mt-7 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600">Mulai Pre-Test</button></div></div></Shell>;

  if (screen === "passed" || screen === "retry") { const passed = screen === "passed"; return <Shell><div className="overflow-hidden rounded-2xl border bg-white shadow-sm"><Banner title={passed ? "CONGRATS!" : "TRY AGAIN"} eyebrow={passed ? "PRE-TEST SELESAI" : "NILAI BELUM MEMENUHI BATAS"} tone={passed ? "blue" : "orange"} /><div className="p-8 text-center"><div className={`mx-auto grid h-20 w-20 place-items-center rounded-full text-3xl ${passed ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"}`}>{passed ? "✓" : "↻"}</div><h2 className="mt-5 text-2xl font-bold">{passed ? "Selamat, Anda lulus pre-test!" : "Sedikit lagi!"}</h2><p className="mt-2 text-sm text-slate-600">Nilai Anda: <b>{score}</b> / 100 · Batas kelulusan: 80</p><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">{passed ? "Anda sudah siap melanjutkan pembelajaran Foundations of User Experience Design." : "Nilai Anda belum mencapai 80. Pelajari materi kembali, lalu ulangi pre-test untuk mencoba lagi."}</p><div className="mt-7 flex flex-wrap justify-center gap-3">{passed ? <button onClick={() => navigate("/my-courses")} className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">Kembali ke Kelas Saya</button> : <button onClick={retry} className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white">Ulangi Pre-Test</button>}<button onClick={() => setScreen("rules")} className="rounded-lg border border-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-600">Lihat Aturan</button></div></div></div></Shell>; }

  const selected = answers[current]; const completed = answers.filter((a) => a !== null).length;
  return <Shell><div className="rounded-2xl border bg-white shadow-sm"><div className="border-b px-6 py-5"><p className="text-sm font-semibold text-emerald-600">PRE-TEST · {completed}/{QUESTIONS.length} terjawab</p><div className="mt-3 flex gap-2">{QUESTIONS.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`grid h-8 w-8 place-items-center rounded text-xs font-bold ${current === i ? "bg-emerald-500 text-white" : answers[i] !== null ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{i + 1}</button>)}</div></div><div className="grid lg:grid-cols-[220px_1fr]"><aside className="border-r bg-slate-50 p-6"><h2 className="font-bold">List Soal</h2><p className="mt-2 text-sm text-slate-500">Selesaikan semua soal untuk mengakhiri pre-test.</p><button onClick={() => completed === QUESTIONS.length && setShowSubmit(true)} disabled={completed !== QUESTIONS.length} className="mt-5 w-full rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300">Selesaikan Ujian</button></aside><section className="p-6 sm:p-9"><p className="text-sm font-semibold text-emerald-600">Pertanyaan {current + 1}</p><h1 className="mt-2 text-xl font-bold text-slate-900">{QUESTIONS[current].question}</h1><div className="mt-6 space-y-3">{QUESTIONS[current].options.map((option, index) => <button key={option} onClick={() => choose(index)} className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left text-sm transition ${selected === index ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-slate-200 hover:border-emerald-300"}`}><span className={`grid h-5 w-5 place-items-center rounded-full border ${selected === index ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300"}`}>{selected === index && "✓"}</span>{option}</button>)}</div><div className="mt-8 flex justify-between"><button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0} className="rounded-lg border px-4 py-2 text-sm disabled:opacity-40">← Sebelumnya</button>{current === QUESTIONS.length - 1 ? <button onClick={() => completed === QUESTIONS.length && setShowSubmit(true)} className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">Submit →</button> : <button onClick={() => setCurrent(current + 1)} className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">Selanjutnya →</button>}</div></section></div></div>{showSubmit && <div className="fixed inset-0 z-10 grid place-items-center bg-slate-900/50 p-5"><div className="w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-xl"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl">📝</div><h2 className="mt-4 text-xl font-bold">Selesaikan Ujian Akhir</h2><p className="mt-2 text-sm text-slate-600">Apakah kamu yakin untuk menyelesaikan pre-test ini?</p><div className="mt-6 flex gap-3"><button onClick={() => setShowSubmit(false)} className="flex-1 rounded-lg border border-emerald-500 py-2.5 text-sm font-semibold text-emerald-600">Batal</button><button onClick={submit} className="flex-1 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white">Selesai</button></div></div></div>}</Shell>;
}
