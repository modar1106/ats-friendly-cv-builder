/* =================================================================
   DATA MODEL
   ================================================================= */

const DEFAULT_DATA = {
    language: 'id',
    sectionTitles: {
        education: 'PENDIDIKAN',
        workExperience: 'PENGALAMAN KERJA',
        relatedExperiences: 'PENGALAMAN',
        certifications: 'SERTIFIKASI',
        awards: 'PENGHARGAAN',
        skills: 'KEAHLIAN',
        summary: ''
    },
    header: {
        name: 'Nama Kamu',
        email: 'email@example.com',
        phone: '+62 812 3456 7890',
        website: 'linkedin.com/in/namakamu',
        address: 'Jakarta, Indonesia'
    },
    summary: 'Pengembang Perangkat Lunak yang berdedikasi dan berorientasi pada hasil dengan pengalaman dalam membangun aplikasi web dan mobile yang responsif, efisien, dan ramah pengguna. Memiliki keahlian kuat dalam JavaScript, React, Node.js, serta pengembangan API. Terbiasa bekerja dalam tim kolaboratif dengan pendekatan metodologi Agile.',
    education: [
        {
            institution: 'Universitas Indonesia',
            location: 'Depok, Jawa Barat',
            degree: 'Sarjana Ilmu Komputer (IPK: 3.85 / 4.00)',
            date: 'Sep 2020 - Jul 2024',
            bullets: [
                'Lulus dengan predikat Cum Laude (IPK 3.85).',
                'Mengembangkan sistem manajemen informasi kampus berbasis web sebagai proyek akhir.',
                'Aktif sebagai Asisten Dosen untuk mata kuliah Struktur Data dan Algoritma.'
            ]
        }
    ],
    workExperience: [
        {
            company: 'PT Techindo Solusi Digital',
            location: 'Jakarta',
            role: 'Fullstack Web Developer',
            date: 'Jan 2024 - Sekarang',
            bullets: [
                'Membangun dan memelihara aplikasi e-commerce menggunakan React.js dan Node.js, meningkatkan retensi pengguna sebesar 15%.',
                'Mengoptimalkan kueri basis data PostgreSQL yang mempercepat waktu pemuatan halaman hingga 30%.',
                'Memimpin tim kecil beranggotakan 4 pengembang dalam merancang sistem integrasi pembayaran pihak ketiga.'
            ]
        }
    ],
    relatedExperiences: [
        {
            company: 'Proyek Open Source & Komunitas',
            location: 'Remote',
            role: 'Frontend Contributor',
            date: 'Jun 2023 - Des 2023',
            bullets: [
                'Mengembangkan komponen UI reusable yang ramah aksesibilitas menggunakan React dan Tailwind CSS.',
                'Menulis dokumentasi API yang lengkap dan tutorial integrasi bagi pengguna baru repositori.'
            ]
        }
    ],
    certifications: [
        { name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services', date: 'Mar 2025' },
        { name: 'Professional Cloud Developer', issuer: 'Google Cloud', date: 'Jul 2024' }
    ],
    awards: [
        'Juara 1 Hackathon Nasional bidang Inovasi FinTech',
        'Lulusan Terbaik Fakultas Ilmu Komputer'
    ],
    skills: [
        { category: 'Pemrograman', items: 'JavaScript, TypeScript, Python, SQL, HTML, CSS' },
        { category: 'Framework & Tools', items: 'React.js, Node.js, Express, PostgreSQL, Git, Docker' },
        { category: 'Desain & Perangkat Lunak', items: 'Figma, Postman, Trello' },
        { category: 'Soft Skills', items: 'Komunikasi, Kerja Sama Tim, Manajemen Waktu, Problem Solving' },
        { category: 'Bahasa', items: 'Bahasa Indonesia & Inggris' }
    ]
};

const HAIDAR_DATA = {
    language: 'id',
    sectionTitles: {
        education: 'PENDIDIKAN',
        workExperience: 'PENGALAMAN KERJA',
        relatedExperiences: 'PENGALAMAN',
        certifications: 'SERTIFIKASI',
        awards: 'PENGHARGAAN',
        skills: 'KEAHLIAN',
        summary: ''
    },
    header: {
        name: 'Mohamad Haidar',
        email: 'mohamadhaidar0604@gmail.com',
        phone: '+62 87781303342',
        website: 'm-haidar.my.id',
        address: 'Serang, Banten, Indonesia'
    },
    summary: 'Mahasiswa IT yang bermotivasi tinggi, Owner & Freelance Fullstack Developer di Build By Dare, serta alumni program bergengsi Bangkit Academy. Memiliki keahlian kuat dalam pengembangan aplikasi web dan mobile (Next.js, Laravel, React.js, Kotlin, PostgreSQL) serta perancangan antarmuka UI/UX. Berpengalaman membangun berbagai produk digital mandiri dan proyek klien seperti InventoryKu, Festivo, ArusKu, SmartFarm, dan platform Fintech. Berkomitmen untuk terus berinovasi dan memberikan dampak positif dalam tim teknik yang dinamis.',
    education: [
        {
            institution: 'Universitas Serang Raya',
            location: 'Serang, Banten',
            degree: 'Sarjana Teknologi Informasi (GPA: 3.7 / 4.00)',
            date: 'Sep 2022 - Jul 2026',
            bullets: [
                'Aktif terlibat dalam kegiatan akademik dan ekstrakurikuler selama masa kuliah.',
                'Merancang dan mengembangkan SmartFarm, sebuah aplikasi Android yang berfokus pada solusi pertanian cerdas.',
                'Merancang Looka Food, sebuah proyek UI/UX untuk aplikasi kuliner.',
                'Terpilih sebagai Campus Ambassador, bertugas sebagai Administrator Media Sosial dan Desainer.',
                'Penerima Program MSIB Angkatan 7, diterima di Bangkit Academy oleh Google, GoTo, dan Traveloka.'
            ]
        },
        {
            institution: 'SMAN 1 Rangkasbitung',
            location: 'Rangkasbitung, Banten',
            degree: 'Sekolah Menengah Atas',
            date: 'Mei 2019 - Mei 2022',
            bullets: [
                'Meraih Peringkat ke-4 dalam Kompetisi Sains Nasional tingkat Kabupaten (KSN-K) bidang Astronomi.',
                'Ketua Majelis Perwakilan Kelas (MPK) dan Ketua Pasukan Pengibar Bendera Sekolah (PASKIBRA).'
            ]
        }
    ],
    workExperience: [
        {
            company: 'Build By Dare',
            location: 'Indonesia',
            role: 'Owner & Freelance Fullstack Web Developer',
            date: 'Jan 2024 - Sekarang',
            bullets: [
                'Mendirikan dan mengelola Build By Dare, merancang serta mengembangkan berbagai solusi web, mobile, dan UI/UX profesional untuk klien bisnis dan proyek digital mandiri.',
                'Mengembangkan "InventoryKu" (Laravel, Tailwind CSS, PostgreSQL), sistem manajemen inventaris modern dengan fitur pelacakan stok, manajemen pemasok, dan riwayat transaksi.',
                'Merancang dan membangun "Festivo" (Web App) untuk platform reservasi tiket acara online, serta "ArusKu" (Mobile App) untuk pelacakan anggaran dan analisis arus kas keuangan pribadi.',
                'Merancang dan mendeploy "Yeni Las Landing Page", website profil usaha jasa las profesional yang responsif dan teroptimasi SEO untuk meningkatkan penjangkauan klien.',
                'Merancang antarmuka UI/UX yang modern dan intuitif untuk berbagai aplikasi digital seperti "SeraBank" (Digital Banking Fintech), "SmartFarm Dashboard", dan "Looka Food" (Food Delivery).'
            ]
        },
        {
            company: 'USSI Itqan Tekno Solusi',
            location: 'Indonesia',
            role: 'Fullstack Web Developer — Magang',
            date: 'Feb 2026 - Apr 2026',
            bullets: [
                'Mengembangkan "TolongMenolong", sebuah platform crowdfunding yang dibangun dengan Next.js, mengintegrasikan DOKU Payment Gateway untuk memfasilitasi transaksi donasi yang aman dan otomatis.',
                'Merancang migrasi profil resmi perusahaan dari WordPress ke Next.js, secara signifikan meningkatkan kecepatan pemuatan halaman, kinerja SEO, dan skalabilitas keseluruhan.',
                'Berkolaborasi dalam pengembangan ujung-ke-ujung (end-to-end), mulai dari desain skema basis data hingga implementasi UI frontend, memastikan pengalaman pengguna yang mulus di berbagai platform web.',
                'Meningkatkan pencitraan merek perusahaan dengan merancang dan mengedit Laporan Tahunan profesional menggunakan Canva, memastikan komunikasi visual berkualitas tinggi untuk para pemangku kepentingan.'
            ]
        }
    ],
    relatedExperiences: [
        {
            company: 'Bangkit Academy (Google, GoTo, Traveloka)',
            location: 'Indonesia',
            role: 'Mobile Development Cohort',
            date: 'Sep 2024 - Jan 2025',
            bullets: [
                'Memimpin pengembangan mobile untuk "SmartFarm", aplikasi pertanian yang dirancang untuk memberikan rekomendasi komoditas pangan berbasis kecerdasan buatan (AI) bagi petani lokal.',
                'Membangun arsitektur Android yang kokoh menggunakan Kotlin dan pola MVVM untuk memastikan skalabilitas dan pemeliharaan kode.',
                'Mengintegrasikan API RESTful menggunakan Retrofit untuk menghubungkan antarmuka mobile secara mulus dengan model Machine Learning yang di-host di Google Cloud.',
                'Berkolaborasi dalam tim lintas fungsi yang terdiri dari 6 anggota (Mobile, Cloud, & ML Engineers) menggunakan metodologi Agile/Scrum dan Git untuk kontrol versi guna memenuhi tenggat waktu proyek yang ketat.'
            ]
        },
        {
            company: 'Universitas Serang Raya',
            location: 'Serang, Banten',
            role: 'Campus Ambassador (Duta Kampus)',
            date: 'Feb 2023 - Feb 2024',
            bullets: [
                'Mengelola dan mengkurasi konten untuk saluran media sosial resmi Duta Kampus, menjaga jadwal posting yang konsisten untuk meningkatkan kehadiran digital.',
                'Menjalankan strategi promosi untuk memperkenalkan universitas kepada calon mahasiswa melalui kampanye digital dan kegiatan luring.',
                'Merancang aset visual dan video berdurasi pendek (menggunakan Canva/CapCut) untuk meningkatkan keterlibatan audiens dan kesadaran merek secara efektif.',
                'Bertindak sebagai perwakilan universitas, mengomunikasikan program akademik dan budaya kampus kepada khalayak luas dengan profesionalisme.'
            ]
        }
    ],
    certifications: [
        { name: 'Generasi dan Optimasi Kode Menggunakan IBM Granite', issuer: 'IBM Skills Build', date: 'Sep 2025' },
        { name: 'Belajar Pengembangan Aplikasi Android Intermediate', issuer: 'Dicoding Indonesia', date: 'Des 2024 - Des 2027' },
        { name: 'Belajar Dasar Git dengan Github', issuer: 'Dicoding Indonesia', date: 'Des 2024 - Des 2027' },
        { name: 'Belajar Penerapan Machine Learning untuk Android', issuer: 'Dicoding Indonesia', date: 'Nov 2024 - Des 2027' }
    ],
    awards: [
        'Juara 4 Kompetisi Sains Nasional tingkat Kabupaten (KSN-K) Astronomi, SMAN 1 Rangkasbitung',
        'Penerima Program MSIB Angkatan 7 — Bangkit Academy oleh Google, GoTo, dan Traveloka'
    ],
    skills: [
        { category: 'Pemrograman', items: 'Kotlin, Java, PHP, JavaScript, HTML, CSS' },
        { category: 'Framework & Tools', items: 'Next.js, Laravel, Tailwind CSS, Retrofit, PostgreSQL, MySQL, Git' },
        { category: 'Desain & Perangkat Lunak', items: 'Figma, Adobe Illustrator, Canva, CapCut' },
        { category: 'Soft Skills', items: 'Komunikasi, Kerja Sama Tim, Manajemen Waktu, Public Speaking' },
        { category: 'Bahasa', items: 'Bahasa Indonesia & Inggris' }
    ]
};

const HAIDAR_DATA_EN = {
    language: 'en',
    sectionTitles: {
        education: 'EDUCATION',
        workExperience: 'WORK EXPERIENCE',
        relatedExperiences: 'RELATED EXPERIENCES',
        certifications: 'CERTIFICATION',
        awards: 'AWARD',
        skills: 'SKILLS',
        summary: ''
    },
    header: {
        name: 'Mohamad Haidar',
        email: 'mohamadhaidar0604@gmail.com',
        phone: '+62 87781303342',
        website: 'm-haidar.my.id',
        address: 'Serang, Banten, Indonesia'
    },
    summary: 'Highly motivated IT student, Founder & Freelance Fullstack Developer at Build By Dare, and alumnus of the prestigious Bangkit Academy (Google, GoTo, Traveloka). Possesses strong expertise in full-stack web and mobile application engineering (Next.js, Laravel, React.js, Kotlin, PostgreSQL) as well as UI/UX design. Experienced in building diverse digital products including InventoryKu, Festivo, ArusKu, SmartFarm, and Fintech systems. Committed to continuous innovation and delivering impactful technology solutions within dynamic engineering teams.',
    education: [
        {
            institution: 'Universitas Serang Raya',
            location: 'Serang, Banten, Indonesia',
            degree: 'Bachelor of Information Technology (GPA: 3.70 / 4.00)',
            date: 'Sep 2022 - Jul 2026',
            bullets: [
                'Actively engaged in academic and extra-curricular leadership activities throughout university studies.',
                'Designed and developed SmartFarm, an Android application focusing on smart agriculture solution.',
                'Designed Looka Food, a UI/UX design project for food delivery service.',
                'Selected as Campus Ambassador, serving as Social Media Administrator and Graphic Designer.',
                'Awarded MSIB Batch 7 Program Grantee, accepted into Bangkit Academy by Google, GoTo, and Traveloka.'
            ]
        },
        {
            institution: 'SMAN 1 Rangkasbitung',
            location: 'Rangkasbitung, Banten, Indonesia',
            degree: 'High School Diploma (Science Major)',
            date: 'May 2019 - May 2022',
            bullets: [
                'Achieved 4th Rank in the Regency-Level National Science Competition (KSN-K) in Astronomy.',
                'Chairman of the Class Representative Council (MPK) and Leader of the School Flag Hoisting Troop (PASKIBRA).'
            ]
        }
    ],
    workExperience: [
        {
            company: 'Build By Dare',
            location: 'Indonesia',
            role: 'Owner & Freelance Fullstack Web Developer',
            date: 'Jan 2024 - Present',
            bullets: [
                'Founded and spearheaded Build By Dare, engineering end-to-end web, mobile, and UI/UX solutions for business clients and proprietary digital products.',
                'Engineered "InventoryKu" (Laravel, Tailwind CSS, PostgreSQL), a modern inventory management system featuring stock tracking, supplier management, and transaction history.',
                'Designed and built "Festivo" (Web App) for online event discovery & ticket reservation, and "ArusKu" (Mobile App) for personal budgeting and cash flow analytics.',
                'Designed and deployed "Yeni Las Landing Page", a responsive, SEO-optimized professional welding service landing page to boost client acquisition.',
                'Created modern UI/UX design concepts and interactive prototypes for products like "SeraBank" (Fintech Digital Banking), "SmartFarm Dashboard", and "Looka Food".'
            ]
        },
        {
            company: 'USSI Itqan Tekno Solusi',
            location: 'Indonesia',
            role: 'Fullstack Web Developer — Intern',
            date: 'Feb 2026 - Apr 2026',
            bullets: [
                'Developed "TolongMenolong", a crowdfunding platform built with Next.js, integrating DOKU Payment Gateway to facilitate secure and automated donation transactions.',
                'Spearheaded the architectural migration of the company official profile website from WordPress to Next.js, significantly improving page load speed, SEO performance, and overall scalability.',
                'Collaborated across the full-stack development pipeline, from relational database schema design to RESTful backend integration and frontend UI implementation.',
                'Enhanced corporate brand communication by designing and editing the official Corporate Annual Report using Canva for key stakeholders.'
            ]
        }
    ],
    relatedExperiences: [
        {
            company: 'Bangkit Academy (Google, GoTo, Traveloka)',
            location: 'Indonesia',
            role: 'Mobile Development Cohort',
            date: 'Sep 2024 - Jan 2025',
            bullets: [
                'Led mobile development for "SmartFarm", an agriculture application designed to provide AI-powered crop commodity recommendations for local farmers.',
                'Architected a robust Android application using Kotlin and MVVM architecture pattern to ensure code maintainability and scalability.',
                'Integrated RESTful APIs via Retrofit to connect the mobile interface seamlessly with Machine Learning models hosted on Google Cloud Platform.',
                'Collaborated within a cross-functional team of 6 engineers (Mobile, Cloud, & ML) using Agile/Scrum methodologies and Git version control to meet strict project milestones.'
            ]
        },
        {
            company: 'Universitas Serang Raya',
            location: 'Serang, Banten, Indonesia',
            role: 'Campus Ambassador (Duta Kampus)',
            date: 'Feb 2023 - Feb 2024',
            bullets: [
                'Managed and curated content for official Campus Ambassador social media channels, maintaining consistent posting schedules to boost digital presence.',
                'Executed promotional strategies to introduce the university to prospective students through digital campaigns and offline events.',
                'Designed visual assets and short-form video content (using Canva/CapCut) to effectively increase audience engagement and brand awareness.',
                'Served as official university representative, communicating academic programs and campus culture to a broad audience with professionalism.'
            ]
        }
    ],
    certifications: [
        { name: 'Generative AI & Code Optimization with IBM Granite', issuer: 'IBM Skills Build', date: 'Sep 2025' },
        { name: 'Intermediate Android Application Development', issuer: 'Dicoding Indonesia', date: 'Dec 2024 - Dec 2027' },
        { name: 'Basic Git & GitHub Mastery', issuer: 'Dicoding Indonesia', date: 'Dec 2024 - Dec 2027' },
        { name: 'Machine Learning Implementation for Android', issuer: 'Dicoding Indonesia', date: 'Nov 2024 - Dec 2027' }
    ],
    awards: [
        '4th Rank - Regency National Science Competition (KSN-K) Astronomy, SMAN 1 Rangkasbitung',
        'MSIB Batch 7 Awardee — Bangkit Academy by Google, GoTo, and Traveloka'
    ],
    skills: [
        { category: 'Programming Languages', items: 'Kotlin, Java, PHP, JavaScript, HTML, CSS' },
        { category: 'Frameworks & Tools', items: 'Next.js, Laravel, Tailwind CSS, Retrofit, PostgreSQL, MySQL, Git' },
        { category: 'Design & Tools', items: 'Figma, Adobe Illustrator, Canva, CapCut' },
        { category: 'Soft Skills', items: 'Communication, Teamwork, Time Management, Public Speaking, Problem Solving' },
        { category: 'Languages', items: 'Indonesian (Native), English (Professional)' }
    ]
};

function loadPersonalHaidarData(lang = 'id') {
    if (lang === 'en') {
        cvData = JSON.parse(JSON.stringify(HAIDAR_DATA_EN));
    } else {
        cvData = JSON.parse(JSON.stringify(HAIDAR_DATA));
    }
    saveData();

    // Sync select dropdowns
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    const langSelectDropdown = document.getElementById('langSelectDropdown');
    if (langSelectDropdown) langSelectDropdown.value = lang;

    renderForm();
    renderPreview();
}

function promptPersonalData() {
    const pin = prompt('Masukkan PIN / Kode Rahasia Owner (tambahkan -en untuk Bahasa Inggris, misal: 0604-en):');
    if (!pin) return;
    
    const lowerPin = pin.trim().toLowerCase();
    const isEn = lowerPin.endsWith('-en') || lowerPin.endsWith('en');
    const cleanPin = lowerPin.replace(/-?en$/, '');

    if (cleanPin === '0604' || cleanPin === 'haidar' || cleanPin === '1106') {
        loadPersonalHaidarData(isEn ? 'en' : 'id');
        hideResetModal();
        alert(`✓ Data Pribadi Mohamad Haidar (${isEn ? 'English' : 'Bahasa Indonesia'}) Berhasil Dimuat!`);
    } else {
        alert('❌ PIN / Kode Rahasia Salah.');
    }
}

function checkSecretAccess() {
    try {
        const params = new URLSearchParams(window.location.search);
        
        // Support ?mode-en=haidar, ?mode_en=haidar, ?mode=haidar-en, ?lang=en&mode=haidar
        const modeEn = params.get('mode-en') || params.get('mode_en');
        const mode = params.get('mode') || params.get('user') || params.get('admin');
        const lang = params.get('lang');

        if (modeEn && modeEn.toLowerCase().includes('haidar')) {
            loadPersonalHaidarData('en');
            window.history.replaceState({}, document.title, window.location.pathname);
            return true;
        }

        if (mode) {
            const lowerMode = mode.toLowerCase();
            if (lowerMode === 'haidar-en' || lowerMode === 'haidaren' || (lowerMode === 'haidar' && lang === 'en')) {
                loadPersonalHaidarData('en');
                window.history.replaceState({}, document.title, window.location.pathname);
                return true;
            } else if (lowerMode === 'haidar' || lowerMode === 'owner') {
                loadPersonalHaidarData(lang === 'en' ? 'en' : 'id');
                window.history.replaceState({}, document.title, window.location.pathname);
                return true;
            }
        }
    } catch (e) { /* ignore URL errors */ }
    return false;
}

let cvData = {};

/* =================================================================
   MULTI-LANGUAGE HEADERS DICTIONARY & HELPERS
   ================================================================= */
const SECTION_HEADERS = {
    en: {
        education: 'EDUCATION',
        workExperience: 'WORK EXPERIENCE',
        relatedExperiences: 'RELATED EXPERIENCES',
        certifications: 'CERTIFICATION',
        awards: 'AWARD',
        skills: 'SKILLS'
    },
    id: {
        education: 'PENDIDIKAN',
        workExperience: 'PENGALAMAN KERJA',
        relatedExperiences: 'PENGALAMAN',
        certifications: 'SERTIFIKASI',
        awards: 'PENGHARGAAN',
        skills: 'KEAHLIAN'
    }
};

function getDefaultSectionTitle(sectionKey) {
    const lang = cvData.language || 'id';
    return SECTION_HEADERS[lang]?.[sectionKey] || SECTION_HEADERS.id[sectionKey] || '';
}

function getSectionTitle(sectionKey) {
    if (cvData.sectionTitles && cvData.sectionTitles[sectionKey] !== undefined && cvData.sectionTitles[sectionKey] !== null) {
        return cvData.sectionTitles[sectionKey];
    }
    return getDefaultSectionTitle(sectionKey);
}

/* =================================================================
   LOCALSTORAGE
   ================================================================= */

function saveData() {
    try {
        localStorage.setItem('ats_cv_data', JSON.stringify(cvData));
        const el = document.getElementById('saveIndicator');
        if (el) {
            el.textContent = '✓ Tersimpan';
            setTimeout(() => { el.textContent = 'Tersimpan otomatis'; }, 1500);
        }
    } catch (e) { /* ignore quota errors */ }
}

function loadData() {
    try {
        const saved = localStorage.getItem('ats_cv_data');
        if (saved) {
            cvData = JSON.parse(saved);
            if (!cvData.language) cvData.language = 'id';
            const lang = cvData.language;
            if (!cvData.sectionTitles) {
                cvData.sectionTitles = Object.assign({}, SECTION_HEADERS[lang] || SECTION_HEADERS.id);
            }
            return true;
        }
    } catch (e) { /* ignore parse errors */ }
    return false;
}

/* =================================================================
   UTILITY — Escape HTML
   ================================================================= */
function esc(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

/* =================================================================
   RENDER FORM
   ================================================================= */
function renderForm() {
    const editor = document.getElementById('editorPanel');
    editor.innerHTML = `
        <div class="credit-banner">
            <span>© Mohamad Haidar</span>
            <a href="CV-Mohamad Haidar.pdf" target="_blank" class="credit-link">
                Unduh PDF CV Contoh
            </a>
        </div>
        ${renderJobDescriptionForm()}
        ${renderHeaderForm()}
        ${renderSummaryForm()}
        ${renderEducationForm()}
        ${renderWorkExperienceForm()}
        ${renderRelatedExperiencesForm()}
        ${renderCertificationsForm()}
        ${renderAwardsForm()}
        ${renderSkillsForm()}
    `;
    // Attach input listeners using event delegation
    editor.addEventListener('input', handleFormInput);
}

function renderJobDescriptionForm() {
    return `
    <div class="form-section job-desc-section" data-section="jobDesc">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">✨ Auto-Fill dari Lowongan Kerja</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <p class="job-desc-hint">Tempelkan teks deskripsi pekerjaan (Job Description) di bawah ini. Sistem akan secara otomatis menyesuaikan posisi, keahlian, dan poin pengalaman CV Anda.</p>
            <div class="form-group">
                <textarea class="form-textarea" id="jobDescInput" rows="4" placeholder="Contoh: Kami mencari Fullstack Web Developer yang menguasai React, Node.js, PostgreSQL, REST API, Git, dan CI/CD..."></textarea>
            </div>
            <div class="form-group" style="margin-top: 8px; margin-bottom: 8px;">
                <label style="display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: #cbd5e1; cursor: pointer; user-select: none;">
                    <input type="checkbox" id="updateSummaryCheckbox" style="accent-color: #3b82f6; cursor: pointer;">
                    Ikut sesuaikan Ringkasan Profil (Summary)
                </label>
            </div>
            <button type="button" class="btn btn-primary btn-generate" onclick="handleGenerateFromJobDesc()">
                Generate & Tailor Isi CV
            </button>
            <div id="genStatus"></div>
        </div>
    </div>`;
}

function handleGenerateFromJobDesc() {
    const input = document.getElementById('jobDescInput');
    if (!input || !input.value.trim()) {
        alert('Silakan masukkan teks deskripsi lowongan pekerjaan terlebih dahulu.');
        return;
    }

    const text = input.value.trim();
    generateFromJobDescription(text);

    const statusEl = document.getElementById('genStatus');
    if (statusEl) {
        statusEl.className = 'gen-success-badge';
        statusEl.textContent = '✓ Isi CV Berhasil Disesuaikan dari Lowongan!';
        setTimeout(() => { statusEl.textContent = ''; }, 3500);
    }
}

function translateBulletToID(text) {
    let t = text;

    const translations = [
        { en: /^Design, develop, test, and maintain web applications using/i, id: 'Merancang, mengembangkan, menguji, dan memelihara aplikasi web menggunakan' },
        { en: /^Design, develop, test, and maintain/i, id: 'Merancang, mengembangkan, menguji, dan memelihara' },
        { en: /^Design, develop, and maintain/i, id: 'Merancang, mengembangkan, dan memelihara' },
        { en: /^Design and develop/i, id: 'Merancang dan mengembangkan' },
        { en: /^Develop and integrate RESTful APIs and backend services/i, id: 'Mengembangkan dan mengintegrasikan RESTful API serta layanan backend' },
        { en: /^Develop and integrate/i, id: 'Mengembangkan dan mengintegrasikan' },
        { en: /^Build responsive, user-friendly, and scalable front-end applications/i, id: 'Membangun aplikasi front-end yang responsif, ramah pengguna, dan skalabel' },
        { en: /^Build responsive, user-friendly, and scalable/i, id: 'Membangun antarmuka yang responsif, ramah pengguna, dan skalabel' },
        { en: /^Build responsive and user-friendly/i, id: 'Membangun aplikasi responsif dan ramah pengguna' },
        { en: /^Build and maintain/i, id: 'Membangun dan memelihara' },
        { en: /^Build/i, id: 'Membangun' },
        { en: /^Collaborate with Product Owners, Business Analysts, and other developers in an Agile environment/i, id: 'Berkolaborasi dengan Product Owner, Business Analyst, dan pengembang lain dalam lingkungan Agile' },
        { en: /^Collaborate with Sales and Academic teams to achieve enrollment targets/i, id: 'Berkolaborasi dengan tim Penjualan dan Akademik untuk mencapai target pendaftaran' },
        { en: /^Collaborate with/i, id: 'Berkolaborasi dengan' },
        { en: /^Collaborate in/i, id: 'Berkolaborasi dalam' },
        { en: /^Write clean, efficient, secure, and maintainable code following best practices/i, id: 'Menulis kode yang bersih, efisien, aman, dan mudah dipelihara sesuai best practices' },
        { en: /^Write clean, efficient, and maintainable code/i, id: 'Menulis kode yang bersih, efisien, dan mudah dipelihara' },
        { en: /^Write clean code/i, id: 'Menulis kode yang bersih' },
        { en: /^Optimize application performance, scalability, and reliability/i, id: 'Mengoptimalkan performa, skalabilitas, dan keandalan aplikasi' },
        { en: /^Optimize application performance/i, id: 'Mengoptimalkan performa aplikasi' },
        { en: /^Troubleshoot, debug, and resolve technical issues/i, id: 'Melakukan troubleshooting, debugging, dan menyelesaikan masalah teknis' },
        { en: /^Troubleshoot and resolve/i, id: 'Melakukan troubleshooting dan menyelesaikan masalah' },
        { en: /^Participate in code reviews and contribute to continuous improvement initiatives/i, id: 'Berpartisipasi dalam code review dan berkontribusi pada peningkatan kualitas berkelanjutan' },
        { en: /^Participate in/i, id: 'Berpartisipasi dalam' },
        { en: /^Implement and maintain database structures and queries using/i, id: 'Mengimplementasikan dan memelihara struktur basis data serta kueri menggunakan' },
        { en: /^Implement and maintain/i, id: 'Mengimplementasikan dan memelihara' },
        { en: /^Work with version control systems and support deployment processes/i, id: 'Bekerja dengan sistem kontrol versi (Git) serta mendukung proses deployment' },
        { en: /^Work with/i, id: 'Bekerja dengan' },
        { en: /^Understand business requirements and translate them into technical solutions/i, id: 'Memahami kebutuhan bisnis dan menerjemahkannya menjadi solusi teknis' },
        { en: /^Build and maintain strong relationships with/i, id: 'Membangun dan memelihara hubungan profesional yang kuat dengan' },
        { en: /^Conduct school visits, presentations, seminars, and promotional events/i, id: 'Melakukan kunjungan ke sekolah, presentasi, seminar, dan acara promosi' },
        { en: /^Organize and manage marketing booths, exhibitions, and etc/i, id: 'Mengorganisir dan mengelola stan pemasaran, pameran, dan kegiatan promosi' },
        { en: /^Organize and manage/i, id: 'Mengorganisir dan mengelola' },
        { en: /^Identify new marketing opportunities and potential partnerships/i, id: 'Mengidentifikasi peluang pemasaran baru dan potensi kemitraan strategis' },
        { en: /^Generate qualified leads, follow up with prospective students and parents/i, id: 'Menghasilkan prospek calon siswa/klien potensial dan melakukan tindak lanjut' },
        { en: /^Generate qualified leads/i, id: 'Menghasilkan prospek klien/siswa potensial (leads)' }
    ];

    for (const rule of translations) {
        if (rule.en.test(t)) {
            t = t.replace(rule.en, rule.id);
            break;
        }
    }

    return t;
}

function generateFromJobDescription(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const lowerText = text.toLowerCase();
    const isID = (cvData.language || 'id') === 'id';

    // 1. Universal Role Detection
    let detectedRole = '';

    for (let i = 0; i < Math.min(3, lines.length); i++) {
        const line = lines[i];
        if (!line.toLowerCase().includes('job description') && !line.toLowerCase().includes('qualification') && !line.toLowerCase().includes('uraian tugas') && line.length < 50) {
            detectedRole = line.replace(/^(lowongan|posisi|job title|role|we are hiring|hiring)\s*:\s*/i, '').trim();
            break;
        }
    }

    if (!detectedRole) {
        const roleCatalog = [
            { keywords: ['fullstack java', 'java developer'], role: 'Fullstack Java Developer' },
            { keywords: ['fullstack', 'full-stack'], role: 'Fullstack Web Developer' },
            { keywords: ['frontend', 'front-end'], role: 'Frontend Web Developer' },
            { keywords: ['backend', 'back-end'], role: 'Backend Web Developer' },
            { keywords: ['mobile', 'android', 'flutter'], role: 'Mobile Application Developer' },
            { keywords: ['field marketing', 'field marketer'], role: 'Field Marketing Specialist' },
            { keywords: ['digital marketing', 'digital marketer', 'seo', 'sem'], role: 'Digital Marketing Specialist' },
            { keywords: ['marketing', 'pemasaran'], role: 'Marketing Specialist' },
            { keywords: ['sales', 'penjualan', 'account executive'], role: 'Sales Executive' },
            { keywords: ['admin', 'administrasi', 'administrative'], role: 'Staff Administrasi' },
            { keywords: ['finance', 'keuangan', 'accounting', 'akuntansi'], role: 'Finance & Accounting Staff' },
            { keywords: ['hr', 'human resource', 'recruiter', 'personalia'], role: 'HR & Recruitment Officer' },
            { keywords: ['customer service', 'cs', 'helpdesk'], role: 'Customer Service Representative' },
            { keywords: ['content creator', 'copywriter', 'content writer'], role: 'Content Writer & Specialist' },
            { keywords: ['graphic designer', 'desainer grafis', 'illustrator'], role: 'Graphic Designer' },
            { keywords: ['ui/ux', 'ui designer', 'ux designer'], role: 'UI/UX Designer' },
            { keywords: ['data analyst', 'data science'], role: 'Data Analyst' },
            { keywords: ['devops', 'cloud'], role: 'DevOps & Cloud Engineer' },
            { keywords: ['project manager', 'product manager'], role: 'Project Manager' }
        ];

        for (const item of roleCatalog) {
            if (item.keywords.some(k => lowerText.includes(k))) {
                detectedRole = item.role;
                break;
            }
        }
    }

    if (!detectedRole) {
        detectedRole = isID ? 'Spesialis Profesional' : 'Professional Specialist';
    }

    // 2. Smart Duty & Responsibility Bullet Points Extractor
    let rawBullets = [];
    let inResponsibilitySection = false;

    lines.forEach(line => {
        const lowerLine = line.toLowerCase();

        // Check section markers
        if (lowerLine.includes('uraian tugas') || lowerLine.includes('job description') || lowerLine.includes('responsibilities') || lowerLine.includes('tasks') || lowerLine.includes('duties')) {
            inResponsibilitySection = true;
            return;
        }
        if (lowerLine.includes('syarat') || lowerLine.includes('kualifikasi') || lowerLine.includes('qualification') || lowerLine.includes('requirements')) {
            inResponsibilitySection = false;
            return;
        }

        // Match lines with bullet dots, numbers, or action verbs
        const bulletMatch = line.match(/^(\d+[\.\)]|[\bullet\-\*])\s*(.+)/);
        const textContent = bulletMatch ? bulletMatch[2].trim() : line;

        // Action verbs regex (English & Indonesian)
        const isActionLine = /^(design|develop|build|collaborate|write|optimize|troubleshoot|participate|implement|work|understand|create|manage|conduct|identify|generate|lead|support|merancang|mengembangkan|membuat|mengelola|melakukan|mengidentifikasi|berkolaborasi|memimpin)\b/i.test(textContent);

        if ((bulletMatch || (inResponsibilitySection && isActionLine)) && textContent.length > 15) {
            if (!rawBullets.includes(textContent)) {
                rawBullets.push(textContent);
            }
        }
    });

    // Translate bullets to Indonesian if web language is set to 'id'
    if (isID) {
        rawBullets = rawBullets.map(b => translateBulletToID(b));
    }

    // 3. Extract & MERGE Skills (Add to existing skills without deleting)
    const skillCategories = [
        {
            category: isID ? 'Spesialisasi & Bidang' : 'Core Specializations & Technical',
            catalog: [
                'Java Spring Boot', 'Spring Boot', 'Java', 'React.js', 'React', 'PostgreSQL', 'MySQL', 'SQL',
                'RESTful API', 'REST API', 'Git', 'GitHub', 'GitLab', 'Agile', 'Linux', 'Unix', 'Redis', 'Kafka',
                'Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'AWS', 'GCP', 'Azure', 'Microservices',
                'JavaScript', 'TypeScript', 'Python', 'Node.js', 'Express', 'Laravel', 'PHP', 'Kotlin', 'Flutter', 'HTML', 'CSS',
                'Field Marketing', 'Digital Marketing', 'Lead Generation', 'Event Management', 'Public Relations',
                'Market Research', 'Sales Strategy', 'Brand Awareness', 'Social Media', 'Content Strategy',
                'Copywriting', 'SEO', 'Data Analysis', 'Customer Relationship', 'Microsoft Office', 'Figma', 'Canva'
            ]
        },
        {
            category: isID ? 'Soft Skills & Interpersonal' : 'Soft Skills & Interpersonal',
            catalog: [
                'Problem Solving', 'Analytical Thinking', 'Strategic Mindset', 'Communication', 'Teamwork', 'Negotiation', 'Interpersonal Skills',
                'Komunikasi', 'Negosiasi', 'Kerja Sama Tim', 'Manajemen Waktu', 'Public Speaking', 'Critical Thinking', 'Kepemimpinan'
            ]
        }
    ];

    const softSkillMapID = {
        'Problem Solving': 'Pemecahan Masalah',
        'Analytical Thinking': 'Berpikir Analitis',
        'Strategic Mindset': 'Pola Pikir Strategis',
        'Communication': 'Komunikasi',
        'Teamwork': 'Kerja Sama Tim',
        'Negotiation': 'Negosiasi',
        'Interpersonal Skills': 'Keahlian Interpersonal'
    };

    const extractedMain = skillCategories[0].catalog.filter(s => lowerText.includes(s.toLowerCase()));
    const extractedSoftRaw = skillCategories[1].catalog.filter(s => lowerText.includes(s.toLowerCase()));

    // Remove internal duplicates (e.g. Java vs Java Spring Boot)
    const uniqueMain = [];
    extractedMain.forEach(skill => {
        if (!uniqueMain.some(existing => existing.toLowerCase().includes(skill.toLowerCase()) && existing.length > skill.length)) {
            uniqueMain.push(skill);
        }
    });

    const softSkillsMapped = isID 
        ? extractedSoftRaw.map(s => softSkillMapID[s] || s)
        : extractedSoftRaw;

    // MERGE WITH EXISTING SKILLS IN cvData.skills
    if (!cvData.skills || cvData.skills.length === 0) {
        cvData.skills = [
            { category: isID ? 'Spesialisasi & Bidang' : 'Core Specializations', items: '' },
            { category: isID ? 'Soft Skills & Interpersonal' : 'Soft Skills & Interpersonal', items: '' },
            { category: isID ? 'Bahasa' : 'Languages', items: isID ? 'Bahasa Indonesia & Inggris' : 'Indonesian & English' }
        ];
    }

    const mainCat = cvData.skills[0];
    if (mainCat) {
        const existingMain = mainCat.items ? mainCat.items.split(',').map(s => s.trim()).filter(Boolean) : [];
        uniqueMain.forEach(skill => {
            if (!existingMain.some(e => e.toLowerCase() === skill.toLowerCase())) {
                existingMain.push(skill);
            }
        });
        mainCat.items = existingMain.join(', ');
    }

    const softCat = cvData.skills[1] || cvData.skills[0];
    if (softCat) {
        const existingSoft = softCat.items ? softCat.items.split(',').map(s => s.trim()).filter(Boolean) : [];
        softSkillsMapped.forEach(skill => {
            if (!existingSoft.some(e => e.toLowerCase() === skill.toLowerCase())) {
                existingSoft.push(skill);
            }
        });
        softCat.items = existingSoft.join(', ');
    }

    // 4. Generate Tailored Summary Statement (Only if user checks the box)
    const shouldUpdateSummary = document.getElementById('updateSummaryCheckbox')?.checked;
    if (shouldUpdateSummary) {
        const mainSkillsStr = uniqueMain.join(', ');
        const softSkillsStr = softSkillsMapped.join(', ');
        if (isID) {
            cvData.summary = `Profesional yang berdedikasi dan berorientasi pada hasil dengan fokus kompetensi di bidang ${detectedRole}. Memiliki keahlian dalam ${mainSkillsStr.toLowerCase()}, serta terbiasa mengelola dan mengeksekusi proyek teknis maupun strategi kerja yang efektif. Didukung oleh kemampuan ${softSkillsStr.toLowerCase()}, saya berkomitmen untuk berkontribusi secara maksimal dalam mencapai target operasional dan pertumbuhan organisasi.`;
        } else {
            cvData.summary = `Dedicated and results-oriented professional specializing as a ${detectedRole}. Possesses strong expertise in ${mainSkillsStr}, with proven experience executing technical projects and operational workflows. Backed by strong ${softSkillsStr.toLowerCase()}, I am committed to contributing effectively toward organizational goals and innovation.`;
        }
    }

    // 5. MERGE / APPEND Work Experience Section (Do not delete existing experience entries)
    if (!cvData.workExperience || cvData.workExperience.length === 0) {
        cvData.workExperience = [
            {
                company: isID ? 'Perusahaan / Organisasi' : 'Company / Organization',
                location: isID ? 'Indonesia' : 'Indonesia',
                role: `${detectedRole}`,
                date: isID ? '2024 - Sekarang' : '2024 - Present',
                bullets: []
            }
        ];
    }

    const isIT = /developer|engineer|fullstack|backend|frontend|java|react|android|data|devops/i.test(detectedRole);
    const fallbackBullets = isIT ? (isID ? [
        `Merancang, mengembangkan, menguji, dan memelihara aplikasi web/mobile menggunakan teknologi modern.`,
        `Mengembangkan dan mengintegrasikan RESTful API, layanan backend, dan struktur basis data yang aman.`,
        `Membangun antarmuka front-end yang responsif dan ramah pengguna serta mengoptimalkan performa sistem.`,
        `Berkolaborasi aktif dengan Product Owner, Analyst, dan tim pengembang dalam lingkungan Agile.`
    ] : [
        `Design, develop, test, and maintain scalable web/mobile applications using modern technologies.`,
        `Develop and integrate secure RESTful APIs, backend services, and database structures.`,
        `Build responsive, user-friendly frontend interfaces and optimize application performance and reliability.`,
        `Collaborate actively with Product Owners, Analysts, and developers in an Agile development environment.`
    ]) : (isID ? [
        `Merancang dan mengimplementasikan rencana kerja operasional di bidang ${detectedRole} sesuai target yang ditetapkan.`,
        `Membangun dan memelihara hubungan profesional yang kuat dengan mitra strategis, klien, serta pihak eksternal.`,
        `Mengelola pelaksanaan kegiatan operasional guna mengoptimalkan pencapaian sasaran organisasi.`,
        `Berkolaborasi aktif dengan tim lintas fungsi untuk memastikan kelancaran operasional dan efisiensi kerja.`
    ] : [
        `Develop and implement operational work plans for ${detectedRole} to achieve target goals.`,
        `Build and maintain strong professional relationships with strategic partners, clients, and external stakeholders.`,
        `Manage operational activities to optimize organizational goals and growth.`,
        `Collaborate actively with cross-functional teams to ensure smooth workflow and efficiency.`
    ]);

    const newBullets = rawBullets.length > 0 ? rawBullets.slice(0, 6) : fallbackBullets;
    const primaryExp = cvData.workExperience[0];

    // Append new bullets into primary experience without deleting existing ones
    if (!primaryExp.bullets) primaryExp.bullets = [];
    newBullets.forEach(newBullet => {
        const isDup = primaryExp.bullets.some(existing => 
            existing.toLowerCase().includes(newBullet.toLowerCase().slice(0, 15))
        );
        if (!isDup) {
            primaryExp.bullets.push(newBullet);
        }
    });

    renderForm();
    renderPreview();
    saveData();
}

function renderHeaderForm() {
    const h = cvData.header;
    return `
    <div class="form-section" data-section="header">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">Informasi Pribadi</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group">
                <label class="form-label">Nama Lengkap</label>
                <input class="form-input" data-field="header.name" value="${esc(h.name)}" placeholder="Nama lengkap Anda">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input class="form-input" data-field="header.email" value="${esc(h.email)}" placeholder="email@example.com">
                </div>
                <div class="form-group">
                    <label class="form-label">Telepon</label>
                    <input class="form-input" data-field="header.phone" value="${esc(h.phone)}" placeholder="+62 812...">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Website / LinkedIn</label>
                    <input class="form-input" data-field="header.website" value="${esc(h.website)}" placeholder="linkedin.com/in/...">
                </div>
                <div class="form-group">
                    <label class="form-label">Alamat</label>
                    <input class="form-input" data-field="header.address" value="${esc(h.address)}" placeholder="Kota, Provinsi">
                </div>
            </div>
        </div>
    </div>`;
}

function renderSummaryForm() {
    const summaryTitle = cvData.sectionTitles?.summary || '';
    return `
    <div class="form-section" data-section="summary">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(summaryTitle || 'Ringkasan Profil')}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian (Opsional)</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.summary" value="${esc(summaryTitle)}" placeholder="Contoh: RINGKASAN PROFESIONAL (Kosongkan jika tanpa judul)">
            </div>
            <div class="form-group">
                <textarea class="form-textarea" data-field="summary" rows="5" placeholder="Tuliskan ringkasan profesional Anda...">${esc(cvData.summary)}</textarea>
            </div>
        </div>
    </div>`;
}

function renderEducationForm() {
    const items = cvData.education;
    const currentTitle = getSectionTitle('education');
    let cards = items.map((item, i) => `
        <div class="entry-card">
            <div class="entry-card-header">
                <span class="entry-card-num">Pendidikan ${i + 1}</span>
                <button class="btn-remove" onclick="removeEntry('education', ${i})" title="Hapus">✕</button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Institusi</label>
                    <input class="form-input" data-field="education.${i}.institution" value="${esc(item.institution)}" placeholder="Nama universitas/sekolah">
                </div>
                <div class="form-group">
                    <label class="form-label">Lokasi</label>
                    <input class="form-input" data-field="education.${i}.location" value="${esc(item.location)}" placeholder="Kota, Provinsi">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Gelar / Jurusan</label>
                    <input class="form-input" data-field="education.${i}.degree" value="${esc(item.degree)}" placeholder="S1 Teknik Informatika">
                </div>
                <div class="form-group">
                    <label class="form-label">Tanggal</label>
                    <input class="form-input" data-field="education.${i}.date" value="${esc(item.date)}" placeholder="2020 - 2024">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Detail / Pencapaian</label>
                ${renderBullets('education', i, item.bullets)}
            </div>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="education">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(currentTitle || 'PENDIDIKAN')}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.education" value="${esc(currentTitle)}" placeholder="${esc(getDefaultSectionTitle('education'))}">
            </div>
            ${cards}
            <button class="btn-add" onclick="addEntry('education')">+ Tambah Pendidikan</button>
        </div>
    </div>`;
}

function renderExperienceCards(sectionKey, items, defaultLabel) {
    const currentTitle = getSectionTitle(sectionKey);
    let cards = items.map((item, i) => `
        <div class="entry-card">
            <div class="entry-card-header">
                <span class="entry-card-num">${defaultLabel} ${i + 1}</span>
                <button class="btn-remove" onclick="removeEntry('${sectionKey}', ${i})" title="Hapus">✕</button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Perusahaan / Organisasi</label>
                    <input class="form-input" data-field="${sectionKey}.${i}.company" value="${esc(item.company)}" placeholder="Nama perusahaan">
                </div>
                <div class="form-group">
                    <label class="form-label">Lokasi</label>
                    <input class="form-input" data-field="${sectionKey}.${i}.location" value="${esc(item.location)}" placeholder="Kota, Negara">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Posisi / Peran</label>
                    <input class="form-input" data-field="${sectionKey}.${i}.role" value="${esc(item.role)}" placeholder="Software Engineer">
                </div>
                <div class="form-group">
                    <label class="form-label">Tanggal</label>
                    <input class="form-input" data-field="${sectionKey}.${i}.date" value="${esc(item.date)}" placeholder="Jan 2024 - Present">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Deskripsi Pekerjaan</label>
                ${renderBullets(sectionKey, i, item.bullets)}
            </div>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="${sectionKey}">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(currentTitle || defaultLabel)}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.${sectionKey}" value="${esc(currentTitle)}" placeholder="${esc(getDefaultSectionTitle(sectionKey))}">
            </div>
            ${cards}
            <button class="btn-add" onclick="addEntry('${sectionKey}')">+ Tambah ${defaultLabel}</button>
        </div>
    </div>`;
}

function renderWorkExperienceForm() {
    return renderExperienceCards('workExperience', cvData.workExperience, 'Pengalaman Kerja');
}

function renderRelatedExperiencesForm() {
    return renderExperienceCards('relatedExperiences', cvData.relatedExperiences, 'Pengalaman');
}

function renderCertificationsForm() {
    const items = cvData.certifications;
    const currentTitle = getSectionTitle('certifications');
    let cards = items.map((item, i) => `
        <div class="entry-card">
            <div class="entry-card-header">
                <span class="entry-card-num">Sertifikasi ${i + 1}</span>
                <button class="btn-remove" onclick="removeEntry('certifications', ${i})" title="Hapus">✕</button>
            </div>
            <div class="form-group">
                <label class="form-label">Nama Sertifikasi</label>
                <input class="form-input" data-field="certifications.${i}.name" value="${esc(item.name)}" placeholder="Nama sertifikasi">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Penerbit</label>
                    <input class="form-input" data-field="certifications.${i}.issuer" value="${esc(item.issuer)}" placeholder="Organisasi penerbit">
                </div>
                <div class="form-group">
                    <label class="form-label">Tanggal</label>
                    <input class="form-input" data-field="certifications.${i}.date" value="${esc(item.date)}" placeholder="Jan 2024">
                </div>
            </div>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="certifications">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(currentTitle || 'SERTIFIKASI')}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.certifications" value="${esc(currentTitle)}" placeholder="${esc(getDefaultSectionTitle('certifications'))}">
            </div>
            ${cards}
            <button class="btn-add" onclick="addEntry('certifications')">+ Tambah Sertifikasi</button>
        </div>
    </div>`;
}

function renderAwardsForm() {
    const items = cvData.awards;
    const currentTitle = getSectionTitle('awards');
    let rows = items.map((item, i) => `
        <div class="bullet-row">
            <textarea class="form-textarea" data-field="awards.${i}" placeholder="Deskripsi penghargaan...">${esc(item)}</textarea>
            <button class="btn-remove" onclick="removeEntry('awards', ${i})" title="Hapus">✕</button>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="awards">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(currentTitle || 'PENGHARGAAN')}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.awards" value="${esc(currentTitle)}" placeholder="${esc(getDefaultSectionTitle('awards'))}">
            </div>
            ${rows}
            <button class="btn-add" onclick="addEntry('awards')">+ Tambah Penghargaan</button>
        </div>
    </div>`;
}

function renderSkillsForm() {
    const items = cvData.skills;
    const currentTitle = getSectionTitle('skills');
    let cards = items.map((item, i) => `
        <div class="entry-card">
            <div class="entry-card-header">
                <span class="entry-card-num">Kategori ${i + 1}</span>
                <button class="btn-remove" onclick="removeEntry('skills', ${i})" title="Hapus">✕</button>
            </div>
            <div class="form-row">
                <div class="form-group" style="flex:0.4">
                    <label class="form-label">Kategori</label>
                    <input class="form-input" data-field="skills.${i}.category" value="${esc(item.category)}" placeholder="Programming">
                </div>
                <div class="form-group" style="flex:0.6">
                    <label class="form-label">Daftar Skill (pisahkan koma)</label>
                    <input class="form-input" data-field="skills.${i}.items" value="${esc(item.items)}" placeholder="JavaScript, Python, React">
                </div>
            </div>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="skills">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">${esc(currentTitle || 'KEAHLIAN')}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group section-title-group">
                <div class="section-title-header">
                    <label class="form-label">Judul Bagian</label>
                    <span class="section-title-tag">Bisa Diubah</span>
                </div>
                <input class="form-input section-title-input" data-field="sectionTitles.skills" value="${esc(currentTitle)}" placeholder="${esc(getDefaultSectionTitle('skills'))}">
            </div>
            ${cards}
            <button class="btn-add" onclick="addEntry('skills')">+ Tambah Kategori Skill</button>
        </div>
    </div>`;
}

function renderBullets(sectionKey, entryIdx, bullets) {
    return bullets.map((b, bi) => `
        <div class="bullet-row">
            <textarea class="form-textarea" data-field="${sectionKey}.${entryIdx}.bullets.${bi}" placeholder="Tuliskan pencapaian atau tanggung jawab...">${esc(b)}</textarea>
            <button class="btn-remove" onclick="removeBullet('${sectionKey}', ${entryIdx}, ${bi})" title="Hapus">✕</button>
        </div>
    `).join('') + `
        <button class="btn-add" onclick="addBullet('${sectionKey}', ${entryIdx})" style="margin-top:4px">+ Tambah Poin</button>
    `;
}

/* =================================================================
   FORM INPUT HANDLER (Event Delegation)
   ================================================================= */
function handleFormInput(e) {
    const el = e.target;
    const field = el.dataset.field;
    if (!field) return;

    const parts = field.split('.');
    setNestedValue(cvData, parts, el.value);

    // If section title was edited, update the accordion header title in real-time
    if (parts[0] === 'sectionTitles') {
        const secKey = parts[1];
        const secEl = document.querySelector(`.form-section[data-section="${secKey}"]`);
        if (secEl) {
            const titleSpan = secEl.querySelector('.form-section-title');
            if (titleSpan) {
                const fallback = getDefaultSectionTitle(secKey) || (secKey === 'summary' ? 'Ringkasan Profil' : secKey);
                titleSpan.textContent = el.value.trim() || fallback;
            }
        }
    }

    renderPreview();
    saveData();
}

function setNestedValue(obj, parts, value) {
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const key = isNaN(parts[i]) ? parts[i] : parseInt(parts[i]);
        if (current[key] === undefined || current[key] === null) {
            current[key] = {};
        }
        current = current[key];
    }
    const lastKey = isNaN(parts[parts.length - 1]) ? parts[parts.length - 1] : parseInt(parts[parts.length - 1]);
    current[lastKey] = value;
}

/* =================================================================
   ADD / REMOVE ENTRIES
   ================================================================= */
function addEntry(sectionKey) {
    const templates = {
        education: { institution: '', location: '', degree: '', date: '', bullets: [''] },
        workExperience: { company: '', location: '', role: '', date: '', bullets: [''] },
        relatedExperiences: { company: '', location: '', role: '', date: '', bullets: [''] },
        certifications: { name: '', issuer: '', date: '' },
        awards: '',
        skills: { category: '', items: '' }
    };
    if (sectionKey === 'awards') {
        cvData.awards.push('');
    } else {
        cvData[sectionKey].push(JSON.parse(JSON.stringify(templates[sectionKey])));
    }
    renderForm();
    renderPreview();
    saveData();
}

function removeEntry(sectionKey, index) {
    if (sectionKey === 'awards') {
        cvData.awards.splice(index, 1);
    } else {
        cvData[sectionKey].splice(index, 1);
    }
    renderForm();
    renderPreview();
    saveData();
}

function addBullet(sectionKey, entryIdx) {
    cvData[sectionKey][entryIdx].bullets.push('');
    renderForm();
    renderPreview();
    saveData();
}

function removeBullet(sectionKey, entryIdx, bulletIdx) {
    cvData[sectionKey][entryIdx].bullets.splice(bulletIdx, 1);
    renderForm();
    renderPreview();
    saveData();
}

/* =================================================================
   TOGGLE SECTIONS
   ================================================================= */
function toggleSection(headerEl) {
    headerEl.parentElement.classList.toggle('collapsed');
}

/* =================================================================
   CHANGE LANGUAGE
   ================================================================= */
function changeLanguage(lang) {
    const prevLang = cvData.language || 'id';
    cvData.language = lang;
    
    // Sync both select elements if they exist
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    const langSelectDropdown = document.getElementById('langSelectDropdown');
    if (langSelectDropdown) langSelectDropdown.value = lang;

    // Smart sync for sectionTitles:
    // If a title matches the previous language default or is empty, update it to the new language default
    if (!cvData.sectionTitles) {
        cvData.sectionTitles = Object.assign({}, SECTION_HEADERS[lang] || SECTION_HEADERS.id);
    } else {
        const prevHeaders = SECTION_HEADERS[prevLang] || SECTION_HEADERS.id;
        const newHeaders = SECTION_HEADERS[lang] || SECTION_HEADERS.id;
        Object.keys(newHeaders).forEach(key => {
            if (!cvData.sectionTitles[key] || cvData.sectionTitles[key] === prevHeaders[key]) {
                cvData.sectionTitles[key] = newHeaders[key];
            }
        });
    }

    renderForm();
    renderPreview();
    saveData();
}

/* =================================================================
   RENDER PREVIEW
   ================================================================= */
function renderPreview() {
    const h = cvData.header;
    const previewPanel = document.getElementById('previewPanel');
    if (!previewPanel) return;

    // Create a temporary off-screen container for layout measurement
    const tempDiv = document.createElement('div');
    tempDiv.style.width = '210mm';
    tempDiv.style.padding = '18mm 20mm';
    tempDiv.style.boxSizing = 'border-box';
    tempDiv.style.fontFamily = "'Times New Roman', Times, serif";
    tempDiv.style.fontSize = "11pt";
    tempDiv.style.lineHeight = "1.4";
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    tempDiv.style.visibility = 'hidden';

    // Build the raw HTML
    let html = '';

    // Contact line
    let contactParts = [];
    if (h.phone) contactParts.push(esc(h.phone));
    if (h.email) contactParts.push(esc(h.email));
    if (h.website) contactParts.push(esc(h.website));

    // Header
    if (h.name) {
        html += `<div class="cv-header">
            <h1>${esc(h.name)}</h1>
            ${contactParts.length ? `<div class="cv-contact">${contactParts.join(' &nbsp;|&nbsp; ')}</div>` : ''}
            ${h.address ? `<div class="cv-address">${esc(h.address)}</div>` : ''}
        </div>`;
    }

    // Summary
    const summaryTitle = cvData.sectionTitles?.summary;
    if (cvData.summary && cvData.summary.trim()) {
        if (summaryTitle && summaryTitle.trim()) {
            html += `<div class="cv-section-title" data-section-key="summary" contenteditable="true" title="Klik untuk mengedit judul">${esc(summaryTitle)}</div>`;
        }
        html += `<p class="cv-summary">${esc(cvData.summary)}</p>`;
    }

    // Sections
    html += renderPreviewSection(getSectionTitle('education'), cvData.education, 'edu', 'education');
    html += renderPreviewSection(getSectionTitle('workExperience'), cvData.workExperience, 'exp', 'workExperience');
    html += renderPreviewSection(getSectionTitle('relatedExperiences'), cvData.relatedExperiences, 'exp', 'relatedExperiences');
    html += renderPreviewCertifications(getSectionTitle('certifications'));
    html += renderPreviewAwards(getSectionTitle('awards'));
    html += renderPreviewSkills(getSectionTitle('skills'));

    tempDiv.innerHTML = html;
    document.body.appendChild(tempDiv);

    // Measure exact pixel height for A4 printable area (297mm - 18mm top - 18mm bottom = 261mm)
    const measureDiv = document.createElement('div');
    measureDiv.style.height = '261mm';
    measureDiv.style.position = 'absolute';
    measureDiv.style.visibility = 'hidden';
    document.body.appendChild(measureDiv);
    const maxPageHeight = measureDiv.getBoundingClientRect().height;
    document.body.removeChild(measureDiv);

    // Clear preview panel
    previewPanel.innerHTML = '';

    // Helper to add a page element
    function createPage() {
        const page = document.createElement('div');
        page.className = 'cv-page';
        previewPanel.appendChild(page);
        return page;
    }

    let currentPage = createPage();
    let currentHeight = 0;

    const children = Array.from(tempDiv.children);

    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        // Clone the element and add to page to measure
        const clone = child.cloneNode(true);
        currentPage.appendChild(clone);

        const rect = clone.getBoundingClientRect();
        const elementHeight = rect.height;

        // Smart page-breaking for section title to prevent orphans
        const isTitle = child.classList.contains('cv-section-title');
        let titleAndFirstEntryHeight = elementHeight;
        let nextEntryClone = null;

        if (isTitle && i + 1 < children.length) {
            const nextChild = children[i + 1];
            if (nextChild.classList.contains('cv-entry')) {
                nextEntryClone = nextChild.cloneNode(true);
                currentPage.appendChild(nextEntryClone);
                titleAndFirstEntryHeight += nextEntryClone.getBoundingClientRect().height;
            }
        }

        if (currentHeight + titleAndFirstEntryHeight > maxPageHeight && currentHeight > 0) {
            // Remove the temporary clone from the current page
            currentPage.removeChild(clone);
            if (nextEntryClone) {
                currentPage.removeChild(nextEntryClone);
            }

            // Start a new page
            currentPage = createPage();
            currentPage.appendChild(clone);
            currentHeight = clone.getBoundingClientRect().height;
        } else {
            // Fits fine
            if (nextEntryClone) {
                currentPage.removeChild(nextEntryClone);
            }
            currentHeight += elementHeight;
        }
    }

    // Clean up temporary div
    document.body.removeChild(tempDiv);
    
    // Apply current zoom level to newly rendered pages
    applyZoom();
}

function renderPreviewSection(title, items, type, sectionKey) {
    const validItems = items.filter(item => {
        if (type === 'edu') return item.institution || item.degree;
        return item.company || item.role;
    });
    if (!validItems.length) return '';

    let html = title ? `<div class="cv-section-title" data-section-key="${sectionKey || ''}" contenteditable="true" title="Klik untuk mengedit judul">${esc(title)}</div>` : '';
    validItems.forEach(item => {
        const mainTitle = type === 'edu' ? item.institution : item.company;
        const subtitle = type === 'edu' ? item.degree : item.role;
        html += `<div class="cv-entry">
            <div class="cv-entry-header">
                <span class="cv-entry-title">${esc(mainTitle)}</span>
                <span class="cv-entry-location">${esc(item.location)}</span>
            </div>
            <div class="cv-entry-subtitle">
                <span class="cv-entry-role">${esc(subtitle)}</span>
                <span class="cv-entry-date">${esc(item.date)}</span>
            </div>`;
        const validBullets = (item.bullets || []).filter(b => b.trim());
        if (validBullets.length) {
            html += `<ul>${validBullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>`;
        }
        html += `</div>`;
    });
    return html;
}

function renderPreviewCertifications(title) {
    const valid = cvData.certifications.filter(c => c.name);
    if (!valid.length) return '';
    let html = title ? `<div class="cv-section-title" data-section-key="certifications" contenteditable="true" title="Klik untuk mengedit judul">${esc(title)}</div>` : '';
    valid.forEach(c => {
        html += `<div class="cv-entry">
            <div class="cv-entry-header">
                <span class="cv-entry-title">${esc(c.name)}</span>
                <span class="cv-entry-location">${esc(c.date)}</span>
            </div>
            <div class="cv-entry-subtitle">
                <span class="cv-entry-role">Issued by ${esc(c.issuer)}</span>
            </div>
        </div>`;
    });
    return html;
}

function renderPreviewAwards(title) {
    const valid = cvData.awards.filter(a => a.trim());
    if (!valid.length) return '';
    let html = title ? `<div class="cv-section-title" data-section-key="awards" contenteditable="true" title="Klik untuk mengedit judul">${esc(title)}</div>
        <div class="cv-entry"><ul>${valid.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>` : '';
    return html;
}

function renderPreviewSkills(title) {
    const valid = cvData.skills.filter(s => s.category || s.items);
    if (!valid.length) return '';
    let html = title ? `<div class="cv-section-title" data-section-key="skills" contenteditable="true" title="Klik untuk mengedit judul">${esc(title)}</div>
        <div class="cv-entry"><ul class="cv-skills-list">` : '<div class="cv-entry"><ul class="cv-skills-list">';
    valid.forEach(s => {
        if (s.category && s.items) {
            html += `<li><strong>${esc(s.category)}:</strong> ${esc(s.items)}</li>`;
        } else if (s.items) {
            html += `<li>${esc(s.items)}</li>`;
        }
    });
    html += `</ul></div>`;
    return html;
}

/* =================================================================
   PRINT / PDF
   ================================================================= */
function handlePrint() {
    window.print();
}

/* =================================================================
   RESET
   ================================================================= */
function showResetModal() {
    document.getElementById('resetModal').classList.add('active');
}
function hideResetModal() {
    document.getElementById('resetModal').classList.remove('active');
}
function confirmReset() {
    localStorage.removeItem('ats_cv_data');
    cvData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    renderForm();
    renderPreview();
    hideResetModal();
}

/* =================================================================
   ZOOM CONTROLS LOGIC
   ================================================================= */
let zoomLevel = 1.0;

function zoomIn() {
    if (zoomLevel < 1.5) {
        zoomLevel = Math.min(1.5, zoomLevel + 0.1);
        applyZoom();
    }
}

function zoomOut() {
    if (zoomLevel > 0.5) {
        zoomLevel = Math.max(0.5, zoomLevel - 0.1);
        applyZoom();
    }
}

function resetZoom() {
    zoomLevel = 1.0;
    applyZoom();
}

function applyZoom() {
    const pages = document.querySelectorAll('.cv-page');
    pages.forEach(page => {
        page.style.zoom = zoomLevel;
    });
    const zoomPercent = document.getElementById('zoomPercent');
    if (zoomPercent) {
        zoomPercent.textContent = `${Math.round(zoomLevel * 100)}%`;
    }
}

/* =================================================================
   MOBILE TABS SWITCHING
   ================================================================= */
function switchTab(tab) {
    const app = document.querySelector('.app');
    const btnEdit = document.getElementById('btnTabEdit');
    const btnPreview = document.getElementById('btnTabPreview');
    
    if (tab === 'preview') {
        app.classList.add('tab-preview');
        btnPreview.classList.add('active');
        btnEdit.classList.remove('active');
        renderPreview();
    } else {
        app.classList.remove('tab-preview');
        btnEdit.classList.add('active');
        btnPreview.classList.remove('active');
    }
}

/* =================================================================
   MOBILE BURGER MENU
   ================================================================= */
function toggleBurgerMenu(forceState) {
    const dropdown = document.getElementById('topbarMenuDropdown');
    const burgerBtn = document.getElementById('burgerMenuBtn');
    if (!dropdown || !burgerBtn) return;
    
    const isActive = dropdown.classList.contains('active');
    const nextState = forceState !== undefined ? forceState : !isActive;
    
    if (nextState) {
        dropdown.classList.add('active');
        burgerBtn.style.color = '#3b82f6';
    } else {
        dropdown.classList.remove('active');
        burgerBtn.style.color = '#94a3b8';
    }
}

// Close mobile dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('topbarMenuDropdown');
    const burgerBtn = document.getElementById('burgerMenuBtn');
    if (!dropdown || !burgerBtn) return;
    
    if (dropdown.classList.contains('active') && 
        !dropdown.contains(e.target) && 
        !burgerBtn.contains(e.target)) {
        toggleBurgerMenu(false);
    }
});

/* =================================================================
   INLINE PREVIEW TITLE EDITING LISTENERS
   ================================================================= */
function setupPreviewListeners() {
    const preview = document.getElementById('previewPanel');
    if (!preview || preview.dataset.hasListener) return;
    preview.dataset.hasListener = 'true';

    // When user finishes inline editing a title in the preview (focusout / blur)
    preview.addEventListener('focusout', (e) => {
        const titleEl = e.target.closest('.cv-section-title');
        if (titleEl && titleEl.dataset.sectionKey) {
            const secKey = titleEl.dataset.sectionKey;
            const newTitle = titleEl.textContent.trim();
            if (!cvData.sectionTitles) cvData.sectionTitles = {};
            cvData.sectionTitles[secKey] = newTitle;

            // Sync to form input
            const input = document.querySelector(`input[data-field="sectionTitles.${secKey}"]`);
            if (input) input.value = newTitle;

            // Sync to form section accordion header
            const secEl = document.querySelector(`.form-section[data-section="${secKey}"]`);
            if (secEl) {
                const headerTitle = secEl.querySelector('.form-section-title');
                if (headerTitle) {
                    headerTitle.textContent = newTitle || getDefaultSectionTitle(secKey) || (secKey === 'summary' ? 'Ringkasan Profil' : secKey);
                }
            }

            saveData();
        }
    });

    preview.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('cv-section-title')) {
            e.preventDefault();
            e.target.blur();
        }
    });
}

/* =================================================================
   INIT
   ================================================================= */
function init() {
    const hasSecret = checkSecretAccess();
    if (!hasSecret && !loadData()) {
        cvData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    const lang = cvData.language || 'id';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    const langSelectDropdown = document.getElementById('langSelectDropdown');
    if (langSelectDropdown) langSelectDropdown.value = lang;
    
    renderForm();
    renderPreview();
    setupPreviewListeners();
}

init();
