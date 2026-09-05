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

          {
                    "id": 101,
                    "ar": "هُوَ",
                    "latin": "",
                    "indo": "Dia (Laki-laki)",
                    "exAr": "هُوَ طَالِبٌ نَشِيطٌ فِي الْمَدْرَسَةِ.",
                    "exIndo": "Dia adalah siswa yang rajin di sekolah."
          },
          {
                    "id": 102,
                    "ar": "هِيَ",
                    "latin": "",
                    "indo": "Dia (Perempuan)",
                    "exAr": "هِيَ طَالِبَةٌ مَاهِرَةٌ فِي الْفَصْلِ.",
                    "exIndo": "Dia adalah siswi yang pintar di kelas."
          },
          {
                    "id": 103,
                    "ar": "أَنْتَ",
                    "latin": "",
                    "indo": "Kamu (Laki-laki)",
                    "exAr": "أَنْتَ صَدِيقِي الْعَزِيزُ.",
                    "exIndo": "Kamu adalah teman baikku."
          },
          {
                    "id": 104,
                    "ar": "أَنْتِ",
                    "latin": "",
                    "indo": "Kamu (Perempuan)",
                    "exAr": "أَنْتِ صَدِيقَتِي الْعَزِيزَةُ.",
                    "exIndo": "Kamu adalah temanku yang baik."
          },
          {
                    "id": 105,
                    "ar": "أَنَا",
                    "latin": "",
                    "indo": "Saya",
                    "exAr": "أَنَا تِلْمِيذٌ فِي الصَّفِّ السَّابِعِ.",
                    "exIndo": "Saya adalah siswa di kelas 7."
          },
          {
                    "id": 106,
                    "ar": "نَحْنُ",
                    "latin": "",
                    "indo": "Kami / Kita",
                    "exAr": "نَحْنُ طُلَّابٌ فِي هٰذِهِ الْمَدْرَسَةِ.",
                    "exIndo": "Kami adalah siswa-siswa di sekolah ini."
          },
          {
                    "id": 107,
                    "ar": "هٰذَا",
                    "latin": "",
                    "indo": "Ini (Laki-laki)",
                    "exAr": "هٰذَا أَخِي، إِسْمُهُ صَالِحٌ.",
                    "exIndo": "Ini saudaraku, namanya Salih."
          },
          {
                    "id": 108,
                    "ar": "هٰذِهِ",
                    "latin": "",
                    "indo": "Ini (Perempuan)",
                    "exAr": "هٰذِهِ أُخْتِي، إِسْمُهَا فَاطِمَةُ.",
                    "exIndo": "Ini saudariku, namanya Fatimah."
          },
          {
                    "id": 109,
                    "ar": "ذٰلِكَ",
                    "latin": "",
                    "indo": "Itu (Laki-laki)",
                    "exAr": "ذٰلِكَ الأُسْتَاذُ مَنْصُورٌ، هُوَ مَدِيرُ الْمَدْرَسَةِ.",
                    "exIndo": "Itu Pak Mansur, dia kepala sekolah."
          },
          {
                    "id": 110,
                    "ar": "تِلْكَ",
                    "latin": "",
                    "indo": "Itu (Perempuan)",
                    "exAr": "تِلْكَ الأُسْتَاذَةُ نَفِيسَةُ، هِيَ مُدَرِّسَةٌ.",
                    "exIndo": "Itu Bu Nafisah, dia seorang guru."
          },
          {
                    "id": 111,
                    "ar": "طَالِبٌ / تِلْمِيذٌ",
                    "latin": "",
                    "indo": "Siswa (Laki-laki)",
                    "exAr": "عَزَّامٌ تِلْمِيذٌ جَدِيدٌ فِي الْمَدْرَسَةِ.",
                    "exIndo": "Azzam adalah siswa baru di sekolah."
          },
          {
                    "id": 112,
                    "ar": "طَالِبَةٌ / تِلْمِيذَةٌ",
                    "latin": "",
                    "indo": "Siswi (Perempuan)",
                    "exAr": "فِطْرِيَّةُ تِلْمِيذَةٌ فِي الصَّفِّ السَّابِعِ.",
                    "exIndo": "Fitriyah adalah siswi di kelas 7."
          },
          {
                    "id": 113,
                    "ar": "صَدِيقِي",
                    "latin": "",
                    "indo": "Temanku (Laki-laki)",
                    "exAr": "صَالِحٌ صَدِيقِي الْمُخْلِصُ.",
                    "exIndo": "Salih adalah temanku yang setia."
          },
          {
                    "id": 114,
                    "ar": "صَدِيقَتِي",
                    "latin": "",
                    "indo": "Temanku (Perempuan)",
                    "exAr": "فِطْرِيَّةُ صَدِيقَتِي فِي الْفَصْلِ.",
                    "exIndo": "Fitriyah adalah temanku di kelas."
          },
          {
                    "id": 115,
                    "ar": "إِسْمِي",
                    "latin": "",
                    "indo": "Namaku",
                    "exAr": "إِسْمِي فَارُوقٌ، أَنَا طَالِبٌ.",
                    "exIndo": "Namaku Faruq, saya seorang siswa."
          },
          {
                    "id": 116,
                    "ar": "إِسْمُكَ / إِسْمُكِ",
                    "latin": "",
                    "indo": "Namamu (Lk / Pr)",
                    "exAr": "مَا إِسْمُكَ يَا أَخِي؟ - إِسْمِي عَزَّامٌ.",
                    "exIndo": "Siapa namamu wahai saudaraku? - Namaku Azzam."
          },
          {
                    "id": 117,
                    "ar": "مُدَرِّسٌ / مُدَرِّسَةٌ",
                    "latin": "",
                    "indo": "Guru (Lk / Pr)",
                    "exAr": "الأُسْتَاذَةُ نَفِيسَةُ مُدَرِّسَةُ اللُّغَةِ الْعَرَبِيَّةِ.",
                    "exIndo": "Ustadzah Nafisah adalah guru Bahasa Arab."
          },
          {
                    "id": 118,
                    "ar": "مُدِيرٌ / مُدِيرَةٌ",
                    "latin": "",
                    "indo": "Kepala Sekolah (Lk / Pr)",
                    "exAr": "الأُسْتَاذُ مَنْصُورٌ مُدِيرُ الْمَدْرَسَةِ.",
                    "exIndo": "Ustadz Mansur adalah kepala sekolah."
          },
          {
                    "id": 119,
                    "ar": "مُوَظَّفٌ / مُوَظَّفَةٌ",
                    "latin": "",
                    "indo": "Pegawai (Lk / Pr)",
                    "exAr": "السَّيِّدَةُ حَفْصَةُ مُوَظَّفَةٌ فِي الْمَكْتَبَةِ.",
                    "exIndo": "Bu Hafsah adalah pegawai di perpustakaan."
          },
          {
                    "id": 120,
                    "ar": "خَادِمٌ / خَادِمَةٌ",
                    "latin": "",
                    "indo": "Staf Kebersihan (Lk / Pr)",
                    "exAr": "نَبِيلَةُ خَادِمَةٌ نَشِيطَةٌ فِي الْمَدْرَسَةِ.",
                    "exIndo": "Nabilah adalah staf kebersihan yang rajin di sekolah."
          },
          {
                    "id": 121,
                    "ar": "تَاجِرٌ / تَاجِرَةٌ (بَائِعٌ/بَائِعَةٌ)",
                    "latin": "",
                    "indo": "Penjual / Pedagang (Lk / Pr)",
                    "exAr": "السَّيِّدُ خَالِصٌ تَاجِرٌ فِي الْمَقْصَفِ.",
                    "exIndo": "Pak Khalis adalah penjual di kantin."
          },
          {
                    "id": 122,
                    "ar": "بَوَّابٌ / بَوَّابَةٌ",
                    "latin": "",
                    "indo": "Satpam / Penjaga Gerbang (Lk / Pr)",
                    "exAr": "السَّيِّدُ مَسْعُودٌ بَوَّابٌ مِنْ سُورَابَايَا.",
                    "exIndo": "Pak Mas'ud adalah satpam dari Surabaya."
          },
          {
                    "id": 123,
                    "ar": "مَا",
                    "latin": "",
                    "indo": "Apa / Siapa (untuk nama)",
                    "exAr": "مَا إِسْمُكَ يَا صَدِيقِي؟",
                    "exIndo": "Siapa namamu wahai temanku?"
          },
          {
                    "id": 124,
                    "ar": "مَنْ",
                    "latin": "",
                    "indo": "Siapa (untuk orang)",
                    "exAr": "مَنْ أَنْتَ؟ أَنَا تِلْمِيذٌ فِي هٰذِهِ الْمَدْرَسَةِ.",
                    "exIndo": "Siapa kamu? Saya siswa di sekolah ini."
          },
          {
                    "id": 125,
                    "ar": "هَلْ",
                    "latin": "",
                    "indo": "Apakah",
                    "exAr": "هَلْ أَنْتَ طَالِبٌ جَدِيدٌ؟ نَعَمْ، أَنَا طَالِبٌ جَدِيدٌ.",
                    "exIndo": "Apakah kamu siswa baru? Ya, saya siswa baru."
          },
          {
                    "id": 126,
                    "ar": "كَيْفَ",
                    "latin": "",
                    "indo": "Bagaimana",
                    "exAr": "كَيْفَ حَالُكَ؟ أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلَّهِ.",
                    "exIndo": "Bagaimana kabarmu? Saya baik alhamdulillah."
          },
          {
                    "id": 127,
                    "ar": "مِنْ أَيْن",
                    "latin": "",
                    "indo": "Dari mana",
                    "exAr": "مِنْ أَيْن أَنْتَ؟ أَنَا مِنْ مَالَانْج.",
                    "exIndo": "Dari mana kamu? Saya dari Malang."
          },
          {
                    "id": 128,
                    "ar": "نَهَارُكَ سَعِيدٌ / سَعِيدٌ مُبَارَكٌ",
                    "latin": "",
                    "indo": "Selamat Siang / Selamat Siang juga",
                    "exAr": "نَهَارُكَ سَعِيدٌ يَا صَدِيقِي! - سَعِيدٌ مُبَارَكٌ!",
                    "exIndo": "Selamat siang wahai temanku! - Selamat siang juga!"
          },
          {
                    "id": 129,
                    "ar": "صَبَاحُ الْخَيْرِ / صَبَاحُ النُّورِ",
                    "latin": "",
                    "indo": "Selamat Pagi / Selamat Pagi juga",
                    "exAr": "صَبَاحُ الْخَيْرِ يَا أُسْتَاذُ! - صَبَاحُ النُّورِ!",
                    "exIndo": "Selamat pagi wahai Pak Guru! - Selamat pagi juga!"
          },
          {
                    "id": 130,
                    "ar": "لَيْلَتُكَ سَعِيدَةٌ / سَعِيدَةٌ مُبَارَكَةٌ",
                    "latin": "",
                    "indo": "Selamat Malam / Selamat Malam juga",
                    "exAr": "لَيْلَتُكَ سَعِيدَةٌ! - سَعِيدَةٌ مُبَارَكَةٌ!",
                    "exIndo": "Selamat malam! - Selamat malam juga!"
          }

            ],
            hiwar: {

          "title": "مَهَارَةُ الإِسْتِمَاعِ وَالْحِوَارِ: التَّعَارُفُ (١ وَ ٢)",
          "titleIndo": "Percakapan Bahasa Arab Bab 1: Terdiri dari 2 Percakapan (Buku Kemenag 2025)",
          "dialogues": [
                    {
                              "id": 1,
                              "title": "التَّعَارُفُ ١",
                              "titleIndo": "Percakapan 1: Azzam & Naufal",
                              "lines": [
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "السَّلاَمُ عَلَيْكُمْ",
                                                  "indo": "Assalamu 'alaikum"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "وَعَلَيْكُمُ السَّلاَمُ",
                                                  "indo": "Wa 'alaikumus salam"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "أَهْلًا وَسَهْلًا",
                                                  "indo": "Selamat datang"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "أَهْلًا بِكَ",
                                                  "indo": "Selamat datang juga"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "إِسْمِي عَزَّامٌ. مَا اسْمُكَ؟",
                                                  "indo": "Namaku Azzam. Siapa namamu?"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "إِسْمِي نَوْفَلٌ",
                                                  "indo": "Namaku Naufal."
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "كَيْفَ حَالُكَ؟",
                                                  "indo": "Bagaimana kabarmu?"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "بِخَيْرٍ، الْحَمْدُ لِلَّهِ. وَأَنْتَ؟",
                                                  "indo": "Baik, alhamdulillah. Dan kamu?"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "بِخَيْرٍ، الْحَمْدُ لِلَّهِ.",
                                                  "indo": "Baik, alhamdulillah."
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "شُكْرًا",
                                                  "indo": "Terima kasih"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "عَفْوًا",
                                                  "indo": "Sama-sama"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "إِلَى اللِّقَاءِ",
                                                  "indo": "Sampai jumpa"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "مَعَ السَّلاَمَةِ",
                                                  "indo": "Semoga selamat"
                                        },
                                        {
                                                  "speaker": "نَوْفَل",
                                                  "ar": "السَّلاَمُ عَلَيْكُمْ",
                                                  "indo": "Assalamu 'alaikum"
                                        },
                                        {
                                                  "speaker": "عَزَّام",
                                                  "ar": "وَعَلَيْكُمُ السَّلاَمُ",
                                                  "indo": "Wa 'alaikumus salam"
                                        }
                              ]
                    },
                    {
                              "id": 2,
                              "title": "التَّعَارُفُ ٢",
                              "titleIndo": "Percakapan 2: Arif, Aris, Mahmud & Ahmad",
                              "lines": [
                                        {
                                                  "speaker": "عَارِف",
                                                  "ar": "السَّلاَمُ عَلَيْكُمْ",
                                                  "indo": "Assalamu 'alaikum"
                                        },
                                        {
                                                  "speaker": "عَارِس",
                                                  "ar": "وَعَلَيْكُمُ السَّلاَمُ",
                                                  "indo": "Wa 'alaikumus salam"
                                        },
                                        {
                                                  "speaker": "عَارِف",
                                                  "ar": "مِنْ أَيْن أَنْتَ يَا عَارِسُ؟",
                                                  "indo": "Dari mana kamu wahai Aris?"
                                        },
                                        {
                                                  "speaker": "عَارِس",
                                                  "ar": "أَنَا مِنْ مَالَانْج جَاوَا الشَّرْقِيَّةِ.",
                                                  "indo": "Saya dari Malang, Jawa Timur."
                                        },
                                        {
                                                  "speaker": "عَارِف",
                                                  "ar": "هَلْ أَنْتَ مَالَانْجِيٌّ؟",
                                                  "indo": "Apakah kamu orang Malang?"
                                        },
                                        {
                                                  "speaker": "عَارِس",
                                                  "ar": "نَعَمْ، أَنَا مَالَانْجِيٌّ. وَمِنْ أَيْن أَنْتَ يَا عَارِفُ؟",
                                                  "indo": "Ya, saya orang Malang. Dan dari mana kamu wahai Arif?"
                                        },
                                        {
                                                  "speaker": "عَارِف",
                                                  "ar": "أَنَا بُوغُورِيٌّ. أَنَا مِنْ بُوغُور جَاوَا الْغَرْبِيَّةِ. هٰذَا أَخِي. إِسْمُهُ مَحْمُودٌ. هُوَ مُدَرِّسٌ. هُوَ مِنْ سَامَارِينْدَا.",
                                                  "indo": "Saya orang Bogor. Saya dari Bogor Jawa Barat. Ini saudaraku. Namanya Mahmud. Dia seorang guru. Dia dari Samarinda."
                                        },
                                        {
                                                  "speaker": "عَارِس",
                                                  "ar": "أَهْلًا وَسَهْلًا يَا مَحْمُودُ. وَمَنْ هٰذَا يَا عَارِفُ؟",
                                                  "indo": "Selamat datang wahai Mahmud. Dan siapa ini wahai Arif?"
                                        },
                                        {
                                                  "speaker": "عَارِف",
                                                  "ar": "هٰذَا صَدِيقِي. إِسْمُهُ أَحْمَدُ. هُوَ طَبِيبٌ. هُوَ مِنْ جَاكَرْتَا.",
                                                  "indo": "Ini temanku. Namanya Ahmad. Dia seorang dokter. Dia dari Jakarta."
                                        },
                                        {
                                                  "speaker": "عَارِس",
                                                  "ar": "أَهْلًا وَسَهْلًا يَا أَحْمَدُ.",
                                                  "indo": "Selamat datang wahai Ahmad."
                                        }
                              ]
                    }
          ]

            },
            qiraah: {

          "title": "مَهَارَةُ الْقِرَاءَةِ: التَّعْرِيفُ بِالنَّفْسِ وَبِالْعَامِلِينَ (النَّصُّ ١ وَ ٢)",
          "titleIndo": "Maharah Qira'ah Bab 1: Terdiri dari 2 Bacaan (Buku Kemenag 2025)",
          "articles": [
                    {
                              "id": 1,
                              "title": "النَّصُّ الأَوَّلُ: التَّعْرِيفُ بِالنَّفْسِ",
                              "titleIndo": "Bacaan 1: Perkenalan Diri",
                              "textAr": "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ\nأَنَا طَالِبٌ، إِسْمِي عَزَّامٌ. وَهٰذَا مَحْمُودٌ، هُوَ طَالِبٌ، هُوَ صَدِيقِي. أَنَا طَالِبَةٌ، إِسْمِي حِلْيَةُ. وَهٰذِهِ رَفِيدَةُ، هِيَ طَالِبَةٌ، هِيَ صَدِيقَتِي. مَنْ هٰذَا؟ هٰذَا طَالِبٌ، هُوَ فَوْزَانُ، هُوَ صَدِيقِي. مَنْ هٰذِهِ؟ هٰذِهِ طَالِبَةٌ، هِيَ فَائِزَةُ، هِيَ صَدِيقَتِي.\n\nأَنْتَ صَدِيقِي يَا مَحْمُودُ! وَأَنْتَ صَدِيقِي يَا فَوْزَانُ. أَنْتِ صَدِيقَتِي يَا رَفِيدَةُ! وَأَنْتِ صَدِيقَتِي يَا فَائِزَةُ.",
                              "textIndo": "Assalamu'alaikum warahmatullahi.\nSaya seorang siswa, namaku Azzam. Dan ini Mahmud, dia seorang siswa, dia temanku. Saya seorang siswi, namaku Hilya. Dan ini Rafidah, dia seorang siswi, dia temanku. Siapa ini? Ini seorang siswa, dia Fauzan, dia temanku. Siapa ini? Ini seorang siswi, dia Fa'izah, dia temanku.\n\nKamu temanku wahai Mahmud! Dan kamu temanku wahai Fauzan. Kamu temanku wahai Rafidah! Dan kamu temanku wahai Fa'izah.",
                              "questions": [
                                        {
                                                  "q": "إِسْمِي ... ، أَنَا طَالِبٌ",
                                                  "options": [
                                                            "عَزَّامٌ",
                                                            "مَحْمُودٌ",
                                                            "فَوْزَانُ",
                                                            "صَدِيقِي"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "إِسْمِي حِلْيَةُ ، أَنَا ...",
                                                  "options": [
                                                            "طَالِبَةٌ",
                                                            "رَفِيدَةُ",
                                                            "فَائِزَةُ",
                                                            "صَدِيقَتِي"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "مَنْ هٰذَا ؟",
                                                  "options": [
                                                            "إِسْمِي",
                                                            "هٰذَا صَدِيقِي",
                                                            "هُوَ فَوْزَانُ",
                                                            "عَزَّامٌ"
                                                  ],
                                                  "answer": 2
                                        },
                                        {
                                                  "q": "... ؟ هِيَ طَالِبَةٌ",
                                                  "options": [
                                                            "مَنْ هِيَ",
                                                            "مَنْ هٰذَا",
                                                            "مَنْ أَنْتَ",
                                                            "مَنْ أَنَا"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "... ؟ أَنَا طَالِبَةٌ",
                                                  "options": [
                                                            "مَنْ هٰذِهِ",
                                                            "مَنْ هٰذَا",
                                                            "مَنْ أَنْتِ",
                                                            "مَنْ أَنَا"
                                                  ],
                                                  "answer": 2
                                        },
                                        {
                                                  "q": "أَنَا مَحْمُودٌ . ...",
                                                  "options": [
                                                            "إِسْمِي أَحْمَدُ",
                                                            "هٰذَا مَحْمُودٌ",
                                                            "أَنَا طَالِبٌ",
                                                            "هِيَ صَدِيقَتِي"
                                                  ],
                                                  "answer": 2
                                        },
                                        {
                                                  "q": "يَا رَفِيدَةُ ! ...",
                                                  "options": [
                                                            "أَنَا صَدِيقَتِي",
                                                            "أَنْتِ صَدِيقَتِي",
                                                            "هِيَ صَدِيقَتِي",
                                                            "أَنْتَ صَدِيقِي"
                                                  ],
                                                  "answer": 1
                                        },
                                        {
                                                  "q": "يَا فَوْزَانُ ! ...",
                                                  "options": [
                                                            "أَنْتِ صَدِيقَتِي",
                                                            "أَنْتَ صَدِيقِي",
                                                            "هُوَ صَدِيقِي",
                                                            "أَنَا صَدِيقِي"
                                                  ],
                                                  "answer": 1
                                        }
                              ]
                    },
                    {
                              "id": 2,
                              "title": "النَّصُّ الثَّانِي: التَّعْرِيفُ بِالْعَامِلِينَ فِي الْمَدْرَسَةِ",
                              "titleIndo": "Bacaan 2: Mengenal Warga & Staf Sekolah",
                              "textAr": "إِسْمِي فَارُوقٌ، أَنَا طَالِبٌ فِي هٰذِهِ الْمَدْرَسَةِ. وَهٰذَا أَخِي، إِسْمُهُ صَالِحٌ، هُوَ طَالِبٌ. وَهٰذِهِ صَدِيقَتِي، إِسْمُهَا فِطْرِيَّةُ، هِيَ طَالِبَةٌ. تِلْكَ مُدَرِّسَتِي، إِسْمُهَا الأُسْتَاذَةُ نَفِيسَةُ، هِيَ مُدَرِّسَةُ اللُّغَةِ الْعَرَبِيَّةِ. وَذٰلِكَ الأُسْتَاذُ مَنْصُورٌ، هُوَ نَاظِرُ الْمَدْرَسَةِ.\n\nأُنْظُرْ إِلَى هٰذِهِ الصُّورَةِ! ذٰلِكَ السَّيِّدُ عُمَرُ، هُوَ أَمِينُ الْمَكْتَبَةِ فِي هٰذِهِ الْمَدْرَسَةِ. وَتِلْكَ السَّيِّدَةُ حَفْصَةُ، هِيَ مُوَظَّفَةٌ فِي الْمَكْتَبَةِ. وَهٰذَا بَائِعٌ، إِسْمُهُ السَّيِّدُ خَالِصٌ. وَهٰذِهِ بَائِعَةٌ، إِسْمُهَا السَّيِّدَةُ فَاطِمَةُ. وَذٰلِكَ سَائِقٌ، السَّائِقُ إِسْمُهُ السَّيِّدُ حَفِيظٌ. أُنْظُرْ أَيْضًا! ذٰلِكَ بَوَّابٌ، إِسْمُهُ السَّيِّدُ مَسْعُودٌ، هُوَ مِنْ سُورَابَايَا. وَتِلْكَ خَادِمَةٌ، إِسْمُهَا نَبِيلَةُ، هِيَ مِنْ بَانْدُونْج.",
                              "textIndo": "Namaku Faruq, saya seorang siswa di sekolah ini. Dan ini saudaraku, namanya Salih, dia seorang siswa. Dan ini temanku, namanya Fitriyah, dia seorang siswi. Itu guruku, namanya Ustadzah Nafisah, dia guru Bahasa Arab. Dan itu Ustadz Mansur, dia kepala sekolah.\n\nLihatlah gambar ini! Itu Pak Umar, dia pustakawan di sekolah ini. Dan itu Bu Hafsah, dia pegawai di perpustakaan. Dan ini penjual, namanya Pak Khalis. Dan ini penjual wanita, namanya Bu Fatimah. Dan itu sopir, nama sopir itu Pak Hafiz. Lihatlah juga! Itu satpam, namanya Pak Mas'ud, dia dari Surabaya. Dan itu pembantu wanita, namanya Nabilah, dia dari Bandung.",
                              "questions": [
                                        {
                                                  "q": "مَنْ هُوَ نَاظِرُ الْمَدْرَسَةِ؟",
                                                  "options": [
                                                            "الأُسْتَاذُ مَنْصُورٌ",
                                                            "السَّيِّدُ عُمَرُ",
                                                            "فَارُوقٌ",
                                                            "صَالِحٌ"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "مِنْ أَيْن السَّيِّدُ مَسْعُودٌ (الْبَوَّابُ)؟",
                                                  "options": [
                                                            "مِنْ سُورَابَايَا",
                                                            "مِنْ بَانْدُونْج",
                                                            "مِنْ جَاكَرْتَا",
                                                            "مِنْ سَمَارَانْج"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "مَا وَظِيفَةُ الأُسْتَاذَةِ نَفِيسَةَ؟",
                                                  "options": [
                                                            "مُدَرِّسَةُ اللُّغَةِ الْعَرَبِيَّةِ",
                                                            "أَمِينَةُ الْمَكْتَبَةِ",
                                                            "طَالِبَةٌ",
                                                            "خَادِمَةٌ"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "مَنْ هُوَ أَمِينُ الْمَكْتَبَةِ فِي الْمَدْرَسَةِ؟",
                                                  "options": [
                                                            "السَّيِّدُ عُمَرُ",
                                                            "السَّيِّدُ خَالِصٌ",
                                                            "السَّيِّدُ حَفِيظٌ",
                                                            "السَّيِّدُ مَسْعُودٌ"
                                                  ],
                                                  "answer": 0
                                        },
                                        {
                                                  "q": "مِنْ أَيْن نَبِيلَةُ (الْخَادِمَةُ)؟",
                                                  "options": [
                                                            "مِنْ بَانْدُونْج",
                                                            "مِنْ سُورَابَايَا",
                                                            "مِنْ مَالَانْج",
                                                            "مِنْ بُوغُور"
                                                  ],
                                                  "answer": 0
                                        }
                              ]
                    }
          ]

            },
            qawaid: {

          "title": "الْقَوَاعِدُ وَالتَّرْكِيبُ: الضَّمَائِرُ، الْمُذَكَّرُ وَالْمُؤَنَّثُ، أَدَوَاتُ الإِسْتِفْهَامِ، الْمُبْتَدَأُ وَالْخَبَرُ",
          "titleIndo": "Tata Bahasa & Struktur Bab 1 (Buku Resmi Kemenag 2025)",
          "content": "\n        <!-- SECTION 1: ISIM DHAMIR MUNFASHIL -->\n        <div class=\"mb-8\">\n            <h3 class=\"text-lg font-bold text-bottle-green-dark mb-2 flex items-center gap-2\">\n                <span class=\"w-7 h-7 rounded-lg bg-bottle-green text-gold flex items-center justify-center text-xs\">1</span>\n                Isim Ḍamīr Munfaṣil (Kata Ganti Bebas)\n            </h3>\n            <p class=\"text-xs text-gray-600 mb-4\"><b>Isim Ḍamīr Munfaṣil</b> adalah kata ganti yang berdiri sendiri dan digunakan untuk memulai sebuah kalimat. Perinciannya sebagai berikut:</p>\n            \n            <div class=\"overflow-x-auto\">\n                <table class=\"qawaid-table w-full text-xs\">\n                    <thead>\n                        <tr class=\"bg-bottle-green text-white\">\n                            <th class=\"p-2 border border-emerald-800 text-center\">No</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Kata</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Makna</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Contoh kata yang digantikan</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Jenis</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"text-center font-bold\">1</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">هُوَ</td>\n                            <td>dia (laki-laki - 1 orang)</td>\n                            <td class=\"font-arabic text-base text-center\">عَزَّام (Azzam)</td>\n                            <td class=\"text-center\">Orang ke - 3 (yang dibicarakan)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">2</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">هِيَ</td>\n                            <td>dia (perempuan - 1 orang)</td>\n                            <td class=\"font-arabic text-base text-center\">حِلْيَة (Hilya)</td>\n                            <td class=\"text-center\">Orang ke - 3 (yang dibicarakan)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">3</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">أَنْتَ</td>\n                            <td>kamu (laki-laki - 1 orang)</td>\n                            <td class=\"font-arabic text-base text-center\">يَا عَزَّام (Hai Azzam)</td>\n                            <td class=\"text-center\">Orang ke - 2 (yang diajak bicara)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">4</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">أَنْتِ</td>\n                            <td>kamu (perempuan - 1 orang)</td>\n                            <td class=\"font-arabic text-base text-center\">يَا حِلْيَة (Hai Hilya)</td>\n                            <td class=\"text-center\">Orang ke - 2 (yang diajak bicara)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">5</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">أَنَا</td>\n                            <td>saya (lk/pr - 1 orang)</td>\n                            <td class=\"text-center text-gray-400\">-</td>\n                            <td class=\"text-center\">Orang ke - 1 (yang berbicara)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">6</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">نَحْنُ</td>\n                            <td>Kami/kita (lk/pr - banyak orang)</td>\n                            <td class=\"text-center text-gray-400\">-</td>\n                            <td class=\"text-center\">Orang ke - 1 (yang berbicara)</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <!-- SECTION 2: ISIM MUZAKKAR & ISIM MU'ANNAS -->\n        <div class=\"mb-8\">\n            <h3 class=\"text-lg font-bold text-bottle-green-dark mb-2 flex items-center gap-2\">\n                <span class=\"w-7 h-7 rounded-lg bg-bottle-green text-gold flex items-center justify-center text-xs\">2</span>\n                Isim Mużakkar & Isim Mu'annaś\n            </h3>\n            <p class=\"text-xs text-gray-600 mb-2\">Berdasarkan <b>jenis kelaminnya</b>, kalimat Isim dibagi menjadi 2, yaitu:</p>\n            <div class=\"space-y-2 text-xs text-gray-700 mb-4 pl-2\">\n                <p><b>a. Isim Mużakkar</b>: adalah kata benda yang menunjukkan makna laki-laki, seperti kata <span class=\"font-arabic text-base font-bold text-bottle-green\">\"فَائِزٌ\"</span>, <span class=\"font-arabic text-base font-bold text-bottle-green\">\"تِلْمِيذٌ\"</span>, dst.</p>\n                <p><b>b. Isim Mu'annaś</b>: adalah kata benda yang menunjukkan makna perempuan, baik ada tanda perempuan (<i>ta' marbūṭah</i>) atau tidak ada tanda perempuan (<i>ta' marbūṭah</i>). Seperti kata <span class=\"font-arabic text-base font-bold text-bottle-green\">\"فَائِزَةٌ\"</span>, <span class=\"font-arabic text-base font-bold text-bottle-green\">\"تِلْمِيذَةٌ\"</span>, dst.</p>\n            </div>\n\n            <div class=\"overflow-x-auto\">\n                <table class=\"qawaid-table w-full text-xs\">\n                    <thead>\n                        <tr class=\"bg-bottle-green text-white\">\n                            <th class=\"p-2 border border-emerald-800 text-center\">No</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Uraian</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Contoh</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"text-center font-bold\">1</td>\n                            <td>Ada tanda perempuan (<i>ta' marbūṭah</i> ة)</td>\n                            <td class=\"font-arabic text-lg font-bold text-bottle-green text-center\">تِلْمِيذَةٌ - فَائِزَةٌ</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">2</td>\n                            <td>Tidak ada tanda perempuan (<i>ta' marbūṭah</i>)</td>\n                            <td class=\"font-arabic text-lg font-bold text-bottle-green text-center\">زَيْنَبُ - أَنِيسَةُ</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <!-- SECTION 3: KATA TANYA -->\n        <div class=\"mb-8\">\n            <h3 class=\"text-lg font-bold text-bottle-green-dark mb-2 flex items-center gap-2\">\n                <span class=\"w-7 h-7 rounded-lg bg-bottle-green text-gold flex items-center justify-center text-xs\">3</span>\n                Kata Tanya (أَدَوَاتُ الإِسْتِفْهَامِ)\n            </h3>\n\n            <div class=\"overflow-x-auto\">\n                <table class=\"qawaid-table w-full text-xs\">\n                    <thead>\n                        <tr class=\"bg-bottle-green text-white\">\n                            <th class=\"p-2 border border-emerald-800 text-center\" rowspan=\"2\">No</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\" rowspan=\"2\">Kata Tanya</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\" rowspan=\"2\">Arti</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\" rowspan=\"2\">Untuk menanyakan</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\" colspan=\"2\">Contoh Percakapan</th>\n                        </tr>\n                        <tr class=\"bg-emerald-800 text-white\">\n                            <th class=\"p-2 border border-emerald-900 text-center\">Pertanyaan</th>\n                            <th class=\"p-2 border border-emerald-900 text-center\">Jawaban</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"text-center font-bold\">1</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">مَا</td>\n                            <td class=\"text-center\">Apa</td>\n                            <td>Kata benda yang tidak berakal</td>\n                            <td class=\"font-arabic text-base font-bold text-right\"><span class=\"text-red-600\">مَا</span> هٰذَا ؟ <br> <span class=\"text-red-600\">مَا</span> هٰذِهِ ؟</td>\n                            <td class=\"font-arabic text-base text-right\">هٰذَا كِتَابٌ (Ini buku)<br>هٰذِهِ مِسْطَرَةٌ (Ini penggaris)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">2</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">هَلْ</td>\n                            <td class=\"text-center\">Apakah</td>\n                            <td>Jawaban ya atau tidak</td>\n                            <td class=\"font-arabic text-base font-bold text-right\"><span class=\"text-red-600\">هَلْ</span> هٰذَا مِرْسَمٌ ؟</td>\n                            <td class=\"font-arabic text-base text-right\">نَعَمْ ، هٰذَا مِرْسَمٌ (Ya, ini pensil)<br>لاَ ، هٰذَا قَلَمٌ (Tidak, ini pena)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">3</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">مَنْ</td>\n                            <td class=\"text-center\">Siapa</td>\n                            <td>Kata benda yang berakal</td>\n                            <td class=\"font-arabic text-base font-bold text-right\"><span class=\"text-red-600\">مَنْ</span> هٰذَا ؟ <br> <span class=\"text-red-600\">مَنْ</span> هٰذِهِ ؟</td>\n                            <td class=\"font-arabic text-base text-right\">هٰذَا مَحْمُودٌ (Ini Mahmud)<br>هٰذِهِ مَحْمُودَةٌ (Ini Mahmudah)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">4</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">كَيْفَ</td>\n                            <td class=\"text-center\">Bagaimana</td>\n                            <td>Keadaan</td>\n                            <td class=\"font-arabic text-base font-bold text-right\"><span class=\"text-red-600\">كَيْفَ</span> حَالُكَ ؟</td>\n                            <td class=\"font-arabic text-base text-right\">أَنَا بِخَيْرٍ الْحَمْدُ لِلَّهِ (Saya baik alhamdulillah)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">5</td>\n                            <td class=\"font-arabic text-xl font-bold text-bottle-green text-center\">مِنْ أَيْن</td>\n                            <td class=\"text-center\">Dari mana</td>\n                            <td>Darimana datangnya suatu benda/orang</td>\n                            <td class=\"font-arabic text-base font-bold text-right\"><span class=\"text-red-600\">مِنْ أَيْن</span> أَنْتَ ؟</td>\n                            <td class=\"font-arabic text-base text-right\">أَنَا مِنْ سُورَابَايَا (Saya dari Surabaya)</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <!-- SECTION 4: MUBTADA' & KHABAR -->\n        <div class=\"mb-6\">\n            <h3 class=\"text-lg font-bold text-bottle-green-dark mb-2 flex items-center gap-2\">\n                <span class=\"w-7 h-7 rounded-lg bg-bottle-green text-gold flex items-center justify-center text-xs\">4</span>\n                Mubtada' (المبتدأ) & Khabar (الخبر)\n            </h3>\n            <p class=\"text-xs text-gray-600 mb-3\"><b>Mubtada'</b> adalah kata benda (<i>isim</i>) yang berada di awal kalimat dan berkedudukan sebagai <b>subyek</b>. Sedangkan <b>khabar</b> adalah kata yang berada setelah <i>mubtada'</i> dan berkedudukan sebagai <b>predikat</b>.</p>\n\n            <div class=\"flex items-center justify-center gap-4 bg-emerald-50 p-3 rounded-xl border border-emerald-200 mb-4 text-xs font-bold\">\n                <div class=\"bg-white px-3 py-1.5 rounded-lg border shadow-sm flex items-center gap-2\">\n                    <span class=\"font-arabic text-base text-bottle-green\">المبتدأ (Mubtada')</span> &rightarrow; <span class=\"text-emerald-700\">Subyek</span>\n                </div>\n                <div class=\"bg-white px-3 py-1.5 rounded-lg border shadow-sm flex items-center gap-2\">\n                    <span class=\"font-arabic text-base text-bottle-green\">الخبر (Khabar)</span> &rightarrow; <span class=\"text-emerald-700\">Predikat</span>\n                </div>\n            </div>\n\n            <h4 class=\"font-bold text-xs text-gray-700 mb-2\">a. Perhatikan contoh berikut:</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"qawaid-table w-full text-xs\">\n                    <thead>\n                        <tr class=\"bg-bottle-green text-white\">\n                            <th class=\"p-2 border border-emerald-800 text-center\">No</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Kalimat</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Arti</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Penjelasan</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"text-center font-bold\">1</td>\n                            <td class=\"font-arabic text-lg font-bold text-right\"><span class=\"text-red-600\">هُوَ</span> فَارُوقٌ</td>\n                            <td>Dia Faruq</td>\n                            <td rowspan=\"5\" class=\"align-top p-3 bg-slate-50 text-gray-600 leading-relaxed\">\n                                <b>Khabar dan Mubtada' harus saling menyesuaikan dengan perincian sebagai berikut:</b><br>\n                                • Jika <i>mubtada'</i> berbentuk <b>Mużakkar</b> maka <i>khabar</i> harus <b>Mużakkar</b>.<br>\n                                • Jika <i>mubtada'</i> berbentuk <b>Mu'annaś</b> maka <i>khabar</i> harus <b>Mu'annaś</b>.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">2</td>\n                            <td class=\"font-arabic text-lg font-bold text-right\"><span class=\"text-red-600\">هِيَ</span> حِلْيَةُ</td>\n                            <td>Dia Hilya</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">3</td>\n                            <td class=\"font-arabic text-lg font-bold text-right\"><span class=\"text-red-600\">أَنْتَ</span> عُمَرُ</td>\n                            <td>Kamu Umar</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">4</td>\n                            <td class=\"font-arabic text-lg font-bold text-right\"><span class=\"text-red-600\">أَنْتِ</span> رُقَيَّةُ</td>\n                            <td>Kamu Ruqoyyah</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">5</td>\n                            <td class=\"font-arabic text-lg font-bold text-right\"><span class=\"text-red-600\">أَنَا</span> مَحْمُودٌ</td>\n                            <td>Saya Mahmud</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h4 class=\"font-bold text-xs text-gray-700 mb-2\">b. Telaah dan Analisis Contoh Kesalahan & Pembenaran:</h4>\n            <div class=\"overflow-x-auto\">\n                <table class=\"qawaid-table w-full text-xs\">\n                    <thead>\n                        <tr class=\"bg-bottle-green text-white\">\n                            <th class=\"p-2 border border-emerald-800 text-center\">No</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Kalimat Salah</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Letak Kesalahan & Alasan</th>\n                            <th class=\"p-2 border border-emerald-800 text-center\">Pembenaran</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"text-center font-bold\">1</td>\n                            <td class=\"font-arabic text-lg font-bold text-red-600 text-center\">هِيَ فَارُوقٌ</td>\n                            <td>Kata <span class=\"font-arabic font-bold text-red-600\">هِيَ</span> harusnya <span class=\"font-arabic font-bold text-emerald-700\">هُوَ</span>, karena Faruq adalah nama laki-laki.</td>\n                            <td class=\"font-arabic text-lg font-bold text-emerald-700 text-center\">هُوَ فَارُوقٌ</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-center font-bold\">2</td>\n                            <td class=\"font-arabic text-lg font-bold text-red-600 text-center\">هُوَ حِلْيَةُ</td>\n                            <td>Kata <span class=\"font-arabic font-bold text-red-600\">هُوَ</span> harusnya <span class=\"font-arabic font-bold text-emerald-700\">هِيَ</span>, karena Hilya adalah nama perempuan.</td>\n                            <td class=\"font-arabic text-lg font-bold text-emerald-700 text-center\">هِيَ حِلْيَةُ</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    ",
          "practice": {
                    "instruction": "Susunlah kata-kata berikut menjadi susunan Mubtada' dan Khabar yang tepat:",
                    "words": [
                              "طَالِبٌ",
                              "هُوَ",
                              "فَارُوقٌ",
                              "نَشِيطٌ"
                    ],
                    "correctOrder": [
                              "هُوَ",
                              "فَارُوقٌ",
                              "طَالِبٌ",
                              "نَشِيطٌ"
                    ],
                    "meaning": "Dia adalah Faruq, seorang siswa yang rajin."
          }

            },
            quiz: [

          {
                    "q": "مَا هٰذَا ؟ هٰذَا ...",
                    "options": [
                              "قَلَمٌ",
                              "نَوْفَلٌ",
                              "حَسَنٌ",
                              "عُمَرُ"
                    ],
                    "answer": 0,
                    "explanation": "«مَا» تُسْتَخْدِمُ لِغَيْرِ الْعَاقِلِ (الأَشْيَاءِ) وَ «قَلَمٌ» جَمَادٌ مُذَكَّرٌ."
          },
          {
                    "q": "مَا هٰذِهِ ؟ هٰذِهِ ...",
                    "options": [
                              "حِلْيَةُ",
                              "أَنِيسَةُ",
                              "مِسْطَرَةٌ",
                              "فَاطِمَةُ"
                    ],
                    "answer": 2,
                    "explanation": "«مَا» تُسْتَخْدِمُ لِغَيْرِ الْعَاقِلِ وَ «مِسْطَرَةٌ» جَمَادٌ مُؤَنَّثٌ."
          },
          {
                    "q": "هَلْ هٰذَا قَلَمٌ ؟ ...",
                    "options": [
                              "نَعَمْ ، هٰذَا مِرْسَمٌ",
                              "نَعَمْ ، هٰذَا كِتَابٌ",
                              "لاَ ، هٰذَا قَلَمٌ",
                              "نَعَمْ ، هٰذَا قَلَمٌ"
                    ],
                    "answer": 3,
                    "explanation": "الإِجَابَةُ الصَّحِيحَةُ هِيَ الإِثْبَاتُ الْمُطَابِقُ: «نَعَمْ ، هٰذَا قَلَمٌ»."
          },
          {
                    "q": "هَلْ هٰذِهِ مِسْطَرَةٌ ؟ ...",
                    "options": [
                              "نَعَمْ ، هٰذِهِ مِسْطَرَةٌ",
                              "نَعَمْ ، هٰذِهِ مِنْضَدَةٌ",
                              "لاَ ، هٰذِهِ مِسْطَرَةٌ",
                              "نَعَمْ ، هٰذِهِ مِقْلَمَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "الإِجَابَةُ الصَّحِيحَةُ لِلْمُؤَنَّثِ: «نَعَمْ ، هٰذِهِ مِسْطَرَةٌ»."
          },
          {
                    "q": "مَنْ هٰذَا ؟ هٰذَا ...",
                    "options": [
                              "رَفٌّ",
                              "خَالِصٌ",
                              "دَفْتَرٌ",
                              "بَابٌ"
                    ],
                    "answer": 1,
                    "explanation": "«مَنْ» تُسْتَخْدِمُ لِلْعَاقِلِ (الأَشْخَاصِ) وَ «خَالِصٌ» اسْمُ رَجُلٍ."
          },
          {
                    "q": "مَنْ هٰذِهِ ؟ هٰذِهِ ...",
                    "options": [
                              "نَافِذَةٌ",
                              "سَاعَةٌ",
                              "صُورَةٌ",
                              "حَسَنَةُ"
                    ],
                    "answer": 3,
                    "explanation": "«مَنْ» تُسْتَخْدِمُ لِلْعَاقِلِ الْمُؤَنَّثِ وَ «حَسَنَةُ» اسْمُ امْرَأَةٍ."
          },
          {
                    "q": "مِنْ أَيْن أَنْتَ يَا مُشَفَّعُ ؟ أَنَا ...",
                    "options": [
                              "مِنْ جَاكَرْتَا",
                              "تِلْمِيذٌ جَدِيدٌ",
                              "أَذْهَبُ إِلَى مَالَانْج",
                              "بِخَيْرٍ الْحَمْدُ لِلَّهِ"
                    ],
                    "answer": 0,
                    "explanation": "السُّؤَالُ بـِ «مِنْ أَيْن» يَتَطَلَّبُ إِجَابَةً بِالْمَكَانِ/الْمَدِينَةِ."
          },
          {
                    "q": "... هٰذَا ؟ هٰذَا فَصْلٌ",
                    "options": [
                              "مَا",
                              "مَاذَا",
                              "مَنْ",
                              "هَلْ"
                    ],
                    "answer": 0,
                    "explanation": "«مَا» هِيَ أَدَاةُ الإِسْتِفْهَامِ لِغَيْرِ الْعَاقِلِ لِلْمُذَكَّرِ."
          },
          {
                    "q": "... هٰذِهِ ؟ هٰذِهِ مَدْرَسَةٌ",
                    "options": [
                              "مَا",
                              "مَاذَا",
                              "مَنْ",
                              "هَلْ"
                    ],
                    "answer": 0,
                    "explanation": "«مَا» تُسْتَخْدِمُ أَيْضًا لِلْمُؤَنَّثِ غَيْرِ الْعَاقِلِ."
          },
          {
                    "q": "... ؟ نَعَمْ ، هٰذَا قِرْطَاسٌ",
                    "options": [
                              "أَيْن هٰذَا الْقِرْطَاسُ",
                              "لِمَنْ هٰذَا الْقِرْطَاسُ",
                              "هَلْ هٰذَا قِرْطَاسٌ",
                              "مِنْ أَيْن هٰذَا الْقِرْطَاسُ"
                    ],
                    "answer": 2,
                    "explanation": "الإِجَابَةُ بِـ «نَعَمْ» تَكُونُ عَنْ سُؤَالٍ يَبْدَأُ بِـ «هَلْ»."
          },
          {
                    "q": "... ؟ لاَ ، هٰذِهِ كُرَّاسَةٌ",
                    "options": [
                              "أَيْن هٰذِهِ الْخَرِيطَةُ",
                              "مِنْ أَيْن هٰذِهِ الْخَرِيطَةُ",
                              "هَلْ هٰذِهِ خَرِيطَةٌ",
                              "لِمَنْ هٰذِهِ الْخَرِيطَةُ"
                    ],
                    "answer": 2,
                    "explanation": "الإِجَابَةُ بِـ «لاَ» تَكُونُ عَنْ سُؤَالٍ يَبْدَأُ بِـ «هَلْ»."
          },
          {
                    "q": "... هٰذَا ؟ هٰذَا عَلِيٌّ",
                    "options": [
                              "مَا",
                              "مَاذَا",
                              "مَنْ",
                              "هَلْ"
                    ],
                    "answer": 2,
                    "explanation": "«عَلِيٌّ» عَاقِلٌ فَيُسْأَلُ عَنْهُ بِـ «مَنْ»."
          },
          {
                    "q": "... هٰذِهِ ؟ هٰذِهِ فِطْرِيَّةُ",
                    "options": [
                              "مَا",
                              "مَاذَا",
                              "مَنْ",
                              "هَلْ"
                    ],
                    "answer": 2,
                    "explanation": "«فِطْرِيَّةُ» عَاقِلٌ مُؤَنَّثٌ فَيُسْأَلُ عَنْهَا بِـ «مَنْ»."
          },
          {
                    "q": "... أَنْتَ يَا مُخْتَارُ ؟ أَنَا مِنْ بَاسُورُوَان",
                    "options": [
                              "أَيْنَ",
                              "مِنْ أَيْن",
                              "إِلَى أَيْن",
                              "لِمَنْ"
                    ],
                    "answer": 1,
                    "explanation": "الإِجَابَةُ بِـ «أَنَا مِنْ...» تُنَاسِبُ سُؤَالَ «مِنْ أَيْن»."
          },
          {
                    "q": "مَنْ أَنْتِ ؟ ...",
                    "options": [
                              "أَنَا مُدَرِّسَةٌ",
                              "نَعَمْ ، أَنَا مُدَرِّسَةٌ",
                              "لاَ ، أَنَا طَالِبَةٌ",
                              "إِسْمِي عَائِشَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«مَنْ أَنْتِ؟» تُسْأَلُ عَنِ الصِّفَةِ أَوْ الْوَظِيفَةِ لِلْمُؤَنَّثِ."
          },
          {
                    "q": "هَلْ أَنْتَ طَالِبٌ ؟ ...",
                    "options": [
                              "أَنَا طَالِبٌ",
                              "نَعَمْ ، أَنَا مُوَظَّفٌ",
                              "نَعَمْ ، أَنَا طَالِبٌ",
                              "إِسْمِي عَلِيٌّ"
                    ],
                    "answer": 2,
                    "explanation": "الإِجَابَةُ الصَّحِيحَةُ بِـ «نَعَمْ» مَعَ تَطَابُقِ الْكَلِمَةِ «أَنَا طَالِبٌ»."
          },
          {
                    "q": "مَنْ هُوَ يَا عُثْمَانُ ؟ ...",
                    "options": [
                              "هُوَ عُثْمَانُ",
                              "نَعَمْ ، هُوَ عُمَرُ",
                              "هِيَ فِطْرِيَّةُ",
                              "هُوَ أَمِينٌ"
                    ],
                    "answer": 3,
                    "explanation": "«هُوَ أَمِينٌ» إِجَابَةٌ صَحِيحَةٌ تُبَيِّنُ الشَّخْصَ أَوْ الْوَظِيفَةَ لِلْمُذَكَّرِ."
          },
          {
                    "q": "مَنْ ... وَمَا اسْمُهَا يَا أَمِينَةُ ؟ هِيَ ... إِسْمُهَا سَلْوَى",
                    "options": [
                              "هِيَ - أُخْتِي / صَدِيقَتِي",
                              "هُوَ - أَخِي",
                              "أَنْتَ - أَخِي",
                              "أَنْتِ - أَخِي"
                    ],
                    "answer": 0,
                    "explanation": "الضَّمِيرُ الْمُؤَنَّثُ «هِيَ» يَتَنَاسَبُ مَعَ اسْمِ «سَلْوَى»."
          },
          {
                    "q": "فَارُوقٌ لَهُ أَصْدِقَاءُ فِي الْفَصْلِ . مِنْهُمْ ...",
                    "options": [
                              "مَحْرُوسٌ",
                              "مَحْبُوبٌ",
                              "مَسْرُورٌ",
                              "مَسْعُودٌ"
                    ],
                    "answer": 3,
                    "explanation": "فِي نَصِّ الْكِتَابِ الْمَدْرَسِيِّ: «مَسْعُودٌ» هُوَ اسْمُ الصَّدِيقِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( هُوَ - هِيَ - أَنْتَ - هٰذَا )",
                    "options": [
                              "هُوَ",
                              "هِيَ",
                              "أَنْتَ",
                              "هٰذَا"
                    ],
                    "answer": 3,
                    "explanation": "«هٰذَا» اسْمُ إِشَارَةٍ، بَيْنَمَا الْكَلِمَاتُ الأُخْرَى ضَمَائِرُ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( هٰذَا - هٰذِهِ - أَنَا - ذٰلِكَ )",
                    "options": [
                              "هٰذَا",
                              "هٰذِهِ",
                              "أَنَا",
                              "ذٰلِكَ"
                    ],
                    "answer": 2,
                    "explanation": "«أَنَا» ضَمِيرٌ، بَيْنَمَا الْكَلِمَاتُ الأُخْرَى أَسْمَاءُ إِشَارَةٍ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( آمِنَةُ - عَزَّامٌ - حِلْيَةُ - نَبِيلَةُ )",
                    "options": [
                              "آمِنَةُ",
                              "عَزَّامٌ",
                              "حِلْيَةُ",
                              "نَبِيلَةُ"
                    ],
                    "answer": 1,
                    "explanation": "«عَزَّامٌ» اسْمُ مُذَكَّرٍ، بَيْنَمَا الأَسْمَاءُ الأُخْرَى لِلْمُؤَنَّثِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( مَحْمُودٌ - حَمِيدٌ - أَحْمَدُ - هُوَ )",
                    "options": [
                              "مَحْمُودٌ",
                              "حَمِيدٌ",
                              "أَحْمَدُ",
                              "هُوَ"
                    ],
                    "answer": 3,
                    "explanation": "«هُوَ» ضَمِيرٌ، بَيْنَمَا الكَلِمَاتُ الأُخْرَى أَسْمَاءُ أَلْعَامِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( نَجْمَةُ - تِلْكَ - نَادِيَةُ - رَفِيدَةُ )",
                    "options": [
                              "نَجْمَةُ",
                              "تِلْكَ",
                              "نَادِيَةُ",
                              "رَفِيدَةُ"
                    ],
                    "answer": 1,
                    "explanation": "«تِلْكَ» اسْمُ إِشَارَةٍ، بَيْنَمَا الكَلِمَاتُ الأُخْرَى أَسْمَاءُ أَعْلاَمٍ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( هُوَ - رُقَيَّةُ - هِيَ - سَافِرَةُ )",
                    "options": [
                              "هُوَ",
                              "رُقَيَّةُ",
                              "هِيَ",
                              "سَافِرَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«هُوَ» لِلْمُذَكَّرِ، بَيْنَمَا الكَلِمَاتُ الأُخْرَى لِلْمُؤَنَّثِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( مَنْ - أَنْتَ - أَنْتِ - أَنَا )",
                    "options": [
                              "مَنْ",
                              "أَنْتَ",
                              "أَنْتِ",
                              "أَنَا"
                    ],
                    "answer": 0,
                    "explanation": "«مَنْ» أَدَاةُ اسْتِفْهَامٍ، بَيْنَمَا الكَلِمَاتُ الأُخْرَى ضَمَائِرُ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( أَمِينٌ - لَطِيفَةُ - حَفِيظٌ - صَالِحٌ )",
                    "options": [
                              "أَمِينٌ",
                              "لَطِيفَةُ",
                              "حَفِيظٌ",
                              "صَالِحٌ"
                    ],
                    "answer": 1,
                    "explanation": "«لَطِيفَةُ» اسْمُ مُؤَنَّثٍ، بَيْنَمَا الأَسْمَاءُ الأُخْرَى لِلْمُذَكَّرِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( هٰذَا - هُوَ - فَائِزٌ - رَفِيدَةُ )",
                    "options": [
                              "هٰذَا",
                              "هُوَ",
                              "فَائِزٌ",
                              "رَفِيدَةُ"
                    ],
                    "answer": 3,
                    "explanation": "«رَفِيدَةُ» اسْمُ مُؤَنَّثٍ، بَيْنَمَا الكَلِمَاتُ الأُخْرَى لِلْمُذَكَّرِ."
          },
          {
                    "q": "عَيِّنِ الْكَلِمَةَ الْغَرِيبَةَ مِنَ الْمَجْمُوعَةِ: ( هِيَ - مَحْمُودٌ - أَنْتِ - إِبْرَاهِيمُ )",
                    "options": [
                              "هِيَ",
                              "مَحْمُودٌ",
                              "أَنْتِ",
                              "إِبْرَاهِيمُ"
                    ],
                    "answer": 0,
                    "explanation": "«هِيَ» ضَمِيرٌ مُؤَنَّثٌ غَائِبٌ لِلْمُفْرَدِ."
          },
          {
                    "q": "مَا هِيَ التَّرْجَمَةُ الصَّحِيحَةُ لِـ «Siapa namamu hai saudaraku (lk)? Namaku Nabil»",
                    "options": [
                              "مَا اسْمُكَ يَا أَخِي؟ إِسْمِي نَبِيلٌ",
                              "مَنْ أَنْتَ يَا أَخِي؟",
                              "كَيْفَ حَالُكَ يَا أَخِي؟",
                              "مِنْ أَيْن أَنْتَ يَا أَخِي؟"
                    ],
                    "answer": 0,
                    "explanation": "التَّرْجَمَةُ الصَّحِيحَةُ هِيَ: «مَا اسْمُكَ يَا أَخِي؟ إِسْمِي نَبِيلٌ»."
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
                { id: 225, ar: "جَمِيلٌ / جَمِيلَةٌ", latin: "Jamil / Jamilah", indo: "Indah / Bagus", exAr: "الْبُسْتَانُ جَمِيلٌ جِدًّا.", exIndo: "Taman itu sangat indah." },
                { id: 226, ar: "سُلَّمٌ", latin: "Sullam", indo: "Tangga", exAr: "أَصْعَدُ السُّلَّمَ إِلَى الطَّابَقِ الثَّانِي.", exIndo: "Saya naik tangga ke lantai dua." },
                { id: 227, ar: "طَابَقٌ", latin: "Tabaq", indo: "Lantai (Tingkat)", exAr: "فَصْلِي فِي الطَّابَقِ الأَوَّلِ.", exIndo: "Kelasku berada di lantai pertama." },
                { id: 228, ar: "حَارِسٌ", latin: "Haris", indo: "Satpam / Penjaga Sekolah", exAr: "الْحَارِسُ يَقِفُ عِنْدَ بَابِ الْمَدْرَسَةِ.", exIndo: "Satpam berdiri di pintu gerbang sekolah." },
                { id: 229, ar: "عِيَادَةٌ مَدْرَسِيَّةٌ", latin: "Iyadah madrasiyyah", indo: "UKS / Poliklinik Sekolah", exAr: "الطَالِبُ الْمَرِيضُ فِي الْعِيَادَةِ.", exIndo: "Siswa yang sakit ada di UKS." },
                { id: 230, ar: "مَوْقِفُ الدَّرَّاجَاتِ", latin: "Mauqifud darrajat", indo: "Parkiran Sepeda", exAr: "أَضَعُ دَرَّاجَتِي فِي الْمَوْقِفِ.", exIndo: "Saya menaruh sepedaku di tempat parkir." }
            ],
            hiwar: {
                title: "الْحِوَارُ: جَوْلَةٌ شَامِلَةٌ فِي الْمَرَافِقِ الْمَدْرَسِيَّةِ",
                titleIndo: "Percakapan Lengkap: Keliling Fasilitas Sekolah",
                lines: [
                    { speaker: "إِلْيَاس", ar: "السَّلاَمُ عَلَيْكُمْ يَا فِرْسَانُ، هَلْ هٰذِهِ مَدْرَسَتُكَ الْجَدِيدَةُ؟", indo: "Assalamu'alaikum wahai Firsan, apakah ini sekolah barumu?" },
                    { speaker: "فِرْسَان", ar: "وَعَلَيْكُمُ السَّلاَمُ يَا إِلْيَاسُ! نَعَمْ، هٰذِهِ مَدْرَسَتِي الثَّانَوِيَّةُ الإِسْلاَمِيَّةُ الْحُكُومِيَّةُ.", indo: "Wa'alaikumussalam wahai Ilyas! Ya, ini sekolah Madrasah Tsanawiyah Negeri saya." },
                    { speaker: "إِلْيَاس", ar: "مَاشَاءَ اللَّهُ! مَدْرَسَتُكَ كَبِيرَةٌ وَجَمِيلَةٌ جِدًّا. أَيْن يَقَعُ فَصْلُكَ؟", indo: "Masya Allah! Sekolahmu sangat besar dan indah. Di mana letak kelasmu?" },
                    { speaker: "فِرْسَان", ar: "فَصْلِي فِي الطَّابَقِ الثَّانِي، نَصْعَدُ إِلَيْهِ عَبْرَ السُّلَّمِ بِجَانِبِ مَعْمَلِ الْعُلُومِ.", indo: "Kelasku di lantai dua, kita naik lewat tangga di samping laboratorium IPA." },
                    { speaker: "إِلْيَاس", ar: "وَيْن تَقَعُ الْمَكْتَبَةُ الْمَدْرَسِيَّةُ الْكَبِيرَةُ؟", indo: "Dan di mana letak perpustakaan sekolah yang besar itu?" },
                    { speaker: "فِرْسَان", ar: "الْمَكْتَبَةُ أَمَامَ غُرْفَةِ الْمُدَرِّسِينَ، وَهِيَ وَاسِعَةٌ، مَالِئَةٌ بِآلاَفِ الْكُتُبِ وَالْمَجَلاَّتِ.", indo: "Perpustakaan di depan ruang guru, perpustakaannya luas, penuh dengan ribuan buku dan majalah." },
                    { speaker: "إِلْيَاس", ar: "هَلْ يُوجَدُ مَعْمَلٌ لِلْحَاسُوبِ فِي الْمَدْرَسَةِ؟", indo: "Apakah terdapat laboratorium komputer di sekolah?" },
                    { speaker: "فِرْسَان", ar: "نَعَمْ، مَعْمَلُ الْحَاسُوبِ بِجَانِبِ غُرْفَةِ الإِدَارَةِ، فِيهِ أَجْهِزَةٌ حَدِيثَةٌ لِلطُّلاَّبِ.", indo: "Ya, laboratorium komputer di samping ruang kantor/TU, di dalamnya ada perangkat modern untuk siswa." },
                    { speaker: "إِلْيَاس", ar: "وَهَلْ تُوجَدُ حَدِيقَةٌ أَوْ بُسْتَانٌ جَمِيلٌ فِي هٰذِهِ الْمَدْرَسَةِ؟", indo: "Dan apakah ada kebun atau taman yang indah di sekolah ini?" },
                    { speaker: "فِرْسَان", ar: "نَعَمْ، اُِنْظُرْ هُنَاكَ! الْبُسْتَانُ وَرَاءَ الْمَسْجِدِ، فِيهِ أَزْهَارٌ مُلَوَّنَةٌ وَأَشْجَارٌ ظَلِيلَةٌ.", indo: "Ya, lihatlah di sana! Taman ada di belakang masjid, di dalamnya ada bunga berwarna-warni dan pohon rindang." },
                    { speaker: "إِلْيَاس", ar: "أَيْنَ يُصَلِّي الطُّلاَّبُ وَالْمُدَرِّسُونَ صَلاَةَ الظُّهْرِ؟", indo: "Di mana para siswa dan guru shalat Zuhur?" },
                    { speaker: "فِرْسَان", ar: "نُصَلِّي جَمِيعًا فِي الْمَسْجِدِ الْكَبِيرِ فِي وَسَطِ الْمَدْرَسَةِ.", indo: "Kami semua shalat di masjid besar di tengah-tengah sekolah." },
                    { speaker: "إِلْيَاس", ar: "وَأَيْنَ يَأْكُلُ الطُّلاَّبُ فِي وَقْتِ الرَّاحَةِ وَالإِفْطَارِ؟", indo: "Dan di mana para siswa makan pada waktu istirahat?" },
                    { speaker: "فِرْسَان", ar: "يَأْكُلُونَ فِي الْمَقْصَفِ، الْمَقْصَفُ نَظِيفٌ وَبِجَانِبِ الْمَلْعَبِ الْكَبِيرِ.", indo: "Mereka makan di kantin, kantinnya bersih dan ada di samping lapangan besar." },
                    { speaker: "إِلْيَاس", ar: "وَمَاذَا يَلْعَبُونَ فِي الْمَلْعَبِ؟", indo: "Dan apa yang mereka mainkan di lapangan?" },
                    { speaker: "فِرْسَان", ar: "يَلْعَبُونَ كُرَةَ الْقَدَمِ وَكُرَةَ السَّلَّةِ بِشَغَفٍ وَنَشَاطٍ.", indo: "Mereka bermain sepak bola dan bola basket dengan antusias dan aktif." },
                    { speaker: "إِلْيَاس", ar: "حَسَنًا يَا فِرْسَانُ، هَيَّا نَذْهَبُ إِلَى الْمَقْصَفِ لِنَشْتَرِيَ الْعَصِيرَ وَالْمَأْكُولاَتِ!", indo: "Baiklah wahai Firsan, ayo kita pergi ke kantin untuk membeli jus dan makanan!" },
                    { speaker: "فِرْسَان", ar: "فِكْرَةٌ مُمْتَازَةٌ وَرَائِعَةٌ، هَيَّا بِنَا صَدِيقِي!", indo: "Ide yang sangat bagus dan hebat, ayo berangkat temanku!" }
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
                    "q": "مَا مَعْنَى كَلِمَةِ «مَكْتَبَةٌ»؟",
                    "options": [
                              "الْمَكَانُ لِلْقِرَاءَةِ وَتَعَاطِي الْكُتُبِ",
                              "الْمَكَانُ لِلأَكْلِ وَالشُّرْبِ",
                              "الْمَكَانُ لِلصَّلاَةِ",
                              "الْمَكَانُ لِلَّعِبِ"
                    ],
                    "answer": 0,
                    "explanation": "الْمَكْتَبَةُ هِيَ مَكَانُ قِرَاءَةِ الْكُتُبِ وَاسْتِعَارَتِهَا."
          },
          {
                    "q": "أَيْنَ يَلْعَبُ الطُّلاَّبُ كُرَةَ الْقَدَمِ؟",
                    "options": [
                              "فِي الْمَلْعَبِ",
                              "فِي الْمَكْتَبَةِ",
                              "فِي الْمَعْمَلِ",
                              "فِي الْحَمَّامِ"
                    ],
                    "answer": 0,
                    "explanation": "يَلْعَبُ الطُّلاَّبُ فِي الْمَلْعَبِ."
          },
          {
                    "q": "أَيْنَ يَشْتَرِي الطُّلاَّبُ الطَّعَامَ فِي وَقْتِ الرَّاحَةِ؟",
                    "options": [
                              "فِي الْمَقْصَفِ",
                              "فِي الْمَسْجِدِ",
                              "فِي الإِدَارَةِ",
                              "فِي الْبُسْتَانِ"
                    ],
                    "answer": 0,
                    "explanation": "يَشْتَرِي الطُّلاَّبُ الأَطْعِمَةَ فِي الْمَقْصَفِ."
          },
          {
                    "q": "مَا هُوَ حَرْفُ الْجَرِّ فِي جُمْلَةِ «الطَالِبُ فِي الْفَصْلِ»؟",
                    "options": [
                              "الطَالِبُ",
                              "فِي",
                              "الْفَصْلِ",
                              "لاَ يُوجَدُ"
                    ],
                    "answer": 1,
                    "explanation": "«فِي» هُوَ حَرْفُ الْجَرِّ."
          },
          {
                    "q": "مَا هُوَ التَّشْكِيلُ الصَّحِيحُ لِلْكَلِمَةِ بَعْدَ حَرْفِ الْجَرِّ؟",
                    "options": [
                              "مَرْفُوعٌ (ضَمَّةٌ)",
                              "مَنْصُوبٌ (فَتْحَةٌ)",
                              "مَجْرُورٌ (كَسْرَةٌ)",
                              "سَاكِنٌ (سُكُونٌ)"
                    ],
                    "answer": 2,
                    "explanation": "الإِسْمُ بَعْدَ حَرْفِ الْجَرِّ يَكُونُ مَجْرُورًا بِالْكَسْرَةِ."
          },
          {
                    "q": "مَا مَعْنَى ظَرْفِ الْمَكَانِ «أَمَامَ»؟",
                    "options": [
                              "أَمَامَ الشَّيْءِ (Di depan)",
                              "وَرَاءَ الشَّيْءِ",
                              "بِجَانِبِ الشَّيْءِ",
                              "تَحْتَ الشَّيْءِ"
                    ],
                    "answer": 0,
                    "explanation": "«أَمَامَ» يَعْنِي Di depan."
          },
          {
                    "q": "مَا ضِدُّ (عَكْسُ) كَلِمَةِ «أَمَامَ»؟",
                    "options": [
                              "وَرَاءَ / خَلْفَ",
                              "بِجَانِبِ",
                              "تَحْتَ",
                              "فَوْقَ"
                    ],
                    "answer": 0,
                    "explanation": "ضِدُّ أَمَامَ هُوَ «وَرَاءَ» أَوْ «خَلْفَ»."
          },
          {
                    "q": "مَا ضِدُّ كَلِمَةِ «كَبِيرٌ»؟",
                    "options": [
                              "صَغِيرٌ",
                              "وَاسِعٌ",
                              "نَظِيفٌ",
                              "جَمِيلٌ"
                    ],
                    "answer": 0,
                    "explanation": "عَكْسُ كَبِيرٌ هُوَ «صَغِيرٌ»."
          },
          {
                    "q": "مَا ضِدُّ كَلِمَةِ «نَظِيفٌ»؟",
                    "options": [
                              "وَسِخٌ",
                              "جَمِيلٌ",
                              "وَاسِعٌ",
                              "مُرَتَّبٌ"
                    ],
                    "answer": 0,
                    "explanation": "عَكْسُ نَظِيفٌ هُوَ «وَسِخٌ»."
          },
          {
                    "q": "أَيُّ الجُمَلِ الآتِيَةِ تَحْتَوِي عَلَى ظَرْفِ مَكَانٍ؟",
                    "options": [
                              "الْمَسْجِدُ أَمَامَ الْفَصْلِ",
                              "أَنَا طَالِبٌ نَشِيطٌ",
                              "هٰذَا كِتَابِي",
                              "أَحْمَدُ فِي الْبَيْتِ"
                    ],
                    "answer": 0,
                    "explanation": "«أَمَامَ» فِي «الْمَسْجِدُ أَمَامَ الْفَصْلِ» هُوَ ظَرْفُ مَكَانٍ."
          },
          {
                    "q": "أَيْنَ نُصَلِّي صَلاَةَ الظُّهْرِ فِي الْمَدْرَسَةِ؟",
                    "options": [
                              "فِي الْمَسْجِدِ",
                              "فِي الْمَقْصَفِ",
                              "فِي الْمَعْمَلِ",
                              "فِي الْمَلْعَبِ"
                    ],
                    "answer": 0,
                    "explanation": "نُصَلِّي فِي الْمَسْجِدِ أَوْ الْمُصَلَّى."
          },
          {
                    "q": "مَا هُوَ الْمَكَانُ الَّذِي فِيهِ حَوَاسِيبُ لِلتَّعَلُّمِ؟",
                    "options": [
                              "مَعْمَلُ الْحَاسُوبِ",
                              "غُرْفَةُ النَّاظِرِ",
                              "الْمَقْصَفُ",
                              "الْحَمَّامُ"
                    ],
                    "answer": 0,
                    "explanation": "مَعْمَلُ الْحَاسُوبِ هُوَ لَابُورَاتُورْيُومْ الْكَمْبِيُوتَرِ."
          },
          {
                    "q": "أَيْنَ يَجْلِسُ الْمُدَرِّسُونَ قَبْلَ الدُّخُولِ إِلَى الْفَصْلِ؟",
                    "options": [
                              "فِي غُرْفَةِ الْمُدَرِّسِينَ",
                              "فِي الْمَقْصَفِ",
                              "فِي الْمَلْعَبِ",
                              "فِي الْحَمَّامِ"
                    ],
                    "answer": 0,
                    "explanation": "يَجْلِسُونَ فِي غُرْفَةِ الْمُدَرِّسِينَ."
          },
          {
                    "q": "مَا مَعْنَى «سَاحَةُ الْمَدْرَسَةِ»؟",
                    "options": [
                              "فِنَاءُ الْمَدْرَسَةِ / Halaman Sekolah",
                              "غُرْفَةُ الْمَكْتَبَةِ",
                              "مَقْصَفُ الطَّعَامِ",
                              "قَاعَةُ الإِجْتِمَاعِ"
                    ],
                    "answer": 0,
                    "explanation": "«سَاحَةُ الْمَدْرَسَةِ» هِيَ Halaman Sekolah."
          },
          {
                    "q": "أَيُّ حَرْفٍ مِنَ الْحُرُوفِ الآتِيَةِ لَيْسَ مِنْ حُرُوفِ الْجَرِّ؟",
                    "options": [
                              "فِي",
                              "عَلَى",
                              "إِلَى",
                              "ثُمَّ"
                    ],
                    "answer": 3,
                    "explanation": "«ثُمَّ» حَرْفُ عَطْفٍ وَلَيْسَ حَرْفَ جَرٍّ."
          },
          {
                    "q": "لِكَلِمَةِ «مَدْرَسَةٌ»، أَيُّ نَعْتٍ (صِفَةٍ) مُنَاسِبٍ؟",
                    "options": [
                              "كَبِيرَةٌ",
                              "كَبِيرٌ",
                              "وَاسِعٌ",
                              "نَظِيفٌ"
                    ],
                    "answer": 0,
                    "explanation": "«مَدْرَسَةٌ» مُؤَنَّثَةٌ فَيُلْحَقُ بِهَا النَّعْتُ الْمُؤَنَّثُ «كَبِيرَةٌ»."
          },
          {
                    "q": "لِكَلِمَةِ «مَسْجِدٌ»، أَيُّ نَعْتٍ (صِفَةٍ) مُنَاسِبٍ؟",
                    "options": [
                              "وَاسِعٌ",
                              "وَاسِعَةٌ",
                              "كَبِيرَةٌ",
                              "نَظِيفَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«مَسْجِدٌ» مُذَكَّرٌ فَيُلْحَقُ بِهِ النَّعْتُ الْمُذَكَّرُ «وَاسِعٌ»."
          },
          {
                    "q": "مَا مَعْنَى «بُسْتَانٌ»؟",
                    "options": [
                              "حَدِيقَةٌ / Taman / Kebun",
                              "مَلْعَبٌ",
                              "فَصْلٌ",
                              "مَقْصَفٌ"
                    ],
                    "answer": 0,
                    "explanation": "«بُسْتَانٌ» أَوْ حَدِيقَةٌ يَعْنِي Taman."
          },
          {
                    "q": "أَيْنَ نَضَعُ الدَّرَّاجَاتِ فِي الْمَدْرَسَةِ؟",
                    "options": [
                              "فِي مَوْقِفِ الدَّرَّاجَاتِ",
                              "فِي الْمَكْتَبَةِ",
                              "فِي الْمَعْمَلِ",
                              "فِي الْفَصْلِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ الدَّرَّاجَاتِ فِي مَوْقِفِ الدَّرَّاجَاتِ."
          },
          {
                    "q": "أَيْنَ يَذْهَبُ الطَالِبُ الْمَرِيضُ فِي الْمَدْرَسَةِ؟",
                    "options": [
                              "إِلَى الْعِيَادَةِ الْمَدْرَسِيَّةِ",
                              "إِلَى الْمَقْصَفِ",
                              "إِلَى الْمَلْعَبِ",
                              "إِلَى الْمَكْتَبَةِ"
                    ],
                    "answer": 0,
                    "explanation": "يَذْهَبُ إِلَى الْعِيَادَةِ الْمَدْرَسِيَّةِ (UKS)."
          },
          {
                    "q": "كَمْ طَابَقًا فِي الْمَدْرَسَةِ إِذَا كَانَ فِيهَا سُلَّمٌ؟",
                    "options": [
                              "أَكْثَرُ مِنْ طَابَقٍ",
                              "طَابَقٌ وَاحِدٌ فَقَطْ",
                              "لاَ يُوجَدُ طَابَقٌ",
                              "صِفْرٌ"
                    ],
                    "answer": 0,
                    "explanation": "وُجُودُ السُّلَّمِ يَدُلُّ عَلَى وُجُودِ طَابَقٍ ثَانٍ أَوْ أَكْثَرَ."
          },
          {
                    "q": "مَا مَعْنَى «فَوْقَ»؟",
                    "options": [
                              "أَعْلَى الشَّيْءِ (Di atas)",
                              "أَسْفَلَ الشَّيْءِ",
                              "دَاخِلَ الشَّيْءِ",
                              "خَارِجَ الشَّيْءِ"
                    ],
                    "answer": 0,
                    "explanation": "«فَوْقَ» يَعْنِي Di atas."
          },
          {
                    "q": "مَا مَعْنَى «تَحْتَ»؟",
                    "options": [
                              "أَسْفَلَ الشَّيْءِ (Di bawah)",
                              "أَعْلَى الشَّيْءِ",
                              "أَمَامَ الشَّيْءِ",
                              "بِجَانِبِ الشَّيْءِ"
                    ],
                    "answer": 0,
                    "explanation": "«تَحْتَ» يَعْنِي Di bawah."
          },
          {
                    "q": "أَيُّ كَلِمَةٍ تَعْنِي «Tangga» فِي اللُّغَةِ الْعَرَبِيَّةِ؟",
                    "options": [
                              "سُلَّمٌ",
                              "سَاحَةٌ",
                              "سَقْفٌ",
                              "سُوقٌ"
                    ],
                    "answer": 0,
                    "explanation": "«سُلَّمٌ» يَعْنِي Tangga."
          },
          {
                    "q": "مَا هُوَ حَرْفُ الْجَرِّ الَّذِي يَعْنِي «إِلَى الْغَايَةِ / Ke»؟",
                    "options": [
                              "إِلَى",
                              "مِنْ",
                              "عَلَى",
                              "فِي"
                    ],
                    "answer": 0,
                    "explanation": "«إِلَى» يَعْنِي Ke (menunjukkan tujuan)."
          },
          {
                    "q": "مَا هُوَ حَرْفُ الْجَرِّ الَّذِي يَعْنِي «مِنَ الإِبْتِدَاءِ / Dari»؟",
                    "options": [
                              "مِنْ",
                              "إِلَى",
                              "فِي",
                              "عَلَى"
                    ],
                    "answer": 0,
                    "explanation": "«مِنْ» يَعْنِي Dari (menunjukkan asal)."
          },
          {
                    "q": "مَا هُوَ حَرْفُ الْجَرِّ الَّذِي يَعْنِي «الإِسْتِعْلاَءَ / Di atas»؟",
                    "options": [
                              "عَلَى",
                              "فِي",
                              "إِلَى",
                              "مِنْ"
                    ],
                    "answer": 0,
                    "explanation": "«عَلَى» يَعْنِي Di atas (menempel)."
          },
          {
                    "q": "مَا مَعْنَى «بِجَانِبِ»؟",
                    "options": [
                              "بِقُرْبِ / Di samping",
                              "أَمَامَ",
                              "وَرَاءَ",
                              "تَحْتَ"
                    ],
                    "answer": 0,
                    "explanation": "«بِجَانِبِ» يَعْنِي Di samping."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 2)، أَيْنَ يَقَعُ الْمَسْجِدُ؟",
                    "options": [
                              "فِي وَسَطِ الْمَدْرَسَةِ",
                              "وَرَاءَ الْمَقْصَفِ",
                              "تَحْتَ السُّلَّمِ",
                              "فِي الْحَمَّامِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «الْمَسْجِدُ يَقَعُ فِي وَسَطِ الْمَدْرَسَةِ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 2)، كَيْفَ صِفَةُ الْمَكْتَبَةِ؟",
                    "options": [
                              "وَاسِعَةٌ فِيهَا آلاَفُ الْكُتُبِ",
                              "صَغِيرَةٌ وَمُظْلِمَةٌ",
                              "وَسِخَةٌ",
                              "مَغْلُوقَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «مَكْتَبَةٌ وَاسِعَةٌ فِيهَا آلاَفُ الْكُتُبِ»."
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
                { id: 325, ar: "أَبْيَضُ / بَيْضَاءُ", latin: "Abyad / Baida'", indo: "Putih", exAr: "الْوَرَقَةُ بَيْضَاءُ.", exIndo: "Kertas itu berwarna putih." },
                { id: 326, ar: "مِقَصٌّ", latin: "Miqas", indo: "Gunting", exAr: "أَقُصُّ الْوَرَقَةَ بِالْمِقَصِّ.", exIndo: "Saya menggunting kertas dengan gunting." },
                { id: 327, ar: "شَرِيطٌ لاَصِقٌ", latin: "Sarit lasiq", indo: "Isolasi / Solasi Tape", exAr: "أَلْصِقُ الصُّورَةَ بِالشَّرِيطِ اللاَّصِقِ.", exIndo: "Saya menempelkan gambar dengan isolasi." },
                { id: 328, ar: "مِلَفٌّ", latin: "Milaf", indo: "Stopmap / Folder Berkas", exAr: "أَضَعُ الأَوْرَاقَ فِي الْمِلَفِّ.", exIndo: "Saya menaruh lembaran kertas di dalam stopmap." },
                { id: 329, ar: "حِبْرٌ", latin: "Hibr", indo: "Tinta Pulpen", exAr: "حِبْرُ الْقَلَمِ أَسْوَدُ.", exIndo: "Tinta pulpen ini berwarna hitam." },
                { id: 330, ar: "طَبَاشِيرُ", latin: "Tabasir", indo: "Kapur Tulis", exAr: "نَكْتُبُ عَلَى السَّبُّورَةِ بِالطَّبَاشِيرِ.", exIndo: "Kami menulis di papan tulis dengan kapur tulis." }
            ],
            hiwar: {
                title: "الْحِوَارُ: الأَدَوَاتُ الْمَدْرَسِيَّةُ فِي الْحَقِيبَةِ",
                titleIndo: "Percakapan Lengkap: Peralatan Sekolah di Dalam Tas",
                lines: [
                    { speaker: "سَلْمَان", ar: "السَّلاَمُ عَلَيْكُمْ يَا يُوسُفُ، مَاذَا تَحْمِلُ فِي حَقِيبَتِكَ؟", indo: "Assalamu'alaikum wahai Yusuf, apa yang kamu bawa di dalam tasmu?" },
                    { speaker: "يُوسُف", ar: "وَعَلَيْكُمُ السَّلاَمُ يَا سَلْمَانُ! أَنَا أَحْمِلُ أَدَوَاتِي الْمَدْرَسِيَّةَ الْكَامِلَةَ.", indo: "Wa'alaikumussalam wahai Salman! Saya membawa peralatan sekolahku yang lengkap." },
                    { speaker: "سَلْمَان", ar: "مَاشَاءَ اللَّهُ! حَقِيبَتُكَ جَمِيلَةٌ وَلَوْنُهَا أَخْضَرُ. هَلْ فِيهَا كُتُبٌ وَدَفَاتِرُ؟", indo: "Masya Allah! Tasmu indah berwarna hijau. Apakah di dalamnya ada buku paket dan buku tulis?" },
                    { speaker: "يُوسُف", ar: "نَعَمْ، فِيهَا كِتَابُ اللُّغَةِ الْعَرَبِيَّةِ، وَكِتَابُ الرِّيَاضِيَّاتِ، وَدَفَاتِرُ مُرَتَّبَةٌ لِلْكِتَابَةِ.", indo: "Ya, di dalamnya ada buku paket Bahasa Arab, buku Matematika, dan buku tulis teratur untuk mencatat." },
                    { speaker: "سَلْمَان", ar: "وَمَا هٰذِهِ الْمِقْلَمَةُ الأَنِيقَةُ؟", indo: "Dan apa kotak pensil yang anggun ini?" },
                    { speaker: "يُوسُف", ar: "هٰذِهِ مِقْلَمَتِي الْجَدِيدَةُ، لَوْنُهَا أَزْرَقُ زَاهٍ.", indo: "Ini kotak pensil baru saya, warnanya biru cerah." },
                    { speaker: "سَلْمَان", ar: "مَاذَا تَضَعُ دَاخِلَ هٰذِهِ الْمِقْلَمَةِ؟", indo: "Apa saja yang kamu taruh di dalam kotak pensil ini?" },
                    { speaker: "يُوسُف", ar: "أَضَعُ فِيهَا قَلَمَ حِبْرٍ أَسْوَدَ، وَقَلَمَ رَصَاصٍ، وَقَلَمًا أَحْمَرَ، وَمِمْحَاةً، وَمِبْرَاةً، وَمِسْطَرَةً طَوِيلَةً.", indo: "Saya menaruh di dalamnya pulpen tinta hitam, pensil, pulpen merah, penghapus, rautan, dan penggaris panjang." },
                    { speaker: "سَلْمَان", ar: "وَهَلْ عِنْدَكَ مِقَصٌّ وَشَرِيطٌ لاَصِقٌ لِدَرْسِ الْفُنُونِ؟", indo: "Dan apakah kamu punya gunting dan isolasi untuk pelajaran seni?" },
                    { speaker: "يُوسُف", ar: "نَعَمْ، عِنْدِي مِقَصٌّ صَغِيرٌ وَشَرِيطٌ لاَصِقٌ فِي الْمِلَفِّ.", indo: "Ya, saya punya gunting kecil dan isolasi di dalam folder stopmap." },
                    { speaker: "سَلْمَان", ar: "وَمَا هٰذِهِ الْكُرَّاسَةُ الْكَبِيرَةُ ذَاتُ الغِلاَفِ الأَصْفَرِ؟", indo: "Dan apa buku besar bersampul kuning ini?" },
                    { speaker: "يُوسُف", ar: "هٰذِهِ كَرَّاسَةُ الرَّسْمِ، أَرْسُمُ فِيهَا الْمَنَاظِرَ الطَّبِيعِيَّةَ الْجَمِيلَةَ.", indo: "Ini adalah buku gambar, saya menggambar pemandangan alam yang indah di dalamnya." },
                    { speaker: "سَلْمَان", ar: "أَنْتَ طَالِبٌ مُنَظَّمٌ وَمُسْتَعِدٌّ جِدًّا لِلدِّرَاسَةِ يَا يُوسُفُ!", indo: "Kamu adalah siswa yang sangat teratur dan siap untuk belajar wahai Yusuf!" },
                    { speaker: "يُوسُف", ar: "شُكْرًا جَزِيلًا يَا سَلْمَانُ، وَالنَّظَافَةُ وَالتَّنْظِيمُ يُمَكِّنَانِنَا مِنَ النَّجَاحِ!", indo: "Terima kasih banyak wahai Salman, kebersihan dan keteraturan membuat kita sukses!" }
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
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَكْتُبُ بِهَا الدُّرُوسَ فِي الدَّفْتَرِ؟",
                    "options": [
                              "الْقَلَمُ",
                              "الْمِسْطَرَةُ",
                              "الْمِمْحَاةُ",
                              "الْمِبْرَاةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَكْتُبُ بِالْقَلَمِ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَمْحُو بِهَا خَطَأَ قَلَمِ الرَّصَاصِ؟",
                    "options": [
                              "الْمِمْحَاةُ",
                              "الْمِسْطَرَةُ",
                              "الْمِقْلَمَةُ",
                              "الْحَقِيبَةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَمْحُو الْخَطَأَ بِالْمِمْحَاةِ (Penghapus)."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَقِيسُ بِهَا الْخُطُوطَ الْمُسْتَقِيمَةَ؟",
                    "options": [
                              "الْمِسْطَرَةُ",
                              "الْمِمْحَاةُ",
                              "الْمِبْرَاةُ",
                              "الْمِقَصُّ"
                    ],
                    "answer": 0,
                    "explanation": "نَقِيسُ الْخُطُوطَ بِالْمِسْطَرَةِ (Penggaris)."
          },
          {
                    "q": "أَيْنَ نَضَعُ الأَقْلاَمَ وَالْمِمْحَاةَ وَالْمِسْطَرَةَ؟",
                    "options": [
                              "فِي الْمِقْلَمَةِ",
                              "فِي الْمَطْبَخِ",
                              "فِي الْمَسْجِدِ",
                              "فِي الْمَلْعَبِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ أَدَوَاتِ الْكِتَابَةِ فِي الْمِقْلَمَةِ (Kotak Pensil)."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «قَلَمُ الرَّصَاصِ»؟",
                    "options": [
                              "قَلَمُ الْكِتَابَةِ الْقَابِلُ لِلْمَحْوِ / Pensil",
                              "قَلَمُ الْحِبْرِ",
                              "الْمِقَصُّ",
                              "الْمِمْحَاةُ"
                    ],
                    "answer": 0,
                    "explanation": "«قَلَمُ الرَّصَاصِ» هُوَ Pensil."
          },
          {
                    "q": "مَا هِيَ الكَلِمَةُ الْمُؤَنَّثَةُ لِلَّوْنِ «أَحْمَرُ»؟",
                    "options": [
                              "حَمْرَاءُ",
                              "زَرْقَاءُ",
                              "خَضْرَاءُ",
                              "سَوْدَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "مُؤَنَّثُ «أَحْمَرُ» هُوَ «حَمْرَاءُ»."
          },
          {
                    "q": "مَا هِيَ الكَلِمَةُ الْمُؤَنَّثَةُ لِلَّوْنِ «أَزْرَقُ»؟",
                    "options": [
                              "زَرْقَاءُ",
                              "حَمْرَاءُ",
                              "خَضْرَاءُ",
                              "بَيْضَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "مُؤَنَّثُ «أَزْرَقُ» هُوَ «زَرْقَاءُ»."
          },
          {
                    "q": "مَا هِيَ الكَلِمَةُ الْمُؤَنَّثَةُ لِلَّوْنِ «أَخْضَرُ»؟",
                    "options": [
                              "خَضْرَاءُ",
                              "حَمْرَاءُ",
                              "زَرْقَاءُ",
                              "سَوْدَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "مُؤَنَّثُ «أَخْضَرُ» هُوَ «خَضْرَاءُ»."
          },
          {
                    "q": "مَا هِيَ الكَلِمَةُ الْمُؤَنَّثَةُ لِلَّوْنِ «أَسْوَدُ»؟",
                    "options": [
                              "سَوْدَاءُ",
                              "بَيْضَاءُ",
                              "حَمْرَاءُ",
                              "زَرْقَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "مُؤَنَّثُ «أَسْوَدُ» هُوَ «سَوْدَاءُ»."
          },
          {
                    "q": "مَا هِيَ الكَلِمَةُ الْمُؤَنَّثَةُ لِلَّوْنِ «أَبْيَضُ»؟",
                    "options": [
                              "بَيْضَاءُ",
                              "سَوْدَاءُ",
                              "حَمْرَاءُ",
                              "خَضْرَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "مُؤَنَّثُ «أَبْيَضُ» هُوَ «بَيْضَاءُ»."
          },
          {
                    "q": "أَيُّ التَّرَاكِيبِ الآتِيَةِ صَحِيحٌ فِيهِ النَّعْتُ وَالْمَنْعُوتُ؟",
                    "options": [
                              "قَلَمٌ أَزْرَقُ",
                              "قَلَمٌ زَرْقَاءُ",
                              "حَقِيبَةٌ أَزْرَقُ",
                              "مِسْطَرَةٌ أَحْمَرُ"
                    ],
                    "answer": 0,
                    "explanation": "«قَلَمٌ» (مُذَكَّرٌ) يَقْتَرِنُ بـِ «أَزْرَقُ» (مُذَكَّرٌ)."
          },
          {
                    "q": "أَيُّ التَّرَاكِيبِ الآتِيَةِ صَحِيحٌ فِيهِ النَّعْتُ وَالْمَنْعُوتُ؟",
                    "options": [
                              "حَقِيبَةٌ خَضْرَاءُ",
                              "حَقِيبَةٌ أَخْضَرُ",
                              "كِتَابٌ خَضْرَاءُ",
                              "دَفْتَرٌ حَمْرَاءُ"
                    ],
                    "answer": 0,
                    "explanation": "«حَقِيبَةٌ» (مُؤَنَّثٌ) تَقْتَرِنُ بـِ «خَضْرَاءُ» (مُؤَنَّثٌ)."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَقُصُّ بِهَا الْوَرَقَةَ؟",
                    "options": [
                              "الْمِقَصُّ",
                              "الْمِسْطَرَةُ",
                              "الْمِمْحَاةُ",
                              "الْمِبْرَاةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَقُصُّ الْوَرَقَ بِالْمِقَصِّ."
          },
          {
                    "q": "مَاذَا يَمْسَحُ الأُسْتَاذُ بِالْمِمْسَحَةِ؟",
                    "options": [
                              "السَّبُّورَةَ",
                              "الْمَكْتَبَ",
                              "الْكُرْسِيَّ",
                              "الْبَابَ"
                    ],
                    "answer": 0,
                    "explanation": "يَمْسَحُ الأُسْتَاذُ السَّبُّورَةَ."
          },
          {
                    "q": "مَا هُوَ الْمَكَانُ الَّذِي نُعَلِّقُ فِيهِ الْخَرِيطَةَ وَالصُّورَةَ؟",
                    "options": [
                              "الْجِدَارُ (الْحَائِطُ)",
                              "الأَرْضُ",
                              "السَّقْفُ",
                              "الْمَكْتَبُ"
                    ],
                    "answer": 0,
                    "explanation": "نُعَلِّقُ الصُّوَرَ وَالْخَرَائِطَ عَلَى الْجِدَارِ."
          },
          {
                    "q": "مَا مَعْنَى «دَفْتَرٌ / كُرَّاسَةٌ»؟",
                    "options": [
                              "كِتَابُ الْكِتَابَةِ وَالتَّسْجِيلِ / Buku Tulis",
                              "كِتَابُ الْقِرَاءَةِ",
                              "سَبُّورَةٌ",
                              "حَقِيبَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«دَفْتَرٌ» يَعْنِي Buku Tulis."
          },
          {
                    "q": "مَا مَعْنَى «كِتَابٌ»؟",
                    "options": [
                              "كِتَابُ الدِّرَاسَةِ / Buku Paket",
                              "كَرَّاسَةُ الرَّسْمِ",
                              "وَرَقَةٌ",
                              "قَلَمٌ"
                    ],
                    "answer": 0,
                    "explanation": "«كِتَابٌ» يَعْنِي Buku Paket."
          },
          {
                    "q": "أَيْنَ نَضَعُ الْكُتُبَ لِنَحْمِلَهَا إِلَى الْمَدْرَسَةِ؟",
                    "options": [
                              "فِي الْحَقِيبَةِ",
                              "فِي الْمِقْلَمَةِ",
                              "فِي الْمِمْحَاةِ",
                              "فِي الْمِسْطَرَةِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ الْكُتُبَ فِي الْحَقِيبَةِ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَبْرِي بِهَا قَلَمَ الرَّصَاصِ؟",
                    "options": [
                              "الْمِبْرَاةُ",
                              "الْمِمْحَاةُ",
                              "الْمِسْطَرَةُ",
                              "الْمِقَصُّ"
                    ],
                    "answer": 0,
                    "explanation": "نَبْرِي الْقَلَمَ بِالْمِبْرَاةِ."
          },
          {
                    "q": "مَا مَعْنَى «كَرَّاسَةُ الرَّسْمِ»؟",
                    "options": [
                              "كِتَابُ الرَّسْمِ وَالأَلْوَانِ / Buku Gambar",
                              "دَفْتَرُ الْكِتَابَةِ",
                              "وَرَقَةُ الإِمْتِحَانِ",
                              "حَقِيبَةُ الأَوْرَاقِ"
                    ],
                    "answer": 0,
                    "explanation": "«كَرَّاسَةُ الرَّسْمِ» هِيَ Buku Gambar."
          },
          {
                    "q": "أَيُّ لَوْنٍ هُوَ لَوْنُ الْمَوْزِ النَّاضِجِ؟",
                    "options": [
                              "أَصْفَرُ",
                              "أَحْمَرُ",
                              "أَزْرَقُ",
                              "أَسْوَدُ"
                    ],
                    "answer": 0,
                    "explanation": "لَوْنُ الْمَوْزِ النَّاضِجِ أَصْفَرُ."
          },
          {
                    "q": "أَيُّ لَوْنٍ هُوَ لَوْنُ الْفَحْمِ أَوْ اللَّيْلِ؟",
                    "options": [
                              "أَسْوَدُ",
                              "أَبْيَضُ",
                              "أَحْمَرُ",
                              "أَزْرَقُ"
                    ],
                    "answer": 0,
                    "explanation": "لَوْنُ اللَّيْلِ أَوْ الْفَحْمِ أَسْوَدُ."
          },
          {
                    "q": "أَيُّ لَوْنٍ هُوَ لَوْنُ الثَّلْجِ أَوْ الْوَرَقَةِ النَّظِيفَةِ؟",
                    "options": [
                              "أَبْيَضُ",
                              "أَسْوَدُ",
                              "أَخْضَرُ",
                              "أَصْفَرُ"
                    ],
                    "answer": 0,
                    "explanation": "لَوْنُ الثَّلْجِ أَبْيَضُ."
          },
          {
                    "q": "أَيُّ لَوْنٍ هُوَ لَوْنُ سَمَاءِ النَّهَارِ الصَّافِيَةِ؟",
                    "options": [
                              "أَزْرَقُ",
                              "أَحْمَرُ",
                              "أَصْفَرُ",
                              "أَسْوَدُ"
                    ],
                    "answer": 0,
                    "explanation": "لَوْنُ السَّمَاءِ أَزْرَقُ."
          },
          {
                    "q": "أَيُّ لَوْنٍ هُوَ لَوْنُ أَوْرَاقِ الشَّجَرِ الطَّازَجَةِ؟",
                    "options": [
                              "أَخْضَرُ",
                              "أَحْمَرُ",
                              "أَسْوَدُ",
                              "أَبْيَضُ"
                    ],
                    "answer": 0,
                    "explanation": "لَوْنُ الأَوْرَاقِ أَخْضَرُ."
          },
          {
                    "q": "مَا مَعْنَى «شَرِيطٌ لاَصِقٌ»؟",
                    "options": [
                              "الشَّرِيطُ لِلْتَلْصِيقِ / Isolasi",
                              "الْمِقَصُّ",
                              "الْوَرَقُ",
                              "الْمِمْحَاةُ"
                    ],
                    "answer": 0,
                    "explanation": "«شَرِيطٌ لاَصِقٌ» هُوَ Isolasi."
          },
          {
                    "q": "مَا مَعْنَى «مِلَفٌّ»؟",
                    "options": [
                              "مَحْفَظَةُ الأَوْرَاقِ / Stopmap",
                              "دَفْتَرُ الْكِتَابَةِ",
                              "الْمِقْلَمَةُ",
                              "الْحَقِيبَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«مِلَفٌّ» هُوَ Stopmap."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 3)، مَا لَوْنُ حَقِيبَةِ الطَّالِبِ؟",
                    "options": [
                              "أَخْضَرُ",
                              "أَحْمَرُ",
                              "أَزْرَقُ",
                              "أَصْفَرُ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «عِنْدِي حَقِيبَةٌ جَمِيلَةٌ لَوْنُهَا أَخْضَرُ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 3)، أَيْنَ يَضَعُ الطَّالِبُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ؟",
                    "options": [
                              "عَلَى الْمَكْتَبِ فِي الْفَصْلِ",
                              "فِي الْمَطْبَخِ",
                              "فِي الْمَسْجِدِ",
                              "تَحْتَ السَّرِيرِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «عَلَى الْمَكْتَبِ فِي الْفَصْلِ، أَضَعُ كِتَابَ اللُّغَةِ الْعَرَبِيَّةِ»."
          },
          {
                    "q": "النَّعْتُ يَتْبَعُ الْمَنْعُوتَ فِي...",
                    "options": [
                              "التَّذْكِيرِ وَالتَّأْنِيثِ",
                              "الإِعْرَابِ وَالْعَدَدِ",
                              "كُلِّ مَا سَبَقَ",
                              "لاَ شَيْءَ مِمَّا سَبَقَ"
                    ],
                    "answer": 2,
                    "explanation": "النَّعْتُ يَتْبَعُ الْمَنْعُوتَ فِي التَّذْكِيرِ وَالتَّأْنِيثِ وَالإِعْرَابِ وَالتَّعْرِيفِ."
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
                { id: 425, ar: "مَوْقِعٌ", latin: "Mauqi'", indo: "Lokasi / Posisi", exAr: "مَوْقِعُ الْبَيْتِ مُمْتَازٌ.", exIndo: "Lokasi rumahnya strategis." },
                { id: 426, ar: "حَيٌّ", latin: "Hayy", indo: "Kompleks / Kawasan Permukiman", exAr: "أَسْكُنُ فِي حَيِّ الزُّهُورِ.", exIndo: "Saya tinggal di kompleks Permukiman Bunga." },
                { id: 427, ar: "بَرِيدٌ", latin: "Barid", indo: "Pos / Surat Pos", exAr: "أَرْسَلْتُ الرِّسَالَةَ عَبْرَ الْبَرِيدِ.", exIndo: "Saya mengirim surat melalui kantor pos." },
                { id: 428, ar: "كُودٌ بَرِيدِيٌّ", latin: "Kud baridiyy", indo: "Kode Pos", exAr: "كُودُ الْبَرِيدِ لِمَدِينَتِي ٦٠١١١.", exIndo: "Kode pos kotaku adalah 60111." },
                { id: 429, ar: "مَوْقِعٌ إِلِكْتُرُونِيٌّ", latin: "Mauqi' iliktruniyy", indo: "Website / Situs Web", exAr: "مَوْقِعُ الْمَدْرَسَةِ عَلَى الإِنْتِرْنِت.", exIndo: "Website sekolah ada di internet." },
                { id: 430, ar: "خَرِيطَةُ الْمَوْقِعِ", latin: "Kharitatul mauqi'", indo: "Denah / Peta Posisi", exAr: "هٰذِهِ خَرِيطَةُ مَوْقِعِ بَيْتِي.", exIndo: "Ini adalah denah lokasi rumahku." }
            ],
            hiwar: {
                title: "الْحِوَارُ: السُّؤَالُ وَالإِجَابَةُ عَنِ الْعُنْوَانِ",
                titleIndo: "Percakapan Lengkap: Menanyakan dan Menjawab Alamat",
                lines: [
                    { speaker: "إِبْرَاهِيم", ar: "السَّلاَمُ عَلَيْكُمْ يَا إِسْمَاعِيلُ، أَيْنَ تَسْكُنُ الآنَ؟", indo: "Assalamu'alaikum wahai Ismail, di mana kamu tinggal sekarang?" },
                    { speaker: "إِسْمَاعِيل", ar: "وَعَلَيْكُمُ السَّلاَمُ يَا إِبْرَاهِيمُ! أَسْكُنُ مَعَ أُسْرَتِي فِي شَارِعِ أَحْمَد يَانِي رَقْم ٧ (سَبْعَة)، مَدِينَةِ سُورَابَايَا.", indo: "Wa'alaikumussalam wahai Ibrahim! Saya tinggal bersama keluargaku di Jalan Ahmad Yani nomor 7, kota Surabaya." },
                    { speaker: "إِبْرَاهِيم", ar: "وَفِي أَيِّ حَيٍّ يَقَعُ بَيْتُكَ؟", indo: "Dan di kawasan/kompleks mana letak rumahmu?" },
                    { speaker: "إِسْمَاعِيل", ar: "يَقَعُ بَيْتِي فِي حَيِّ الزُّهُورِ، وَهُوَ حَيٌّ هَادِئٌ وَنَظِيفٌ.", indo: "Rumahku terletak di Kompleks Bunga, kompleks yang tenang dan bersih." },
                    { speaker: "إِبْرَاهِيم", ar: "هَلْ بَيْتُكَ قَرِيبٌ مِنَ الْمَدْرَسَةِ أَمْ بَعِيدٌ عَنْهَا؟", indo: "Apakah rumahmu dekat dari sekolah atau jauh dari sekolah?" },
                    { speaker: "إِسْمَاعِيل", ar: "بَيْتِي قَرِيبٌ جِدًّا مِنَ الْمَدْرَسَةِ، الْمَسَافَةُ قَصِيرَةٌ، أَمْشِي إِلَيْهَا أَقْدَامًا فِي خَمْسِ دَقَائِقَ.", indo: "Rumahku sangat dekat dari sekolah, jaraknya pendek, saya jalan kaki ke sana dalam lima menit." },
                    { speaker: "إِبْرَاهِيم", ar: "مَا شَاءَ اللَّهُ! وَمَا رَقْمُ هَاتِفِكَ الْمَحْمُولِ (الْجَوَّالِ)؟", indo: "Masya Allah! Dan berapa nomor telepon seluler (HP) mu?" },
                    { speaker: "إِسْمَاعِيل", ar: "رَقْمُ جَوَّالِي هُوَ: ٠٨١٢٣٤٥٦٧٨٩ (صِفْر - ثَمَانِيَة - وَاحِد - إِثْنَان - ثَلاَثَة - أَرْبَعَة - خَمْسَة - سِتَّة - سَبْعَة - ثَمَانِيَة - تِسْعَة).", indo: "Nomor HP-ku adalah: 08123456789." },
                    { speaker: "إِبْرَاهِيم", ar: "وَهَلْ لَدَيْكُمْ كُودٌ بَرِيدِيٌّ لِلْمَنـْزِلِ؟", indo: "Dan apakah kalian punya kode pos untuk rumah?" },
                    { speaker: "إِسْمَاعِيل", ar: "نَعَمْ، كُودُ الْبَرِيدِ لِحَيِّنَا هُوَ: ٦٠١١١ (سِتَّة - صِفْر - وَاحِد - وَاحِد - وَاحِد).", indo: "Ya, kode pos kompleks kami adalah: 60111." },
                    { speaker: "إِبْرَاهِيم", ar: "مَا عُنْوَانُ الْبَرِيدِ الإِلِكْتُرُونِيِّ لَكَ؟", indo: "Apa alamat email milikmu?" },
                    { speaker: "إِسْمَاعِيل", ar: "عُنْوَانُ بَرِيدِي الإِلِكْتُرُونِيِّ هُوَ: ismail@gmail.com", indo: "Alamat email saya adalah: ismail@gmail.com" },
                    { speaker: "إِبْرَاهِيم", ar: "شُكْرًا جَزِيلًا يَا إِسْمَاعِيلُ! سَأَزُورُ بَيْتَكَ الكَرِيمَ فِي يَوْمِ الأَحَدِ إنْ شَاءَ اللَّهُ.", indo: "Terima kasih banyak wahai Ismail! Saya akan mengunjungi rumahmu yang mulia pada hari Minggu insya Allah." },
                    { speaker: "إِسْمَاعِيل", ar: "أَهْلًا وَسَهْلًا بِكَ فِي أَيِّ وَقْتٍ، بَيْتِي بَيْتُكَ صَدِيقِي!", indo: "Selamat datang kapan saja, rumahku adalah rumahmu temanku!" }
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
                    "q": "كَيْفَ تَسْأَلُ عَنْ عُنْوَانِ بَيْتِ صَدِيقِكَ؟",
                    "options": [
                              "مَا عُنْوَانُ بَيْتِكَ؟",
                              "مَا اسْمُكَ؟",
                              "كَيْفَ حَالُكَ؟",
                              "مِنْ أَيْن أَنْتَ؟"
                    ],
                    "answer": 0,
                    "explanation": "نَسْأَلُ عَنِ الْعُنْوَانِ بِـ «مَا عُنْوَانُ بَيْتِكَ؟»."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «شَارِعٌ»؟",
                    "options": [
                              "الطَّرِيقُ / Jalan",
                              "الرَّقْمُ",
                              "الْبَيْتُ",
                              "الْمَدِينَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«شَارِعٌ» يَعْنِي Jalan."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «رَقْمٌ»؟",
                    "options": [
                              "الْعَدَدُ / Nomor",
                              "الشَّارِعُ",
                              "الْمَدِينَةُ",
                              "الْهَاتِفُ"
                    ],
                    "answer": 0,
                    "explanation": "«رَقْمٌ» يَعْنِي Nomor."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (١)؟",
                    "options": [
                              "وَاحِدٌ",
                              "إِثْنَـانِ",
                              "ثَلاَثَةٌ",
                              "أَرْبَعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(١) هُوَ وَاحِدٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٢)؟",
                    "options": [
                              "إِثْنَـانِ",
                              "وَاحِدٌ",
                              "خَمْسَةٌ",
                              "سَبْعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٢) هُوَ إِثْنَـانِ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٣)؟",
                    "options": [
                              "ثَلاَثَةٌ",
                              "أَرْبَعَةٌ",
                              "سِتَّةٌ",
                              "تِسْعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٣) هُوَ ثَلاَثَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٤)؟",
                    "options": [
                              "أَرْبَعَةٌ",
                              "ثَلاَثَةٌ",
                              "خَمْسَةٌ",
                              "ثَمَانِيَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٤) هُوَ أَرْبَعَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٥)؟",
                    "options": [
                              "خَمْسَةٌ",
                              "سِتَّةٌ",
                              "سَبْعَةٌ",
                              "عَشَرَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٥) هُوَ خَمْسَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٦)؟",
                    "options": [
                              "سِتَّةٌ",
                              "سَبْعَةٌ",
                              "ثَمَانِيَةٌ",
                              "تِسْعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٦) هُوَ سِتَّةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٧)؟",
                    "options": [
                              "سَبْعَةٌ",
                              "سِتَّةٌ",
                              "ثَمَانِيَةٌ",
                              "عَشَرَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٧) هُوَ سَبْعَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٨)؟",
                    "options": [
                              "ثَمَانِيَةٌ",
                              "تِسْعَةٌ",
                              "عَشَرَةٌ",
                              "خَمْسَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٨) هُوَ ثَمَانِيَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٩)؟",
                    "options": [
                              "تِسْعَةٌ",
                              "ثَمَانِيَةٌ",
                              "عَشَرَةٌ",
                              "سَبْعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٩) هُوَ تِسْعَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (١٠)؟",
                    "options": [
                              "عَشَرَةٌ",
                              "تِسْعَةٌ",
                              "سِتَّةٌ",
                              "أَرْبَعَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(١٠) هُوَ عَشَرَةٌ."
          },
          {
                    "q": "مَا هُوَ الْعَدَدُ الْعَرَبِيُّ لِلرَّقْمِ (٠)؟",
                    "options": [
                              "صِفْرٌ",
                              "وَاحِدٌ",
                              "عَشَرَةٌ",
                              "ثَلاَثَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "(٠) هُوَ صِفْرٌ."
          },
          {
                    "q": "مَا ضِدُّ (عَكْسُ) كَلِمَةِ «قَرِيبٌ مِنْ»؟",
                    "options": [
                              "بَعِيدٌ عَنْ",
                              "بِجَوَارِ",
                              "أَمَامَ",
                              "تَحْتَ"
                    ],
                    "answer": 0,
                    "explanation": "عَكْسُ «قَرِيبٌ مِنْ» هُوَ «بَعِيدٌ عَنْ»."
          },
          {
                    "q": "كَيْفَ تَسْأَلُ عَنْ رَقْمِ هَاتِفِ صَدِيقِكَ؟",
                    "options": [
                              "مَا رَقْمُ هَاتِفِكَ؟",
                              "مَا اسْمُكَ؟",
                              "مِنْ أَيْن أَنْتَ؟",
                              "مَا عُنْوَانُكَ؟"
                    ],
                    "answer": 0,
                    "explanation": "نَسْأَلُ عَنْ رَقْمِ الْهَاتِفِ بـِ «مَا رَقْمُ هَاتِفِكَ؟»."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «مَدِينَةٌ»؟",
                    "options": [
                              "الْبَلَدُ الْكَبِيرُ / Kota",
                              "الْقَرْيَةُ",
                              "الشَّارِعُ",
                              "الْبَيْتُ"
                    ],
                    "answer": 0,
                    "explanation": "«مَدِينَةٌ» تَعْنِي Kota."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «قَرْيَةٌ»؟",
                    "options": [
                              "الْبَلَدُ الصَّغِيرُ / Desa",
                              "الْمَدِينَةُ الْكَبِيرَةُ",
                              "الشَّارِعُ",
                              "الْمُنَظَّمَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«قَرْيَةٌ» تَعْنِي Desa."
          },
          {
                    "q": "مَا مَعْنَى «حَيٌّ» فِي عِبَارَةِ «حَيِّ الزُّهُورِ»؟",
                    "options": [
                              "الْمِنْطَقَةُ السَّكَنِيَّةُ / Kompleks",
                              "الْحَيَوَانُ",
                              "الشَّارِعُ",
                              "الرَّقْمُ"
                    ],
                    "answer": 0,
                    "explanation": "«حَيٌّ» فِي الْعَنَاوِينِ يَعْنِي Kompleks."
          },
          {
                    "q": "مَا مَعْنَى «كُودٌ بَرِيدِيٌّ»؟",
                    "options": [
                              "رَقْمُ الْبَرِيدِ / Kode Pos",
                              "رَقْمُ الْهَاتِفِ",
                              "رَقْمُ الْبَيْتِ",
                              "عُنْوَانُ الإِيْمِيلِ"
                    ],
                    "answer": 0,
                    "explanation": "«كُودٌ بَرِيدِيٌّ» هُوَ Kode Pos."
          },
          {
                    "q": "مَا مَعْنَى «بَرِيدٌ إِلِكْتُرُونِيٌّ»؟",
                    "options": [
                              "الرِّسَالَةُ الإِلِكْتُرُونِيَّةُ / Email",
                              "مَكْتَبُ الْبَرِيدِ",
                              "خَرِيطَةُ الْبَيْتِ",
                              "رَقْمُ الْجَوَّالِ"
                    ],
                    "answer": 0,
                    "explanation": "«بَرِيدٌ إِلِكْتُرُونِيٌّ» هُوَ Email."
          },
          {
                    "q": "إِذَا كَانَ رَقْمُ الْبَيْتِ (٨)، كَيْفَ نَقْرَأُهُ بِالْعَرَبِيَّةِ؟",
                    "options": [
                              "رَقْمُ ثَمَانِيَةٍ",
                              "رَقْمُ خَمْسَةٍ",
                              "رَقْمُ سَبْعَةٍ",
                              "رَقْمُ عِشْرِينَ"
                    ],
                    "answer": 0,
                    "explanation": "الرَّقْمُ (٨) يُقْرَأُ ثَمَانِيَةً."
          },
          {
                    "q": "إِذَا كَانَ رَقْمُ الْبَيْتِ (٥)، كَيْفَ نَقْرَأُهُ بِالْعَرَبِيَّةِ؟",
                    "options": [
                              "رَقْمُ خَمْسَةٍ",
                              "رَقْمُ سِتَّةٍ",
                              "رَقْمُ أَرْبَعَةٍ",
                              "رَقْمُ ثَلاَثَةٍ"
                    ],
                    "answer": 0,
                    "explanation": "الرَّقْمُ (٥) يُقْرَأُ خَمْسَةً."
          },
          {
                    "q": "أَيُّ الْجُمَلِ الآتِيَةِ صَحِيحَةٌ لِلْإِجَابَةِ عَنِ السُّكْنَى؟",
                    "options": [
                              "أَسْكُنُ فِي شَارِعِ أَحْمَد يَانِي",
                              "أَكْتُبُ فِي شَارِعِ أَحْمَد يَانِي",
                              "أَقْرَأُ فِي شَارِعِ أَحْمَد يَانِي",
                              "أَكُلُ فِي شَارِعِ أَحْمَد يَانِي"
                    ],
                    "answer": 0,
                    "explanation": "نَسْتَخْدِمُ الْفِعْلَ «أَسْكُنُ» لِلْعُنْوَانِ."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 4)، مَا اسْمُ الشَّارِعِ الَّذِي يَسْكُنُ فِيهِ عُمَرُ؟",
                    "options": [
                              "شَارِعُ حَمْزَةَ",
                              "شَارِعُ سُوكَارْنُو",
                              "شَارِعُ أُحُدٍ",
                              "شَارِعُ سُودِيرْمَان"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «عُنْوَانُ بَيْتِي فِي شَارِعِ حَمْزَةَ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 4)، مَا رَقْمُ بَيْتِ عُمَرَ؟",
                    "options": [
                              "رَقْمُ ١٠ (عَشَرَة)",
                              "رَقْمُ ٥ (خَمْسَة)",
                              "رَقْمُ ٧ (سَبْعَة)",
                              "رَقْمُ ٣ (ثَلاَثَة)"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «رَقْمُ ١٠ (عَشَرَة)»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 4)، أَيْنَ يَقَعُ بَيْتُ عُمَرَ؟",
                    "options": [
                              "بِجَوَارِ الْمَسْجِدِ الْكَبِيرِ",
                              "بِجَوَارِ الْمَقْصَفِ",
                              "فِي الْمَلْعَبِ",
                              "فِي الْمَكْتَبَةِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «بَيْتِي بِجَوَارِ الْمَسْجِدِ الْكَبِيرِ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 4)، كَيْفَ يَذْهَبُ عُمَرُ إِلَى الْمَدْرَسَةِ؟",
                    "options": [
                              "بِالدَّرَّاجَةِ",
                              "بِالسَّيَّارَةِ",
                              "بِالْحَافِلَةِ",
                              "مَشْيًا عَلَى الأَقْدَامِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالدَّرَّاجَةِ»."
          },
          {
                    "q": "مَا مَعْنَى «بِجَوَارِ»؟",
                    "options": [
                              "بِقُرْبِ / Bersebelahan",
                              "وَرَاءَ",
                              "فَوْقَ",
                              "تَحْتَ"
                    ],
                    "answer": 0,
                    "explanation": "«بِجَوَارِ» يَعْنِي Bersebelahan."
          },
          {
                    "q": "مَا مَعْنَى «مَسَافَةٌ»؟",
                    "options": [
                              "الْبُعْدُ بَيْنَ الْمَكَانَيْنِ / Jarak",
                              "العُنْوَانُ",
                              "الشَّارِعُ",
                              "الْبَيْتُ"
                    ],
                    "answer": 0,
                    "explanation": "«مَسَافَةٌ» تَعْنِي Jarak."
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
                { id: 525, ar: "سَقْفٌ", latin: "Saqf", indo: "Atap / Plafon", exAr: "السَّقْفُ عَالٍ وَمُرْتَفِعٌ.", exIndo: "Atapnya tinggi." },
                { id: 526, ar: "مِلْعَقَةٌ", latin: "Mil'aqah", indo: "Sendok Makan", exAr: "آكُلُ الأَرُزَّ بِالْمِلْعَقَةِ.", exIndo: "Saya makan nasi menggunakan sendok." },
                { id: 527, ar: "شَوْكَةٌ", latin: "Syaukah", indo: "Garpu", exAr: "الْمِلْعَقَةُ وَالشَّوْكَةُ عَلَى طَاوِلَةِ الأَكْلِ.", exIndo: "Sendok dan garpu ada di atas meja makan." },
                { id: 528, ar: "طَبَقٌ / صَحْنٌ", latin: "Tabaq / Sahn", indo: "Piring", exAr: "أَضَعُ الطَّعَامَ فِي الطَّبَقِ.", exIndo: "Saya menaruh makanan di atas piring." },
                { id: 529, ar: "كُوبٌ / كَأْسٌ", latin: "Kub / Ka's", indo: "Gelas Minum", exAr: "أَشْرَبُ الْمَاءَ فِي الْكُوبِ.", exIndo: "Saya minum air dari gelas." },
                { id: 530, ar: "صَابُونٌ", latin: "Sabun", indo: "Sabun Mandi", exAr: "أَغْسِلُ يَدَيَّ بِالصَّابُونِ.", exIndo: "Saya mencuci kedua tanganku dengan sabun." }
            ],
            hiwar: {
                title: "الْحِوَارُ: زِيَارَةُ طَارِقٍ فِي بَيْتِ خَالِدٍ",
                titleIndo: "Percakapan Lengkap: Kunjungan Tariq di Rumah Khalid",
                lines: [
                    { speaker: "طَارِق", ar: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ يَا خَالِدُ!", indo: "Assalamu'alaikum warahmatullahi wabarakatuh wahai Khalid!" },
                    { speaker: "خَالِد", ar: "وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ يَا طَارِقُ! أَهْلًا وَسَهْلًا فِي بَيْتِي!", indo: "Wa'alaikumussalam warahmatullahi wabarakatuh wahai Tariq! Selamat datang di rumahku!" },
                    { speaker: "طَارِق", ar: "أَهْلًا بِكَ يَا خَالِدُ. بَيْتُكَ جَمِيلٌ، وَاسِعٌ، وَمُنَظَّمٌ جِدًّا!", indo: "Selamat datang juga wahai Khalid. Rumahmu sangat indah, luas, dan rapi!" },
                    { speaker: "خَالِد", ar: "شُكْرًا جَزِيلًا لَكَ. هٰذِهِ غُرْفَةُ الْجُلُوسِ، تَقَضَّلْ وَاجْلِسْ عَلَى الأَرِيكَةِ!", indo: "Terima kasih banyak. Ini adalah ruang tamu, silakan duduk di atas sofa!" },
                    { speaker: "طَارِق", ar: "شُكْرًا. مَا هٰذَا التِّلْفَازُ الْكَبِيرُ وَالسِّجَّادَةُ الْجَمِيلَةُ عَلَى الأَرْضِ؟", indo: "Terima kasih. Apa TV besar dan karpet indah di lantai ini?" },
                    { speaker: "خَالِد", ar: "نُشَاهِدُ التِّلْفَازَ مَعَ الأُسْرَةِ هُنَا، وَنَبْسُطُ السِّجَّادَةَ لِلرَّاحَةِ.", indo: "Kami menonton TV bersama keluarga di sini, dan membentangkan karpet untuk bersantai." },
                    { speaker: "طَارِق", ar: "وَأَيْنَ غُرْفَةُ مُذَاكَرَتِكَ وَدِرَاسَتِكَ؟", indo: "Dan di mana ruang belajar dan tempat belajarmu?" },
                    { speaker: "خَالِد", ar: "غُرْفَةُ الْمُذَاكَرَةِ بِجَانِبِ غُرْفَةِ النَّوْمِ. فِيهَا مَكْتَبِي، وَكُرْسِيِّي، وَخَزَانَةُ كُتُبِي.", indo: "Ruang belajar di samping kamar tidur. Di sana ada mejaku, kursiku, dan lemari bukuku." },
                    { speaker: "طَارِق", ar: "وَمَاذَا تُوجَدُ فِي غُرْفَةِ النَّوْمِ؟", indo: "Dan apa yang terdapat di dalam kamar tidur?" },
                    { speaker: "خَالِد", ar: "فِي غُرْفَةِ النَّوْمِ سَرِيرٌ مَرِيحٌ، وَوِسَادَةٌ نَاعِمَةٌ، وَمُكَيِّفُ هَوَاءِ.", indo: "Di kamar tidur ada ranjang yang nyaman, bantal yang empuk, dan AC." },
                    { speaker: "طَارِق", ar: "مَا أَرْوَعَ هٰذَا! وَمَنْ فِي الْمَطْبَخِ الآنَ؟", indo: "Betapa cantiknya ini! Dan siapa yang ada di dapur sekarang?" },
                    { speaker: "خَالِد", ar: "أُمِّي فِي الْمَطْبَخِ، هِيَ تُعِدُّ الشَّايَ السَّاخِنَ وَالْحَلْوَى اللَّذِيذَةَ لَنَا.", indo: "Ibuku di dapur, beliau menyiapkan teh panas dan kue yang lezat untuk kita." },
                    { speaker: "طَارِق", ar: "جَزَاهَا اللَّهُ خَيْرًا! وَأَيْنَ غُرْفَةُ الأَكْلِ؟", indo: "Semoga Allah membalas kebaikan beliau! Dan di mana ruang makan?" },
                    { speaker: "خَالِد", ar: "غُرْفَةُ الأَكْلِ أَمَامَ الْمَطْبَخِ، فِيهَا طَاوِلَةٌ كَبِيرَةٌ وَأَطْبَاقٌ وَأَكْوَابٌ.", indo: "Ruang makan ada di depan dapur, di sana ada meja besar, piring-piring, dan gelas-gelas." },
                    { speaker: "طَارِق", ar: "وَهَلْ عِنْدَكُمْ حَدِيقَةٌ خَالْفَ الْبَيْتِ؟", indo: "Dan apakah kalian punya taman di belakang rumah?" },
                    { speaker: "خَالِد", ar: "نَعَمْ، عِنْدَنَا حَدِيقَةٌ صَغِيرَةٌ فِيهَا أَزْهَارٌ مُلَوَّنَةٌ وَأَشْجَارٌ جَمِيلَةٌ.", indo: "Ya, kami punya taman kecil yang di dalamnya ada bunga berwarna-warni dan pohon-pohon indah." },
                    { speaker: "طَارِق", ar: "بَيْتُكَ بَيْتٌ مُبَارَكٌ وَمُرِيحٌ جِدًّا يَا خَالِدُ!", indo: "Rumahmu adalah rumah yang diberkahi dan sangat nyaman wahai Khalid!" },
                    { speaker: "خَالِد", ar: "شُكْرًا لَكَ يَا طَارِقُ، هَيَّا نَتَنَاوَلُ الشَّايَ وَالْحَلْوَى مَعًا!", indo: "Terima kasih wahai Tariq, ayo kita nikmati teh dan kue bersama-sama!" }
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
                    "q": "مَا هِيَ الْغُرْفَةُ الَّتِي نَسْتَقْبِلُ فِيهَا الضُّيُوفَ؟",
                    "options": [
                              "غُرْفَةُ الْجُلُوسِ",
                              "غُرْفَةُ النَّوْمِ",
                              "الْمَطْبَخُ",
                              "الْحَمَّامُ"
                    ],
                    "answer": 0,
                    "explanation": "نَسْتَقْبِلُ الضُّيُوفَ فِي غُرْفَةِ الْجُلُوسِ."
          },
          {
                    "q": "مَا هِيَ الْغُرْفَةُ الَّتِي نَنَامُ فِيهَا لَيْلًا؟",
                    "options": [
                              "غُرْفَةُ النَّوْمِ",
                              "غُرْفَةُ الأَكْلِ",
                              "الْمَطْبَخُ",
                              "الشُّرْفَةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَنَامُ فِي غُرْفَةِ النَّوْمِ."
          },
          {
                    "q": "مَا هُوَ الْمَكَانُ الَّذِي تَطْبُخُ فِيهِ الأُمُّ الطَّعَامَ؟",
                    "options": [
                              "الْمَطْبَخُ",
                              "غُرْفَةُ الْجُلُوسِ",
                              "الْمَصْلَى",
                              "الْمَوْقِفُ"
                    ],
                    "answer": 0,
                    "explanation": "تَطْبُخُ الأُمُّ فِي الْمَطْبَخِ."
          },
          {
                    "q": "مَا هِيَ الْغُرْفَةُ الَّتِي نَتَنَاوَلُ فِيهَا الطَّعَامَ؟",
                    "options": [
                              "غُرْفَةُ الأَكْلِ",
                              "غُرْفَةُ النَّوْمِ",
                              "الْحَمَّامُ",
                              "الشُّرْفَةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَتَنَاوَلُ الطَّعَامَ فِي غُرْفَةِ الأَكْلِ."
          },
          {
                    "q": "مَا هِيَ الْغُرْفَةُ الَّتِي نُذَاكِرُ فِيهَا الدُّرُوسَ؟",
                    "options": [
                              "غُرْفَةُ الْمُذَاكَرَةِ",
                              "الْمَطْبَخُ",
                              "الْحَمَّامُ",
                              "الْكَرَاجُ"
                    ],
                    "answer": 0,
                    "explanation": "نُذَاكِرُ فِي غُرْفَةِ الْمُذَاكَرَةِ."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «سَرِيرٌ»؟",
                    "options": [
                              "مَضْجَعُ النَّوْمِ / Ranjang",
                              "أَرِيكَةٌ",
                              "طَاوِلَةٌ",
                              "خَزَانَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«سَرِيرٌ» هُوَ Ranjang Tempat Tidur."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «وِسَادَةٌ»؟",
                    "options": [
                              "مَا يُوضَعُ تَحْتَ الرَّأْسِ عِنْدَ النَّوْمِ / Bantal",
                              "غِطَاءٌ",
                              "فِرَاشٌ",
                              "سِجَّادَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«وِسَادَةٌ» تَعْنِي Bantal."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «أَرِيكَةٌ»؟",
                    "options": [
                              "كُرْسِيٌّ مَرِيحٌ لِلْجُلُوسِ / Sofa",
                              "مَكْتَبٌ",
                              "سَرِيرٌ",
                              "رَفٌّ"
                    ],
                    "answer": 0,
                    "explanation": "«أَرِيكَةٌ» تَعْنِي Sofa."
          },
          {
                    "q": "أَيْنَ نَضَعُ الأَطْعِمَةَ وَالْمَاءَ الْبَارِدَ لِكَيْ لاَ تَفْسُدَ؟",
                    "options": [
                              "فِي الثَّلاَّجَةِ",
                              "فِي الْمَوْقِدِ",
                              "فِي التِّلْفَازِ",
                              "فِي السَّرِيرِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ الأَطْعِمَةَ فِي الثَّلاَّجَةِ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَطْبُخُ عَلَيْهَا فِي الْمَطْبَخِ؟",
                    "options": [
                              "الْمَوْقِدُ (الفُرْنُ)",
                              "الثَّلاَّجَةُ",
                              "الْمِرْوَحَةُ",
                              "الْمُكَيِّفُ"
                    ],
                    "answer": 0,
                    "explanation": "نَطْبُخُ عَلَى الْمَوْقِدِ."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «تِلْفَازٌ»؟",
                    "options": [
                              "جِهَازُ الرُّؤْيَةِ وَالْمُشَاهَدَةِ / Televisi",
                              "مِذْيَاعٌ",
                              "حَاسُوبٌ",
                              "هَاتِفٌ"
                    ],
                    "answer": 0,
                    "explanation": "«تِلْفَازٌ» هُوَ TV."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «سِجَّادَةٌ»؟",
                    "options": [
                              "بِسَاطُ الأَرْضِ / Karpet / Sajadah",
                              "سِتَارٌ",
                              "وِسَادَةٌ",
                              "غِطَاءٌ"
                    ],
                    "answer": 0,
                    "explanation": "«سِجَّادَةٌ» تَعْنِي Karpet."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «سِتَارَةٌ»؟",
                    "options": [
                              "غِطَاءُ النَّافِذَةِ / Gorden",
                              "سِجَّادَةٌ",
                              "مِصْبَاحٌ",
                              "مِرْوَحَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«سِتَارَةٌ» تَعْنِي Gorden."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي تُعْطِي النُّورَ فِي اللَّيْلِ؟",
                    "options": [
                              "الْمِصْبَاحُ",
                              "الْمِرْوَحَةُ",
                              "الْمُكَيِّفُ",
                              "التِّلْفَازُ"
                    ],
                    "answer": 0,
                    "explanation": "الْمِصْبَاحُ يُعْطِي النُّورَ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي تُحَرِّكُ الهَوَاءَ وَتُبَرِّدُ الغُرْفَةَ؟",
                    "options": [
                              "الْمِرْوَحَةُ أَوْ الْمُكَيِّفُ",
                              "المَوْقِدُ",
                              "الثَّلاَّجَةُ",
                              "السَّاعَةُ"
                    ],
                    "answer": 0,
                    "explanation": "الْمِرْوَحَةُ أَوْ الْمُكَيِّفُ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَأْكُلُ بِهَا الأَرُزَّ؟",
                    "options": [
                              "الْمِلْعَقَةُ",
                              "الشَّوْكَةُ",
                              "الْكُوبُ",
                              "الزَّهْرِيَّةُ"
                    ],
                    "answer": 0,
                    "explanation": "نَأْكُلُ بِالْمِلْعَقَةِ."
          },
          {
                    "q": "مَا هِيَ الأَدَاةُ الَّتِي نَشْرَبُ فِيهَا الْمَاءَ؟",
                    "options": [
                              "الْكُوبُ (الْكَأْسُ)",
                              "الطَّبَقُ",
                              "الْمِلْعَقَةُ",
                              "السِّكِّينُ"
                    ],
                    "answer": 0,
                    "explanation": "نَشْرَبُ فِي الْكُوبِ."
          },
          {
                    "q": "أَيْنَ نَضَعُ الطَّعَامَ عِنْدَ الأَكْلِ؟",
                    "options": [
                              "فِي الطَّبَقِ (الصَّحْنِ)",
                              "فِي الْكُوبِ",
                              "فِي الزَّهْرِيَّةِ",
                              "فِي الْمِمْحَاةِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ الطَّعَامَ فِي الطَّبَقِ."
          },
          {
                    "q": "مَا هِيَ الإِضَافَةُ فِي جُمْلَةِ «غُرْفَةُ النَّوْمِ نَظِيفَةٌ»؟",
                    "options": [
                              "غُرْفَةُ النَّوْمِ",
                              "نَظِيفَةٌ",
                              "غُرْفَةُ",
                              "النَّوْمِ نَظِيفَةٌ"
                    ],
                    "answer": 0,
                    "explanation": "«غُرْفَةُ النَّوْمِ» تَرْكِيبُ إِضَافَةٍ."
          },
          {
                    "q": "فِي تَرْكِيبِ الإِضَافَةِ، كَيْفَ يَكُونُ إِعْرَابُ «الْمُضَافِ إِلَيْهِ»؟",
                    "options": [
                              "مَجْرُورٌ دَائِمًا",
                              "مَرْفُوعٌ دَائِمًا",
                              "مَنْصُوبٌ دَائِمًا",
                              "مَجْزُومٌ"
                    ],
                    "answer": 0,
                    "explanation": "الْمُضَافُ إِلَيْهِ يَكُونُ مَجْرُورًا دَائِمًا."
          },
          {
                    "q": "أَيُّ التَّرَاكِيبِ الآتِيَةِ تَرْكِيبُ إِضَافَةٍ صَحِيحٌ؟",
                    "options": [
                              "كِتَابُ الطَالِبِ",
                              "الكِتَابُ الطَالِبِ",
                              "كِتَابٌ الطَالِبِ",
                              "كِتَابُ الطَالِبَ"
                    ],
                    "answer": 0,
                    "explanation": "«كِتَابُ الطَالِبِ» تَرْكِيبٌ صَحِيحٌ."
          },
          {
                    "q": "مَا مَعْنَى «شُكْرًا جَزِيلًا لَكَ»؟",
                    "options": [
                              "الشُّكْرُ الْكَبِيرُ / Terima kasih banyak",
                              "أَهْلًا وَسَهْلًا",
                              "إِلَى اللِّقَاءِ",
                              "عَفْوًا"
                    ],
                    "answer": 0,
                    "explanation": "تَعْنِي Terima kasih banyak."
          },
          {
                    "q": "مَا مَعْنَى «تَفَضَّلْ وَاجْلِسْ»؟",
                    "options": [
                              "تَفَضَّلْ بِالْجُلُوسِ / Silakan duduk",
                              "تَفَضَّلْ بِالأَكْلِ",
                              "تَفَضَّلْ بِالنَّوْمِ",
                              "تَفَضَّلْ بِالدُّخُولِ"
                    ],
                    "answer": 0,
                    "explanation": "تَعْنِي Silakan duduk."
          },
          {
                    "q": "مَا مَعْنَى «زَهْرِيَّةٌ»؟",
                    "options": [
                              "إِنَاءُ الأَزْهَارِ / Vas Bunga",
                              "الزَّهْرَةُ",
                              "الْحَدِيقَةُ",
                              "الشَّجَرَةُ"
                    ],
                    "answer": 0,
                    "explanation": "«زَهْرِيَّةٌ» تَعْنِي Vas Bunga."
          },
          {
                    "q": "أَيْنَ نَضَعُ السَّيَّارَةَ فِي الْبَيْتِ؟",
                    "options": [
                              "فِي مَوْقِفِ السَّيَّارَاتِ (الْكَرَاجِ)",
                              "فِي غُرْفَةِ الْجُلُوسِ",
                              "فِي الْمَطْبَخِ",
                              "فِي الْحَدِيقَةِ"
                    ],
                    "answer": 0,
                    "explanation": "نَضَعُ السَّيَّارَةَ فِي الْكَرَاجِ."
          },
          {
                    "q": "مَا مَعْنَى «شُرْفَةٌ»؟",
                    "options": [
                              "مَطَلُّ الْبَيْتِ / Balkon / Teras",
                              "السَّقْفُ",
                              "الْجِدَارُ",
                              "الْبَابُ"
                    ],
                    "answer": 0,
                    "explanation": "«شُرْفَةٌ» تَعْنِي Balkon / Teras."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 5)، كَيْفَ صِفَةُ الْبَيْتِ؟",
                    "options": [
                              "نَظِيفٌ وَمُرَتَّبٌ",
                              "وَسِخٌ وَقَدِيمٌ",
                              "صَغِيرٌ وَمُظْلِمٌ",
                              "مَهْجُورٌ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «بَيْتِي نَظِيفٌ وَمُرَتَّبٌ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 5)، مَتَى يَكْتُبُ الطَّالِبُ وَاجِبَاتِهِ؟",
                    "options": [
                              "كُلَّ مَسَاءٍ فِي غُرْفَةِ الْمُذَاكَرَةِ",
                              "فِي الصَّبَاحِ فِي الْمَطْبَخِ",
                              "فِي اللَّيْلِ فِي الْحَمَّامِ",
                              "فِي الظُّهْرِ فِي الشُّرْفَةِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «أَكْتُبُ وَاجِبَاتِي فِي غُرْفَةِ الْمُذَاكَرَةِ كُلَّ مَسَاءٍ»."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «نَافِذَةٌ»؟",
                    "options": [
                              "الشُّبَّاكُ / Jendela",
                              "الْبَابُ",
                              "السَّقْفُ",
                              "الْجِدَارُ"
                    ],
                    "answer": 0,
                    "explanation": "«نَافِذَةٌ» تَعْنِي Jendela."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «بَابٌ»؟",
                    "options": [
                              "مَدْخَلُ الْغُرْفَةِ / Pintu",
                              "النَّافِذَةُ",
                              "الْمِفْتَاحُ",
                              "الْجِدَارُ"
                    ],
                    "answer": 0,
                    "explanation": "«بَابٌ» يَعْنِي Pintu."
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
                { id: 625, ar: "يَوْمِيَّاتٌ", latin: "Yaumiyyat", indo: "Kegiatan Rutin Harian", exAr: "هٰذِهِ يَوْمِيَّاتِي الْيَوْمِيَّةُ.", exIndo: "Ini adalah kegiatan rutin harianku." },
                { id: 626, ar: "أَتَوَضَّأُ", latin: "Atawadda'u", indo: "Saya berwudhu", exAr: "أَتَوَضَّأُ قَبْلَ صَلاَةِ الصُّبْحِ.", exIndo: "Saya berwudhu sebelum shalat Subuh." },
                { id: 627, ar: "أُنَظِّفُ", latin: "Unazzifu", indo: "Saya membersihkan", exAr: "أُنَظِّفُ غُرْفَتِي كُلَّ صَبَاحٍ.", exIndo: "Saya membersihkan kamarku setiap pagi." },
                { id: 628, ar: "أَشْرَبُ", latin: "Asyrabu", indo: "Saya minum", exAr: "أَشْرَبُ الْحَلِيبَ الطَّازَجَ صَبَاحًا.", exIndo: "Saya minum susu segar di pagi hari." },
                { id: 629, ar: "آكُلُ", latin: "Aakulu", indo: "Saya makan", exAr: "آكُلُ الْفَواكِهَ اللَّذِيذَةَ.", exIndo: "Saya makan buah-buahan yang lezat." },
                { id: 630, ar: "أُمَارِسُ الرِّيَاضَةَ", latin: "Umarisur riyadan", indo: "Saya berolahraga", exAr: "أُمَارِسُ الرِّيَاضَةَ فِي مَسَاءِ يَوْمِ الأَحَدِ.", exIndo: "Saya berolahraga pada sore hari Minggu." }
            ],
            hiwar: {
                title: "الْحِوَارُ: الأَنْشِطَةُ الْيَوْمِيَّةُ الشَّامِلَةُ لِلأُسْرَةِ",
                titleIndo: "Percakapan Lengkap: Aktivitas Sehari-hari Keluarga di Rumah",
                lines: [
                    { speaker: "حَسَن", ar: "السَّلاَمُ عَلَيْكُمْ يَا حُسَيْنُ، مَتَى تَسْتَيْقِظُ مِنَ النَّوْمِ كُلَّ صَبَاحٍ؟", indo: "Assalamu'alaikum wahai Husain, kapan kamu bangun tidur setiap pagi?" },
                    { speaker: "حُسَيْن", ar: "وَعَلَيْكُمُ السَّلاَمُ يَا حَسَنُ! أَسْتَيْقِظُ مُبَكِّرًا فِي السَّاعَةِ الرَّابِعَةِ صَبَاحًا.", indo: "Wa'alaikumussalam wahai Hasan! Saya bangun lebih awal pada pukul 04.00 pagi." },
                    { speaker: "حَسَن", ar: "مَاذَا تَفْعَلُ بَعْدَ الإِسْتِيقَاظِ مُمَاشَرَةً؟", indo: "Apa yang kamu lakukan langsung setelah bangun tidur?" },
                    { speaker: "حُسَيْن", ar: "أُرَتِّبُ سَرِيرِي، ثُمَّ أَتَوَضَّأُ وَأَغْتَسِلُ فِي الْحَمَّامِ.", indo: "Saya merapikan ranjangku, kemudian berwudhu dan mandi di kamar mandi." },
                    { speaker: "حَسَن", ar: "وَأَيْنَ تُصَلِّي صَلاَةَ الصُّبْحِ؟", indo: "Dan di mana kamu shalat Subuh?" },
                    { speaker: "حُسَيْن", ar: "أُصَلِّي الصُّبْحَ جَمَاعَةً مَعَ أَبِي فِي الْمَسْجِدِ الْقَرِيبِ مِنَ الْبَيْتِ.", indo: "Saya shalat Subuh berjamaah bersama ayahku di masjid dekat rumah." },
                    { speaker: "حَسَن", ar: "مَا أَعْظَمَ ذٰلِكَ! وَمَاذَا تَفْعَلُ بَعْدَ الصَّلاَةِ؟", indo: "Betapa agungnya hal itu! Dan apa yang kamu lakukan setelah shalat?" },
                    { speaker: "حُسَيْن", ar: "أَقْرَأُ الْقُرْآنَ الْكَرِيمَ وَأُذَاكِرُ دُرُوسِي لِمُدَّةِ سَاعَةٍ.", indo: "Saya membaca Al-Qur'an dan mengulang pelajaran-pelajaranku selama satu jam." },
                    { speaker: "حَسَن", ar: "وَمَاذَا تَفْعَلُ أُمُّكَ وَأُخْتُكَ فِي هٰذَا الْوَقْتِ؟", indo: "Dan apa yang dilakukan ibu dan adikmu pada waktu ini?" },
                    { speaker: "حُسَيْن", ar: "أُمِّي تَطْبُخُ الْفَطُورَ فِي الْمَطْبَخِ، وَأُخْتِي تُسَاعِدُهَا فِي تَنْظِيفِ الطَّاوِلَةِ.", indo: "Ibuku memasak sarapan di dapur, dan adik perempuanku membantunya merapikan meja." },
                    { speaker: "حَسَن", ar: "وَأَبُوكَ، مَاذَا يَعْمَلُ قَبْلَ الذَّهَابِ إِلَى الْعَمَلِ؟", indo: "Dan ayahmu, apa yang beliau kerjakan sebelum berangkat kerja?" },
                    { speaker: "حُسَيْن", ar: "أَبِي يَقْرَأُ الْجَرِيدَةَ الْيَوْمِيَّةَ وَيَشْرَبُ الْقَهْوَةَ السَّاخِنَةَ فِي الشُّرْفَةِ.", indo: "Ayahku membaca koran harian dan minum kopi panas di teras." },
                    { speaker: "حَسَن", ar: "مَتَى تَتَنَاوَلُونَ طَعَامَ الْفَطُورِ مَعًا؟", indo: "Kapan kalian makan sarapan bersama-sama?" },
                    { speaker: "حُسَيْن", ar: "نَتَنَاوَلُ الْفَطُورَ مَعًا فِي غُرْفَةِ الأَكْلِ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا.", indo: "Kami sarapan bersama di ruang makan pada pukul 06.00 pagi." },
                    { speaker: "حَسَن", ar: "وَمَتَى تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", indo: "Dan kapan kamu pergi ke sekolah?" },
                    { speaker: "حُسَيْن", ar: "أَرْتَدِي الزِّيَّ الْمَدْرَسِيَّ وَأَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ.", indo: "Saya memakai seragam sekolah dan berangkat ke sekolah pada pukul 06.30." },
                    { speaker: "حَسَن", ar: "وَمَتَى تَرْجِعُ مِنَ الْمَدْرَسَةِ ظُهْرًا؟", indo: "Dan kapan kamu pulang dari sekolah saat siang?" },
                    { speaker: "حُسَيْن", ar: "أَرْجِعُ فِي السَّاعَةِ الْوَاحِدَةِ ظُهْرًا، أَتَنَاوَلُ الْغَدَاءَ وَأَسْتَرِيحُ قَلِيلاً.", indo: "Saya pulang pada pukul 13.00 siang, makan siang dan beristirahat sejenak." },
                    { speaker: "حَسَن", ar: "وَكَيْفَ تَقْضِي مَسَاءَكَ مَعَ الأُسْرَةِ؟", indo: "Dan bagaimana kamu menghabiskan waktu sore/malam bersama keluarga?" },
                    { speaker: "حُسَيْن", ar: "أَكْتُبُ الْوَاجِبَاتِ الْمَنـْزِلِيَّةَ، ثُمَّ نُشَاهِدُ التِّلْفَازَ، وَأَنَامُ مُبَكِّرًا فِي السَّاعَةِ التَّاسِعَةِ لَيْلًا.", indo: "Saya mengerjakan PR, lalu kami menonton TV bersama, dan saya tidur lebih awal jam 21.00 malam." },
                    { speaker: "حَسَن", ar: "مَا شَاءَ اللَّهُ! أُسْرَةٌ مُنَظَّمَةٌ، سَعِيدَةٌ، وَمُبَارَكَةٌ!", indo: "Masya Allah! Keluarga yang teratur, bahagia, dan diberkahi!" }
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
                    "q": "مَا مَعْنَى الْفِعْلِ «أَسْتَيْقِظُ»؟",
                    "options": [
                              "أَقُومُ مِنَ النَّوْمِ / Bangun tidur",
                              "أَغْتَسِلُ",
                              "أَنَامُ",
                              "آكُلُ"
                    ],
                    "answer": 0,
                    "explanation": "«أَسْتَيْقِظُ» يَعْنِي Saya bangun tidur."
          },
          {
                    "q": "مَا مَعْنَى الْفِعْلِ «أَغْتَسِلُ»؟",
                    "options": [
                              "أَسْتَحِمُّ / Saya mandi",
                              "أَتَوَضَّأُ",
                              "أَشْرَبُ",
                              "أَغْسِلُ يَدَيَّ"
                    ],
                    "answer": 0,
                    "explanation": "«أَغْتَسِلُ» يَعْنِي Saya mandi."
          },
          {
                    "q": "مَا مَعْنَى الْفِعْلِ «أُصَلِّي»؟",
                    "options": [
                              "أُؤَدِّي الصَّلاَةَ / Saya shalat",
                              "أَقْرَأُ",
                              "أَتَعَلَّمُ",
                              "أَعْمَلُ"
                    ],
                    "answer": 0,
                    "explanation": "«أُصَلِّي» يَعْنِي Saya shalat."
          },
          {
                    "q": "مَا مَعْنَى عِبَارَةِ «أَتَنَاوَلُ الْفَطُورَ»؟",
                    "options": [
                              "آكُلُ فِي الصَّبَاحِ / Sarapan pagi",
                              "آكُلُ فِي الظُّهْرِ",
                              "آكُلُ فِي اللَّيْلِ",
                              "أَشْرَبُ الْقَهْوَةَ"
                    ],
                    "answer": 0,
                    "explanation": "«الْفَطُورَ» هُوَ Sarapan Pagi."
          },
          {
                    "q": "مَا مَعْنَى عِبَارَةِ «أَتَنَاوَلُ الْغَدَاءَ»؟",
                    "options": [
                              "آكُلُ فِي النَّهَارِ أَوْ الظُّهْرِ / Makan siang",
                              "آكُلُ فِي الصَّبَاحِ",
                              "آكُلُ فِي اللَّيْلِ",
                              "أَنَامُ ظُهْرًا"
                    ],
                    "answer": 0,
                    "explanation": "«الْغَدَاءَ» هُوَ Makan Siang."
          },
          {
                    "q": "مَا مَعْنَى عِبَارَةِ «أَتَنَاوَلُ الْعَشَاءَ»؟",
                    "options": [
                              "آكُلُ فِي اللَّيْلِ / Makan malam",
                              "آكُلُ فِي الصَّبَاحِ",
                              "آكُلُ فِي الظُّهْرِ",
                              "أُمَارِسُ الرِّيَاضَةَ"
                    ],
                    "answer": 0,
                    "explanation": "«الْعَشَاءَ» هُوَ Makan Malam."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الْمُضَارِعُ لِلضَّمِيرِ «أَنَا» مِنْ «قَرَأَ»؟",
                    "options": [
                              "أَقْرَأُ",
                              "تَقْرَأُ",
                              "يَقْرَأُ",
                              "نَقْرَأُ"
                    ],
                    "answer": 0,
                    "explanation": "مَعَ «أَنَا» يَبْدَأُ الْفِعْلُ الْمُضَارِعُ بِالْهَمْزَةِ: «أَقْرَأُ»."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الْمُضَارِعُ لِلضَّمِيرِ «أَنْتَ» مِنْ «كَتَبَ»؟",
                    "options": [
                              "تَكْتُبُ",
                              "أَكْتُبُ",
                              "يَكْتُبُ",
                              "تَكْتُبِينَ"
                    ],
                    "answer": 0,
                    "explanation": "مَعَ «أَنْتَ» يَبْدَأُ الْفِعْلُ الْمُضَارِعُ بِالتَّاءِ: «تَكْتُبُ»."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الْمُضَارِعُ لِلضَّمِيرِ «أَنْتِ» مِنْ «جَلَسَ»؟",
                    "options": [
                              "تَجْلِسِينَ",
                              "تَجْلِسُ",
                              "أَجْلِسُ",
                              "يَجْلِسُ"
                    ],
                    "answer": 0,
                    "explanation": "مَعَ «أَنْتِ» يَبْدَأُ بِالتَّاءِ وَيَنْتَهِي بـِ «ـِينَ»: «تَجْلِسِينَ»."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الْمُضَارِعُ لِلضَّمِيرِ «هُوَ» مِنْ «ذَهَبَ»؟",
                    "options": [
                              "يَذْهَبُ",
                              "تَذْهَبُ",
                              "أَذْهَبُ",
                              "نَذْهَبُ"
                    ],
                    "answer": 0,
                    "explanation": "مَعَ «هُوَ» يَبْدَأُ الْفِعْلُ الْمُضَارِعُ بِالْيَاءِ: «يَذْهَبُ»."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الْمُضَارِعُ لِلضَّمِيرِ «هِيَ» مِنْ «شَرِبَ»؟",
                    "options": [
                              "تَشْرَبُ",
                              "يَشْرَبُ",
                              "أَشْرَبُ",
                              "تَشْرَبِينَ"
                    ],
                    "answer": 0,
                    "explanation": "مَعَ «هِيَ» يَبْدَأُ الْفِعْلُ الْمُضَارِعُ بِالتَّاءِ: «تَشْرَبُ»."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «أَبٌ / وَالِدٌ»؟",
                    "options": [
                              "الْوَالِدُ الْمُذَكَّرُ / Ayah",
                              "الأُمُّ",
                              "الْعَمُّ",
                              "الْجَدُّ"
                    ],
                    "answer": 0,
                    "explanation": "«أَبٌ» أَوْ «وَالِدٌ» يَعْنِي Ayah."
          },
          {
                    "q": "مَا مَعْنَى كَلِمَةِ «أُمٌّ / وَالِدَةٌ»؟",
                    "options": [
                              "الْوَالِدَةُ الْمُؤَنَّثَةُ / Ibu",
                              "الأَبُ",
                              "الْعَمَّةُ",
                              "الْجَدَّةُ"
                    ],
                    "answer": 0,
                    "explanation": "«أُمٌّ» أَوْ «وَالِدَةٌ» تَعْنِي Ibu."
          },
          {
                    "q": "مَا مَعْنَى «أَخٌ كَبِيرٌ»؟",
                    "options": [
                              "الأَخُ الأَكْبَرُ / Kakak Laki-laki",
                              "الأَخُ الأَصْغَرُ",
                              "الْعَمُّ",
                              "الْجَدُّ"
                    ],
                    "answer": 0,
                    "explanation": "«أَخٌ كَبِيرٌ» هُوَ Kakak Laki-laki."
          },
          {
                    "q": "مَا مَعْنَى «أُخْتٌ صَغِيرَةٌ»؟",
                    "options": [
                              "الأُخْتُ الأَصْغَرُ / Adik Perempuan",
                              "الأُخْتُ الأَكْبَرُ",
                              "الْعَمَّةُ",
                              "الْجَدَّةُ"
                    ],
                    "answer": 0,
                    "explanation": "«أُخْتٌ صَغِيرَةٌ» هِيَ Adik Perempuan."
          },
          {
                    "q": "مَا مَعْنَى «جَدٌّ» وَ «جَدَّةٌ»؟",
                    "options": [
                              "أَبُو الأَبِ وَأُمُّ الأَبِ / Kakek dan Nenek",
                              "الأَبُ وَالأُمُّ",
                              "الْعَمُّ وَالْعَمَّةُ",
                              "الأَخُ وَالأُخْتُ"
                    ],
                    "answer": 0,
                    "explanation": "«جَدٌّ» (Kakek) وَ «جَدَّةٌ» (Nenek)."
          },
          {
                    "q": "مَا مَعْنَى ظَرْفِ الزَّمَانِ «صَبَاحًا»؟",
                    "options": [
                              "أَوَّلُ النَّهَارِ / Pagi hari",
                              "وَسَطُ النَّهَارِ",
                              "آخِرُ النَّهَارِ",
                              "ظُلْمَةُ اللَّيْلِ"
                    ],
                    "answer": 0,
                    "explanation": "«صَبَاحًا» يَعْنِي Pagi hari."
          },
          {
                    "q": "مَا مَعْنَى ظَرْفِ الزَّمَانِ «ظُهْرًا / نَهَارًا»؟",
                    "options": [
                              "وَسَطُ النَّهَارِ / Siang hari",
                              "أَوَّلُ النَّهَارِ",
                              "اللَّيْلُ",
                              "الْفَجْرُ"
                    ],
                    "answer": 0,
                    "explanation": "«ظُهْرًا» يَعْنِي Siang hari."
          },
          {
                    "q": "مَا مَعْنَى ظَرْفِ الزَّمَانِ «مَسَاءً»؟",
                    "options": [
                              "آخِرُ النَّهَارِ / Sore hari",
                              "الصَّبَاحُ",
                              "الظُّهْرُ",
                              "الْفَجْرُ"
                    ],
                    "answer": 0,
                    "explanation": "«مَسَاءً» يَعْنِي Sore hari."
          },
          {
                    "q": "مَا مَعْنَى ظَرْفِ الزَّمَانِ «لَيْلًا»؟",
                    "options": [
                              "وَقْتُ الظَّلاَمِ / Malam hari",
                              "الصَّبَاحُ",
                              "الظُّهْرُ",
                              "الْعَصْرُ"
                    ],
                    "answer": 0,
                    "explanation": "«لَيْلًا» يَعْنِي Malam hari."
          },
          {
                    "q": "مَاذَا يَقْرَأُ الأَبُ فِي الصَّبَاحِ عِنْدَ شُرْبِ الْقَهْوَةِ؟",
                    "options": [
                              "الْجَرِيدَةَ (الصَّحِيفَةَ)",
                              "الْكِتَابَ الْمَدْرَسِيَّ",
                              "الدَّفْتَرَ",
                              "الْخَرِيطَةَ"
                    ],
                    "answer": 0,
                    "explanation": "يَقْرَأُ الأَبُ الْجَرِيدَةَ."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الَّذِي يَعْنِي «Saya Berwudhu»؟",
                    "options": [
                              "أَتَوَضَّأُ",
                              "أَغْتَسِلُ",
                              "أُصَلِّي",
                              "أَنَامُ"
                    ],
                    "answer": 0,
                    "explanation": "«أَتَوَضَّأُ» يَعْنِي Saya Berwudhu."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الَّذِي يَعْنِي «Saya Membersihkan»؟",
                    "options": [
                              "أُنَظِّفُ",
                              "أُرَتِّبُ",
                              "أَكْتُبُ",
                              "أَقْرَأُ"
                    ],
                    "answer": 0,
                    "explanation": "«أُنَظِّفُ» يَعْنِي Saya Membersihkan."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الَّذِي يَعْنِي «Saya Menonton»؟",
                    "options": [
                              "أُشَاهِدُ",
                              "أَسْمَعُ",
                              "أَقْرَأُ",
                              "أَكْتُبُ"
                    ],
                    "answer": 0,
                    "explanation": "«أُشَاهِدُ» يَعْنِي Saya Menonton."
          },
          {
                    "q": "مَا هُوَ الْفِعْلُ الَّذِي يَعْنِي «Saya Tidur»؟",
                    "options": [
                              "أَنَامُ",
                              "أَسْتَيْقِظُ",
                              "أَرْجِعُ",
                              "أَذْهَبُ"
                    ],
                    "answer": 0,
                    "explanation": "«أَنَامُ» يَعْنِي Saya Tidur."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 6)، مَتَى يَسْتَيْقِظُ عَبْدُ اللَّهِ؟",
                    "options": [
                              "فِي السَّاعَةِ الرَّابِعَةِ صَبَاحًا",
                              "فِي السَّاعَةِ السَّادِسَةِ",
                              "فِي السَّاعَةِ الثَّامِنَةِ",
                              "فِي السَّاعَةِ الثَّانِيَةِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «أَسْتَيْقِظُ كُلَّ صَبَاحٍ فِي السَّاعَةِ الرَّابِعَةِ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 6)، أَيْنَ يُصَلِّي عَبْدُ اللَّهِ الصُّبْحَ؟",
                    "options": [
                              "فِي الْمَسْجِدِ",
                              "فِي الْفَصْلِ",
                              "فِي الْمَقْصَفِ",
                              "فِي الْحَمَّامِ"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «ثُمَّ أُصَلِّي الصُّبْحَ فِي الْمَسْجِدِ»."
          },
          {
                    "q": "فِي نَصِّ قِرَاءَةِ (بَاب 6)، مَتَى يَرْجِعُ عَبْدُ اللَّهِ مِنَ الْمَدْرَسَةِ؟",
                    "options": [
                              "فِي السَّاعَةِ الْوَاحِدَةِ ظُهْرًا",
                              "فِي السَّاعَةِ الْخَامِسَةِ مَسَاءً",
                              "فِي السَّاعَةِ التاسعة لَيْلًا",
                              "فِي السَّاعَةِ السَّابِعَةِ صَبَاحًا"
                    ],
                    "answer": 0,
                    "explanation": "فِي النَّصِّ: «أَرْجِعُ مِنَ الْمَدْرَسَةِ فِي السَّاعَةِ الْوَاحِدَةِ ظُهْرًا»."
          },
          {
                    "q": "مَا مَعْنَى «أُمَارِسُ الرِّيَاضَةَ»؟",
                    "options": [
                              "أَعْمَلُ التَّمَارِينَ الْبَدَنِيَّةَ / Saya berolahraga",
                              "أَدْرُسُ الرِّيَاضِيَّاتِ",
                              "أَعْزِفُ الْمُوسِيقَى",
                              "أَجْرِي سَرِيعًا"
                    ],
                    "answer": 0,
                    "explanation": "«أُمَارِسُ الرِّيَاضَةَ» يَعْنِي Saya berolahraga."
          },
          {
                    "q": "مَا مَعْنَى «مُبَكِّرًا» فِي «أَنَامُ مُبَكِّرًا»؟",
                    "options": [
                              "فِي أَوَّلِ الْوَقْتِ / Lebih awal",
                              "مُتَأَخِّرًا",
                              "فِي الظُّهْرِ",
                              "فِي الْمَسَاءِ"
                    ],
                    "answer": 0,
                    "explanation": "«مُبَكِّرًا» يَعْنِي Lebih awal."
          }

            ]
        }
    ]
};
