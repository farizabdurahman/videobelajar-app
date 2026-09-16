// src/data/pretestQuestions.js
//
// Bank soal pretest per course, key = courseId (lihat src/data/courses.js).
// Setiap course punya 10 soal pilihan ganda (A-D). `answer` adalah index
// jawaban benar (0 = A, 1 = B, dst), mengikuti struktur soal di Learning.jsx.

export const PRETEST_QUESTIONS = {
  // 1. Digital Marketing
  1: [
    {
      question: "Apa yang dimaksud dengan SEO (Search Engine Optimization) dalam digital marketing?",
      options: ["Metode berbayar untuk menaikkan peringkat iklan di mesin pencari", "Upaya mengoptimalkan website agar berada di peringkat teratas hasil pencarian organik", "Teknik mengirimkan email massal ke target audiens", "Strategi pemasaran menggunakan influencer media sosial"],
      answer: 1,
      explanation: "SEO berfokus pada hasil pencarian organik (non-berbayar) melalui optimasi konten dan teknik website.",
    },
    {
      question: "Metrik apa yang paling tepat untuk mengukur efektivitas biaya per klik dari sebuah iklan berbayar?",
      options: ["CTR (Click-Through Rate)", "CPC (Cost Per Click)", "CPM (Cost Per Mille)", "ROI (Return on Investment)"],
      answer: 1,
      explanation: "CPC mengukur berapa biaya yang dikeluarkan untuk setiap klik yang diterima iklan.",
    },
    {
      question: "Dalam strategi content marketing, apa fungsi utama dari 'Lead Magnet'?",
      options: ["Menjual produk secara langsung dengan diskon besar", "Menarik perhatian pengunjung untuk memberikan informasi kontak seperti email", "Meningkatkan kecepatan loading halaman website", "Memblokir spam komentar di blog"],
      answer: 1,
      explanation: "Lead magnet adalah insentif gratis yang ditukar dengan informasi kontak prospek.",
    },
    {
      question: "Apa kepanjangan dari CTR dalam analitik iklan digital?",
      options: ["Cost Through Rate", "Conversion Time Ratio", "Click-Through Rate", "Customer Target Reach"],
      answer: 2,
      explanation: "CTR singkatan dari Click-Through Rate, persentase pengguna yang mengklik iklan.",
    },
    {
      question: "Platform mana yang paling efektif untuk B2B (Business to Business) digital marketing?",
      options: ["TikTok", "LinkedIn", "Instagram Reels", "Pinterest"],
      answer: 1,
      explanation: "LinkedIn adalah platform profesional tempat berkumpulnya pembuat keputusan bisnis.",
    },
    {
      question: "Apa tujuan utama dari Email Marketing Automation?",
      options: ["Mengirim spam ke jutaan email acak", "Mengirim pesan yang relevan secara otomatis berdasarkan perilaku atau pemicu tertentu dari pengguna", "Menggantikan seluruh tim layanan pelanggan", "Membuat desain grafis otomatis"],
      answer: 1,
      explanation: "Automasi email mengirim pesan yang dipersonalisasi berdasarkan aksi user (misal: cart abandonment).",
    },
    {
      question: "Apa yang dimaksud dengan Bounce Rate pada Google Analytics?",
      options: ["Jumlah total pengunjung website dalam sehari", "Persentase pengunjung yang meninggalkan website setelah melihat satu halaman saja tanpa interaksi", "Kecepatan server saat diakses pengguna", "Jumlah produk yang dikembalikan pelanggan"],
      answer: 1,
      explanation: "Bounce rate tinggi menunjukkan pengunjung pergi tanpa menjelajahi halaman lain.",
    },
    {
      question: "Strategi pemasaran digital yang berfokus pada pengalaman pengguna di perangkat mobile disebut\\...",
      options: ["Desktop Marketing", "Mobile Marketing", "Traditional Marketing", "Print Marketing"],
      answer: 1,
      explanation: "Mobile marketing mengoptimalkan seluruh aset digital untuk pengguna smartphone.",
    },
    {
      question: "Apa perbedaan utama antara SEO dan SEM?",
      options: ["SEO gratis (organik), SEM berbayar (paid search)", "SEO untuk video, SEM untuk teks", "SEO di media sosial, SEM di website", "Tidak ada perbedaan"],
      answer: 0,
      explanation: "SEO berfokus pada hasil organik, sedangkan SEM mencakup iklan berbayar di mesin pencari.",
    },
    {
      question: "Apa indikator utama kesuksesan dari strategi Conversion Rate Optimization (CRO)?",
      options: ["Jumlah traffic website yang tinggi", "Peningkatan persentase pengunjung yang melakukan tindakan yang diinginkan (beli/daftar)", "Jumlah follower media sosial", "Biaya produksi konten yang rendah"],
      answer: 1,
      explanation: "CRO bertujuan meningkatkan persentase konversi dari pengunjung menjadi pelanggan/lead.",
    },
  ],

  // 2. Business Development
  2: [
    {
      question: "Apa fokus utama dari seorang Business Development Professional?",
      options: ["Membuat desain poster perusahaan", "Menciptakan pertumbuhan jangka panjang melalui kemitraan, pasar baru, dan hubungan strategis", "Melakukan pembukuan keuangan harian", "Menulis kode program aplikasi"],
      answer: 1,
      explanation: "BizDev berfokus pada pertumbuhan strategis dan ekspansi bisnis.",
    },
    {
      question: "Apa arti dari B2B dalam konteks penjualan dan bisnis?",
      options: ["Business to Buyer", "Business to Brand", "Business to Business", "Buyer to Business"],
      answer: 2,
      explanation: "B2B adalah transaksi atau penjualan antar perusahaan.",
    },
    {
      question: "Apa tahapan awal yang krusial dalam Sales Pipeline?",
      options: ["Closing", "Lead Generation", "Negosiasi Kontrak", "After-sales service"],
      answer: 1,
      explanation: "Lead generation adalah proses mencari dan mengumpulkan prospek potensial.",
    },
    {
      question: "Apa fungsi utama dari sistem CRM (Customer Relationship Management)?",
      options: ["Mengelola dan melacak interaksi serta data pelanggan di seluruh siklus hidup mereka", "Menghitung pajak perusahaan", "Mengedit video promosi", "Mengatur jadwal cuti karyawan"],
      answer: 0,
      explanation: "CRM membantu perusahaan mengelola hubungan dan data klien secara terpusat.",
    },
    {
      question: "Apa yang dimaksud dengan Value Proposition?",
      options: ["Harga jual produk di pasar", "Nilai atau keunggulan unik yang dijanjikan produk untuk menyelesaikan masalah pelanggan", "Jumlah modal awal perusahaan", "Gaji rata-rata karyawan"],
      answer: 1,
      explanation: "Value proposition menjelaskan mengapa pelanggan harus memilih produk kita dibanding kompetitor.",
    },
    {
      question: "Strategi ekspansi pasar dengan menjual produk yang sudah ada ke segmen pasar baru disebut\\...",
      options: ["Market Penetration", "Market Development", "Product Development", "Diversification"],
      answer: 1,
      explanation: "Market development memperluas pasar untuk produk yang sudah ada.",
    },
    {
      question: "Apa kunci utama dalam melakukan negosiasi bisnis yang sukses?",
      options: ["Memaksa pihak lain menyetujui semua syarat", "Mencari solusi win-win yang memberikan nilai bagi kedua belah pihak", "Menolak berkompromi", "Menurunkan harga serendah mungkin"],
      answer: 1,
      explanation: "Negosiasi yang baik berorientasi pada kerja sama jangka panjang yang saling menguntungkan (win-win).",
    },
    {
      question: "Apa yang dimaksud dengan Strategic Partnership?",
      options: ["Hubungan kerja sama dua perusahaan atau lebih untuk mencapai tujuan bersama yang saling menguntungkan", "Pembelian seluruh saham kompetitor", "Kontrak kerja freelancer", "Sewa kantor bersama"],
      answer: 0,
      explanation: "Strategic partnership menggabungkan kekuatan dua entitas untuk sinergi bisnis.",
    },
    {
      question: "Metrik apa yang digunakan untuk mengukur pengembalian atas investasi finansial?",
      options: ["ROI (Return on Investment)", "KPI", "CTR", "CPA"],
      answer: 0,
      explanation: "ROI menghitung efisiensi dan keuntungan dari suatu investasi.",
    },
    {
      question: "Mengapa riset pasar (Market Research) sangat penting dalam Business Development?",
      options: ["Untuk menghabiskan anggaran perusahaan", "Untuk memahami kebutuhan pelanggan, tren industri, dan lanskap kompetitor", "Agar laporan terlihat tebal", "Tidak terlalu penting"],
      answer: 1,
      explanation: "Riset pasar memberikan data valid untuk mengambil keputusan strategis.",
    },
  ],

  // 3. UI/UX Designer
  3: [
    {
      question: "Apa perbedaan utama antara UI (User Interface) dan UX (User Experience)?",
      options: ["UI adalah tampilan visual, UX adalah pengalaman dan alur kepuasan pengguna", "UI untuk mobile, UX untuk website", "UI dibuat oleh programmer, UX oleh desainer grafis", "Tidak ada perbedaan"],
      answer: 0,
      explanation: "UI berfokus pada estetika visual, sedangkan UX berfokus pada fungsionalitas dan pengalaman keseluruhan.",
    },
    {
      question: "Apa tujuan utama dari pembuatan Wireframe?",
      options: ["Menentukan warna dan animasi akhir", "Membuat kerangka kerja tata letak (layout) dan struktur dasar tanpa elemen visual yang rumit", "Menulis kode backend aplikasi", "Menguji kecepatan server"],
      answer: 1,
      explanation: "Wireframe adalah cetak biru struktural sebelum masuk ke desain visual.",
    },
    {
      question: "Apa itu User Persona dalam proses UX Design?",
      options: ["Foto profil desainer", "Representasi fiktif dari target pengguna ideal berdasarkan data riset", "Daftar administrator website", "Password akun aplikasi"],
      answer: 1,
      explanation: "User persona membantu tim mendesain dengan memetakan kebutuhan pengguna nyata.",
    },
    {
      question: "Metode pengujian untuk mengevaluasi kemudahan penggunaan produk oleh pengguna nyata disebut\\...",
      options: ["Stress Testing", "Usability Testing", "Penetration Testing", "Code Review"],
      answer: 1,
      explanation: "Usability testing menguji seberapa intuitif produk bagi pengguna.",
    },
    {
      question: "Apa kepanjangan dari prinsip WCAG dalam konteks desain aksesibel?",
      options: ["Web Content Accessibility Guidelines", "Window Color And Graphics", "Wide Compatibility Application Group", "Wireless Connection Access Guide"],
      answer: 0,
      explanation: "WCAG adalah pedoman internasional untuk aksesibilitas konten web bagi penyandang disabilitas.",
    },
    {
      question: "Apa fungsi dari Information Architecture (IA) dalam UX?",
      options: ["Menyusun struktur informasi dan navigasi agar mudah dipahami pengguna", "Memilih jenis font yang mahal", "Menghitung biaya server database", "Membuat logo perusahaan"],
      answer: 0,
      explanation: "IA mengatur bagaimana konten diorganisasi dan dinavigasi.",
    },
    {
      question: "Prinsip Gestalt dalam desain visual berkaitan dengan\\...",
      options: ["Kecepatan loading website", "Bagaimana otak manusia mengelompokkan elemen visual dan menyusun pola", "Bahasa pemrograman frontend", "Ukuran file gambar"],
      answer: 1,
      explanation: "Prinsip Gestalt menjelaskan persepsi visual manusia (proximity, similarity, dll).",
    },
    {
      question: "Apa yang dimaksud dengan User Journey Map?",
      options: ["Peta lokasi kantor", "Visualisasi langkah-langkah yang dilalui pengguna saat berinteraksi dengan produk untuk mencapai tujuan", "Rute pengiriman produk fisik", "Struktur database"],
      answer: 1,
      explanation: "Journey map memetakan pengalaman emosional dan langkah user.",
    },
    {
      question: "Software apa yang saat ini paling populer digunakan untuk kolaborasi desain UI/UX dan prototyping?",
      options: ["Microsoft Word", "Figma", "Adobe Premiere", "Notepad++"],
      answer: 1,
      explanation: "Figma adalah standar industri untuk desain UI/UX kolaboratif berbasis cloud.",
    },
    {
      question: "Apa itu Heuristic Evaluation?",
      options: ["Evaluasi desain oleh ahli berdasarkan prinsip kegunaan yang diakui", "Tes kesehatan fisik desainer", "Perhitungan gaji desainer", "Ujian sertifikasi coding"],
      answer: 0,
      explanation: "Heuristic evaluation melibatkan ahli mengevaluasi interface terhadap prinsip UX standar.",
    },
  ],

  // 4. Data Scientist
  4: [
    {
      question: "Apa perbedaan utama antara Supervised Learning dan Unsupervised Learning?",
      options: ["Supervised menggunakan data berlabel, Unsupervised menggunakan data tidak berlabel", "Supervised tanpa komputer, Unsupervised dengan komputer", "Supervised untuk gambar, Unsupervised untuk teks", "Tidak ada perbedaan"],
      answer: 0,
      explanation: "Supervised learning dilatih dengan data yang memiliki label target yang benar.",
    },
    {
      question: "Bahasa pemrograman manakah yang paling mendominasi bidang Data Science saat ini?",
      options: ["HTML", "Python", "CSS", "PHP"],
      answer: 1,
      explanation: "Python adalah bahasa utama di Data Science berkat ekosistem library yang kaya (Pandas, Scikit-Learn, dll).",
    },
    {
      question: "Apa itu Overfitting dalam Machine Learning?",
      options: ["Model terlalu sederhana sehingga tidak akurat", "Model terlalu menghafal data training sehingga gagal bergeneralisasi pada data baru", "Komputer kehabisan memori RAM", "Dataset terlalu sedikit dibersihkan"],
      answer: 1,
      explanation: "Overfitting terjadi ketika model terlalu pas dengan data latih namun buruk pada data uji.",
    },
    {
      question: "Library Python apa yang paling sering digunakan untuk manipulasi dan analisis data tabular?",
      options: ["Matplotlib", "Pandas", "Flask", "Requests"],
      answer: 1,
      explanation: "Pandas menyediakan struktur data DataFrame yang sangat powerful untuk analisis data.",
    },
    {
      question: "Apa fungsi utama dari teknik Data Cleaning (Pembersihan Data)?",
      options: ["Menghapus data penting secara acak", "Menangani missing values, duplikat, dan outlier untuk memastikan kualitas data", "Mempercantik warna grafik", "Mempercepat koneksi internet"],
      answer: 1,
      explanation: "Data cleaning memastikan data bersih dan siap diproses algoritma.",
    },
    {
      question: "Apa yang dimaksud dengan Linear Regression?",
      options: ["Algoritma untuk mengklasifikasikan gambar", "Algoritma statistik untuk memprediksi nilai kontinu berdasarkan hubungan linear variabel", "Metode enkripsi data", "Cara merapikan database SQL"],
      answer: 1,
      explanation: "Linear regression memprediksi nilai numerik kontinu (misal: harga rumah).",
    },
    {
      question: "Apa kegunaan teknik Cross-Validation dalam pembangunan model machine learning?",
      options: ["Validasi password pengguna", "Mengevaluasi kinerja model secara lebih objektif dengan membagi data menjadi beberapafold", "Menggabungkan dua database berbeda", "Mempercepat waktu training model"],
      answer: 1,
      explanation: "Cross-validation mencegah bias evaluasi akibat pembagian train-test yang kebetulan.",
    },
    {
      question: "Apa kepanjangan dari SQL dan apa kegunaannya dalam Data Science?",
      options: ["Structured Query Language - untuk mengambil dan mengelola data di relational database", "Simple Quick Logic - untuk logika pemrograman dasar", "System Quality Layer - untuk keamanan server", "Standard Quant Data - untuk statistik"],
      answer: 0,
      explanation: "SQL adalah bahasa standar untuk mengakses dan mengelola database relasional.",
    },
    {
      question: "Apa itu Feature Engineering?",
      options: ["Merakit komponen fisik komputer", "Proses mentransformasi data mentah menjadi fitur yang lebih bermakna untuk meningkatkan performa model", "Membuat fitur tombol baru di aplikasi", "Memperbaiki bug software"],
      answer: 1,
      explanation: "Feature engineering mengekstrak informasi terbaik dari data untuk model ML.",
    },
    {
      question: "Metrik evaluasi apa yang umum digunakan untuk model Klasifikasi (Classification)?",
      options: ["MSE (Mean Squared Error)", "Accuracy, Precision, Recall, dan F1-Score", "R-Squared", "RMSE"],
      answer: 1,
      explanation: "Akurasi, presisi, recall, dan F1-score mengukur performa prediksi kategori.",
    },
  ],

  // 5. UI/UX Graphic Design
  5: [
    {
      question: "Apa perbedaan mode warna RGB dan CMYK?",
      options: ["RGB untuk cetak, CMYK untuk layar digital", "RGB untuk layar digital (Red, Green, Blue), CMYK untuk percetakan (Cyan, Magenta, Yellow, Key/Black)", "RGB hitam putih, CMYK berwarna", "Tidak ada perbedaan"],
      answer: 1,
      explanation: "RGB digunakan untuk media elektronik/layar, sedangkan CMYK standar warna cetak mesin.",
    },
    {
      question: "Apa yang dimaksud dengan Hirarki Visual (Visual Hierarchy) dalam desain grafis?",
      options: ["Urutan jabatan dalam tim desainer", "Susunan elemen visual berdasarkan tingkat kepentingannya agar mata pengguna terarah dengan benar", "Ukuran file desain terbesar", "Jumlah warna dalam satu poster"],
      answer: 1,
      explanation: "Hirarki visual memandu perhatian audiens ke elemen terpenting terlebih dahulu.",
    },
    {
      question: "Apa keunggulan utama gambar berformat Vector dibanding Raster (Bitmap)?",
      options: ["Ukuran file selalu lebih besar", "Dapat diperbesar tanpa batas tanpa kehilangan kualitas atau pecah", "Cocok untuk foto realistis", "Didukung oleh semua mesin printer lama"],
      answer: 1,
      explanation: "Vektor berbasis rumus matematika sehingga tetap tajam di ukuran berapa pun.",
    },
    {
      question: "Apa fungsi dari Grid System dalam desain UI dan Grafis?",
      options: ["Membuat garis pembatas halaman cetak koran", "Membantu menyelaraskan elemen secara konsisten, terstruktur, dan rapi", "Menghitung jumlah piksel gambar", "Mengatur pencahayaan monitor"],
      answer: 1,
      explanation: "Grid system menjaga konsistensi tata letak dan keterbacaan.",
    },
    {
      question: "Ilmu yang mempelajari seni dan teknik memilih serta menata huruf disebut\\...",
      options: ["Calligraphy", "Typography", "Photography", "Cartography"],
      answer: 1,
      explanation: "Tipografi adalah seni pengaturan huruf dalam desain.",
    },
    {
      question: "Apa arti prinsip Kontras (Contrast) dalam prinsip desain?",
      options: ["Membuat semua elemen tampak seragam", "Menonjolkan perbedaan mencolok antar elemen (warna, ukuran, bentuk) untuk menciptakan fokus", "Menggelapkan seluruh layar", "Menggunakan satu jenis font saja"],
      answer: 1,
      explanation: "Kontras menciptakan titik fokus dan keterbacaan yang baik.",
    },
    {
      question: "Apa itu Brand Identity dalam konteks desain?",
      options: ["KTP perusahaan", "Kumpulan elemen visual (logo, palet warna, tipografi) yang merepresentasikan kepribadian dan nilai merek", "Alamat kantor pusat", "Daftar harga produk"],
      answer: 1,
      explanation: "Brand identity membentuk citra visual yang konsisten di benak konsumen.",
    },
    {
      question: "Software apa yang merupakan standar industri untuk desain grafis berbasis vektor (seperti pembuatan logo)?",
      options: ["Adobe Photoshop", "Adobe Illustrator", "Microsoft Excel", "Blender"],
      answer: 1,
      explanation: "Adobe Illustrator adalah software utama untuk karya vektor.",
    },
    {
      question: "Apa yang dimaksud dengan White Space (Negative Space) dalam desain?",
      options: ["Ruang kosong yang sengaja dibiarkan di sekitar elemen desain untuk memberikan napas dan kejelasan", "Area layar yang rusak", "Background warna putih bersih", "Kesalahan cetak printer"],
      answer: 1,
      explanation: "White space meningkatkan estetika dan fokus visual.",
    },
    {
      question: "Mengapa konsistensi warna sangat penting dalam desain UI dan Branding?",
      options: ["Agar menghemat tinta printer", "Membangun pengenalan merek (brand recognition) dan kenyamanan visual pengguna", "Memenuhi aturan pemerintah", "Tidak ada pengaruhnya"],
      answer: 1,
      explanation: "Konsistensi warna memperkuat identitas visual dan pengalaman pengguna.",
    },
  ],

  // 6. Digital Marketing Product E-Commerce
  6: [
    {
      question: "Apa yang dimaksud dengan Cart Abandonment dalam e-commerce?",
      options: ["Keranjang belanja fisik yang tertinggal di supermarket", "Situasi ketika pengunjung memasukkan produk ke keranjang belanja online tetapi meninggalkan website sebelum menyelesaikan pembelian", "Pembatalan pesanan oleh penjual", "Kerusakan produk saat pengiriman"],
      answer: 1,
      explanation: "Cart abandonment rate yang tinggi menunjukkan hambatan pada proses checkout.",
    },
    {
      question: "Apa itu Marketplace SEO (seperti optimasi toko di Shopee atau Tokopedia)?",
      options: ["Memasang iklan berbayar di TV", "Teknik mengoptimalkan nama produk, deskripsi, dan kata kunci agar toko dan produk muncul di urutan atas pencarian internal marketplace", "Membuat website e-commerce sendiri dari nol", "Mengirim brosur keliling"],
      answer: 1,
      explanation: "Marketplace SEO meningkatkan visibilitas produk di dalam platform e-commerce.",
    },
    {
      question: "Metrik ROAS (Return on Ad Spend) mengukur\\...",
      options: ["Jumlah klik iklan", "Pendapatan yang dihasilkan untuk setiap rupiah yang dikeluarkan pada iklan", "Total biaya produksi barang", "Kecepatan pengiriman kurir"],
      answer: 1,
      explanation: "ROAS mengukur efektivitas finansial dari kampanye iklan e-commerce.",
    },
    {
      question: "Apa fungsi utama dari strategi Flash Sale di e-commerce?",
      options: ["Menghabiskan stok rusak", "Mendorong pembelian impulsif, menarik traffic instan, dan meningkatkan volume penjualan secara cepat", "Membuat server down", "Menaikkan harga produk"],
      answer: 1,
      explanation: "Flash sale memanfaatkan urgensi (urgency & scarcity) untuk mendongkrak konversi kilat.",
    },
    {
      question: "Apa arti dari CLV (Customer Lifetime Value)?",
      options: ["Total keuntungan yang diperoleh dari seorang pelanggan selama keseluruhan hubungan bisnis mereka dengan toko", "Usia rata-rata pembeli online", "Lama waktu pengiriman pesanan", "Biaya pembuatan akun"],
      answer: 0,
      explanation: "CLV membantu menentukan seberapa besar biaya yang layak dikeluarkan untuk akuisisi pelanggan.",
    },
    {
      question: "Apa tujuan dari teknik Product Bundling dalam e-commerce?",
      options: ["Menjual produk cacat", "Menjual beberapa produk bersamaan dengan harga paket untuk meningkatkan rata-rata nilai transaksi (AOV)", "Mempersulit pembeli memilih", "Mengurangi jumlah produk di gudang"],
      answer: 1,
      explanation: "Product bundling meningkatkan Average Order Value (AOV).",
    },
    {
      question: "Apa yang dimaksud dengan Retargeting / Remarketing dalam iklan e-commerce?",
      options: ["Menargetkan iklan kepada orang yang belum pernah tahu merek kita", "Menampilkan iklan kepada pengguna yang sudah pernah mengunjungi website atau melihat produk namun belum membeli", "Mengembalikan produk ke supplier", "Menghapus iklan yang gagal"],
      answer: 1,
      explanation: "Retargeting efektif menjangkau kembali calon pembeli yang potensial.",
    },
    {
      question: "Apa itu SKU (Stock Keeping Unit)?",
      options: ["Kode unik yang digunakan untuk mengidentifikasi dan melacak setiap item produk di inventaris", "Surat izin usaha e-commerce", "Kurir pengiriman cepat", "Diskon khusus member"],
      answer: 0,
      explanation: "SKU sangat penting untuk manajemen stok dan inventaris e-commerce.",
    },
    {
      question: "Apa peran ulasan produk (Product Reviews) yang positif dalam e-commerce?",
      options: ["Membebani kapasitas server", "Membangun social proof dan kepercayaan calon pembeli baru untuk melakukan transaksi", "Tidak berpengaruh pada penjualan", "Hanya sebagai formalitas"],
      answer: 1,
      explanation: "Ulasan positif adalah social proof terkuat untuk meningkatkan conversion rate.",
    },
    {
      question: "Strategi apa yang paling tepat untuk mengatasi tingginya Cart Abandonment?",
      options: ["Menaikkan harga produk", "Mengirim email pengingat (abandoned cart email), menawarkan diskon pengiriman, atau menyederhanakan proses checkout", "Menutup toko online", "Menghapus tombol beli"],
      answer: 1,
      explanation: "Abandoned cart email terbukti efektif menarik kembali pembeli yang ragu.",
    },
  ],

  // 7. Personal Branding
  7: [
    {
      question: "Apa definisi utama dari Personal Branding?",
      options: ["Membuat logo perusahaan multinasional", "Praktik memasarkan diri sendiri, keahlian, dan nilai tambah sebagai sebuah 'merek' kepada target audiens", "Mengubah nama asli di KTP", "Memasang iklan lowongan kerja"],
      answer: 1,
      explanation: "Personal branding adalah bagaimana Anda memposisikan reputasi dan keahlian Anda di mata publik.",
    },
    {
      question: "Mengapa Unique Value Proposition (UVP) penting dalam personal branding?",
      options: ["Agar terlihat sama dengan orang lain", "Untuk menunjukkan keunikan, keahlian khusus, atau pembeda utama yang membuat Anda menonjol di bidang Anda", "Sebagai syarat membuat akun media sosial", "Tidak penting sama sekali"],
      answer: 1,
      explanation: "UVP menjelaskan apa nilai unik yang Anda tawarkan yang tidak dimiliki orang lain.",
    },
    {
      question: "Platform profesional mana yang paling utama digunakan untuk membangun personal branding karier dan B2B networking?",
      options: ["TikTok", "LinkedIn", "Spotify", "Steam"],
      answer: 1,
      explanation: "LinkedIn adalah platform jejaring profesional nomor satu di dunia.",
    },
    {
      question: "Apa peran Content Strategy dalam membangun personal branding?",
      options: ["Menyebarkan hoaks agar viral", "Merencanakan dan membagikan konten yang edukatif, relevan, dan bernilai tinggi secara konsisten untuk menunjukkan otoritas keahlian", "Menghabiskan waktu luang", "Menulis buku harian pribadi"],
      answer: 1,
      explanation: "Konten yang konsisten dan bernilai membangun kredibilitas dan thought leadership.",
    },
    {
      question: "Apa yang dimaksud dengan Thought Leadership dalam personal branding?",
      options: ["Menjadi pemimpin perusahaan besar", "Diakui sebagai ahli, pemikir terdepan, dan referensi terpercaya di industri tertentu", "Sering melamun di kantor", "Memiliki banyak pengikut pasif"],
      answer: 1,
      explanation: "Thought leadership menempatkan Anda sebagai pakar tepercaya di industri.",
    },
    {
      question: "Mengapa konsistensi (Consistency) menjadi kunci sukses personal branding?",
      options: ["Agar algoritma media sosial bosan", "Membangun kepercayaan audiens dan memastikan merek Anda tetap diingat (top of mind)", "Membuang-buang waktu", "Syarat mutlak denda pajak"],
      answer: 1,
      explanation: "Konsistensi kehadiran dan kualitas pesan membangun kepercayaan jangka panjang.",
    },
    {
      question: "Apa fungsi utama dari portofolio online dalam personal branding?",
      options: ["Sebagai galeri foto liburan", "Menampilkan bukti nyata hasil karya, proyek, dan pencapaian profesional Anda kepada publik atau klien", "Menggantikan ijazah sekolah", "Menyimpan password rahasia"],
      answer: 1,
      explanation: "Portofolio memberikan bukti otentik atas kompetensi dan pengalaman Anda.",
    },
    {
      question: "Bagaimana cara melakukan Online Reputation Management dalam personal branding?",
      options: ["Mengabaikan semua komentar negatif", "Secara proaktif memantau, merawat, dan menjaga citra positif serta etika profesional di ruang digital", "Menghapus semua akun media sosial selamanya", "Membuat akun palsu"],
      answer: 1,
      explanation: "Reputasi online harus dijaga karena jejak digital sulit dihilangkan.",
    },
    {
      question: "Apa manfaat dari networking yang strategis bagi personal branding?",
      options: ["Memperluas relasi, membuka peluang kolaborasi, dan mendapatkan akses ke peluang karier baru", "Menambah tagihan telepon", "Menghabiskan waktu nongkrong", "Tidak ada manfaatnya"],
      answer: 1,
      explanation: "Networking memperkuat jangkauan dan pengaruh personal brand Anda.",
    },
    {
      question: "Bagaimana cara menentukan target audiens yang tepat untuk personal branding?",
      options: ["Menargetkan seluruh populasi dunia tanpa terkecuali", "Mengidentifikasi siapa yang paling membutuhkan keahlian, sudut pandang, atau solusi yang Anda tawarkan", "Memilih teman masa kecil saja", "Mengikuti tren yang sedang viral"],
      answer: 1,
      explanation: "Target audiens yang spesifik membuat pesan personal branding lebih tepat sasaran.",
    },
  ],

  // 8. Financial Modeling for FP&A
  8: [
    {
      question: "Apa kepanjangan dari FP&A dalam struktur keuangan perusahaan?",
      options: ["Financial Planning and Analysis", "Fixed Price and Accounting", "Fund Procurement and Auditing", "Financial Profit and Asset"],
      answer: 0,
      explanation: "FP&A singkatan dari Financial Planning and Analysis, divisi yang berfokus pada perencanaan keuangan dan analisis strategis.",
    },
    {
      question: "Tiga laporan keuangan utama apa yang saling terhubung dalam model keuangan komprehensif?",
      options: ["Neraca, Laporan Arus Kas, dan Laporan Laba Rugi", "Buku Besar, Jurnal Umum, dan Neraca Saldo", "Laporan Penjualan, Laporan Gaji, dan Faktur", "Anggaran Pajak, Audit Eksternal, dan Dividen"],
      answer: 0,
      explanation: "Tiga laporan utama adalah Income Statement, Balance Sheet, dan Cash Flow Statement.",
    },
    {
      question: "Apa arti dari EBITDA?",
      options: ["Earnings Before Interest, Taxes, Depreciation, and Amortization", "Estimated Business Income Total Data Analysis", "Equity Balance Debt Tax Deduction Asset", "Earnings Beyond Investment Trade And Assets"],
      answer: 0,
      explanation: "EBITDA mengukur kinerja operasional perusahaan sebelum dikurangi bunga, pajak, depresiasi, dan amortisasi.",
    },
    {
      question: "Apa fungsi dari analisis NPV (Net Present Value) dalam pemodelan keuangan?",
      options: ["Menghitung jumlah karyawan", "Menilai kelayakan investasi dengan menghitung nilai sekarang dari arus kas masa depan dikurangi investasi awal", "Menghitung pajak penghasilan", "Mengukur beban listrik kantor"],
      answer: 1,
      explanation: "NPV menentukan apakah suatu proyek investasi bernilai ekonomis positif.",
    },
    {
      question: "Apa perbedaan utama antara CapEx (Capital Expenditure) dan OpEx (Operating Expense)?",
      options: ["CapEx untuk pengeluaran aset jangka panjang, OpEx untuk biaya operasional bisnis sehari-hari", "CapEx untuk gaji, OpEx untuk gedung", "CapEx tidak perlu dicatat, OpEx wajib dicatat", "Tidak ada perbedaan"],
      answer: 0,
      explanation: "CapEx adalah investasi aset tetap, sedangkan OpEx adalah biaya operasional rutin.",
    },
    {
      question: "Apa tujuan dari Variance Analysis dalam tugas FP&A?",
      options: ["Mencari selisih atau deviasi antara anggaran (budget) dengan realisasi aktual serta menganalisis penyebabnya", "Mengubah variasi produk perusahaan", "Menghitung pajak penjualan", "Menilai desain grafis laporan"],
      answer: 0,
      explanation: "Variance analysis membantu manajemen mengendalikan kinerja keuangan terhadap budget.",
    },
    {
      question: "Apa itu Discount Rate dalam perhitungan DCF (Discounted Cash Flow)?",
      options: ["Besaran diskon produk untuk pelanggan", "Tingkat pengembalian yang disyaratkan atau biaya modal (cost of capital) untuk mendiskontokan arus kas masa depan", "Potongan pajak dari pemerintah", "Bunga pinjaman bank harian"],
      answer: 1,
      explanation: "Discount rate mencerminkan risiko dan nilai waktu uang (time value of money).",
    },
    {
      question: "Apa kegunaan dari Scenario Analysis dalam Financial Modeling?",
      options: ["Menulis skenario film promosi perusahaan", "Mengevaluasi dampak perubahan asumsi kunci (misal: skenario best-case, base-case, worst-case) terhadap keuangan perusahaan", "Membuat ramalan cuaca bisnis", "Menentukan shift kerja karyawan"],
      answer: 1,
      explanation: "Scenario analysis menguji ketahanan finansial perusahaan di berbagai kondisi.",
    },
    {
      question: "Apa yang dimaksud dengan Working Capital (Modal Kerja)?",
      options: ["Total seluruh kekayaan pemilik perusahaan", "Selisih antara Aset Lancar (Current Assets) dan Liabilitas Lancar (Current Liabilities)", "Gaji bersih karyawan per bulan", "Modal awal saat pendirian perusahaan"],
      answer: 1,
      explanation: "Working capital mengukur likuiditas operasional jangka pendek perusahaan.",
    },
    {
      question: "Apa tujuan dari Sensitivity Analysis?",
      options: ["Menguji seberapa sensitif model keuangan terhadap perubahan satu variabel input tertentu (misal: harga jual atau volume)", "Mengukur emosi staf keuangan", "Mengecek sensitivitas komputer", "Menghitung tingkat absensi"],
      answer: 0,
      explanation: "Sensitivity analysis melihat variabel mana yang paling berdampak signifikan terhadap hasil keuangan.",
    },
  ],

};

// Fallback kalau courseId tidak ditemukan di atas (mis. course baru yang
// ditambah lewat form ADD dan belum punya bank soal khusus).
export const DEFAULT_PRETEST_QUESTIONS = PRETEST_QUESTIONS[3];

export function getPretestQuestions(courseId) {
  return PRETEST_QUESTIONS[courseId] || DEFAULT_PRETEST_QUESTIONS;
}
