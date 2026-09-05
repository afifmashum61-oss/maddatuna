/**
 * APP LOGIC - MEDIA PEMBELAJARAN BAHASA ARAB KELAS 7
 * Kurikulum Kemenag RI 2025
 */

document.addEventListener('DOMContentLoaded', () => {
    // Application State
    let state = {
        activeChapterId: 1,
        activeTab: 'mufrodat', // 'mufrodat', 'hiwar', 'qiraah', 'qawaid', 'quiz'
        searchQuery: '',
        qawaidSelectedWords: [],
        quizUserAnswers: {},
        quizSubmitted: false,
        studentName: localStorage.getItem('arabicStudentName') || 'Siswa MTs Kelas 7'
    };

    // DOM Elements
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerMenu = document.getElementById('drawerMenu');
    const drawerChapterList = document.getElementById('drawerChapterList');
    const currentChapterName = document.getElementById('currentChapterName');

    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const moduleTitle = document.getElementById('moduleTitle');
    const moduleDesc = document.getElementById('moduleDesc');
    const mainContentArea = document.getElementById('mainContentArea');
    const studentNameInput = document.getElementById('studentNameInput');

    // Initialize App
    initApp();

    function initApp() {
        if (studentNameInput) {
            studentNameInput.value = state.studentName;
            studentNameInput.addEventListener('change', (e) => {
                state.studentName = e.target.value || 'Siswa MTs Kelas 7';
                localStorage.setItem('arabicStudentName', state.studentName);
            });
        }

        initDrawerEvents();
        renderChapterSelectors();
        bindTabEvents();
        loadChapterData(state.activeChapterId);
    }

    // ==========================================
    // HAMBURGER DRAWER MENU CONTROLLER
    // ==========================================
    function initDrawerEvents() {
        if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
        if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
        if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    }

    function openDrawer() {
        if (drawerOverlay) {
            drawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
            drawerOverlay.classList.add('opacity-100');
        }
        if (drawerMenu) {
            drawerMenu.classList.remove('-translate-x-full');
            drawerMenu.classList.add('translate-x-0');
        }
    }

    function closeDrawer() {
        if (drawerOverlay) {
            drawerOverlay.classList.remove('opacity-100');
            drawerOverlay.classList.add('opacity-0', 'pointer-events-none');
        }
        if (drawerMenu) {
            drawerMenu.classList.remove('translate-x-0');
            drawerMenu.classList.add('-translate-x-full');
        }
    }

    function renderChapterSelectors() {
        renderDrawerChapters();
        updateActiveChapterBadge();
    }

    function renderDrawerChapters() {
        if (!drawerChapterList) return;
        drawerChapterList.innerHTML = '';

        arabicData.chapters.forEach((chap) => {
            const isActive = chap.id === state.activeChapterId;

            const card = document.createElement('div');
            card.className = `p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                isActive
                    ? 'bg-bottle-green-gradient text-white border-gold shadow-lg font-bold'
                    : 'bg-gray-50 text-gray-800 border-gray-200 hover:border-bottle-green hover:bg-emerald-50/50'
            }`;

            card.innerHTML = `
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0 ${
                        isActive ? 'bg-gold text-bottle-green-dark shadow' : 'bg-emerald-100 text-bottle-green'
                    }">
                        <i class="fa-solid ${chap.icon}"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-extrabold uppercase tracking-wide ${isActive ? 'text-gold' : 'text-bottle-green'}">Bab ${chap.id}</span>
                            <span class="font-arabic text-sm font-bold ${isActive ? 'text-white' : 'text-gray-900'}">${chap.title}</span>
                        </div>
                        <p class="text-xs ${isActive ? 'text-emerald-100' : 'text-gray-500'} font-medium mt-0.5">${chap.titleIndo}</p>
                    </div>
                </div>
                ${isActive ? '<i class="fa-solid fa-circle-check text-gold text-lg"></i>' : '<i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i>'}
            `;

            card.addEventListener('click', () => {
                switchChapter(chap.id);
                closeDrawer();
            });

            drawerChapterList.appendChild(card);
        });
    }

    function updateActiveChapterBadge() {
        const activeChap = getActiveChapter();
        if (currentChapterName) {
            currentChapterName.textContent = `Bab ${activeChap.id} - ${activeChap.titleIndo}`;
        }
    }

    function switchChapter(chapId) {
        state.activeChapterId = chapId;
        state.qawaidSelectedWords = [];
        state.quizUserAnswers = {};
        state.quizSubmitted = false;

        renderChapterSelectors();
        loadChapterData(chapId);
    }

    function bindTabEvents() {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                state.activeTab = tab;

                tabBtns.forEach(b => {
                    b.classList.remove('bg-bottle-green', 'text-white', 'shadow-md');
                    b.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                });
                btn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                btn.classList.add('bg-bottle-green', 'text-white', 'shadow-md');

                loadChapterData(state.activeChapterId);
            });
        });
    }

    function getActiveChapter() {
        return arabicData.chapters.find(c => c.id === state.activeChapterId) || arabicData.chapters[0];
    }

    function loadChapterData(chapId) {
        const chapter = getActiveChapter();

        // Update header titles
        if (moduleTitle) moduleTitle.innerHTML = `${chapter.title} <span class="text-sm font-sans block md:inline text-gold">(${chapter.titleIndo})</span>`;
        if (moduleDesc) moduleDesc.textContent = chapter.desc;

        // Render Active Tab Content
        switch (state.activeTab) {
            case 'mufrodat':
                renderMufrodatTab(chapter);
                break;
            case 'hiwar':
                renderHiwarTab(chapter);
                break;
            case 'qiraah':
                renderQiraahTab(chapter);
                break;
            case 'qawaid':
                renderQawaidTab(chapter);
                break;
            case 'quiz':
                renderQuizTab(chapter);
                break;
            default:
                renderMufrodatTab(chapter);
        }
    }

    // ==========================================
    // 1. MUFRODAT TAB (30 CARDS WITH FLIP & TTS)
    // ==========================================
    function renderMufrodatTab(chapter) {
        const items = chapter.mufrodat;
        
        mainContentArea.innerHTML = `
            <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <span class="bg-emerald-100 text-bottle-green p-3 rounded-xl"><i class="fa-solid fa-layer-group text-xl"></i></span>
                    <div>
                        <h3 class="font-bold text-gray-800">Kartu Mufrodat Interaktif (30 Kosakata)</h3>
                        <p class="text-xs text-gray-500">Klik kartu untuk membalik & melihat contoh kalimat di balik kotak.</p>
                    </div>
                </div>
                <div class="relative w-full sm:w-72">
                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input type="text" id="mufrodatSearchInput" placeholder="Cari mufrodat / arti..." 
                        class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bottle-green"
                        value="${state.searchQuery}">
                </div>
            </div>

            <div id="mufrodatCardsGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <!-- Cards will be injected here -->
            </div>
        `;

        const searchInput = document.getElementById('mufrodatSearchInput');
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase();
            filterAndRenderCards(items);
        });

        filterAndRenderCards(items);
    }

    function filterAndRenderCards(items) {
        const grid = document.getElementById('mufrodatCardsGrid');
        if (!grid) return;

        const filtered = items.filter(item => 
            item.ar.includes(state.searchQuery) ||
            item.latin.toLowerCase().includes(state.searchQuery) ||
            item.indo.toLowerCase().includes(state.searchQuery)
        );

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full py-12 text-center text-gray-400">
                    <i class="fa-solid fa-folder-open text-4xl mb-3"></i>
                    <p>Kosakata tidak ditemukan untuk kata kunci "${state.searchQuery}"</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map((item, idx) => `
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner">
                    <!-- FRONT CARD -->
                    <div class="flip-card-front shadow-sm border border-emerald-100">
                        <div class="flex items-center justify-between">
                            <span class="bg-emerald-50 text-bottle-green text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                                #${idx + 1}
                            </span>
                            <button onclick="event.stopPropagation(); speakArabic('${item.ar}')" 
                                class="w-8 h-8 rounded-full bg-emerald-100 hover:bg-gold hover:text-bottle-green-dark text-bottle-green transition-all flex items-center justify-center"
                                title="Dengarkan Pelafalan">
                                <i class="fa-solid fa-volume-high text-xs"></i>
                            </button>
                        </div>

                        <div class="my-auto">
                            <h3 class="font-arabic text-3xl font-bold text-bottle-green-dark mb-2 leading-relaxed">${item.ar}</h3>
                            <p class="text-sm font-bold text-gray-800">${item.indo}</p>
                        </div>

                        <div class="text-right text-[11px] text-gray-400 font-medium flex items-center justify-end gap-1">
                            <span>Sentuh kartu untuk contoh</span> <i class="fa-solid fa-rotate text-[10px]"></i>
                        </div>
                    </div>

                    <!-- BACK CARD (CONTOH KALIMAT) -->
                    <div class="flip-card-back shadow-md">
                        <div class="flex items-center justify-between text-xs text-gold font-bold">
                            <span><i class="fa-solid fa-lightbulb"></i> Contoh Kalimat</span>
                            <button onclick="event.stopPropagation(); speakArabic('${item.exAr}')" 
                                class="w-7 h-7 rounded-full bg-white/20 hover:bg-gold hover:text-bottle-green text-white transition-all flex items-center justify-center">
                                <i class="fa-solid fa-volume-high text-xs"></i>
                            </button>
                        </div>

                        <div class="my-auto text-right">
                            <p class="font-arabic text-xl font-bold text-white leading-relaxed mb-2">${item.exAr}</p>
                            <p class="text-xs text-emerald-100 italic text-left">${item.exIndo}</p>
                        </div>

                        <div class="text-center text-[10px] text-emerald-200">
                            Kembali ke kosakata &circlearrowleft;
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 2. HIWAR TAB (EXTENSIVE DIALOGUE)
    // ==========================================
    function renderHiwarTab(chapter) {
        const hiwarData = chapter.hiwar || {};
        let showTranslation = true;

        const mainTitle = hiwarData.title || chapter.title || "مَهَارَةُ الإِسْتِمَاعِ وَالْحِوَارِ";
        const mainTitleIndo = hiwarData.titleIndo || chapter.titleIndo || "Percakapan & Membaca Nyaring";

        let dialoguesList = [];
        if (Array.isArray(hiwarData)) {
            dialoguesList = hiwarData;
        } else if (Array.isArray(hiwarData.dialogues)) {
            dialoguesList = hiwarData.dialogues;
        } else if (hiwarData.lines) {
            dialoguesList = [{
                id: 1,
                title: hiwarData.title || "الْحِوَارُ",
                titleIndo: hiwarData.titleIndo || "Percakapan",
                lines: hiwarData.lines || []
            }];
        }

        const allLines = dialoguesList.flatMap(d => d.lines || []);

        mainContentArea.innerHTML = `
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span class="text-xs font-bold uppercase text-gold bg-bottle-green px-3 py-1 rounded-full">مَهَارَةُ الإِسْتِمَاعِ وَالْحِوَارِ</span>
                        <h2 class="font-arabic text-2xl font-bold text-bottle-green-dark mt-2">${mainTitle}</h2>
                        <p class="text-sm font-semibold text-gray-600">${mainTitleIndo}</p>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <button id="toggleTranslationBtn" class="px-4 py-2 rounded-xl text-xs font-bold border border-bottle-green text-bottle-green hover:bg-bottle-green hover:text-white transition-all">
                            <i class="fa-solid fa-language"></i> Sembunyikan Terjemahan
                        </button>
                        <button id="playAllHiwarBtn" class="px-4 py-2 rounded-xl text-xs font-bold bg-gold text-bottle-green-dark hover:bg-gold-hover transition-all flex items-center gap-1.5 shadow-sm">
                            <i class="fa-solid fa-circle-play"></i> Putar Percakapan
                        </button>
                    </div>
                </div>

                ${dialoguesList.map((dialogue, dIdx) => `
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                        <div class="flex items-center justify-between pb-3 mb-5 border-b border-emerald-100">
                            <div class="flex items-center gap-3">
                                <span class="w-8 h-8 rounded-full bg-gold text-bottle-green-dark font-extrabold flex items-center justify-center text-sm shadow">
                                    ${dIdx + 1}
                                </span>
                                <div>
                                    <h3 class="font-arabic text-xl font-bold text-bottle-green-dark">${dialogue.title || 'Percakapan ' + (dIdx + 1)}</h3>
                                    <p class="text-xs text-gray-500 font-semibold">${dialogue.titleIndo || ''}</p>
                                </div>
                            </div>
                            <button onclick="playDialogueByIdx(${chapter.id}, ${dIdx})" 
                                class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-bottle-green font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 border border-emerald-200">
                                <i class="fa-solid fa-play text-xs text-gold"></i> Putar Percakapan ${dIdx + 1}
                            </button>
                        </div>

                        <div class="space-y-4">
                            ${(dialogue.lines || []).map((line, index) => {
                                const isEven = index % 2 === 0;
                                return `
                                    <div class="flex gap-3 ${isEven ? 'flex-row-reverse' : 'flex-row'} items-start">
                                        <div class="w-10 h-10 rounded-full ${isEven ? 'bg-bottle-green text-gold' : 'bg-gold text-bottle-green-dark'} font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                                            ${line.speaker ? line.speaker.charAt(0) : '?'}
                                        </div>

                                        <div class="max-w-[85%] sm:max-w-[75%] p-4 ${isEven ? 'dialogue-bubble-right' : 'dialogue-bubble-left'}">
                                            <div class="flex items-center justify-between gap-4 mb-1">
                                                <span class="text-xs font-bold ${isEven ? 'text-bottle-green' : 'text-emerald-700'}">${line.speaker || ''}</span>
                                                <button onclick="speakArabic('${(line.ar || '').replace(/'/g, "\\'")}')" class="text-xs text-gray-400 hover:text-bottle-green" title="Putar suara">
                                                    <i class="fa-solid fa-volume-high"></i>
                                                </button>
                                            </div>
                                            <p class="font-arabic text-xl font-bold text-gray-800 text-right leading-relaxed">${line.ar || ''}</p>
                                            <p class="hiwar-translation text-xs text-gray-600 mt-2 pt-2 border-t border-gray-100">${line.indo || ''}</p>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Translation toggle logic
        const toggleBtn = document.getElementById('toggleTranslationBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                showTranslation = !showTranslation;
                const translations = document.querySelectorAll('.hiwar-translation');
                translations.forEach(el => {
                    el.style.display = showTranslation ? 'block' : 'none';
                });
                toggleBtn.innerHTML = showTranslation 
                    ? '<i class="fa-solid fa-language"></i> Sembunyikan Terjemahan'
                    : '<i class="fa-solid fa-language"></i> Tampilkan Terjemahan';
            });
        }

        // Play all lines logic
        const playAllBtn = document.getElementById('playAllHiwarBtn');
        if (playAllBtn) {
            playAllBtn.addEventListener('click', () => {
                playDialogueSequence(allLines);
            });
        }
    }

    window.playDialogueByIdx = function(chapId, dIdx) {
        const chap = arabicData.chapters.find(c => c.id === chapId);
        if (!chap || !chap.hiwar) return;
        let lines = [];
        if (Array.isArray(chap.hiwar)) {
            lines = chap.hiwar[dIdx] ? chap.hiwar[dIdx].lines : [];
        } else if (chap.hiwar.dialogues) {
            lines = chap.hiwar.dialogues[dIdx] ? chap.hiwar.dialogues[dIdx].lines : [];
        } else if (chap.hiwar.lines) {
            lines = chap.hiwar.lines;
        }
        playDialogueSequence(lines);
    };

    function playDialogueSequence(lines, index = 0) {
        if (!lines || index >= lines.length) return;
        speakArabic(lines[index].ar, () => {
            setTimeout(() => playDialogueSequence(lines, index + 1), 700);
        });
    }

    // ==========================================
    // 3. QIRAAH TAB (READING COMPREHENSION)
    // ==========================================
    function renderQiraahTab(chapter) {
        const qiraahData = chapter.qiraah || {};

        const mainTitle = qiraahData.title || chapter.title || "مَهَارَةُ الْقِرَاءَةِ";
        const mainTitleIndo = qiraahData.titleIndo || chapter.titleIndo || "Kemampuan Membaca Teks Bahasa Arab";

        let articlesList = [];
        if (Array.isArray(qiraahData)) {
            articlesList = qiraahData;
        } else if (Array.isArray(qiraahData.articles)) {
            articlesList = qiraahData.articles;
        } else if (qiraahData.textAr) {
            articlesList = [{
                id: 1,
                title: qiraahData.title || "Teks Bacaan",
                titleIndo: qiraahData.titleIndo || "",
                textAr: qiraahData.textAr || '',
                textIndo: qiraahData.textIndo || '',
                questions: qiraahData.questions || []
            }];
        }

        mainContentArea.innerHTML = `
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-bold uppercase text-gold bg-bottle-green px-3 py-1 rounded-full">مَهَارَةُ الْقِرَاءَةِ</span>
                        <h2 class="font-arabic text-2xl font-bold text-bottle-green-dark mt-2">${mainTitle}</h2>
                        <p class="text-sm font-semibold text-gray-600">${mainTitleIndo}</p>
                    </div>
                </div>

                ${articlesList.map((art, aIdx) => `
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                        <div class="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                            <div class="flex items-center gap-3">
                                <span class="w-8 h-8 rounded-full bg-gold text-bottle-green-dark font-extrabold flex items-center justify-center text-sm shadow">
                                    ${aIdx + 1}
                                </span>
                                <div>
                                    <h3 class="font-arabic text-xl font-bold text-bottle-green-dark">${art.title || 'Teks ' + (aIdx + 1)}</h3>
                                    <p class="text-xs text-gray-500 font-semibold">${art.titleIndo || ''}</p>
                                </div>
                            </div>
                            <button onclick="speakArabic('${(art.textAr || '').replace(/\n/g, ' ').replace(/'/g, "\\'")}')" 
                                class="px-4 py-2 bg-emerald-100 hover:bg-bottle-green hover:text-white text-bottle-green font-bold text-xs rounded-xl transition-all flex items-center gap-2">
                                <i class="fa-solid fa-volume-high text-sm"></i> Baca Teks ${aIdx + 1}
                            </button>
                        </div>

                        <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 mb-6">
                            <p class="font-arabic text-2xl font-bold text-gray-800 text-right leading-loose whitespace-pre-line">${art.textAr || ''}</p>
                        </div>

                        <div class="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <h4 class="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2"><i class="fa-solid fa-earth-asia"></i> Terjemahan Teks Bacaan ${aIdx + 1}:</h4>
                            <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line">${art.textIndo || ''}</p>
                        </div>

                        ${art.questions && art.questions.length > 0 ? `
                            <div class="border-t border-gray-100 pt-6">
                                <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <i class="fa-solid fa-clipboard-question text-gold"></i> Pertanyaan Pemahaman Bacaan ${aIdx + 1} (فَهْمُ الْمَقْرُوءِ)
                                </h4>
                                <div class="space-y-4">
                                    ${art.questions.map((q, idx) => `
                                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                            <p class="font-arabic text-lg font-bold text-gray-800 text-right mb-3">${idx + 1}. ${q.q}</p>
                                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                ${q.options.map((opt, optIdx) => `
                                                    <button onclick="checkQiraahAnswer(this, ${optIdx === q.answer})" 
                                                        class="font-arabic text-base p-2 bg-white border border-gray-300 rounded-lg hover:border-bottle-green text-center font-bold">
                                                        ${opt}
                                                    </button>
                                                `).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    window.checkQiraahAnswer = function(btn, isCorrect) {
        if (isCorrect) {
            btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
            btn.innerHTML += ' <i class="fa-solid fa-circle-check"></i>';
        } else {
            btn.classList.add('bg-red-500', 'text-white', 'border-red-600');
            btn.innerHTML += ' <i class="fa-solid fa-circle-xmark"></i>';
        }
    };

    // ==========================================
    // 4. QAWAID TAB (GRAMMAR & KITABAH DRILL)
    // ==========================================
    function renderQawaidTab(chapter) {
        const qawaid = chapter.qawaid || {};
        state.qawaidSelectedWords = [];

        const mainTitle = qawaid.title || chapter.title || "اَلْقَوَاعِدُ وَالتَّرَاكِيبُ";
        const mainTitleIndo = qawaid.titleIndo || chapter.titleIndo || "Kaidah Tata Bahasa & Menulis";

        let contentHtml = qawaid.content || "";
        if (!contentHtml && qawaid.rules && Array.isArray(qawaid.rules)) {
            contentHtml = qawaid.rules.map(r => `
                <div class="mb-6 bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                    <h3 class="font-arabic text-xl font-bold text-bottle-green-dark mb-3 pb-2 border-b border-emerald-100">${r.title}</h3>
                    <div>${r.content}</div>
                </div>
            `).join('');
        }

        mainContentArea.innerHTML = `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                <div class="pb-4 border-b border-gray-100 mb-6">
                    <span class="text-xs font-bold uppercase text-gold bg-bottle-green px-3 py-1 rounded-full">مَهَارَةُ الْكِتَابَةِ وَالْقَوَاعِدُ</span>
                    <h2 class="font-arabic text-2xl font-bold text-bottle-green-dark mt-2">${mainTitle}</h2>
                    <p class="text-sm font-semibold text-gray-600">${mainTitleIndo}</p>
                </div>

                <div class="prose max-w-none text-gray-700 text-sm leading-relaxed mb-8">
                    ${contentHtml}
                </div>

                <!-- INTERACTIVE SENTENCE BUILDER (TARKIB) -->
                ${qawaid.practice ? `
                    <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="bg-gold text-bottle-green-dark p-2 rounded-lg font-bold text-xs"><i class="fa-solid fa-puzzle-piece"></i> Latihan Menulis</span>
                            <h3 class="font-bold text-gray-800">${qawaid.practice.instruction}</h3>
                        </div>

                        <!-- Drop Zone -->
                        <div id="wordDropZone" class="drop-zone mb-4 font-arabic text-xl">
                            <span class="text-xs font-sans text-gray-400">Klik kata-kata di bawah sesuai urutan kalimat yang benar</span>
                        </div>

                        <!-- Word Chips Pool -->
                        <div id="wordChipsPool" class="flex flex-wrap gap-3 justify-center mb-6 font-arabic text-xl">
                            ${shuffleArray([...qawaid.practice.words]).map(w => `
                                <div class="word-chip" onclick="selectWordChip(this, '${w}')">${w}</div>
                            `).join('')}
                        </div>

                        <div class="flex items-center justify-between">
                            <button onclick="resetWordBuilder()" class="px-4 py-2 text-xs font-bold text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-100">
                                <i class="fa-solid fa-rotate-left"></i> Reset Urutan
                            </button>
                            <button onclick="checkWordBuilder()" class="px-6 py-2.5 text-sm font-bold text-bottle-green-dark bg-gold rounded-xl hover:bg-gold-hover shadow-sm">
                                <i class="fa-solid fa-check-double"></i> Periksa Jawaban
                            </button>
                        </div>
                        <div id="practiceFeedback" class="mt-4 hidden"></div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    window.selectWordChip = function(chip, word) {
        if (chip.classList.contains('selected')) return;
        chip.classList.add('selected');
        state.qawaidSelectedWords.push({ word, element: chip });

        const dropZone = document.getElementById('wordDropZone');
        dropZone.innerHTML = state.qawaidSelectedWords.map(item => `
            <span class="bg-bottle-green text-white font-arabic text-2xl font-bold px-4 py-2 rounded-xl shadow-sm">${item.word}</span>
        `).join('');
    };

    window.resetWordBuilder = function() {
        state.qawaidSelectedWords = [];
        const dropZone = document.getElementById('wordDropZone');
        if (dropZone) {
            dropZone.innerHTML = `<span class="text-xs font-sans text-gray-400">Klik kata-kata di bawah sesuai urutan kalimat yang benar</span>`;
        }
        document.querySelectorAll('.word-chip').forEach(c => c.classList.remove('selected'));
        const feedback = document.getElementById('practiceFeedback');
        if (feedback) feedback.className = 'mt-4 hidden';
    };

    window.checkWordBuilder = function() {
        const chapter = getActiveChapter();
        const practice = chapter.qawaid.practice;
        const userOrder = state.qawaidSelectedWords.map(i => i.word);
        const feedback = document.getElementById('practiceFeedback');

        if (!feedback) return;
        feedback.classList.remove('hidden');

        if (JSON.stringify(userOrder) === JSON.stringify(practice.correctOrder)) {
            feedback.className = 'mt-4 p-4 bg-emerald-100 text-emerald-800 rounded-xl border border-emerald-300 font-medium text-sm text-center';
            feedback.innerHTML = `
                <i class="fa-solid fa-circle-check text-xl mb-1 text-emerald-600 block"></i>
                <strong>Mumtaz! Jawabanmu Benar!</strong>
                <p class="text-xs text-emerald-700 mt-1">Arti: "${practice.meaning}"</p>
            `;
        } else {
            feedback.className = 'mt-4 p-4 bg-red-100 text-red-800 rounded-xl border border-red-300 font-medium text-sm text-center';
            feedback.innerHTML = `
                <i class="fa-solid fa-circle-xmark text-xl mb-1 text-red-600 block"></i>
                <strong>Urutan belum tepat. Silakan coba lagi!</strong>
            `;
        }
    };

    // ==========================================
    // 5. QUIZ TAB (INTERACTIVE EXERCISE)
    // ==========================================
    function renderQuizTab(chapter) {
        const quiz = chapter.quiz;

        mainContentArea.innerHTML = `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                <div class="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                    <div>
                        <span class="text-xs font-bold uppercase text-gold bg-bottle-green px-3 py-1 rounded-full">اِخْتِبَارُ التَّقْيِيمِ (٣٠ سُؤَالًا)</span>
                        <h2 class="font-arabic text-2xl font-bold text-bottle-green-dark mt-2">30 Soal Latihan Interaktif Bab ${chapter.id} (Full Bahasa Arab)</h2>
                        <p class="text-sm font-semibold text-gray-600">أَجِبْ عَنِ الأسْئِلَةِ الآتِيَةِ لِتَقْيِيمِ مَدَى فَهْمِكَ لِلدَّرْسِ (30 Soal Pilihan Ganda Full Bahasa Arab).</p>
                    </div>
                </div>

                <div id="quizQuestionsList" class="space-y-6">
                    ${quiz.map((item, qIdx) => `
                        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                            <p class="font-bold text-gray-800 text-base mb-3">
                                ${qIdx + 1}. ${item.q || item.question || ''}
                            </p>
                            <div class="space-y-2">
                                ${item.options.map((opt, optIdx) => `
                                    <button onclick="selectQuizOption(${qIdx}, ${optIdx})" 
                                        id="quiz-opt-${qIdx}-${optIdx}"
                                        class="quiz-option-btn ${state.quizUserAnswers[qIdx] === optIdx ? 'border-bottle-green bg-emerald-50' : ''}">
                                        <span class="font-arabic text-lg">${opt}</span>
                                        <span class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500">
                                            ${String.fromCharCode(65 + optIdx)}
                                        </span>
                                    </button>
                                `).join('')}
                            </div>
                            <div id="quiz-explanation-${qIdx}" class="mt-3 text-xs p-3 rounded-xl hidden"></div>
                        </div>
                    `).join('')}
                </div>

                <div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div id="quizScoreDisplay" class="text-lg font-bold text-bottle-green-dark"></div>
                    <div class="flex items-center gap-3">
                        <button id="submitQuizBtn" onclick="submitQuiz()" class="px-8 py-3 bg-bottle-green text-gold hover:bg-bottle-green-dark font-bold text-sm rounded-xl shadow-md transition-all">
                            <i class="fa-solid fa-paper-plane"></i> Kirim Jawaban
                        </button>
                        <button id="certificateBtn" onclick="showCertificateModal()" class="hidden px-6 py-3 bg-gold text-bottle-green-dark hover:bg-gold-hover font-bold text-sm rounded-xl shadow-md transition-all">
                            <i class="fa-solid fa-award"></i> Cetak Sertifikat
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    window.selectQuizOption = function(qIdx, optIdx) {
        if (state.quizSubmitted) return;
        state.quizUserAnswers[qIdx] = optIdx;

        const chapter = getActiveChapter();
        chapter.quiz[qIdx].options.forEach((_, i) => {
            const btn = document.getElementById(`quiz-opt-${qIdx}-${i}`);
            if (btn) {
                if (i === optIdx) {
                    btn.classList.add('border-bottle-green', 'bg-emerald-50');
                } else {
                    btn.classList.remove('border-bottle-green', 'bg-emerald-50');
                }
            }
        });
    };

    window.submitQuiz = function() {
        const chapter = getActiveChapter();
        const quiz = chapter.quiz;

        if (Object.keys(state.quizUserAnswers).length < quiz.length) {
            alert('Mohon jawab semua soal latihan terlebih dahulu!');
            return;
        }

        state.quizSubmitted = true;
        let score = 0;

        quiz.forEach((item, qIdx) => {
            const userAns = state.quizUserAnswers[qIdx];
            const isCorrect = userAns === item.answer;
            if (isCorrect) score += 100 / quiz.length;

            const expBox = document.getElementById(`quiz-explanation-${qIdx}`);
            if (expBox) {
                expBox.classList.remove('hidden');
                expBox.className = `mt-3 text-xs p-3 rounded-xl border ${
                    isCorrect ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-red-100 text-red-800 border-red-300'
                }`;
                expBox.innerHTML = `<strong>${isCorrect ? '✓ Benar!' : '✗ Kurang Tepat.'}</strong> ${item.explanation}`;
            }

            item.options.forEach((_, i) => {
                const btn = document.getElementById(`quiz-opt-${qIdx}-${i}`);
                if (btn) {
                    if (i === item.answer) {
                        btn.classList.add('selected-correct');
                    } else if (i === userAns && !isCorrect) {
                        btn.classList.add('selected-wrong');
                    }
                }
            });
        });

        score = Math.round(score);
        const scoreDisplay = document.getElementById('quizScoreDisplay');
        scoreDisplay.innerHTML = `<i class="fa-solid fa-star text-gold"></i> Nilai Kamu: <span class="text-2xl font-extrabold text-bottle-green-dark">${score}</span> / 100`;

        const submitBtn = document.getElementById('submitQuizBtn');
        const certBtn = document.getElementById('certificateBtn');

        if (submitBtn) submitBtn.classList.add('hidden');
        if (certBtn && score >= 70) certBtn.classList.remove('hidden');
    };

    // CERTIFICATE MODAL
    window.showCertificateModal = function() {
        const chapter = getActiveChapter();
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto';
        modal.id = 'certificateModal';

        modal.innerHTML = `
            <div class="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border-4 border-gold text-center" id="certificateModalContent">
                <button onclick="document.getElementById('certificateModal').remove()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold">
                    &times;
                </button>

                <div class="border-2 border-bottle-green p-6 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white">
                    <img src="https://img.icons8.com/color/96/guarantee.png" alt="Award" class="mx-auto mb-3 w-16 h-16">
                    <h1 class="text-xs uppercase font-extrabold tracking-widest text-bottle-green">SERTIFIKAT KELULUSAN MODUL</h1>
                    <h2 class="font-arabic text-3xl font-bold text-bottle-green-dark my-2">شَهَادَةُ التَّقْدِيرِ</h2>
                    <p class="text-xs text-gray-500">Diberikan secara sah kepada:</p>
                    
                    <h3 class="text-2xl font-extrabold text-gray-800 my-3 underline decoration-gold decoration-4">${state.studentName}</h3>
                    
                    <p class="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                        Telah menyelesaikan Evaluasi Latihan Materi Bahasa Arab Kelas 7 MTs Kemenag RI 2025 dengan predikat <strong>SANGAT BAIK</strong> pada materi:
                    </p>
                    <p class="font-bold text-bottle-green text-sm my-2">${chapter.title} (${chapter.titleIndo})</p>

                    <div class="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500 px-6">
                        <span>Tanggal: ${new Date().toLocaleDateString('id-ID')}</span>
                        <span class="font-bold text-bottle-green-dark">Media Pembelajaran Digital 2025</span>
                    </div>
                </div>

                <div class="mt-6 flex justify-center gap-3">
                    <button onclick="window.print()" class="px-6 py-2.5 bg-bottle-green text-white font-bold text-xs rounded-xl shadow hover:bg-bottle-green-dark">
                        <i class="fa-solid fa-print"></i> Cetak / Simpan PDF
                    </button>
                    <button onclick="document.getElementById('certificateModal').remove()" class="px-4 py-2.5 bg-gray-200 text-gray-700 font-bold text-xs rounded-xl">
                        Tutup
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    };

    // ARABIC TEXT TO SPEECH (TTS)
    window.speakArabic = function(text, onEndCallback) {
        if (!('speechSynthesis' in window)) {
            alert('Fitur suara tidak didukung oleh browser ini.');
            return;
        }

        window.speechSynthesis.cancel(); // Stop any active audio
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;

        if (onEndCallback) {
            utterance.onend = onEndCallback;
        }

        window.speechSynthesis.speak(utterance);
    };

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
});
