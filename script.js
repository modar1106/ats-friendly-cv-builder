/* =================================================================
   DATA MODEL
   ================================================================= */

const DEFAULT_DATA = {
    language: 'id',
    header: {
        name: 'Mohamad Haidar',
        email: 'mohamadhaidar0604@gmail.com',
        phone: '+62 87781303342',
        website: 'm-haidar.my.id',
        address: 'Serang, Banten, Indonesia'
    },
    summary: 'Mahasiswa IT yang bermotivasi tinggi dan terpilih dalam program bergengsi Bangkit Academy, dengan keahlian serbaguna di bidang Pengembangan Mobile dan Web. Memiliki pengalaman praktis dalam mengembangkan aplikasi Android menggunakan Kotlin serta membangun solusi web yang kuat, termasuk proyek terbaru yang berfokus pada Manajemen Tiket dan Inventaris. Menggabungkan kemahiran teknis dengan keterampilan strategi kreatif yang diperoleh sebagai Campus Ambassador. Berkomitmen untuk terus belajar dan mencari peluang magang untuk memberikan inovasi yang berdampak dalam tim teknik yang dinamis.',
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
            date: 'Feb 2024 - Feb 2025',
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
        { category: 'Framework & Tools', items: 'Next.js, Laravel, Retrofit, MVVM Architecture, Git' },
        { category: 'Desain & Perangkat Lunak', items: 'Figma, Adobe Illustrator, Canva, CapCut' },
        { category: 'Soft Skills', items: 'Komunikasi, Kerja Sama Tim, Manajemen Waktu, Public Speaking' },
        { category: 'Bahasa', items: 'Bahasa Indonesia & Inggris' }
    ]
};

let cvData = {};

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
    return `
    <div class="form-section" data-section="summary">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">Ringkasan Profil</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            <div class="form-group">
                <textarea class="form-textarea" data-field="summary" rows="5" placeholder="Tuliskan ringkasan profesional Anda...">${esc(cvData.summary)}</textarea>
            </div>
        </div>
    </div>`;
}

function renderEducationForm() {
    const items = cvData.education;
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
            <span class="form-section-title">Pendidikan</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            ${cards}
            <button class="btn-add" onclick="addEntry('education')">+ Tambah Pendidikan</button>
        </div>
    </div>`;
}

function renderExperienceCards(sectionKey, items, label) {
    let cards = items.map((item, i) => `
        <div class="entry-card">
            <div class="entry-card-header">
                <span class="entry-card-num">${label} ${i + 1}</span>
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
            <span class="form-section-title">${label}</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            ${cards}
            <button class="btn-add" onclick="addEntry('${sectionKey}')">+ Tambah ${label}</button>
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
            <span class="form-section-title">Sertifikasi</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            ${cards}
            <button class="btn-add" onclick="addEntry('certifications')">+ Tambah Sertifikasi</button>
        </div>
    </div>`;
}

function renderAwardsForm() {
    const items = cvData.awards;
    let rows = items.map((item, i) => `
        <div class="bullet-row">
            <textarea class="form-textarea" data-field="awards.${i}" placeholder="Deskripsi penghargaan...">${esc(item)}</textarea>
            <button class="btn-remove" onclick="removeEntry('awards', ${i})" title="Hapus">✕</button>
        </div>
    `).join('');
    return `
    <div class="form-section" data-section="awards">
        <div class="form-section-header" onclick="toggleSection(this)">
            <span class="form-section-title">Penghargaan</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
            ${rows}
            <button class="btn-add" onclick="addEntry('awards')">+ Tambah Penghargaan</button>
        </div>
    </div>`;
}

function renderSkillsForm() {
    const items = cvData.skills;
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
            <span class="form-section-title">Skills</span>
            <span class="form-section-toggle">▾</span>
        </div>
        <div class="form-section-body">
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
    renderPreview();
    saveData();
}

function setNestedValue(obj, parts, value) {
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const key = isNaN(parts[i]) ? parts[i] : parseInt(parts[i]);
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
   MULTI-LANGUAGE HEADERS DICTIONARY
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

function changeLanguage(lang) {
    cvData.language = lang;
    
    // Sync both select elements if they exist
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    const langSelectDropdown = document.getElementById('langSelectDropdown');
    if (langSelectDropdown) langSelectDropdown.value = lang;

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
    if (cvData.summary && cvData.summary.trim()) {
        html += `<p class="cv-summary">${esc(cvData.summary)}</p>`;
    }

    // Headers translation
    const lang = cvData.language || 'id';
    const headers = SECTION_HEADERS[lang] || SECTION_HEADERS.id;

    // Sections
    html += renderPreviewSection(headers.education, cvData.education, 'edu');
    html += renderPreviewSection(headers.workExperience, cvData.workExperience, 'exp');
    html += renderPreviewSection(headers.relatedExperiences, cvData.relatedExperiences, 'exp');
    html += renderPreviewCertifications(headers.certifications);
    html += renderPreviewAwards(headers.awards);
    html += renderPreviewSkills(headers.skills);

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

function renderPreviewSection(title, items, type) {
    const validItems = items.filter(item => {
        if (type === 'edu') return item.institution || item.degree;
        return item.company || item.role;
    });
    if (!validItems.length) return '';

    let html = `<div class="cv-section-title">${title}</div>`;
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
    let html = `<div class="cv-section-title">${title}</div>`;
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
    let html = `<div class="cv-section-title">${title}</div>
        <div class="cv-entry"><ul>${valid.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`;
    return html;
}

function renderPreviewSkills(title) {
    const valid = cvData.skills.filter(s => s.category || s.items);
    if (!valid.length) return '';
    let html = `<div class="cv-section-title">${title}</div>
        <div class="cv-entry"><ul class="cv-skills-list">`;
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
   INIT
   ================================================================= */
function init() {
    if (!loadData()) {
        cvData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    const lang = cvData.language || 'id';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    const langSelectDropdown = document.getElementById('langSelectDropdown');
    if (langSelectDropdown) langSelectDropdown.value = lang;
    
    renderForm();
    renderPreview();
}

init();
