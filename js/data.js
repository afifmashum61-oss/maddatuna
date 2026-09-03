/**
 * Database Media Pembelajaran Bahasa Arab Kelas 7 MTs
 * Kurikulum 2025 Kementerian Agama RI
 */

const arabicData = {
    chapters: [
        {
            id: 1,
            title: "التَّعَارُفُ",
            titleIndo: "Perkenalan (At-Ta'aruf)",
            icon: "fa-users",
            desc: "Mempelajari ungkapan salam, perkenalan diri, kata ganti (Dhamir), dan kata tunjuk (Isim Isyarah).",
            mufrodat: [
                { id: 101, ar: "أَنَا", latin: "Ana", indo: "Saya", exAr: "أَنَا طَالِبٌ جَدِيدٌ فِي الْمَدْرَسَةِ.", exIndo: "Saya adalah siswa baru di sekolah." },
                { id: 102, ar: "أَنْتَ", latin: "Anta", indo: "Kamu (Laki-laki)", exAr: "أَنْتَ صَدِيقِي الْعَزِيزُ.", exIndo: "Kamu adalah teman baikku." },
                { id: 103, ar: "أَنْتِ", latin: "Anti", indo: "Kamu (Perempuan)", exAr: "أَنْتِ طَالِبَةٌ نَشِيطَةٌ.", exIndo: "Kamu adalah siswi yang rajin." },
                { id: 104, ar: "هُوَ", latin: "Huwa", indo: "Dia (Laki-laki)", exAr: "هُوَ مُدَرِّسُ اللُّغَةِ الْعَرَبِيَّةِ.", exIndo: "Dia adalah guru bahasa Arab." },
                { id: 105, ar: "هِيَ", latin: "Hiya", indo: "Dia (Perempuan)", exAr: "هِيَ طَبِيبَةٌ مَاهِرَةٌ.", exIndo: "Dia adalah seorang dokter yang ahli." },
                { id: 106, ar: "هٰذَا", latin: "Haza", indo: "Ini (Laki-laki)", exAr: "هٰذَا أَخِي، اسْمُهُ عُثْمَانُ.", exIndo: "Ini saudaraku, namanya Utsman." },
                { id: 107, ar: "هٰذِهِ", latin: "Hazihi", indo: "Ini (Perempuan)", exAr: "هٰذِهِ أُخْتِي، اسْمُهَا فَاطِمَةُ.", exIndo: "Ini saudariku, namanya Fatimah." },
                { id: 108, ar: "ذٰلِكَ", latin: "Zalika", indo: "Itu (Laki-laki)", exAr: "ذٰلِكَ طَالِبٌ مَاهِرٌ.", exIndo: "Itu adalah siswa yang pintar." },
                { id: 109, ar: "تِلْكَ", latin: "Tilka", indo: "Itu (Perempuan)", exAr: "تِلْكَ مَدْرَسَتِي الْجَمِيلَةُ.", exIndo: "Itu adalah sekolahku yang indah." },
                { id: 110, ar: "مَا اسْمُكَ؟", latin: "Masmuka?", indo: "Siapa namamu? (L-L)", exAr: "مَا اسْمُكَ يَا أَخِي؟ اسْمِي عَزَّامُ.", exIndo: "Siapa namamu wahai saudaraku? Namaku Azzam." },
                { id: 111, ar: "مَا اسْمُكِ؟", latin: "Masmuki?", indo: "Siapa namamu? (P-P)", exAr: "مَا اسْمُكِ يَا أُخْتِي؟ اسْمِي حِلْيَةُ.", exIndo: "Siapa namamu wahai saudariku? Namaku Hilya." },
                { id: 112, ar: "مَنْ أَنْتَ؟", latin: "Man anta?", indo: "Siapa kamu? (L-L)", exAr: "مَنْ أَنْتَ؟ أَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ.", exIndo: "Siapa kamu? Saya siswa di kelas 7." },
                { id: 113, ar: "مِنْ أَيْن أنتَ؟", latin: "Min aina anta?", indo: "Dari mana kamu?", exAr: "مِنْ أَيْن أَنْتَ؟ أَنَا مِنْ سُورَابَايَا.", exIndo: "Dari mana kamu? Saya dari Surabaya." },
                { id: 114, ar: "أَهْلًا وَسَهْلًا", latin: "Ahlan wa sahlan", indo: "Selamat datang", exAr: "أَهْلًا وَسَهْلًا بِكُمْ فِي مَدْرَسَتِنَا.", exIndo: "Selamat datang di sekolah kami." },
                { id: 115, ar: "أَهْلًا بِكَ", latin: "Ahlan bika", indo: "Selamat datang juga", exAr: "أَهْلًا بِكَ يَا صَدِيقِي.", exIndo: "Selamat datang juga wahai temanku." },
                { id: 116, ar: "صَبَاحُ الْخَيْرِ", latin: "Sabahul khair", indo: "Selamat pagi", exAr: "صَبَاحُ الْخَيْرِ يَا أُسْتَاذُ.", exIndo: "Selamat pagi wahai Pak Guru." },
                { id: 117, ar: "صَبَاحُ النُّورِ", latin: "Sabahun nur", indo: "Selamat pagi juga", exAr: "صَبَاحُ النُّورِ يَا طُلَّابِي.", exIndo: "Selamat pagi juga murid-muridku." },
                { id: 118, ar: "مَسَاءُ الْخَيْرِ", latin: "Masa-ul khair", indo: "Selamat sore", exAr: "مَسَاءُ الْخَيْرِ يَا أُمِّي.", exIndo: "Selamat sore wahai ibuku." },
                { id: 119, ar: "كَيْفَ حَالُكَ؟", latin: "Kaifa haluka?", indo: "Bagaimana kabarmu?", exAr: "كَيْفَ حَالُكَ الْيَوْمَ؟ أَنَا بِخَيْرٍ، شُكْرًا.", exIndo: "Bagaimana kabarmu hari ini? Saya baik, terima kasih." },
                { id: 120, ar: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillah", indo: "Segala puji bagi Allah", exAr: "أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلَّهِ.", exIndo: "Saya baik-baik saja, alhamdulillah." },
                { id: 121, ar: "شُكْرًا جَزِيلًا", latin: "Syukran jazilan", indo: "Terima kasih banyak", exAr: "شُكْرًا جَزِيلًا عَلَى مُسَاعَدَتِكَ.", exIndo: "Terima kasih banyak atas bantuanmu." },
                { id: 122, ar: "عَفْوًا", latin: "Afwan", indo: "Sama-sama / Maaf", exAr: "عَفْوًا يَا صَدِيقِي، لاَ شُكْرَ عَلَى وَاجِبٍ.", exIndo: "Sama-sama wahai temanku, tidak perlu terima kasih." },
                { id: 123, ar: "إِلَى اللِّقَاءِ", latin: "Ilal liqa'", indo: "Sampai jumpa", exAr: "إِلَى اللِّقَاءِ فِي الْغَدِ.", exIndo: "Sampai jumpa besok." },
                { id: 124, ar: "مَعَ السَّلاَمَةِ", latin: "Ma'as salamah", indo: "Semoga selamat / Dadaa", exAr: "مَعَ السَّلاَمَةِ، حَفِظَكَ اللَّهُ.", exIndo: "Semoga selamat, semoga Allah menjagamu." },
                { id: 125, ar: "طَالِبٌ / طَالِبَةٌ", latin: "Talib / Talibah", indo: "Siswa / Siswi", exAr: "أَحْمَدُ طَالِبٌ، وَفَاطِمَةُ طَالِبَةٌ.", exIndo: "Ahmad adalah siswa, dan Fatimah adalah siswi." }
            ],
            hiwar: {
                title: "الْحِوَارُ: التَّعَارُفُ بَيْنَ عَزَّامَ وَنَوْفَلٍ",
                titleIndo: "Percakapan: Perkenalan Antara Azzam dan Naufal",
                lines: [
                    { speaker: "عَزَّام", ar: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", indo: "Assalamu'alaikum warahmatullahi wabarakatuh." },
                    { speaker: "نَوْفَل", ar: "وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.", indo: "Wa'alaikumussalam warahmatullahi wabarakatuh." },
                    { speaker: "عَزَّام", ar: "صَبَاحُ الْخَيْرِ يَا أَخِي!", indo: "Selamat pagi wahai saudaraku!" },
                    { speaker: "نَوْفَل", ar: "صَبَاحُ النُّورِ وَالسُّرُورِ!", indo: "Selamat pagi juga dengan kebahagiaan!" },
                    { speaker: "عَزَّام", ar: "اسْمِي عَزَّامٌ، وَمَا اسْمُكَ؟", indo: "Namaku Azzam, dan siapa namamu?" },
                    { speaker: "نَوْفَل", ar: "اسْمِي نَوْفَلٌ. أَهْلًا وَسَهْلًا يَا عَزَّامُ!", indo: "Namaku Naufal. Selamat datang wahai Azzam!" },
                    { speaker: "عَزَّام", ar: "أَهْلًا بِكَ يَا نَوْفَلُ. كَيْفَ حَالُكَ؟", indo: "Selamat datang juga wahai Naufal. Bagaimana kabarmu?" },
                    { speaker: "نَوْفَل", ar: "أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ. وَكَيْفَ حَالُكَ أَنْتَ؟", indo: "Saya baik-baik saja, alhamdulillah. Dan bagaimana kabarmu sendiri?" },
                    { speaker: "عَزَّام", ar: "الْحَمْدُ لِلَّهِ، أَنَا بِخَيْرٍ أَيْضًا. مِنْ أَيْن أَنْتَ يَا نَوْفَلُ؟", indo: "Alhamdulillah, saya juga baik. Dari mana kamu wahai Naufal?" },
                    { speaker: "نَوْفَل", ar: "أَنَا مِنْ مَدِينَةِ جَاكَرْتَا، وَهَلْ أَنْتَ مِنْ جَاكَرْتَا أَيْضًا؟", indo: "Saya dari kota Jakarta, dan apakah kamu dari Jakarta juga?" },
                    { speaker: "عَزَّام", ar: "لاَ، أَنَا مِنْ مَدِينَةِ سُورَابَايَا. هَلْ أَنْتَ طَالِبٌ جَدِيدٌ فِي هٰذِهِ الْمَدْرَسَةِ؟", indo: "Tidak, saya dari kota Surabaya. Apakah kamu siswa baru di sekolah ini?" },
                    { speaker: "نَوْفَل", ar: "نَعَمْ، أَنَا طَالِبٌ جَدِيدٌ فِي الصَّفِّ السَّابِعِ (٧).", indo: "Ya, saya siswa baru di kelas 7." },
                    { speaker: "عَزَّام", ar: "مَاشَاءَ اللَّهُ! أَنَا أَيْضًا فِي الصَّفِّ السَّابِعِ. سَعِيدٌ بِلِقَائِكَ!", indo: "Masya Allah! Saya juga di kelas 7. Senang bertemu denganmu!" },
                    { speaker: "نَوْفَل", ar: "وَأَنَا سَعِيدٌ بِلِقَائِكَ أَيْضًا. شُكْرًا جَزِيلًا!", indo: "Dan saya juga senang bertemu denganmu. Terima kasih banyak!" },
                    { speaker: "عَزَّام", ar: "عَفْوًا، إِلَى اللِّقَاءِ!", indo: "Sama-sama, sampai jumpa!" },
                    { speaker: "نَوْفَل", ar: "مَعَ السَّلاَمَةِ!", indo: "Semoga selamat!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: التَّعَارُفُ فِي الْمَدْرَسَةِ الْجَدِيدَةِ",
                titleIndo: "Teks Bacaan: Perkenalan di Sekolah Baru",
                textAr: "هٰذَا طَالِبٌ جَدِيدٌ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ الإِسْلاَمِيَّةِ. اسْمُهُ مَحْمُودٌ. هُوَ قَادِمٌ مِنْ مَدِينَةِ بَانْدُونْج. مَحْمُودٌ طَالِبٌ نَشِيطٌ وَمُجْتَهِدٌ.\n\nفِي الْيَوْمِ الأَوَّلِ، يَلْتَقِي مَحْمُودٌ بِصَدِيقِهِ الْجَدِيدِ فِي السَّاحَةِ. اسْمُ الصَّدِيقِ فَرِيدٌ. فَرِيدٌ مِنْ مَدِينَةِ سُمَارَانْج. يَتَعَارَفُ مَحْمُودٌ وَفَرِيدٌ بِابْتِسَامَةٍ وَأَدَبٍ.\n\nيَقُولُ مَحْمُودٌ: \"السَّلاَمُ عَلَيْكُمْ، أَنَا مَحْمُودٌ\". فَيَرُدُّ فَرِيدٌ: \"وَعَلَيْكُمُ السَّلاَمُ، أَنَا فَرِيدٌ. أَهْلًا وَسَهْلًا!\". فَيَفْرَحُ كِلاَهُمَا بِهٰذِهِ الصَّدَاقَةِ الْجَدِيدَةِ.",
                textIndo: "Ini adalah seorang siswa baru di Madrasah Tsanawiyah. Namanya Mahmud. Dia datang dari kota Bandung. Mahmud adalah siswa yang aktif dan rajin.\n\nPada hari pertama, Mahmud bertemu dengan teman barunya di halaman sekolah. Nama temannya adalah Farid. Farid berasal dari kota Semarang. Mahmud dan Farid saling berkenalan dengan senyuman dan santun.\n\nMahmud berkata: 'Assalamu'alaikum, saya Mahmud'. Farid menjawab: 'Wa'alaikumussalam, saya Farid. Selamat datang!'. Keduanya merasa bahagia dengan pertemanan baru ini.",
                questions: [
                    { q: "مَنْ هٰذَا الطَّالِبُ الْجَدِيدُ؟", options: ["محمود", "فريد", "عزام", "نوفل"], answer: 0 },
                    { q: "مِنْ أَيْن قَادِمٌ مَحْمُودٌ؟", options: ["جاكرتا", "سورابايا", "باندونج", "سمارانج"], answer: 2 },
                    { q: "أَيْن يَلْتَقِي مَحْمُودٌ بِفَرِيدٍ؟", options: ["في الفصل", "في الساحة", "في المكتبة", "في المقصف"], answer: 1 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: الضَّمَائِرُ وَأَسْمَاءُ الإِشَارَةِ",
                titleIndo: "Tata Bahasa: Kata Ganti (Dhamir) & Kata Tunjuk (Isim Isyarah)",
                content: `
                    <h4>1. الضَّمِيرُ الْمُنْفَصِلُ (Kata Ganti Bebas)</h4>
                    <p>Dhamir Munfashil adalah kata ganti orang yang berdiri sendiri:</p>
                    <table class="qawaid-table">
                        <tr><th>Dhamir</th><th>Jenis</th><th>Arti</th><th>Contoh Kalimat</th></tr>
                        <tr><td><b>أَنَا</b></td><td>Tunggal (L/P)</td><td>Saya</td><td>أَنَا طَالِبٌ (Saya siswa)</td></tr>
                        <tr><td><b>أَنْتَ</b></td><td>Tunggal Laki-laki</td><td>Kamu (L)</td><td>أَنْتَ طَالِبٌ (Kamu siswa)</td></tr>
                        <tr><td><b>أَنْتِ</b></td><td>Tunggal Perempuan</td><td>Kamu (P)</td><td>أَنْتِ طَالِبَةٌ (Kamu siswi)</td></tr>
                        <tr><td><b>هُوَ</b></td><td>Tunggal Laki-laki</td><td>Dia (L)</td><td>هُوَ مُدَرِّسٌ (Dia guru L)</td></tr>
                        <tr><td><b>هِيَ</b></td><td>Tunggal Perempuan</td><td>Dia (P)</td><td>هِيَ مُدَرِّسَةٌ (Dia guru P)</td></tr>
                    </table>
                    
                    <h4 class="mt-4">2. اِسْمُ الإِشَارَةِ (Kata Tunjuk)</h4>
                    <ul>
                        <li><b>هٰذَا</b> (Ini - Laki-laki / Mudzakkar) &rightarrow; هٰذَا طَالِبٌ</li>
                        <li><b>هٰذِهِ</b> (Ini - Perempuan / Mu'annats) &rightarrow; هٰذِهِ طَالِبَةٌ</li>
                        <li><b>ذٰلِكَ</b> (Itu - Laki-laki / Mudzakkar) &rightarrow; ذٰلِكَ مَسْجِدٌ</li>
                        <li><b>تِلْكَ</b> (Itu - Perempuan / Mu'annats) &rightarrow; تِلْكَ مَدْرَسَةٌ</li>
                    </ul>
                `,
                practice: {
                    instruction: "Susunlah kata-kata berikut menjadi kalimat sempurna (Jumlah Mufidah):",
                    words: ["طَالِبٌ", "هٰذَا", "جَدِيدٌ", "فِي", "الْمَدْرَسَةِ"],
                    correctOrder: ["هٰذَا", "طَالِبٌ", "جَدِيدٌ", "فِي", "الْمَدْرَسَةِ"],
                    meaning: "Ini adalah siswa baru di sekolah."
                }
            },
            quiz: [
                {
                    q: "Arti dari ungkapan 'صَبَاحُ الْخَيْرِ' adalah...",
                    options: ["Selamat sore", "Selamat pagi", "Selamat malam", "Selamat datang"],
                    answer: 1,
                    explanation: "'صَبَاحُ الْخَيْرِ' (Sabahul khair) artinya Selamat Pagi, dan dijawab dengan 'صَبَاحُ النُّورِ'."
                },
                {
                    q: "Manakah Isim Isyarah (Kata Tunjuk) yang cocok untuk kata 'مَدْرَسَةٌ' (Perempuan/Mu'annats)?",
                    options: ["هٰذَا", "ذٰلِكَ", "هٰذِهِ", "هُوَ"],
                    answer: 2,
                    explanation: "'مَدْرَسَةٌ' berakhiran Ta' Marbuthah (ة), sehingga menggunakan kata tunjuk dekat mu'annats 'هٰذِهِ'."
                },
                {
                    q: "Jawaban yang tepat untuk pertanyaan 'مِنْ أَيْن أَنْتَ؟' adalah...",
                    options: ["اسْمِي أَحْمَدُ", "أَنَا مِنْ جَاكَرْتَا", "أَنَا بِخَيْرٍ", "أَهْلًا بِكَ"],
                    answer: 1,
                    explanation: "'مِنْ أَيْن أَنْتَ؟' menanyakan asal kota/daerah, maka dijawab dengan 'أَنَا مِنْ...' (Saya dari...)."
                },
                {
                    q: "Kata ganti (Dhamir) untuk 'Dia (Perempuan)' dalam bahasa Arab adalah...",
                    options: ["أَنَا", "أَنْتَ", "هُوَ", "هِيَ"],
                    answer: 3,
                    explanation: "'هِيَ' adalah Dhamir Munfashil untuk Dia (Perempuan/Mu'annats)."
                },
                {
                    q: "Lengkapi kalimat: 'أَحْمَدُ ... فِي الصَّفِّ السَّابِعِ'",
                    options: ["طَالِبَةٌ", "طَالِبٌ", "مُدَرِّسَةٌ", "طَبِيبَةٌ"],
                    answer: 1,
                    explanation: "Ahmad adalah nama laki-laki (mudzakkar), jadi kata yang tepat adalah 'طَالِبٌ' (siswa)."
                }
            ]
        },

        {
            id: 2,
            title: "الْمَرَافِقُ الْمَدْرَسِيَّةُ",
            titleIndo: "Fasilitas Sekolah (Al-Marafiq Al-Madrasiyyah)",
            icon: "fa-school",
            desc: "Mengenal nama-nama ruangan, fasilitas sekolah, serta kata sifat lokasi (Makan & Na'at Man'ut).",
            mufrodat: [
                { id: 201, ar: "مَدْرَسَةٌ", latin: "Madrasah", indo: "Sekolah", exAr: "مَدْرَسَتِي كَبِيرَةٌ وَنَظِيفَةٌ.", exIndo: "Sekolahku besar dan bersih." },
                { id: 202, ar: "فَصْلٌ", latin: "Fasl", indo: "Kelas", exAr: "أَدْخُلُ الْفَصْلَ فِي الصَّبَاحِ.", exIndo: "Saya masuk kelas di pagi hari." },
                { id: 203, ar: "مَكْتَبَةٌ", latin: "Maktabah", indo: "Perpustakaan", exAr: "أَقْرَأُ الْكُتُبَ فِي الْمَكْتَبَةِ.", exIndo: "Saya membaca buku-buku di perpustakaan." },
                { id: 204, ar: "مَعْمَلٌ", latin: "Ma'mal", indo: "Laboratorium", exAr: "مَعْمَلُ الْعُلُومِ وَاسِعٌ.", exIndo: "Laboratorium IPA itu luas." },
                { id: 205, ar: "مَقْصَفٌ", latin: "Maqsaf", indo: "Kantin", exAr: "أَشْتَرِي الطَّعَامَ فِي الْمَقْصَفِ.", exIndo: "Saya membeli makanan di kantin." },
                { id: 206, ar: "مَسْجِدٌ", latin: "Masjid", indo: "Masjid", exAr: "نُصَلِّي الظُّهْرَ فِي مَسْجِدِ الْمَدْرَسَةِ.", exIndo: "Kami shalat Zuhur di masjid sekolah." },
                { id: 207, ar: "مَلْعَبٌ", latin: "Mal'ab", indo: "Lapangan Olahraga", exAr: "يَلْعَبُ الطُّلاَّبُ كُرَةَ الْقَدَمِ فِي الْمَلْعَبِ.", exIndo: "Para siswa bermain sepak bola di lapangan." },
                { id: 208, ar: "إِدَارَةٌ", latin: "Idarah", indo: "Kantor / Tata Usaha", exAr: "غُرْفَةُ الإِدَارَةِ بَجَانِبِ الْمَكْتَبَةِ.", exIndo: "Ruang kantor ada di samping perpustakaan." },
                { id: 209, ar: "غُرْفَةُ الْمُدَرِّسِينَ", latin: "Ghurfatul Mudarrisin", indo: "Ruang Guru", exAr: "الْمُدَرِّسُونَ يَجْلِسُونَ فِي غُرْفَةِ الْمُدَرِّسِينَ.", exIndo: "Para guru duduk di ruang guru." },
                { id: 210, ar: "غُرْفَةُ النَّاظِرِ", latin: "Ghurfatun Nazir", indo: "Ruang Kepala Sekolah", exAr: "غُرْفَةُ النَّاظِرِ مُنَظَّمَةٌ جِدًّا.", exIndo: "Ruang kepala sekolah sangat rapi." },
                { id: 211, ar: "حَمَّامٌ", latin: "Hammam", indo: "Kamar Mandi / Toilet", exAr: "الْحَمَّامُ نَظِيفٌ وَمُعَطَّرٌ.", exIndo: "Toilet itu bersih dan harum." },
                { id: 212, ar: "سَاحَةٌ", latin: "Sahah", indo: "Halaman Sekolah", exAr: "نَقِفُ فِي السَّاحَةِ لِلإِشْتِرَاكِ فِي الإِذَاعَةِ.", exIndo: "Kami berdiri di halaman untuk upacara." },
                { id: 213, ar: "بُسْتَانٌ", latin: "Bustan", indo: "Taman", exAr: "فِي الْبُسْتَانِ أَزْهَارٌ جَمِيلَةٌ.", exIndo: "Di taman ada bunga-bunga yang indah." },
                { id: 214, ar: "قَاعَةٌ", latin: "Qa'ah", indo: "Aula / Gedung Pertemuan", exAr: "نَجْتَمِعُ فِي الْقَاعَةِ الْكَبِيرَةِ.", exIndo: "Kami berkumpul di aula yang besar." },
                { id: 215, ar: "مُصَلَّى", latin: "Musalla", indo: "Musholla", exAr: "نُصَلِّي الضُّحَى فِي الْمُصَلَّى.", exIndo: "Kami shalat Duha di musholla." },
                { id: 216, ar: "أَمَامَ", latin: "Amama", indo: "Di depan", exAr: "الْمَسْجِدُ أَمَامَ الْفَصْلِ.", exIndo: "Masjid ada di depan kelas." },
                { id: 217, ar: "وَرَاءَ / خَلْفَ", latin: "Wara'a / Khalfa", indo: "Di belakang", exAr: "الْمَلْعَبُ وَرَاءَ الْمَدْرَسَةِ.", exIndo: "Lapangan ada di belakang sekolah." },
                { id: 218, ar: "بِجَانِبِ", latin: "Bijanibi", indo: "Di samping", exAr: "الْمَقْصَفُ بِجَانِبِ الْمَعْمَلِ.", exIndo: "Kantin ada di samping laboratorium." },
                { id: 219, ar: "فَوْقَ", latin: "Fauqa", indo: "Di atas (menempel/melayang)", exAr: "الْمِصْبَاحُ فَوْقَ الْمَكْتَبِ.", exIndo: "Lampu ada di atas meja." },
                { id: 220, ar: "تَحْتَ", latin: "Tahta", indo: "Di bawah", exAr: "الْقِطُّ تَحْتَ الْكُرْسِيِّ.", exIndo: "Kucing ada di bawah kursi." },
                { id: 221, ar: "كَبِيرٌ / كَبِيرَةٌ", latin: "Kabir / Kabirah", indo: "Besar", exAr: "الْمَكْتَبَةُ كَبِيرَةٌ جِدًّا.", exIndo: "Perpustakaan itu sangat besar." },
                { id: 222, ar: "صَغِيرٌ / صَغِيرَةٌ", latin: "Saghir / Saghirah", indo: "Kecil", exAr: "الْمَقْصَفُ صَغِيرٌ وَلٰكِنَّهُ نَظِيفٌ.", exIndo: "Kantin itu kecil tetapi bersih." },
                { id: 223, ar: "نَظِيفٌ / نَظِيفَةٌ", latin: "Nazif / Nazifah", indo: "Bersih", exAr: "فَصْلُنَا نَظِيفٌ وَمُرَتَّبٌ.", exIndo: "Kelas kami bersih dan teratur." },
                { id: 224, ar: "وَاسِعٌ / وَاسِعَةٌ", latin: "Wasi' / Wasi'ah", indo: "Luas", exAr: "سَاحَةُ الْمَدْرَسَةِ وَاسِعَةٌ.", exIndo: "Halaman sekolah sangat luas." },
                { id: 225, ar: "جَمِيلٌ / جَمِيلَةٌ", latin: "Jamil / Jamilah", indo: "Indah / Bagus", exAr: "الْبُسْتَانُ جَمِيلٌ جِدًّا.", exIndo: "Taman itu sangat indah." }
            ],
            hiwar: {
                title: "الْحِوَارُ: جَوْلَةٌ فِي الْمَرَافِقِ الْمَدْرَسِيَّةِ",
                titleIndo: "Percakapan: Keliling Fasilitas Sekolah",
                lines: [
                    { speaker: "إِلْيَاس", ar: "يَا فِرْسَانُ، هَلْ هٰذِهِ مَدْرَسَتُكَ الْجَدِيدَةُ؟", indo: "Wahai Firsan, apakah ini sekolah barumu?" },
                    { speaker: "فِرْسَان", ar: "نَعَمْ يَا إِلْيَاسُ، هٰذِهِ مَدْرَسَتِي الثَّانَوِيَّةُ الإِسْلاَمِيَّةُ.", indo: "Ya wahai Ilyas, ini sekolah madrasah tsanawiyah saya." },
                    { speaker: "إِلْيَاس", ar: "مَاشَاءَ اللَّهُ! مَدْرَسَتُكَ كَبِيرَةٌ وَجَمِيلَةٌ جِدًّا. أَيْن فَصْلُكَ؟", indo: "Masya Allah! Sekolahmu sangat besar dan indah. Di mana kelasmu?" },
                    { speaker: "فِرْسَان", ar: "فَصْلِي فِي الطَّابَقِ الثَّانِي، بِجَانِبِ مَعْمَلِ الْعُلُومِ.", indo: "Kelasku di lantai dua, di samping laboratorium IPA." },
                    { speaker: "إِلْيَاس", ar: "وَيْن تَقَعُ الْمَكْتَبَةُ الْمَدْرَسِيَّةُ؟", indo: "Dan di mana letak perpustakaan sekolah?" },
                    { speaker: "فِرْسَان", ar: "الْمَكْتَبَةُ أَمَامَ غُرْفَةِ الْمُدَرِّسِينَ، وَهِيَ وَاسِعَةٌ وَمُنَظَّمَةٌ.", indo: "Perpustakaan ada di depan ruang guru, perpustakaannya luas dan rapi." },
                    { speaker: "إِلْيَاس", ar: "وَهَلْ تُوجَدُ حَدِيقَةٌ أَوْ بُسْتَانٌ فِي الْمَدْرَسَةِ؟", indo: "Dan apakah ada kebun atau taman di sekolah?" },
                    { speaker: "فِرْسَان", ar: "نَعَمْ، اُِنْظُرْ هُنَاكَ! الْبُسْتَانُ وَرَاءَ الْمَسْجِدِ، فِيهِ أَزْهَارٌ مُلَوَّنَةٌ.", indo: "Ya, lihatlah di sana! Taman ada di belakang masjid, di dalamnya ada bunga berwarna-warni." },
                    { speaker: "إِلْيَاس", ar: "أَيْنَ يَأْكُلُ الطُّلاَّبُ فِي وَقْتِ الرَّاحَةِ؟", indo: "Di mana para siswa makan pada jam istirahat?" },
                    { speaker: "فِرْسَان", ar: "يَأْكُلُونَ فِي الْمَقْصَفِ، الْمَقْصَفُ بِجَانِبِ الْمَلْعَبِ.", indo: "Mereka makan di kantin, kantin ada di samping lapangan." },
                    { speaker: "إِلْيَاس", ar: "حَسَنًا، هَيَّا نَذْهَبُ إِلَى الْمَقْصَفِ لِنَشْتَرِيَ الْعَصِيرَ!", indo: "Baiklah, ayo kita pergi ke kantin untuk membeli jus!" },
                    { speaker: "فِرْسَان", ar: "فِكْرَةٌ مُمْتَازَةٌ، هَيَّا بِنَا!", indo: "Ide yang bagus, ayo berangkat!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: مَدْرَسَتِي الْحَبِيبَةُ",
                titleIndo: "Teks Bacaan: Sekolahku Terinta",
                textAr: "مَدْرَسَتِي هِيَ الْمَدْرَسَةُ الثَّانَوِيَّةُ الإِسْلاَمِيَّةُ الْحُكُومِيَّةُ. هِيَ مَدْرَسَةٌ كَبِيرَةٌ وَمَشْهُورَةٌ فِي الْمَدِينَةِ.\n\nفِي مَدْرَسَتِي مَرَافِقُ كَثِيرَةٌ وَمُتَنَوِّعَةٌ. فِيهَا فَصْلٌ نَظِيفٌ، وَمَكْتَبَةٌ وَاسِعَةٌ فِيهَا آلاَفُ الْكُتُبِ، وَمَعْمَلٌ لِلْحَاسُوبِ. أَمَامَ الْفَصْلِ سَاحَةٌ كَبِيرَةٌ نَلْعَبُ فِيهَا وَنَقُومُ بِالأَنْشِطَةِ.\n\nالْمَسْجِدُ يَقَعُ فِي وَسَطِ الْمَدْرَسَةِ. نُصَلِّي فِيهِ الظُّهْرَ جَمَاعَةً كُلَّ يَوْمٍ. أَنَا أُحِبُّ مَدْرَسَتِي كَثِيرًا لأَنَّهَا جَمِيلَةٌ وَمُرِيحَةٌ.",
                textIndo: "Sekolahku adalah Madrasah Tsanawiyah Negeri. Sekolah ini adalah sekolah yang besar dan terkenal di kota.\n\nDi sekolahku ada banyak fasilitas yang beragam. Di dalamnya ada kelas yang bersih, perpustakaan luas berisi ribuan buku, dan laboratorium komputer. Di depan kelas ada halaman besar tempat kami bermain dan beraktivitas.\n\nMasjid terletak di tengah-tengah sekolah. Kami shalat Zuhur berjamaah di sana setiap hari. Saya sangat mencintai sekolahku karena indah dan nyaman.",
                questions: [
                    { q: "ماذا يوجد فِي وَسَطِ الْمَدْرَسَةِ؟", options: ["المقصف", "المسجد", "المعمل", "البستان"], answer: 1 },
                    { q: "أَيْن يَلْعَبُ الطُّلاَّبُ؟", options: ["في المكتبة", "في الساحة", "في الحمام", "في الإدارة"], answer: 1 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: الظَّرْفُ (حَرْفُ الْجَرِّ وَظَرْفُ الْمَكَانِ)",
                titleIndo: "Tata Bahasa: Kata Depan (Huruf Jar) & Keterangan Tempat (Zharf Makan)",
                content: `
                    <h4>1. حُرُوفُ الْجَرِّ (Kata Depan)</h4>
                    <p>Huruf Jar menyebabkan kata benda sesudahnya berharakat Kasrah (Majrur):</p>
                    <ul>
                        <li><b>فِي</b> (Di dalam) &rightarrow; فِي الْمَدْرَسَةِ</li>
                        <li><b>عَلَى</b> (Di atas) &rightarrow; عَلَى الْمَكْتَبِ</li>
                        <li><b>إِلَى</b> (Ke) &rightarrow; إِلَى الْمَسْجِدِ</li>
                        <li><b>مِنْ</b> (Dari) &rightarrow; مِنْ الْبَيْتِ</li>
                    </ul>
                    <h4 class="mt-4">2. ظَرْفُ الْمَكَانِ (Keterangan Tempat)</h4>
                    <ul>
                        <li><b>أَمَامَ</b> (Di depan) | <b>وَرَاءَ</b> (Di belakang)</li>
                        <li><b>بِجَانِبِ</b> (Di samping) | <b>تَحْتَ</b> (Di bawah)</li>
                    </ul>
                `,
                practice: {
                    instruction: "Susunlah kata-kata berikut menjadi kalimat tempat yang tepat:",
                    words: ["الْمَسْجِدُ", "أَمَامَ", "الْمَدْرَسَةِ", "الْكَبِيرِ"],
                    correctOrder: ["الْمَسْجِدُ", "أَمَامَ", "الْمَدْرَسَةِ", "الْكَبِيرِ"],
                    meaning: "Masjid itu berada di depan sekolah yang besar."
                }
            },
            quiz: [
                {
                    q: "Tempat untuk membaca dan meminjam buku di sekolah disebut...",
                    options: ["مَقْصَفٌ", "مَكْتَبَةٌ", "مَعْمَلٌ", "مَلْعَبٌ"],
                    answer: 1,
                    explanation: "'مَكْتَبَةٌ' (Maktabah) berarti Perpustakaan."
                },
                {
                    q: "Lengkapi kalimat dengan zharf makan yang cocok: 'الْمَقْصَفُ ... الْمَلْعَبِ' (Kantin ada di samping lapangan)",
                    options: ["تَحْتَ", "فَوْقَ", "بِجَانِبِ", "وَرَاءَ"],
                    answer: 2,
                    explanation: "'بِجَانِبِ' artinya di samping."
                },
                {
                    q: "Kata 'أَمَامَ' artinya adalah...",
                    options: ["Di belakang", "Di atas", "Di dalam", "Di depan"],
                    answer: 3,
                    explanation: "'أَمَامَ' (Amama) berarti di depan."
                },
                {
                    q: "Manakah pasangan kata sifat dan benda yang benar secara tata bahasa?",
                    options: ["مَدْرَسَةٌ كَبِيرٌ", "فَصْلٌ نَظِيفَةٌ", "مَكْتَبَةٌ وَاسِعَةٌ", "مَسْجِدٌ جَمِيلَةٌ"],
                    answer: 2,
                    explanation: "'مَكْتَبَةٌ' adalah mu'annats (ada ة) maka kata sifatnya 'وَاسِعَةٌ' juga harus mu'annats."
                },
                {
                    q: "Di manakah siswa shalat Zuhur berjamaah?",
                    options: ["فِي الْمَعْمَلِ", "فِي الْمَسْجِدِ", "فِي الْمَقْصَفِ", "فِي الْحَمَّامِ"],
                    answer: 1,
                    explanation: "Shalat dilakukan di 'الْمَسْجِدِ' (Masjid)."
                }
            ]
        },

        {
            id: 3,
            title: "الأَدَوَاتُ الْمَدْرَسِيَّةُ",
            titleIndo: "Peralatan Sekolah (Al-Adawat Al-Madrasiyyah)",
            icon: "fa-pen-ruler",
            desc: "Mempelajari nama-nama alat tulis, perlengkapan kelas, serta penggunaan kata sifat warna.",
            mufrodat: [
                { id: 301, ar: "قَلَمٌ", latin: "Qalam", indo: "Pulpen / Pena", exAr: "أَكْتُبُ الدَّرْسَ بِالْقَلَمِ.", exIndo: "Saya menulis pelajaran dengan pulpen." },
                { id: 302, ar: "قَلَمُ الرَّصَاصِ", latin: "Qalamur rasas", indo: "Pensil", exAr: "أَرْسُمُ الصُّورَةَ بِقَلَمِ الرَّصَاصِ.", exIndo: "Saya menggambar menggunakan pensil." },
                { id: 303, ar: "كِتَابٌ", latin: "Kitab", indo: "Buku Paket / Kitab", exAr: "هٰذَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ.", exIndo: "Ini adalah buku paket bahasa Arab." },
                { id: 304, ar: "دَفْتَرٌ / كُرَّاسَةٌ", latin: "Daftar / Kurrasah", indo: "Buku Tulis", exAr: "أَكْتُبُ الْوَاجِبَ فِي الدَّفْتَرِ.", exIndo: "Saya menulis PR di buku tulis." },
                { id: 305, ar: "مِسْطَرَةٌ", latin: "Mistarah", indo: "Penggaris", exAr: "أَقِيسُ الْخَطَّ بِالْمِسْطَرَةِ.", exIndo: "Saya mengukur garis dengan penggaris." },
                { id: 306, ar: "مِمْحَاةٌ", latin: "Mimhah", indo: "Penghapus Pensil", exAr: "أَمْحُو الْخَطَأَ بِالْمِمْحَاةِ.", exIndo: "Saya menghapus kesalahan dengan penghapus." },
                { id: 307, ar: "مِطْلَسَةٌ / مِمْسَحَةٌ", latin: "Mitlasah / Mimsahah", indo: "Penghapus Papan Tulis", exAr: "الْمُدَرِّسُ يَمْسَحُ السَّبُّورَةَ بِالْمِمْسَحَةِ.", exIndo: "Pak guru menghapus papan tulis dengan penghapus papan." },
                { id: 308, ar: "حقِيبَةٌ", latin: "Haqibah", indo: "Tas Sekolah", exAr: "أَضَعُ الْكُتُبَ فِي الْحَقِيبَةِ.", exIndo: "Saya menaruh buku-buku di dalam tas." },
                { id: 309, ar: "مِقْلَمَةٌ", latin: "Miqlamah", indo: "Kotak Pensil", exAr: "أَقْلاَمِي فِي الْمِقْلَمَةِ.", exIndo: "Pulpen-pulpenku ada di kotak pensil." },
                { id: 310, ar: "مِبْرَاةٌ", latin: "Mibrah", indo: "Rautan Pensil", exAr: "أَبْرِي الْقَلَمَ بِالْمِبْرَاةِ.", exIndo: "Saya meraut pensil dengan rautan." },
                { id: 311, ar: "سَبُّورَةٌ", latin: "Sabburah", indo: "Papan Tulis", exAr: "يَكْتُبُ الأُسْتَاذُ عَلَى السَّبُّورَةِ.", exIndo: "Pak guru menulis di atas papan tulis." },
                { id: 312, ar: "مَكْتَبٌ", latin: "Maktab", indo: "Meja Tulis", exAr: "الْكِتَابُ عَلَى الْمَكْتَبِ.", exIndo: "Buku ada di atas meja." },
                { id: 313, ar: "كُرْسِيٌّ", latin: "Kursiy", indo: "Kursi", exAr: "أَجْلِسُ عَلَى الْكُرْسِيِّ.", exIndo: "Saya duduk di atas kursi." },
                { id: 314, ar: "خَزَانَةٌ", latin: "Khazanah", indo: "Lemari", exAr: "الْكُتُبُ فِي الْخَزَانَةِ.", exIndo: "Buku-buku ada di dalam lemari." },
                { id: 315, ar: "رَفٌّ", latin: "Raff", indo: "Rak Buku", exAr: "أُرَتِّبُ الْمَجَلاَّتِ عَلَى الرَّفِّ.", exIndo: "Saya merapikan majalah di atas rak." },
                { id: 316, ar: "صُورَةٌ", latin: "Surah", indo: "Gambar / Foto", exAr: "الصُّورَةُ مُعَلَّقَةٌ عَلَى الْجِدَارِ.", exIndo: "Gambar itu tergantung di dinding." },
                { id: 317, ar: "خَرِيطَةٌ", latin: "Kharitah", indo: "Peta", exAr: "خَرِيطَةُ إِنْدُونِيسِيَا جَمِيلَةٌ.", exIndo: "Peta Indonesia sangat indah." },
                { id: 318, ar: "سَاعَةٌ حَائِطِيَّةٌ", latin: "Sa'ah ha'itiyyah", indo: "Jam Dinding", exAr: "السَّاعَةُ الْحَائِطِيَّةُ تُشِيرُ إِلَى السَّابِعَةِ.", exIndo: "Jam dinding menunjukkan pukul tujuh." },
                { id: 319, ar: "كَرَّاسَةُ الرَّسْمِ", latin: "Karrasatur rasm", indo: "Buku Gambar", exAr: "أَرْسُمُ الْمَنَظِرَ فِي كَرَّاسَةِ الرَّسْمِ.", exIndo: "Saya menggambar pemandangan di buku gambar." },
                { id: 320, ar: "وَرَقَةٌ", latin: "Waraqah", indo: "Kertas", exAr: "أَكْتُبُ الرِّسَالَةَ عَلَى الْوَرَقَةِ.", exIndo: "Saya menulis surat di atas kertas." },
                { id: 321, ar: "أَحْمَرُ / حَمْرَاءُ", latin: "Ahmar / Hamra'", indo: "Merah", exAr: "الْقَلَمُ أَحْمَرُ، وَالْحَقِيبَةُ حَمْرَاءُ.", exIndo: "Pulpen itu merah, dan tas itu berwarna merah." },
                { id: 322, ar: "أَزْرَقُ / زَرْقَاءُ", latin: "Azraq / Zarqa'", indo: "Biru", exAr: "الْكِتَابُ أَزْرَقُ.", exIndo: "Buku itu berwarna biru." },
                { id: 323, ar: "أَخْضَرُ / خَضْرَاءُ", latin: "Akhdar / Khadra'", indo: "Hijau", exAr: "السَّبُّورَةُ خَضْرَاءُ.", exIndo: "Papan tulis itu berwarna hijau." },
                { id: 324, ar: "أَسْوَدُ / سَوْدَاءُ", latin: "Aswad / Sauda'", indo: "Hitam", exAr: "الْقَلَمُ أَسْوَدُ.", exIndo: "Pulpen itu berwarna hitam." },
                { id: 325, ar: "أَبْيَضُ / بَيْضَاءُ", latin: "Abyad / Baida'", indo: "Putih", exAr: "الْوَرَقَةُ بَيْضَاءُ.", exIndo: "Kertas itu berwarna putih." }
            ],
            hiwar: {
                title: "الْحِوَارُ: الأَدَوَاتُ فِي الْحَقِيبَةِ",
                titleIndo: "Percakapan: Peralatan di Dalam Tas",
                lines: [
                    { speaker: "سَلْمَان", ar: "مَاذَا فِي حَقِيبَتِكَ يَا يُوسُفُ؟", indo: "Apa yang ada di dalam tasmu wahai Yusuf?" },
                    { speaker: "يُوسُف", ar: "فِي حَقِيبَتِي أَدَوَاتٌ مَدْرَسِيَّةٌ كَثِيرَةٌ.", indo: "Di dalam tas saya ada banyak peralatan sekolah." },
                    { speaker: "سَلْمَان", ar: "هَلْ فِيهَا كُتُبٌ وَدَفَاتِرُ؟", indo: "Apakah di dalamnya ada buku paket dan buku tulis?" },
                    { speaker: "يُوسُف", ar: "نَعَمْ، فِيهَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ، وَدَفْتَرٌ لِلْكِتَابَةِ.", indo: "Ya, di dalamnya ada buku paket Bahasa Arab, dan buku tulis untuk mencatat." },
                    { speaker: "سَلْمَان", ar: "وَمَا هٰذِهِ الْمِقْلَمَةُ الْجَمِيلَةُ؟", indo: "Dan apa kotak pensil yang indah ini?" },
                    { speaker: "يُوسُف", ar: "هٰذِهِ مِقْلَمَتِي الْجَدِيدَةُ، لَوْنُهَا أَزْرَقُ.", indo: "Ini kotak pensil baru saya, warnanya biru." },
                    { speaker: "سَلْمَان", ar: "مَاذَا تَضَعُ دَاخِلَ الْمِقْلَمَةِ؟", indo: "Apa yang kamu taruh di dalam kotak pensil?" },
                    { speaker: "يُوسُف", ar: "أَضَعُ فِيهَا قَلَمَ الرَّصَاصِ، وَقَلَمًا أَحْمَرَ، وَمِمْحَاةً، وَمِبْرَاةً، وَمِسْطَرَةً.", indo: "Saya menaruh di dalamnya pensil, pulpen merah, penghapus, rautan, dan penggaris." },
                    { speaker: "سَلْمَان", ar: "مَاشَاءَ اللَّهُ! أَدَوَاتُكَ كَامِلَةٌ وَمُنَظَّمَةٌ جِدًّا.", indo: "Masya Allah! Peralatanmu sangat lengkap dan rapi." },
                    { speaker: "يُوسُف", ar: "شُكْرًا يَا سَلْمَانُ، وَأَنْتَ أَيْضًا طَالِبٌ مُنَظَّمٌ!", indo: "Terima kasih wahai Salman, dan kamu juga siswa yang rapi!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: أَدَوَاتِي الْمَدْرَسِيَّةُ",
                titleIndo: "Teks Bacaan: Peralatan Sekolahku",
                textAr: "أَنَا طَالِبٌ فِي الصَّفِّ السَّابِعِ. عِنْدِي حَقِيبَةٌ جَمِيلَةٌ لَوْنُهَا أَخْضَرُ. أَحْمِلُ الْحَقِيبَةَ إِلَى الْمَدْرَسَةِ كُلَّ صَبَاحٍ.\n\nفِي الْحَقِيبَةِ كُتُبٌ دِرَاسِيَّةٌ وَدَفَاتِرُ مُرَتَّبَةٌ. وَعِنْدِي أَيْضًا مِقْلَمَةٌ صَغِيرَةٌ. فِي الْمِقْلَمَةِ قَلَمُ حِبْرٍ أَسْوَدُ، وَقَلَمُ رَصَاصٍ، وَمِسْطَرَةٌ طَوِيلَةٌ.\n\nعَلَى الْمَكْتَبِ فِي الْفَصْلِ، أَضَعُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ وَأَقْرَأُ فِيهِ الدُّرُوسَ. الأَدَوَاتُ الْمَدْرَسِيَّةُ مُهِمَّةٌ جِدًّا لِلتَّعَلُّمِ.",
                textIndo: "Saya adalah siswa di kelas 7. Saya memiliki tas indah berwarna hijau. Saya membawa tas ke sekolah setiap pagi.\n\nDi dalam tas ada buku-buku pelajaran dan buku tulis yang rapi. Saya juga punya kotak pensil kecil. Di dalam kotak pensil ada pulpen tinta hitam, pensil, dan penggaris panjang.\n\nDi atas meja di kelas, saya menaruh buku paket bahasa Arab dan membaca pelajaran di dalamnya. Peralatan sekolah sangat penting untuk belajar.",
                questions: [
                    { q: "مَا لَوْنُ حَقِيبَةِ الطَّالِبِ؟", options: ["أحمر", "أزرق", "أخضر", "أصفر"], answer: 2 },
                    { q: "أَيْن يَضَعُ الطَّالِبُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ؟", options: ["على المكتب", "تحت الكرسي", "في الحمام", "في البستان"], answer: 0 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: النَّعْتُ وَالْمَنْعُوتُ (Kata Sifat)",
                titleIndo: "Tata Bahasa: Kata Sifat (Na'at) dan Kata yang Disifati (Man'ut)",
                content: `
                    <h4>قَاعِدَةُ النَّعْتِ وَالْمَنْعُوتِ</h4>
                    <p>Na'at (Kata Sifat) harus mengikuti Man'ut (Benda yang disifati) dalam hal Mudzakkar/Mu'annats:</p>
                    <table class="qawaid-table">
                        <tr><th>Benda (Man'ut)</th><th>Sifat (Na'at)</th><th>Kalimat Lengkap</th></tr>
                        <tr><td>قَلَمٌ (Laki-laki)</td><td>أَزْرَقُ (Biru L)</td><td>هٰذَا قَلَمٌ أَزْرَقُ</td></tr>
                        <tr><td>حَقِيبَةٌ (Perempuan)</td><td>زَرْقَاءُ (Biru P)</td><td>هٰذِهِ حَقِيبَةٌ زَرْقَاءُ</td></tr>
                        <tr><td>كِتَابٌ (Laki-laki)</td><td>جَدِيدٌ (Baru L)</td><td>ذٰلِكَ كِتَابٌ جَدِيدٌ</td></tr>
                        <tr><td>مِسْطَرَةٌ (Perempuan)</td><td>جَدِيدَةٌ (Baru P)</td><td>تِلْكَ مِسْطَرَةٌ جَدِيدَةٌ</td></tr>
                    </table>
                `,
                practice: {
                    instruction: "Susunlah kata-kata berikut menjadi kalimat benda + kata sifat yang tepat:",
                    words: ["حَقِيبَةٌ", "هٰذِهِ", "جَمِيلَةٌ", "حَمْرَاءُ"],
                    correctOrder: ["هٰذِهِ", "حَقِيبَةٌ", "حَمْرَاءُ", "جَمِيلَةٌ"],
                    meaning: "Ini adalah tas merah yang indah."
                }
            },
            quiz: [
                {
                    q: "Bahasa Arab dari 'Pensil' adalah...",
                    options: ["قَلَمٌ", "قَلَمُ الرَّصَاصِ", "مِسْطَرَةٌ", "مِمْحَاةٌ"],
                    answer: 1,
                    explanation: "'قَلَمُ الرَّصَاصِ' berarti pensil."
                },
                {
                    q: "Bentuk kata sifat warna merah untuk benda perempuan (Mu'annats) seperti 'حَقِيبَةٌ' adalah...",
                    options: ["أَحْمَرُ", "حَمْرَاءُ", "أَزْرَقُ", "زَرْقَاءُ"],
                    answer: 1,
                    explanation: "Warna merah untuk perempuan adalah 'حَمْرَاءُ'."
                },
                {
                    q: "Di manakah kita menulis pelajaran saat guru menerangkan di kelas?",
                    options: ["فِي الْمِقْلَمَةِ", "فِي الدَّفْتَرِ", "فِي الْمِمْحَاةِ", "فِي الْمِسْطَرَةِ"],
                    answer: 1,
                    explanation: "Menulis catatan dilakukan di 'الدَّفْتَرِ' (Buku Tulis)."
                },
                {
                    q: "Manakah penyusunan Na'at-Man'ut yang BENAR?",
                    options: ["مِسْطَرَةٌ طَوِيلٌ", "مِقْلَمَةٌ جَدِيدٌ", "كِتَابٌ كَبِيرٌ", "سَبُّورَةٌ أَبْيَضُ"],
                    answer: 2,
                    explanation: "'كِتَابٌ' (Laki-laki) berpasangan dengan 'كَبِيرٌ' (Laki-laki)."
                },
                {
                    q: "Alat yang digunakan untuk mengukur garis lurus adalah...",
                    options: ["مِمْحَاةٌ", "مِسْطَرَةٌ", "مِبْرَاةٌ", "حقِيبَةٌ"],
                    answer: 1,
                    explanation: "'مِسْطَرَةٌ' (Mistarah) artinya penggaris."
                }
            ]
        },

        {
            id: 4,
            title: "الْعُنْوَانُ",
            titleIndo: "Alamat (Al-'Unwan)",
            icon: "fa-map-location-dot",
            desc: "Menyebutkan nomor rumah, jalan, nomor telepon, dan angka (Al-Adad 1-10).",
            mufrodat: [
                { id: 401, ar: "عُنْوَانٌ", latin: "Unwan", indo: "Alamat", exAr: "مَا عُنْوَانُ بَيْتِكَ؟", exIndo: "Apa alamat rumahmu?" },
                { id: 402, ar: "شَارِعٌ", latin: "Syari'", indo: "Jalan", exAr: "أَسْكُنُ فِي شَارِعِ سُوكَارْنُو.", exIndo: "Saya tinggal di Jalan Soekarno." },
                { id: 403, ar: "رَقْمٌ", latin: "Raqm", indo: "Nomor", exAr: "رَقْمُ بَيْتِي خَمْسَةٌ (٥).", exIndo: "Nomor rumahku adalah lima (5)." },
                { id: 404, ar: "هَاتِفٌ / جَوَّالٌ", latin: "Hatif / Jawwal", indo: "Telepon / HP", exAr: "مَا رَقْمُ هَاتِفِكَ؟", exIndo: "Berapa nomor teleponmu?" },
                { id: 405, ar: "بَيْتٌ", latin: "Bait", indo: "Rumah", exAr: "بَيْتِي قَرِيبٌ مِنَ الْمَدْرَسَةِ.", exIndo: "Rumahku dekat dari sekolah." },
                { id: 406, ar: "قَرِيبٌ مِنْ", latin: "Qaribun min", indo: "Dekat dari", exAr: "الْمَسْجِدُ قَرِيبٌ مِنْ بَيْتِي.", exIndo: "Masjid itu dekat dari rumahku." },
                { id: 407, ar: "بَعِيدٌ عَنْ", latin: "Ba'idun 'an", indo: "Jauh dari", exAr: "بَيْتِي بَعِيدٌ عَنِ السُّوقِ.", exIndo: "Rumahku jauh dari pasar." },
                { id: 408, ar: "مَدِينَةٌ", latin: "Madinah", indo: "Kota", exAr: "أَسْكُنُ فِي مَدِينَةِ مَالاَنْج.", exIndo: "Saya tinggal di kota Malang." },
                { id: 409, ar: "قَرْيَةٌ", latin: "Qaryah", indo: "Desa / Kampung", exAr: "جَدِّي يَعِيشُ فِي الْقَرْيَةِ.", exIndo: "Kakekku tinggal di desa." },
                { id: 410, ar: "بِجَوَارِ", latin: "Bijawari", indo: "Di sekitar / Bersebelahan", exAr: "بَيْتِي بِجَوَارِ الْمَسْجِدِ.", exIndo: "Rumahku bersebelahan dengan masjid." },
                { id: 411, ar: "وَاحِدٌ (١)", latin: "Wahid", indo: "Satu (1)", exAr: "عِنْدِي كِتَابٌ وَاحِدٌ.", exIndo: "Saya punya satu buku." },
                { id: 412, ar: "إِثْنَـانِ (٢)", latin: "Isnani", indo: "Dua (2)", exAr: "عِنْدِي قَلَمَانِ إِثْنَـانِ.", exIndo: "Saya punya dua pulpen." },
                { id: 413, ar: "ثَلاَثَةٌ (٣)", latin: "Salasatah", indo: "Tiga (3)", exAr: "رَقْمُ الْبَيْتِ ثَلاَثَةٌ.", exIndo: "Nomor rumahnya tiga." },
                { id: 414, ar: "أَرْبَعَةٌ (٤)", latin: "Arba'ah", indo: "Empat (4)", exAr: "عِنْدِي أَرْبَعَةُ إِخْوَةٍ.", exIndo: "Saya punya empat saudara." },
                { id: 415, ar: "خَمْسَةٌ (٥)", latin: "Khamsah", indo: "Lima (5)", exAr: "السَّاعَةُ الْآنَ الْخَامِسَةُ.", exIndo: "Jam sekarang pukul lima." },
                { id: 416, ar: "سِتَّةٌ (٦)", latin: "Sittah", indo: "Enam (6)", exAr: "رَقْمُ الْهَاتِفِ يَبْدَأُ بِسِتَّةٍ.", exIndo: "Nomor telepon dimulai angka enam." },
                { id: 417, ar: "سَبْعَةٌ (٧)", latin: "Sab'ah", indo: "Tujuh (7)", exAr: "أَنَا فِي الصَّفِّ السَّابِعِ.", exIndo: "Saya di kelas tujuh." },
                { id: 418, ar: "ثَمَانِيَةٌ (٨)", latin: "Samaniyah", indo: "Delapan (8)", exAr: "أَنَامُ فِي السَّاعَةِ الثَّامِنَةِ.", exIndo: "Saya tidur pada jam delapan." },
                { id: 419, ar: "تِسْعَةٌ (٩)", latin: "Tis'ah", indo: "Sembilan (9)", exAr: "رَقْمُ الشَّارِعِ تِسْعَةٌ.", exIndo: "Nomor jalan adalah sembilan." },
                { id: 420, ar: "عَشَرَةٌ (١٠)", latin: "Asyarah", indo: "Sepuluh (10)", exAr: "عِنْدِي عَشَرَةُ كُرَّاسَاتٍ.", exIndo: "Saya punya sepuluh buku tulis." },
                { id: 421, ar: "صِفْرٌ (٠)", latin: "Sifr", indo: "Nol (0)", exAr: "رَقْمُ الْهَاتِفِ يَبْدَأُ بِالصِّفْرِ.", exIndo: "Nomor telepon diawali nol." },
                { id: 422, ar: "مَا رَقْمُ...؟", latin: "Ma raqmu...?", indo: "Berapa nomor...?", exAr: "مَا رَقْمُ بَيْتِكَ؟", exIndo: "Berapa nomor rumahmu?" },
                { id: 423, ar: "أَسْكُنُ فِي...", latin: "Askunu fi...", indo: "Saya tinggal di...", exAr: "أَسْكُنُ فِي شَارِعِ أُحُدٍ.", exIndo: "Saya tinggal di jalan Uhud." },
                { id: 424, ar: "مَسَافَةٌ", latin: "Masafah", indo: "Jarak", exAr: "الْمَسَافَةُ قَصِيرَةٌ.", exIndo: "Jaraknya pendek/dekat." },
                { id: 425, ar: "مَوْقِعٌ", latin: "Mauqi'", indo: "Lokasi / Posisi", exAr: "مَوْقِعُ الْبَيْتِ مُمْتَازٌ.", exIndo: "Lokasi rumahnya strategis." }
            ],
            hiwar: {
                title: "الْحِوَارُ: السُّؤَالُ عَنِ الْعُنْوَانِ",
                titleIndo: "Percakapan: Menanyakan Alamat",
                lines: [
                    { speaker: "إِبْرَاهِيم", ar: "أَيْنَ تَسْكُنُ يَا إِسْمَاعِيلُ؟", indo: "Di mana kamu tinggal wahai Ismail?" },
                    { speaker: "إِسْمَاعِيل", ar: "أَسْكُنُ فِي شَارِعِ أَحْمَد يَانِي رَقْم ٧ (سَبْعَة)، مَدِينَةِ سُورَابَايَا.", indo: "Saya tinggal di Jalan Ahmad Yani Nomor 7, kota Surabaya." },
                    { speaker: "إِبْرَاهِيم", ar: "هَلْ بَيْتُكَ قَرِيبٌ مِنَ الْمَدْرَسَةِ؟", indo: "Apakah rumahmu dekat dari sekolah?" },
                    { speaker: "إِسْمَاعِيل", ar: "نَعَمْ، بَيْتِي قَرِيبٌ جِدًّا مِنَ الْمَدْرَسَةِ، أَمْشِي إِلَيْهَا أَقْدَامًا.", indo: "Ya, rumahku sangat dekat dari sekolah, saya jalan kaki ke sana." },
                    { speaker: "إِبْرَاهِيم", ar: "وَمَا رَقْمُ هَاتِفِكَ يَا إِسْمَاعِيلُ؟", indo: "Dan berapa nomor teleponmu wahai Ismail?" },
                    { speaker: "إِسْمَاعِيل", ar: "رَقْمُ هَاتِفِي: ٠٨١٢٣٤٥٦٧٨ (صِفْر - ثَمَانِيَة - وَاحِد - إِثْنَان - ثَلاَثَة - أَرْبَعَة - خَمْسَة - سِتَّة - سَبْعَة - ثَمَانِيَة).", indo: "Nomor HP-ku: 0812345678." },
                    { speaker: "إِبْرَاهِيم", ar: "شُكْرًا جَزِيلًا! سَأَزُورُ بَيْتَكَ فِي يَوْمِ الأَحَدِ إنْ شَاءَ اللَّهُ.", indo: "Terima kasih banyak! Saya akan mengunjungi rumahmu pada hari Minggu insya Allah." },
                    { speaker: "إِسْمَاعِيل", ar: "أَهْلًا وَسَهْلًا بِكَ فِي أَيِّ وَقْتٍ!", indo: "Selamat datang kapan saja!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: عُنْوَانُ بَيْتِي",
                titleIndo: "Teks Bacaan: Alamat Rumahku",
                textAr: "اسْمِي عُمَرُ. أَنَا طَالِبٌ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ. أَسْكُنُ مَعَ أُسْرَتِي فِي بَيْتٍ جَمِيلٍ.\n\nعُنْوَانُ بَيْتِي فِي شَارِعِ حَمْزَةَ رَقْم ١٠ (عَشَرَة) مَدِينَةِ يَوْجِيَاكَارْتَا. بَيْتِي بِجَوَارِ الْمَسْجِدِ الْكَبِيرِ. رَقْمُ هَاتِفِ بَيْتِي هُوَ (٠٢٧٤) ٥٥٤٣٢١.\n\nالْمَدْرَسَةُ لَيْسَتْ بَعِيدَةً عَنْ بَيْتِي. أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ مَعَ أَصْدِقَائِي كُلَّ صَبَاحٍ.",
                textIndo: "Namaku Umar. Saya siswa di Madrasah Tsanawiyah. Saya tinggal bersama keluargaku di rumah yang indah.\n\nAlamat rumahku di Jalan Hamzah Nomor 10 kota Yogyakarta. Rumahku bersebelahan dengan masjid besar. Nomor telepon rumahku adalah (0274) 554321.\n\nSekolah tidak jauh dari rumahku. Saya pergi ke sekolah naik sepeda bersama teman-temanku setiap pagi.",
                questions: [
                    { q: "مَا رَقْمُ بَيْتِ عُمَرَ؟", options: ["خمسة", "سبعة", "عشرة", "ثلاثة"], answer: 2 },
                    { q: "كَيْفَ يَذْهَبُ عُمَرُ إِلَى الْمَدْرَسَةِ؟", options: ["بالحافلة", "بالدراجة", "بالسيارة", "مشياً"], answer: 1 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: الأَرْقَامُ وَالأَعْدَادُ (١ - ١٠)",
                titleIndo: "Tata Bahasa: Angka & Bilangan (1 - 10)",
                content: `
                    <h4>الأَرْقَامُ الْعَرَبِيَّةُ (Bilangan Angka Arab 1-10)</h4>
                    <table class="qawaid-table">
                        <tr><th>Angka</th><th>Sebutan Arab</th><th>Teks Angka</th></tr>
                        <tr><td>١</td><td>وَاحِدٌ</td><td>Wahid (1)</td></tr>
                        <tr><td>٢</td><td>إِثْنَانِ</td><td>Isnani (2)</td></tr>
                        <tr><td>٣</td><td>ثَلاَثَةٌ</td><td>Salasatah (3)</td></tr>
                        <tr><td>٤</td><td>أَرْبَعَةٌ</td><td>Arba'ah (4)</td></tr>
                        <tr><td>٥</td><td>خَمْسَةٌ</td><td>Khamsah (5)</td></tr>
                        <tr><td>٦</td><td>سِتَّةٌ</td><td>Sittah (6)</td></tr>
                        <tr><td>٧</td><td>سَبْعَةٌ</td><td>Sab'ah (7)</td></tr>
                        <tr><td>٨</td><td>ثَمَانِيَةٌ</td><td>Samaniyah (8)</td></tr>
                        <tr><td>٩</td><td>تِسْعَةٌ</td><td>Tis'ah (9)</td></tr>
                        <tr><td>١٠</td><td>عَشَرَةٌ</td><td>Asyarah (10)</td></tr>
                    </table>
                `,
                practice: {
                    instruction: "Susun kata-kata alamat berikut menjadi kalimat yang teratur:",
                    words: ["رَقْمُ", "أَسْكُنُ", "شَارِعِ", "٥", "فِي", "سُودِيرْمَان"],
                    correctOrder: ["أَسْكُنُ", "فِي", "شَارِعِ", "سُودِيرْمَان", "رَقْمُ", "٥"],
                    meaning: "Saya tinggal di Jalan Sudirman nomor 5."
                }
            },
            quiz: [
                {
                    q: "Bahasa Arab dari angka 7 adalah...",
                    options: ["خَمْسَةٌ", "سِتَّةٌ", "سَبْعَةٌ", "ثَمَانِيَةٌ"],
                    answer: 2,
                    explanation: "'سَبْعَةٌ' (Sab'ah) artinya tujuh (7)."
                },
                {
                    q: "Lengkapi kalimat: 'أَسْكُنُ فِي ... إِمَام بُونْجُول'",
                    options: ["شَارِعِ", "رَقْمِ", "هَاتِفِ", "سَاعَةِ"],
                    answer: 0,
                    explanation: "Nama lokasi jalan menggunakan kata 'شَارِعِ' (Jalan)."
                },
                {
                    q: "Lawan kata dari 'قَرِيبٌ مِنْ' (dekat dari) adalah...",
                    options: ["بِجَانِبِ", "أَمَامَ", "بَعِيدٌ عَنْ", "تَحْتَ"],
                    answer: 2,
                    explanation: "'بَعِيدٌ عَنْ' artinya jauh dari."
                },
                {
                    q: "Angka '٩' dibaca dalam bahasa Arab sebagai...",
                    options: ["تِسْعَةٌ", "ثَلاَثَةٌ", "أَرْبَعَةٌ", "خَمْسَةٌ"],
                    answer: 0,
                    explanation: "Angka ٩ adalah Tis'ah (9)."
                },
                {
                    q: "Arti dari 'مَا رَقْمُ هَاتِفِكَ؟' adalah...",
                    options: ["Siapa nama gurumu?", "Berapa nomor rumahmu?", "Berapa nomor teleponmu?", "Di mana rumahmu?"],
                    answer: 2,
                    explanation: "'هَاتِفِكَ' artinya teleponmu, jadi menanyakan nomor telepon."
                }
            ]
        },

        {
            id: 5,
            title: "الْبَيْتُ",
            titleIndo: "Rumah (Al-Bait)",
            icon: "fa-house",
            desc: "Mengenal ruangan-ruangan di rumah, perabotan rumah tangga, dan kepemilikan (Idhafah).",
            mufrodat: [
                { id: 501, ar: "غُرْفَةُ الْجُلُوسِ", latin: "Ghurfatul julus", indo: "Ruang Tamu", exAr: "نَسْتَقْبِلُ الضُّيُوفَ فِي غُرْفَةِ الْجُلُوسِ.", exIndo: "Kami menyambut tamu di ruang tamu." },
                { id: 502, ar: "غُرْفَةُ النَّوْمِ", latin: "Ghurfatun naum", indo: "Kamar Tidur", exAr: "أَنَامُ فِي غُرْفَةِ النَّوْمِ لَيْلًا.", exIndo: "Saya tidur di kamar tidur di malam hari." },
                { id: 503, ar: "غُرْفَةُ الْمُذَاكَرَةِ", latin: "Ghurfatul muzakarah", indo: "Ruang Belajar", exAr: "أُذَاكِرُ الدُّرُوسَ فِي غُرْفَةِ الْمُذَاكَرَةِ.", exIndo: "Saya mengulang pelajaran di ruang belajar." },
                { id: 504, ar: "غُرْفَةُ الأَكْلِ", latin: "Ghurfatul akl", indo: "Ruang Makan", exAr: "نَأْكُلُ مَعًا فِي غُرْفَةِ الأَكْلِ.", exIndo: "Kami makan bersama di ruang makan." },
                { id: 505, ar: "مَطْبَخٌ", latin: "Matbakh", indo: "Dapur", exAr: "أُمِّي تَطْبُخُ الطَّعَامَ فِي الْمَطْبَخِ.", exIndo: "Ibuku memasak makanan di dapur." },
                { id: 506, ar: "حَمَّامٌ", latin: "Hammam", indo: "Kamar Mandi", exAr: "أَغْتَسِلُ فِي الْحَمَّامِ كُلَّ صَبَاحٍ.", exIndo: "Saya mandi di kamar mandi setiap pagi." },
                { id: 507, ar: "شُرْفَةٌ / تَلَفُّتٌ", latin: "Syurfah", indo: "Balkon / Teras", exAr: "أَجْلِسُ فِي الشُّرْفَةِ مَسَاءً.", exIndo: "Saya duduk di teras pada sore hari." },
                { id: 508, ar: "حَدِيقَةٌ", latin: "Hadiqah", indo: "Taman Rumah", exAr: "فِي الْحَدِيقَةِ أَزْهَارٌ مُلَوَّنَةٌ.", exIndo: "Di taman ada bunga berwarna-warni." },
                { id: 509, ar: "مَوْقِفُ السَّيَّارَاتِ / كَرَاجٌ", latin: "Mauqifus sayyarat", indo: "Garasi Mobil", exAr: "أَبِي يَضَعُ السَّيَّارَةَ فِي الْمَوْقِفِ.", exIndo: "Ayahku menaruh mobil di garasi." },
                { id: 510, ar: "سَرِيرٌ", latin: "Sarir", indo: "Ranjang Tempat Tidur", exAr: "السَّرِيرُ مَرِيحٌ جِدًّا.", exIndo: "Ranjang itu sangat nyaman." },
                { id: 511, ar: "وِسَادَةٌ", latin: "Wisadah", indo: "Bantal", exAr: "أَضَعُ رَأْسِي عَلَى الْوِسَادَةِ.", exIndo: "Saya menaruh kepalaku di atas bantal." },
                { id: 512, ar: "أَرِيكَةٌ / صُوفَةٌ", latin: "Arikah", indo: "Sofa", exAr: "نَجْلِسُ عَلَى الأَرِيكَةِ فِي غُرْفَةِ الْجُلُوسِ.", exIndo: "Kami duduk di atas sofa di ruang tamu." },
                { id: 513, ar: "تِلْفَازٌ", latin: "Tilfaz", indo: "Televisi", exAr: "نُشَاهِدُ التِّلْفَازَ مَعَ الأُسْرَةِ.", exIndo: "Kami menonton TV bersama keluarga." },
                { id: 514, ar: "ثَلاَّجَةٌ", latin: "Sallajah", indo: "Kulkas / Lemari Es", exAr: "الْمَاءُ الْبَارِدُ فِي الثَّلاَّجَةِ.", exIndo: "Air dingin ada di dalam kulkas." },
                { id: 515, ar: "مَوْقِدٌ / فُرْنٌ", latin: "Mauqid", indo: "Kompor Gas", exAr: "المَوْقِدُ فِي الْمَطْبَخِ.", exIndo: "Kompor ada di dapur." },
                { id: 516, ar: "سَاعَةٌ", latin: "Sa'ah", indo: "Jam", exAr: "السَّاعَةُ مُعَلَّقَةٌ عَلَى الْجِدَارِ.", exIndo: "Jam tergantung di dinding." },
                { id: 517, ar: "زَهْرِيَّةٌ", latin: "Zahriyyah", indo: "Vas Bunga", exAr: "الزَّهْرِيَّةُ عَلَى الطَّاوِلَةِ.", exIndo: "Vas bunga ada di atas meja." },
                { id: 518, ar: "سِجَّادَةٌ", latin: "Sijjadah", indo: "Karpet / Sajadah", exAr: "نَبْسُطُ السِّجَّادَةَ فِي غُرْفَةِ الْجُلُوسِ.", exIndo: "Kami membentangkan karpet di ruang tamu." },
                { id: 519, ar: "سِتَارٌ / سِتَارَةٌ", latin: "Sitarah", indo: "Gorden / Tirai", exAr: "السِّتَارَةُ جَمِيلَةٌ لَوْنُهَا أَبْيَضُ.", exIndo: "Gorden itu indah berwarna putih." },
                { id: 520, ar: "مِصْبَاحٌ", latin: "Misbah", indo: "Lampu", exAr: "أُنِيرُ الْمِصْبَاحَ فِي اللَّيْلِ.", exIndo: "Saya menyalakan lampu di malam hari." },
                { id: 521, ar: "مِرْوَحَةٌ", latin: "Mirwahah", indo: "Kipas Angin", exAr: "الْمِرْوَحَةُ تُعْطِي هَوَاءً بَارِدًا.", exIndo: "Kipas angin memberikan udara sejuk." },
                { id: 522, ar: "مُرَّكَبُ التَّكْيِيفِ (مُكَيِّفٌ)", latin: "Mukayyif", indo: "AC (Pengondisi Udara)", exAr: "الْمُكَيِّفُ فِي غُرْفَةِ النَّوْمِ.", exIndo: "AC ada di kamar tidur." },
                { id: 523, ar: "بَابٌ", latin: "Bab", indo: "Pintu", exAr: "أَفْتَحُ الْبَابَ صَبَاحًا.", exIndo: "Saya membuka pintu di pagi hari." },
                { id: 524, ar: "نَافِذَةٌ / شُبَّاكٌ", latin: "Nafizah", indo: "Jendela", exAr: "نَافِذَةُ الْغُرْفَةِ نَظِيفَةٌ.", exIndo: "Jendela kamar bersih." },
                { id: 525, ar: "سَقْفٌ", latin: "Saqf", indo: "Atap / Plafon", exAr: "السَّقْفُ عَالٍ وَمُرْتَفِعٌ.", exIndo: "Atapnya tinggi." }
            ],
            hiwar: {
                title: "الْحِوَارُ: فِي بَيْتِ خَالِدٍ",
                titleIndo: "Percakapan: Di Rumah Khalid",
                lines: [
                    { speaker: "طَارِق", ar: "السَّلاَمُ عَلَيْكُمْ يَا خَالِدُ!", indo: "Assalamu'alaikum wahai Khalid!" },
                    { speaker: "خَالِد", ar: "وَعَلَيْكُمُ السَّلاَمُ يَا طَارِقُ! أَهْلًا وَسَهْلًا فِي بَيْتِي!", indo: "Wa'alaikumussalam wahai Tariq! Selamat datang di rumahku!" },
                    { speaker: "طَارِق", ar: "بَيْتُكَ جَمِيلٌ وَمُنَظَّمٌ جِدًّا! مَا هٰذِهِ الْغُرْفَةُ الْكَبِيرَةُ؟", indo: "Rumahmu sangat indah dan rapi! Ruangan besar apa ini?" },
                    { speaker: "خَالِد", ar: "هٰذِهِ غُرْفَةُ الْجُلُوسِ، نَسْتَقْبِلُ فِيهَا الضُّيُوفَ. اِجْلِسْ عَلَى الأَرِيكَةِ!", indo: "Ini ruang tamu, kami menyambut tamu di sini. Duduklah di atas sofa!" },
                    { speaker: "طَارِق", ar: "شُكْرًا. وَأَيْنَ غُرْفَةُ مُذَاكَرَتِكَ؟", indo: "Terima kasih. Dan di mana ruang belajarmu?" },
                    { speaker: "خَالِد", ar: "غُرْفَةُ الْمُذَاكَرَةِ بِجَانِبِ غُرْفَةِ النَّوْمِ. فِيهَا مَكْتَبِي وَخَزَانَةُ كُتُبِي.", indo: "Ruang belajar di samping kamar tidur. Di sana ada mejaku dan lemari bukuku." },
                    { speaker: "طَارِق", ar: "وَمَنْ فِي الْمَطْبَخِ الآنَ؟", indo: "Dan siapa yang ada di dapur sekarang?" },
                    { speaker: "خَالِد", ar: "أُمِّي فِي الْمَطْبَخِ، هِيَ تُعِدُّ الشَّايَ وَالْحَلْوَى لَنَا.", indo: "Ibuku di dapur, beliau menyiapkan teh dan kue untuk kita." },
                    { speaker: "طَارِق", ar: "جَزَاهَا اللَّهُ خَيْرًا!", indo: "Semoga Allah membalas kebaikan beliau!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: بَيْتِي المُرِيحُ",
                titleIndo: "Teks Bacaan: Rumahku yang Nyaman",
                textAr: "هٰذَا بَيْتِي. بَيْتِي نَظِيفٌ وَمُرَتَّبٌ. فِي الْبَيْتِ غُرَفٌ كَثِيرَةٌ: غُرْفَةُ الْجُلُوسِ، وَغُرْفَةُ النَّوْمِ، وَغُرْفَةُ الْمُذَاكَرَةِ، وَغُرْفَةُ الأَكْلِ، وَمَطْبَخٌ، وَحَمَّامٌ.\n\nفِي غُرْفَةِ الْجُلُوسِ أَرِيكَةٌ جَمِيلَةٌ وَتِلْفَازٌ كَبِيرٌ. وَفِي غُرْفَةِ النَّوْمِ سَرِيرٌ وَوِسَادَةٌ نَاعِمَةٌ. أَمَّا فِي الْمَطْبَخِ فَتُوجَدُ ثَلاَّجَةٌ وَمَوْقِدٌ.\n\nأَكْتُبُ وَاجِبَاتِي فِي غُرْفَةِ الْمُذَاكَرَةِ كُلَّ مَسَاءٍ. أَنَا وَأُسْرَتِي نَعِيشُ فِي هٰذَا الْبَيْتِ بِسَعَادَةٍ.",
                textIndo: "Ini rumahku. Rumahku bersih dan teratur. Di dalam rumah ada banyak ruangan: ruang tamu, kamar tidur, ruang belajar, ruang makan, dapur, dan kamar mandi.\n\nDi ruang tamu ada sofa yang indah dan TV besar. Di kamar tidur ada ranjang dan bantal empuk. Sedangkan di dapur terdapat kulkas dan kompor.\n\nSaya menulis PR di ruang belajar setiap sore. Saya dan keluargaku hidup di rumah ini dengan bahagia.",
                questions: [
                    { q: "أَيْنَ يَكْتُبُ الطَّالِبُ وَاجِبَاتِهِ؟", options: ["في غُرْفَةِ الْمُذَاكَرَةِ", "في المطبخ", "في الحمام", "في الموقف"], answer: 0 },
                    { q: "مَاذَا يُوجَدُ فِي الْمَطْبَخِ؟", options: ["سرير ووسادة", "ثلاجة وموقد", "أريكة وتلفاز", "خارطة وصورة"], answer: 1 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: الإِضَافَةُ (Kepemilikan & Gabungan Kata)",
                titleIndo: "Tata Bahasa: Idhafah (Kata Majemuk Kepemilikan)",
                content: `
                    <h4>قَاعِدَةُ الإِضَافَةِ</h4>
                    <p>Idhafah terdiri dari <b>Mudhaf</b> (kata pertama) dan <b>Mudhaf Ilaih</b> (kata kedua berharakat Kasrah):</p>
                    <ul>
                        <li><b>غُرْفَةُ + النَّوْمِ</b> &rightarrow; غُرْفَةُ النَّوْمِ (Kamar Tidur)</li>
                        <li><b>كِتَابُ + الطَّالِبِ</b> &rightarrow; كِتَابُ الطَّالِبِ (Buku Siswa)</li>
                        <li><b>بَيْتُ + أَبِي</b> &rightarrow; بَيْتُ أَبِي (Rumah Ayahku)</li>
                    </ul>
                `,
                practice: {
                    instruction: "Susunlah kata-kata berikut menjadi susunan Idhafah & lokasi yang tepat:",
                    words: ["غُرْفَةُ", "الْمُذَاكَرَةِ", "بِجَانِبِ", "غُرْفَةِ", "النَّوْمِ"],
                    correctOrder: ["غُرْفَةُ", "الْمُذَاكَرَةِ", "بِجَانِبِ", "غُرْفَةِ", "النَّوْمِ"],
                    meaning: "Ruang belajar ada di samping kamar tidur."
                }
            },
            quiz: [
                {
                    q: "Ruang di rumah yang digunakan untuk memasak makanan adalah...",
                    options: ["غُرْفَةُ الْجُلُوسِ", "الْمَطْبَخُ", "غُرْفَةُ النَّوْمِ", "الْحَمَّامُ"],
                    answer: 1,
                    explanation: "'الْمَطْبَخُ' (Matbakh) artinya dapur."
                },
                {
                    q: "Bahasa Arab dari kata 'Sofa' adalah...",
                    options: ["سَرِيرٌ", "أَرِيكَةٌ", "ثَلاَّجَةٌ", "مِصْبَاحٌ"],
                    answer: 1,
                    explanation: "'أَرِيكَةٌ' (Arikah) berarti sofa."
                },
                {
                    q: "Di manakah kita tidur saat malam hari?",
                    options: ["فِي غُرْفَةِ الأَكْلِ", "فِي غُرْفَةِ النَّوْمِ", "فِي الشُّرْفَةِ", "فِي الْمَطْبَخِ"],
                    answer: 1,
                    explanation: "Tidur dilakukan di 'غُرْفَةِ النَّوْمِ' (Kamar tidur)."
                },
                {
                    q: "Manakah bentukan Idhafah yang BENAR?",
                    options: ["غُرْفَةٌ النَّوْمَ", "غُرْفَةُ النَّوْمِ", "الْغُرْفَةُ النَّوْمِ", "غُرْفَةُ النَّوْمُ"],
                    answer: 1,
                    explanation: "Bentuk Idhafah benar: Mudhaf tanpa Alif Lam/Tanwin 'غُرْفَةُ', Mudhaf Ilaih Kasrah 'النَّوْمِ'."
                },
                {
                    q: "Arti dari kata 'ثَلاَّجَةٌ' adalah...",
                    options: ["Kompor", "Televisi", "Kulkas/Lemari Es", "Kipas Angin"],
                    answer: 2,
                    explanation: "'ثَلاَّجَةٌ' artinya kulkas atau lemari es."
                }
            ]
        },

        {
            id: 6,
            title: "مِنْ يَوْمِيَّاتِ الأُسْرَةِ",
            titleIndo: "Kegiatan Sehari-hari Keluarga (Min Yaumiyyatil Usrah)",
            icon: "fa-clock-rotate-left",
            desc: "Mempelajari kata kerja sehari-hari (Fi'il Mudhari'), anggota keluarga, dan rutinitas harian.",
            mufrodat: [
                { id: 601, ar: "أَسْتَيْقِظُ", latin: "Astayqizu", indo: "Saya bangun tidur", exAr: "أَسْتَيْقِظُ مِنَ النَّوْمِ فِي السَّاعَةِ الرَّابِعَةِ صَبَاحًا.", exIndo: "Saya bangun tidur pada pukul 04.00 pagi." },
                { id: 602, ar: "أَغْتَسِلُ", latin: "Agtasilu", indo: "Saya mandi", exAr: "أَغْتَسِلُ فِي الْحَمَّامِ بِالْمَاءِ وَالصَّابُونِ.", exIndo: "Saya mandi di kamar mandi dengan air dan sabun." },
                { id: 603, ar: "أُصَلِّي", latin: "Usalli", indo: "Saya shalat", exAr: "أُصَلِّي الصُّبْحَ جَمَاعَةً فِي الْمَسْجِدِ.", exIndo: "Saya shalat Subuh berjamaah di masjid." },
                { id: 604, ar: "أَتَنَاوَلُ الْفَطُورَ", latin: "Atanawalul fatur", indo: "Saya sarapan pagi", exAr: "أَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي فِي السَّادِسَةِ.", exIndo: "Saya sarapan bersama keluarga pada pukul 06.00." },
                { id: 605, ar: "أَذْهَبُ", latin: "Azhabu", indo: "Saya pergi", exAr: "أَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.", exIndo: "Saya pergi ke sekolah pada pukul 06.30." },
                { id: 606, ar: "أَرْجِعُ / أَعُودُ", latin: "Arji'u / A'udu", indo: "Saya pulang / kembali", exAr: "أَرْجِعُ مِنَ الْمَدْرَسَةِ ظُهْرًا.", exIndo: "Saya pulang dari sekolah pada waktu zuhur." },
                { id: 607, ar: "أُذَاكِرُ", latin: "Uzakiru", indo: "Saya belajar / mengulang", exAr: "أُذَاكِرُ دُرُوسِي بَعْدَ صَلاَةِ الْعِشَاءِ.", exIndo: "Saya mengulang pelajarkanku setelah shalat Isya." },
                { id: 608, ar: "أَكْتُبُ", latin: "Aktubu", indo: "Saya menulis", exAr: "أَكْتُبُ الْوَاجِبَ الْمَنـْزِلِيَّ.", exIndo: "Saya menulis pekerjaan rumah (PR)." },
                { id: 609, ar: "أَقْرَأُ", latin: "Aqra'u", indo: "Saya membaca", exAr: "أَقْرَأُ الْقُرْآنَ بَعْدَ صَلاَةِ الْمَغْرِبِ.", exIndo: "Saya membaca Al-Qur'an setelah shalat Maghrib." },
                { id: 610, ar: "أُشَاهِدُ", latin: "Usyahidu", indo: "Saya menonton", exAr: "أُشَاهِدُ الأَخْبَارَ فِي التِّلْفَازِ.", exIndo: "Saya menonton berita di TV." },
                { id: 611, ar: "أَنَامُ", latin: "Anamu", indo: "Saya tidur", exAr: "أَنَامُ مُبَكِّرًا فِي السَّاعَةِ التَّاسِعَةِ لَيْلًا.", exIndo: "Saya tidur lebih awal pada pukul 09.00 malam." },
                { id: 612, ar: "أَبٌ / وَالِدٌ", latin: "Ab / Walid", indo: "Ayah", exAr: "أَبِي يَقْرَأُ الْجَرِيدَةَ فِي الصَّبَاحِ.", exIndo: "Ayahku membaca koran di pagi hari." },
                { id: 613, ar: "أُمٌّ / وَالِدَةٌ", latin: "Umm / Walidah", indo: "Ibu", exAr: "أُمِّي تُعِدُّ طَعَامَ الْغَدَاءِ.", exIndo: "Ibuku menyiapkan makan siang." },
                { id: 614, ar: "أَخٌ كَبِيرٌ", latin: "Akh kabir", indo: "Kakak Laki-laki", exAr: "أَخِي الْكَبِيرُ يَلْعَبُ كُرَةَ السَّلَّةِ.", exIndo: "Kakak laki-lakiku bermain bola basket." },
                { id: 615, ar: "أُخْتٌ صَغِيرَةٌ", latin: "Ukht saghirah", indo: "Adik Perempuan", exAr: "أُخْتِي الصَّغِيرَةُ تَلْعَبُ بِاللُّعْبَةِ.", exIndo: "Adik perempuanku bermain boneka." },
                { id: 616, ar: "جَدٌّ", latin: "Jadd", indo: "Kakek", exAr: "جَدِّي يَمْشِي فِي الْحَدِيقَةِ.", exIndo: "Kakekku berjalan di taman." },
                { id: 617, ar: "جَدَّةٌ", latin: "Jaddah", indo: "Nenek", exAr: "جَدَّتِي تَحْكِي قِصَّةً جَمِيلَةً.", exIndo: "Nenekku menceritakan kisah yang indah." },
                { id: 618, ar: "صَبَاحًا", latin: "Sabahan", indo: "Pagi hari", exAr: "أَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا.", exIndo: "Saya pergi ke sekolah di pagi hari." },
                { id: 619, ar: "نَهَارًا / ظُهْرًا", latin: "Naharan / Zuhran", indo: "Siang hari", exAr: "أَنَامُ قَلِيلاً نَهَارًا.", exIndo: "Saya tidur sebentar di siang hari." },
                { id: 620, ar: "مَسَاءً", latin: "Masa-an", indo: "Sore / Malam hari", exAr: "أَلْعَبُ مَعَ أِصْدِقَائِي مَسَاءً.", exIndo: "Saya bermain bersama teman-temanku di sore hari." },
                { id: 621, ar: "لَيْلًا", latin: "Lailan", indo: "Malam hari", exAr: "السَّمَاءُ مُظْلِمَةٌ لَيْلًا.", exIndo: "Langit gelap di malam hari." },
                { id: 622, ar: "فَطُورٌ", latin: "Fatur", indo: "Sarapan Pagi", exAr: "الْفَطُورُ لَذِيذٌ وَمُفِيدٌ.", exIndo: "Sarapan pagi itu lezat dan bermanfaat." },
                { id: 623, ar: "غَدَاءٌ", latin: "Gada'", indo: "Makan Siang", exAr: "نَتَنَاوَلُ الْغَدَاءَ فِي السَّاعَةِ الْوَاحِدَةِ.", exIndo: "Kami makan siang pada pukul 13.00." },
                { id: 624, ar: "عَشَاءٌ", latin: "Asya'", indo: "Makan Malam", exAr: "نَتَنَاوَلُ الْعَشَاءَ بَعْدَ صَلاَةِ الْمَغْرِبِ.", exIndo: "Kami makan malam setelah shalat Maghrib." },
                { id: 625, ar: "يَوْمِيَّاتٌ", latin: "Yaumiyyat", indo: "Kegiatan Rutin Harian", exAr: "هٰذِهِ يَوْمِيَّاتِي الْيَوْمِيَّةُ.", exIndo: "Ini adalah kegiatan rutin harianku." }
            ],
            hiwar: {
                title: "الْحِوَارُ: الأَنْشِطَةُ الْيَوْمِيَّةُ فِي الْبَيْتِ",
                titleIndo: "Percakapan: Aktivitas Harian di Rumah",
                lines: [
                    { speaker: "حَسَن", ar: "مَاذَا تَفْعَلُ بَعْدَ صَلاَةِ الصُّبْحِ يَا حُسَيْنُ؟", indo: "Apa yang kamu lakukan setelah shalat Subuh wahai Husain?" },
                    { speaker: "حُسَيْن", ar: "أَقْرَأُ الْقُرْآنَ الْكَرِيمَ، ثُمَّ أُرَتِّبُ سَرِيرِي فِي الْغُرْفَةِ.", indo: "Saya membaca Al-Qur'an, kemudian saya merapikan tempat tidurku di kamar." },
                    { speaker: "حَسَن", ar: "وَمَاذَا تَفْعَلُ أُمُّكَ فِي هٰذَا الْوَقْتِ؟", indo: "Dan apa yang dilakukan ibumu pada waktu ini?" },
                    { speaker: "حُسَيْن", ar: "أُمِّي تَطْبُخُ الْفَطُورَ فِي الْمَطْبَخِ، وَأُخْتِي تُسَاعِدُهَا.", indo: "Ibuku memasak sarapan di dapur, dan adikku membantunya." },
                    { speaker: "حَسَن", ar: "وَأَبُوكَ، مَاذَا يَعْمَلُ؟", indo: "Dan ayahmu, apa yang beliau kerjakan?" },
                    { speaker: "حُسَيْن", ar: "أَبِي يَقْرَأُ الْجَرِيدَةَ وَيَشْرَبُ الْقَهْوَةَ فِي الشُّرْفَةِ.", indo: "Ayahku membaca koran dan minum kopi di teras." },
                    { speaker: "حَسَن", ar: "مَتَى تَتَنَاوَلُونَ الْفَطُورَ مَعًا؟", indo: "Kapan kalian makan sarapan bersama?" },
                    { speaker: "حُسَيْن", ar: "نَتَنَاوَلُ الْفَطُورَ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا.", indo: "Kami sarapan pagi pada pukul 06.00 pagi." },
                    { speaker: "حَسَن", ar: "مَاشَاءَ اللَّهُ! أُسْرَةٌ مُنَظَّمَةٌ وَمُبَارَكَةٌ!", indo: "Masya Allah! Keluarga yang teratur dan diberkahi!" }
                ]
            },
            qiraah: {
                title: "قِرَاءَةٌ: يَوْمِيَّاتُ طَالِبٍ نَشِيطٍ",
                titleIndo: "Teks Bacaan: Hari-hari Siswa yang Rajin",
                textAr: "أَنَا اسْمِي عَبْدُ اللَّهِ. أَنَا طَالِبٌ نَشِيطٌ. أَسْتَيْقِظُ كُلَّ صَبَاحٍ فِي السَّاعَةِ الرَّابِعَةِ. أَغْتَسِلُ ثُمَّ أُصَلِّي الصُّبْحَ فِي الْمَسْجِدِ.\n\nبَعْدَ الصَّلاَةِ، أَقْرَأُ الْقُرْآنَ وَأُذَاكِرُ الدُّرُوسَ. فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ، أَتَنَاوَلُ الْفَطُورَ مَعَ أُسْرَتِي ثُمَّ أَذْهَبُ إِلَى الْمَدْرَسَةِ.\n\nأَرْجِعُ مِنَ الْمَدْرَسَةِ فِي السَّاعَةِ الْوَاحِدَةِ ظُهْرًا. أَتَنَاوَلُ الْغَدَاءَ وَأَسْتَرِيحُ قَلِيلاً. فِي اللَّيْلِ، أَكْتُبُ الْوَاجِبَاتِ الْمَنـْزِلِيَّةَ ثُمَّ أَنَامُ مُبَكِّرًا.",
                textIndo: "Nama saya Abdullah. Saya siswa yang rajin. Saya bangun setiap pagi pukul 04.00. Saya mandi kemudian shalat Subuh di masjid.\n\nSetelah shalat, saya membaca Al-Qur'an dan mengulang pelajaran. Pada pukul 06.30, saya sarapan bersama keluarga lalu pergi ke sekolah.\n\nSaya pulang dari sekolah pada pukul 13.00 siang. Saya makan siang dan beristirahat sejenak. Di malam hari, saya menulis PR kemudian tidur lebih awal.",
                questions: [
                    { q: "مَتَى يَسْتَيْقِظُ عَبْدُ اللَّهِ؟", options: ["في الساعة الرابعة", "في الساعة السادسة", "في الساعة الثامنة", "في الساعة الثانية"], answer: 0 },
                    { q: "أَيْنَ يُصَلِّي عَبْدُ اللَّهِ الصُّبْحَ؟", options: ["في المدرسة", "في المسجد", "في الفصل", "في السوق"], answer: 1 }
                ]
            },
            qawaid: {
                title: "الْقَوَاعِدُ: الْفِعْلُ الْمُضَارِعُ لِلْمُتَكَلِّمِ وَالْمُخَاطَبِ",
                titleIndo: "Tata Bahasa: Kata Kerja Sekarang/Akan Datang (Fi'il Mudhari')",
                content: `
                    <h4>تَصْرِيفُ الْفِعْلِ الْمُضَارِعِ (Perubahan Kata Kerja Harian)</h4>
                    <table class="qawaid-table">
                        <tr><th>Dhamir</th><th>Awalan Huruf</th><th>Contoh Kata Kerja (Membaca)</th><th>Arti</th></tr>
                        <tr><td><b>أَنَا</b> (Saya)</td><td>أـ (Hamzah)</td><td>أَقْرَأُ</td><td>Saya membaca</td></tr>
                        <tr><td><b>أَنْتَ</b> (Kamu L)</td><td>تـ (Ta)</td><td>تَقْرَأُ</td><td>Kamu (L) membaca</td></tr>
                        <tr><td><b>أَنْتِ</b> (Kamu P)</td><td>تـ ... ينَ</td><td>تَقْرَئِينَ</td><td>Kamu (P) membaca</td></tr>
                        <tr><td><b>هُوَ</b> (Dia L)</td><td>يـ (Ya)</td><td>يَقْرَأُ</td><td>Dia (L) membaca</td></tr>
                        <tr><td><b>هِيَ</b> (Dia P)</td><td>تـ (Ta)</td><td>تَقْرَأُ</td><td>Dia (P) membaca</td></tr>
                    </table>
                `,
                practice: {
                    instruction: "Susun kata-kata kegiatan harian berikut menjadi urutan kalimat yang tepat:",
                    words: ["أَسْتَيْقِظُ", "مِنَ", "النَّوْمِ", "فِي", "الرَّابِعَةِ", "السَّاعَةِ"],
                    correctOrder: ["أَسْتَيْقِظُ", "مِنَ", "النَّوْمِ", "فِي", "السَّاعَةِ", "الرَّابِعَةِ"],
                    meaning: "Saya bangun tidur pada pukul empat."
                }
            },
            quiz: [
                {
                    q: "Kata kerja (Fi'il Mudhari') yang berarti 'Saya bangun tidur' adalah...",
                    options: ["أَذْهَبُ", "أَسْتَيْقِظُ", "أَكْتُبُ", "أَنَامُ"],
                    answer: 1,
                    explanation: "'أَسْتَيْقِظُ' (Astayqizu) berarti saya bangun tidur."
                },
                {
                    q: "Ubahlah kata kerja 'أَذْهَبُ' (Saya pergi) untuk Dhamir 'هُوَ' (Dia Laki-laki):",
                    options: ["تَذْهَبُ", "يَذْهَبُ", "تَذْهَبِينَ", "نَذْهَبُ"],
                    answer: 1,
                    explanation: "Dhamir 'هُوَ' diawali huruf Ya: 'يَذْهَبُ'."
                },
                {
                    q: "Arti dari ungkapan 'أَتَنَاوَلُ الْفَطُورَ' adalah...",
                    options: ["Saya makan siang", "Saya sarapan pagi", "Saya makan malam", "Saya mandi pagi"],
                    answer: 1,
                    explanation: "'الْفَطُورَ' berarti sarapan pagi."
                },
                {
                    q: "Bahasa Arab untuk 'Kakek' dan 'Nenek' berturut-turut adalah...",
                    options: ["أَبٌ وَ أُمٌّ", "جَدٌّ وَ جَدَّةٌ", "أَخٌ وَ أُخْتٌ", "عَمٌّ وَ عَمَّةٌ"],
                    answer: 1,
                    explanation: "'جَدٌّ' (Kakek) dan 'جَدَّةٌ' (Nenek)."
                },
                {
                    q: "Waktu 'صَبَاحًا' berarti...",
                    options: ["Sore hari", "Siang hari", "Malam hari", "Pagi hari"],
                    answer: 3,
                    explanation: "'صَبَاحًا' berarti di pagi hari."
                }
            ]
        }
    ]
};
