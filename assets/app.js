const MODES = {
  universal: {
    title: "Universal",
    subtitle: "Semua AI",
    icon: "◎",
    ai: "general",
    groups: [
      { id: "foundation", title: "Fondasi", hint: "Apa yang dibuat dan untuk siapa.", fields: ["goal", "context", "audience", "output"] },
      { id: "style", title: "Karakter", hint: "Rasa, gaya, tone, identitas.", fields: ["style", "tone"] },
      { id: "structure", title: "Struktur", hint: "Urutan hasil yang kamu mau.", fields: ["structure"] },
      { id: "technical", title: "Detail Teknis", hint: "Batas praktis, ukuran, format, durasi.", fields: ["technical"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang perlu dihindari.", fields: ["avoid"] }
    ],
    fields: {
      goal: { label: "Tujuan", required: true, type: "textarea", rows: 3, placeholder: "Contoh: Buat prompt untuk menghasilkan lagu rock original tentang operator customer service yang lelah.", helper: "Tulis hasil utama yang kamu inginkan." },
      context: { label: "Konteks", required: true, type: "textarea", rows: 3, placeholder: "Untuk siapa, masalahnya apa, latarnya bagaimana?", helper: "Konteks membuat AI paham situasi." },
      audience: { label: "Target / Audiens", type: "input", placeholder: "Contoh: kreator musik AI, desainer, developer, pembaca umum", helper: "Siapa yang akan memakai hasilnya?" },
      output: { label: "Format Hasil", required: true, type: "input", placeholder: "Contoh: prompt siap copy, tabel, JSON, markdown, lirik lagu", helper: "Minta bentuk output yang jelas." },
      style: { label: "Gaya / Karakter", type: "textarea", rows: 3, placeholder: "Contoh: modern, profesional, tidak kaku, jelas, kuat, emosional", helper: "Nuansa yang ingin terasa." },
      tone: { label: "Tone Bahasa", type: "input", placeholder: "Contoh: santai profesional, tegas, inspiratif, teknis", helper: "Cara AI berbicara." },
      structure: { label: "Struktur", type: "textarea", rows: 3, placeholder: "Contoh: mulai dari ringkasan, lalu langkah, lalu hasil final", helper: "Susunan bagian hasil." },
      technical: { label: "Detail Teknis", type: "textarea", rows: 3, placeholder: "Contoh: maksimal 1000 karakter, bahasa Indonesia, cocok untuk copy paste", helper: "Batas teknis dan spesifikasi." },
      avoid: { label: "Hal yang Dihindari", type: "textarea", rows: 3, placeholder: "Contoh: jangan terlalu panjang, jangan datar, jangan meniru langsung, jangan ambigu", helper: "Guardrail membantu hasil lebih aman dan fokus." }
    },
    example: {
      goal: "Buat prompt universal untuk menghasilkan konten kreatif yang rapi dan siap dipakai.",
      context: "Pengguna ingin bekerja lebih cepat dengan AI tanpa harus menulis prompt dari nol setiap kali.",
      audience: "Kreator, pelajar, pekerja kreatif, developer, dan pemilik bisnis kecil.",
      output: "Prompt final siap copy ke AI umum.",
      style: "Modern, jelas, fleksibel, tidak kaku, dan mudah dipahami.",
      tone: "Santai profesional.",
      structure: "Tujuan, konteks, gaya, struktur, detail teknis, batasan, output akhir.",
      technical: "Bahasa Indonesia, maksimal 1200 karakter, bisa dipakai lintas AI.",
      avoid: "Jangan ambigu, jangan terlalu panjang, jangan memakai istilah tanpa penjelasan."
    }
  },
  music: {
    title: "Musik",
    subtitle: "Lagu / Suno / Udio",
    icon: "♫",
    ai: "music",
    groups: [
      { id: "foundation", title: "Konsep Lagu", hint: "Tema, cerita, bahasa, durasi.", fields: ["theme", "story", "language", "duration"] },
      { id: "style", title: "Gaya Musik", hint: "Genre, mood, vokal, hook.", fields: ["genre", "mood", "vocal", "hook"] },
      { id: "structure", title: "Struktur Lagu", hint: "Alur energi dari intro sampai outro.", fields: ["structure"] },
      { id: "technical", title: "Instrumen", hint: "Arah aransemen dan bagian pamer skill.", fields: ["tempo", "instrument", "lead", "drum"] },
      { id: "guardrail", title: "Batasan", hint: "Agar tidak molor, datar, atau meniru langsung.", fields: ["avoid"] }
    ],
    fields: {
      theme: { label: "Tema", required: true, type: "input", placeholder: "Contoh: operator CS yang lelah menghadapi DEPO WEDE", helper: "Satu kalimat inti lagu." },
      story: { label: "Cerita / Konflik", required: true, type: "textarea", rows: 3, placeholder: "Apa yang dialami tokohnya? Apa konfliknya? Apa klimaksnya?", helper: "Jangan terlalu panjang; cukup adegan penting." },
      language: { label: "Bahasa Lirik", type: "input", placeholder: "Indonesia, Inggris, campuran", helper: "Bahasa utama lagu." },
      duration: { label: "Durasi Target", type: "input", placeholder: "Contoh: 3.5–4.3 menit", helper: "Biar AI tidak terlalu memanjangkan." },
      genre: { label: "Genre / Subgenre", required: true, type: "input", placeholder: "Contoh: alternative pop rock, rock Melayu modern", helper: "Pilih 1–2 genre utama saja." },
      mood: { label: "Mood", type: "input", placeholder: "Contoh: emosional, gelap, kesal tertahan, dramatis", helper: "Rasa utama lagu." },
      vocal: { label: "Karakter Vokal", type: "input", placeholder: "Contoh: male baritone, gritty, emotional, clear articulation", helper: "Ciri suara dan cara bernyanyi." },
      hook: { label: "Hook Utama", type: "input", placeholder: "Contoh: DEPO, WEDE", helper: "Kata/frasa yang paling mudah diingat." },
      structure: { label: "Struktur & Dinamika", type: "textarea", rows: 4, placeholder: "Contoh: intro piano mellow, verse sedang, chorus berat, verse 2 turun, bridge double pedal, final chorus besar", helper: "Jelaskan naik-turun energi lagu." },
      tempo: { label: "Tempo", type: "input", placeholder: "Contoh: 118–124 BPM, tidak buru-buru", helper: "Kecepatan lagu." },
      instrument: { label: "Instrumen Utama", type: "textarea", rows: 3, placeholder: "Contoh: piano, heavy rhythm guitar, warm bass, live drums", helper: "Fondasi musik." },
      lead: { label: "Lead / Solo", type: "textarea", rows: 2, placeholder: "Contoh: melodic lead guitar, expressive solo, harmonized guitar lines", helper: "Bagian yang bisa menonjolkan skill." },
      drum: { label: "Drum", type: "input", placeholder: "Contoh: punchy live drums, double pedal only during bridge", helper: "Pola drum penting." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "Contoh: jangan terlalu panjang, jangan vokal datar, jangan EDM, jangan intro/outro panjang, jangan meniru artis tertentu", helper: "Batasan kualitas dan style." }
    },
    example: {
      theme: "Operator customer service yang lelah menghadapi proses DEPO dan WEDE.",
      story: "Tokoh utama terus melayani keluhan, panduan sering tidak dibaca, emosi ditahan di balik layar, lalu meledak di bridge sebagai punchline.",
      language: "Indonesia",
      duration: "3.8–4.3 menit",
      genre: "Alternative Pop Rock dengan nuansa Melayu modern",
      mood: "Emosional, gelap, kesal tertahan, dramatis, tetap catchy",
      vocal: "Male baritone, berat, gritty, ekspresif, tidak datar, artikulasi jelas",
      hook: "DEPO, WEDE",
      structure: "Intro piano mellow dan clean guitar, verse 1 sedang, chorus langsung naik ke heavy rock pada hook, verse 2 turun seperti verse 1, bridge klimaks dengan double pedal drum dan punchline, final chorus besar, outro singkat.",
      tempo: "118–124 BPM, natural pacing, tidak buru-buru",
      instrument: "Soft piano, clean guitar, heavy rhythm guitar, warm bass, live drums, cinematic transition",
      lead: "Iconic melodic guitar intro, expressive fills, short technical melodic solo before bridge",
      drum: "Punchy live drums; fast double pedal only during bridge",
      avoid: "Avoid long intro, long outro, repeated sections, robotic vocal, flat melody, EDM, trap drums, copying any specific artist or song."
    }
  },
  image: {
    title: "Gambar",
    subtitle: "Image AI",
    icon: "◇",
    ai: "image",
    groups: [
      { id: "foundation", title: "Subjek", hint: "Apa yang ingin digambar.", fields: ["subject", "scene", "purpose"] },
      { id: "style", title: "Visual Style", hint: "Arah estetika dan rasa gambar.", fields: ["style", "mood", "color"] },
      { id: "structure", title: "Komposisi", hint: "Kamera, layout, angle.", fields: ["composition", "lighting"] },
      { id: "technical", title: "Spesifikasi", hint: "Rasio, kualitas, detail.", fields: ["ratio", "quality"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang tidak diinginkan.", fields: ["avoid"] }
    ],
    fields: {
      subject: { label: "Subjek Utama", required: true, type: "textarea", rows: 3, placeholder: "Contoh: poster futuristik untuk aplikasi prompt engine Indonesia", helper: "Objek/orang/adegan utama." },
      scene: { label: "Latar / Adegan", type: "textarea", rows: 3, placeholder: "Contoh: meja kerja modern, layar hologram, suasana malam", helper: "Tempat dan situasi." },
      purpose: { label: "Tujuan Visual", type: "input", placeholder: "banner, logo, thumbnail, concept art, product hero", helper: "Dipakai untuk apa." },
      style: { label: "Style Visual", type: "input", placeholder: "modern SaaS, cinematic, editorial, 3D, flat illustration", helper: "Arah visual utama." },
      mood: { label: "Mood", type: "input", placeholder: "premium, clean, futuristic, bold, calm", helper: "Rasa gambar." },
      color: { label: "Warna", type: "input", placeholder: "violet, cyan, dark navy, glassmorphism", helper: "Palet warna." },
      composition: { label: "Komposisi / Kamera", type: "textarea", rows: 3, placeholder: "centered composition, wide angle, shallow depth, hero shot", helper: "Cara gambar dibingkai." },
      lighting: { label: "Lighting", type: "input", placeholder: "soft rim light, neon glow, studio lighting", helper: "Arah cahaya." },
      ratio: { label: "Rasio / Ukuran", type: "input", placeholder: "16:9, 1:1, 9:16, 4K", helper: "Aspect ratio atau ukuran." },
      quality: { label: "Kualitas", type: "input", placeholder: "high detail, sharp, clean, professional", helper: "Detail akhir." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "low quality, blurry, distorted text, messy layout", helper: "Negative prompt." }
    },
    example: {
      subject: "Hero banner untuk aplikasi Universal Prompt Studio Indonesia.",
      scene: "Workspace futuristik dengan panel prompt, node engine, dan preview AI di layar besar.",
      purpose: "Website hero image / landing page",
      style: "Modern SaaS, premium, futuristic, glassmorphism",
      mood: "Clean, confident, intelligent, high-tech",
      color: "Dark navy, violet, cyan, subtle orange accent",
      composition: "Wide hero composition, balanced layout, clear focal point, modern UI panels",
      lighting: "Soft neon rim light and subtle studio glow",
      ratio: "16:9",
      quality: "Sharp, high detail, professional product render",
      avoid: "Blurry, low quality, broken text, cluttered UI, unrealistic hands, messy icons."
    }
  },
  video: {
    title: "Video",
    subtitle: "Runway / Pika",
    icon: "▶",
    ai: "video",
    groups: [
      { id: "foundation", title: "Konsep Video", hint: "Cerita dan tujuan video.", fields: ["concept", "scene", "duration"] },
      { id: "style", title: "Gaya Visual", hint: "Nuansa dan estetika.", fields: ["style", "mood"] },
      { id: "structure", title: "Gerakan", hint: "Kamera, aksi, transisi.", fields: ["camera", "motion", "sequence"] },
      { id: "technical", title: "Audio & Teknis", hint: "Suara, rasio, kualitas.", fields: ["audio", "ratio"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang dihindari.", fields: ["avoid"] }
    ],
    fields: {
      concept: { label: "Konsep", required: true, type: "textarea", rows: 3, placeholder: "Contoh: video pembuka aplikasi prompt engine yang terasa futuristik", helper: "Apa inti video?" },
      scene: { label: "Adegan", type: "textarea", rows: 3, placeholder: "Contoh: kamera melewati meja kerja dengan UI prompt mengambang", helper: "Apa yang terlihat?" },
      duration: { label: "Durasi", type: "input", placeholder: "8 detik, 15 detik, 30 detik", helper: "Panjang video." },
      style: { label: "Style", type: "input", placeholder: "cinematic tech, product ad, documentary, anime", helper: "Rasa visual." },
      mood: { label: "Mood", type: "input", placeholder: "premium, intense, calm, hopeful", helper: "Emosi utama." },
      camera: { label: "Kamera", type: "textarea", rows: 2, placeholder: "slow dolly in, handheld, orbit, close up", helper: "Gerakan kamera." },
      motion: { label: "Gerakan Objek", type: "textarea", rows: 2, placeholder: "UI panels animate, particles move, logo reveals", helper: "Aksi dalam scene." },
      sequence: { label: "Urutan Scene", type: "textarea", rows: 3, placeholder: "Scene 1..., Scene 2..., Scene 3...", helper: "Flow video." },
      audio: { label: "Audio", type: "input", placeholder: "cinematic pulse, soft piano, no voiceover", helper: "Arah suara." },
      ratio: { label: "Rasio", type: "input", placeholder: "16:9, 9:16, 1:1", helper: "Format video." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "flicker, warped text, jitter, unnatural movement", helper: "Negative prompt." }
    },
    example: {
      concept: "Video pembuka untuk Universal Prompt Studio Indonesia.",
      scene: "Kamera melewati meja kerja gelap dengan interface prompt mengambang dan node engine menyala.",
      duration: "12 detik",
      style: "Cinematic tech product ad",
      mood: "Premium, futuristic, focused",
      camera: "Slow dolly in, smooth camera, slight parallax",
      motion: "Prompt nodes light up one by one, output panel appears, logo reveal at the end",
      sequence: "Opening dark workspace, UI panels appear, prompt DNA connects, final logo reveal.",
      audio: "Soft cinematic pulse with subtle digital clicks",
      ratio: "16:9",
      avoid: "Jitter, flicker, warped text, shaky motion, low resolution, messy UI."
    }
  },
  writing: {
    title: "Tulisan",
    subtitle: "Artikel / copy",
    icon: "✎",
    ai: "chat",
    groups: [
      { id: "foundation", title: "Brief Tulisan", hint: "Topik, audiens, tujuan.", fields: ["topic", "goal", "audience"] },
      { id: "style", title: "Suara Tulisan", hint: "Tone dan sudut pandang.", fields: ["tone", "style"] },
      { id: "structure", title: "Struktur", hint: "Kerangka hasil.", fields: ["structure", "length"] },
      { id: "technical", title: "Referensi", hint: "Data, kutipan, aturan.", fields: ["facts", "format"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang harus dihindari.", fields: ["avoid"] }
    ],
    fields: {
      topic: { label: "Topik", required: true, type: "textarea", rows: 3, placeholder: "Contoh: panduan prompt engineering universal untuk pemula", helper: "Apa yang dibahas?" },
      goal: { label: "Tujuan Tulisan", type: "input", placeholder: "mengedukasi, menjual, menjelaskan, menghibur", helper: "Efek yang diinginkan." },
      audience: { label: "Audiens", type: "input", placeholder: "pemula, profesional, kreator, pelajar", helper: "Untuk siapa?" },
      tone: { label: "Tone", type: "input", placeholder: "santai profesional, tegas, hangat, akademis", helper: "Cara berbicara." },
      style: { label: "Gaya", type: "textarea", rows: 2, placeholder: "jelas, tidak bertele-tele, contoh konkret, bahasa Indonesia natural", helper: "Ciri penulisan." },
      structure: { label: "Struktur", type: "textarea", rows: 3, placeholder: "judul, intro, poin utama, contoh, penutup", helper: "Urutan bagian." },
      length: { label: "Panjang", type: "input", placeholder: "500 kata, 1000 kata, ringkas", helper: "Batas panjang." },
      facts: { label: "Data / Fakta Wajib", type: "textarea", rows: 2, placeholder: "Masukkan poin penting yang wajib dipakai", helper: "Fakta utama." },
      format: { label: "Format Output", type: "input", placeholder: "markdown, tabel, bullet, thread", helper: "Bentuk akhir." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "jangan lebay, jangan terlalu kaku, jangan klaim tanpa dasar", helper: "Batasan gaya dan akurasi." }
    },
    example: {
      topic: "Panduan prompt engineering universal untuk pemula Indonesia.",
      goal: "Membuat pembaca paham cara menyusun prompt yang jelas dan tahan lama.",
      audience: "Pemula yang sering memakai AI untuk kerja kreatif.",
      tone: "Santai profesional.",
      style: "Jelas, praktis, contoh konkret, tidak terlalu akademis.",
      structure: "Pembuka, prinsip dasar, framework prompt, contoh, kesalahan umum, penutup.",
      length: "800–1200 kata",
      facts: "Gunakan pola: tujuan, konteks, gaya, struktur, detail teknis, batasan, output.",
      format: "Markdown dengan heading dan contoh prompt.",
      avoid: "Jangan terlalu panjang, jangan memakai jargon tanpa penjelasan, jangan menggurui."
    }
  },
  coding: {
    title: "Coding",
    subtitle: "Dev prompt",
    icon: "{}",
    ai: "code",
    groups: [
      { id: "foundation", title: "Tujuan Aplikasi", hint: "Apa yang dibuat.", fields: ["appGoal", "users", "problem"] },
      { id: "technical", title: "Stack & Fitur", hint: "Teknologi dan kebutuhan inti.", fields: ["stack", "features", "data"] },
      { id: "style", title: "UI/UX", hint: "Tampilan dan interaksi.", fields: ["ui", "ux"] },
      { id: "structure", title: "Output Kode", hint: "Format yang diinginkan.", fields: ["output", "quality"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang dihindari.", fields: ["avoid"] }
    ],
    fields: {
      appGoal: { label: "Aplikasi yang Dibuat", required: true, type: "textarea", rows: 3, placeholder: "Contoh: website Prompt Studio modern untuk menyusun prompt lintas AI", helper: "Jelaskan produk yang ingin dibuat." },
      users: { label: "Pengguna", type: "input", placeholder: "kreator, developer, pelajar, bisnis kecil", helper: "Siapa target user?" },
      problem: { label: "Masalah yang Dipecahkan", type: "textarea", rows: 2, placeholder: "Pengguna bingung menyusun prompt yang rapi dan konsisten.", helper: "Masalah utama." },
      stack: { label: "Tech Stack", type: "input", placeholder: "HTML, CSS, JS, React, Next.js, Python", helper: "Teknologi yang diinginkan." },
      features: { label: "Fitur", type: "textarea", rows: 4, placeholder: "mode project, prompt preview, score, library, export, responsive", helper: "Daftar fitur utama." },
      data: { label: "Data / Storage", type: "input", placeholder: "localStorage, JSON, API, database", helper: "Sumber data." },
      ui: { label: "Arah UI", type: "textarea", rows: 3, placeholder: "Modern SaaS, dark mode, glassmorphism, responsive, clean spacing", helper: "Visual style." },
      ux: { label: "Alur UX", type: "textarea", rows: 3, placeholder: "Pilih mode, isi brief, preview prompt realtime, copy/export", helper: "Bagaimana user memakai." },
      output: { label: "Output yang Diminta", type: "input", placeholder: "struktur folder lengkap, kode siap jalan, README", helper: "Format hasil dari AI." },
      quality: { label: "Standar Kualitas", type: "textarea", rows: 2, placeholder: "clean code, responsive, accessible, no broken layout", helper: "Kriteria sukses." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "jangan layout berantakan, jangan dependency berat, jangan kode setengah jadi", helper: "Batasan coding." }
    },
    example: {
      appGoal: "Buat website Prompt Studio modern untuk menyusun prompt lintas AI.",
      users: "Kreator, musisi AI, desainer, developer, dan pemilik bisnis kecil.",
      problem: "User sering punya ide bagus tapi promptnya berantakan, terlalu panjang, atau tidak jelas.",
      stack: "HTML, CSS, JavaScript, JSON, optional Python local server",
      features: "Mode project, dynamic form, live prompt preview, prompt health score, library, export/import JSON, download TXT/MD, dark/light mode, responsive mobile.",
      data: "localStorage dan JSON statis.",
      ui: "Modern SaaS, dark premium, glass panels, clean spacing, mobile-friendly, tidak kaku.",
      ux: "User memilih mode, mengisi brief, melihat breakdown engine, lalu copy prompt final.",
      output: "Struktur folder lengkap, kode siap jalan, README, docs, templates.",
      quality: "Responsive, accessible, clean code, tidak ada layout overlap, tampil profesional.",
      avoid: "Jangan memakai CDN wajib, jangan layout mobile berantakan, jangan kode placeholder kosong."
    }
  },
  business: {
    title: "Bisnis",
    subtitle: "Marketing",
    icon: "◆",
    ai: "chat",
    groups: [
      { id: "foundation", title: "Bisnis", hint: "Produk, target, tujuan.", fields: ["product", "target", "goal"] },
      { id: "style", title: "Brand", hint: "Positioning dan tone.", fields: ["brand", "tone"] },
      { id: "structure", title: "Strategi", hint: "Channel dan output.", fields: ["strategy", "offer"] },
      { id: "technical", title: "Detail", hint: "Budget, durasi, metrik.", fields: ["details", "metrics"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang harus dihindari.", fields: ["avoid"] }
    ],
    fields: {
      product: { label: "Produk / Jasa", required: true, type: "textarea", rows: 3, placeholder: "Contoh: Universal Prompt Studio Indonesia", helper: "Apa yang dijual/dibangun?" },
      target: { label: "Target Market", type: "input", placeholder: "kreator AI, UMKM, pelajar, developer", helper: "Siapa yang dituju?" },
      goal: { label: "Tujuan Bisnis", type: "input", placeholder: "validasi ide, landing page, copywriting, strategy", helper: "Hasil bisnis yang diinginkan." },
      brand: { label: "Brand Positioning", type: "textarea", rows: 2, placeholder: "Prompt engine Indonesia yang mudah dipakai tapi serius", helper: "Citra produk." },
      tone: { label: "Tone", type: "input", placeholder: "percaya diri, modern, edukatif, premium", helper: "Gaya komunikasi." },
      strategy: { label: "Strategi / Channel", type: "textarea", rows: 3, placeholder: "TikTok, landing page, komunitas AI, GitHub", helper: "Cara menjangkau user." },
      offer: { label: "Penawaran", type: "textarea", rows: 2, placeholder: "free template, pro version, custom prompt engine", helper: "Apa yang ditawarkan?" },
      details: { label: "Detail Teknis", type: "textarea", rows: 2, placeholder: "deadline, budget, batasan platform", helper: "Kondisi tambahan." },
      metrics: { label: "Metrik Sukses", type: "input", placeholder: "signup, download, retention, conversion", helper: "Indikator berhasil." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "klaim berlebihan, target terlalu luas, copy generik", helper: "Batasan strategi." }
    },
    example: {
      product: "Universal Prompt Studio Indonesia, website untuk menyusun prompt lintas AI.",
      target: "Kreator AI pemula sampai menengah di Indonesia.",
      goal: "Membuat strategi validasi produk dan landing page copy.",
      brand: "Prompt engine yang praktis, modern, edukatif, dan bisa dipakai lintas AI.",
      tone: "Percaya diri, modern, tidak lebay.",
      strategy: "Distribusi lewat GitHub, TikTok edukasi, komunitas AI, dan template gratis.",
      offer: "Free web app, premium template pack, dan custom prompt workflow.",
      details: "MVP harus mudah dipahami dalam 5 menit.",
      metrics: "Jumlah download, returning user, prompt generated, share rate.",
      avoid: "Jangan target terlalu luas, jangan klaim menggantikan manusia, jangan copy generik."
    }
  },
  learning: {
    title: "Belajar",
    subtitle: "Materi ajar",
    icon: "□",
    ai: "chat",
    groups: [
      { id: "foundation", title: "Materi", hint: "Apa yang ingin dipelajari.", fields: ["subject", "level", "goal"] },
      { id: "style", title: "Gaya Belajar", hint: "Cara penyampaian.", fields: ["teachingStyle", "tone"] },
      { id: "structure", title: "Rencana", hint: "Urutan pembelajaran.", fields: ["plan", "exercise"] },
      { id: "technical", title: "Output", hint: "Format materi.", fields: ["format", "duration"] },
      { id: "guardrail", title: "Batasan", hint: "Hal yang harus dihindari.", fields: ["avoid"] }
    ],
    fields: {
      subject: { label: "Topik Belajar", required: true, type: "textarea", rows: 3, placeholder: "Contoh: memahami struktur prompt universal", helper: "Materi utama." },
      level: { label: "Level", type: "input", placeholder: "pemula, menengah, advanced", helper: "Tingkat kemampuan." },
      goal: { label: "Tujuan Belajar", type: "input", placeholder: "paham konsep, bisa praktik, siap membuat template sendiri", helper: "Target akhir." },
      teachingStyle: { label: "Gaya Mengajar", type: "textarea", rows: 2, placeholder: "bahasa sederhana, analogi, contoh langsung", helper: "Cara menjelaskan." },
      tone: { label: "Tone", type: "input", placeholder: "santai, mentor, tegas, ramah", helper: "Suasana belajar." },
      plan: { label: "Struktur Materi", type: "textarea", rows: 3, placeholder: "konsep dasar, contoh, latihan, evaluasi", helper: "Urutan belajar." },
      exercise: { label: "Latihan", type: "textarea", rows: 2, placeholder: "buat 3 prompt dari kasus berbeda", helper: "Tugas praktik." },
      format: { label: "Format Output", type: "input", placeholder: "modul, checklist, kelas 7 hari, tabel", helper: "Bentuk hasil." },
      duration: { label: "Durasi", type: "input", placeholder: "30 menit, 7 hari, 4 minggu", helper: "Rencana waktu." },
      avoid: { label: "Hindari", type: "textarea", rows: 3, placeholder: "jargon berat, penjelasan terlalu panjang, contoh abstrak", helper: "Batasan." }
    },
    example: {
      subject: "Struktur prompt universal untuk semua AI.",
      level: "Pemula",
      goal: "Paham cara menyusun prompt dengan tujuan, konteks, gaya, struktur, detail, batasan, dan output.",
      teachingStyle: "Bahasa sederhana, analogi, contoh langsung, latihan praktik.",
      tone: "Santai seperti mentor.",
      plan: "Hari 1 konsep dasar, Hari 2 tujuan dan konteks, Hari 3 gaya dan struktur, Hari 4 detail teknis, Hari 5 guardrail, Hari 6 template, Hari 7 praktik.",
      exercise: "Buat prompt untuk musik, gambar, tulisan, coding, dan bisnis.",
      format: "Modul belajar 7 hari dengan checklist.",
      duration: "7 hari",
      avoid: "Jangan terlalu akademis, jangan banyak istilah asing tanpa contoh."
    }
  }
};

const CATEGORY_META = {
  foundation: { label: "Fondasi", desc: "Tujuan, konteks, output, audiens." },
  style: { label: "Karakter", desc: "Gaya, mood, tone, identitas." },
  structure: { label: "Struktur", desc: "Urutan bagian dan dinamika." },
  technical: { label: "Detail", desc: "Instrumen, format, batas teknis." },
  guardrail: { label: "Guardrail", desc: "Hal yang dihindari." }
};

const QUICK_CHIPS = {
  universal: ["jelas", "profesional", "siap copy", "ringkas", "tidak ambigu", "step-by-step"],
  music: ["catchy hook", "human-like vocal", "no long intro", "dynamic chorus", "melodic guitar", "radio-ready"],
  image: ["modern SaaS", "cinematic lighting", "clean composition", "premium", "sharp details", "no broken text"],
  video: ["smooth camera", "cinematic", "logo reveal", "no flicker", "premium", "dynamic motion"],
  writing: ["bahasa natural", "contoh konkret", "tidak bertele-tele", "markdown", "struktur jelas", "poin praktis"],
  coding: ["clean code", "responsive", "accessible", "no broken layout", "README", "localStorage"],
  business: ["positioning jelas", "target spesifik", "copy kuat", "validasi", "conversion", "tidak generik"],
  learning: ["bahasa sederhana", "contoh langsung", "latihan", "checklist", "bertahap", "pemula"]
};

const KITAB = [
  { title: "Goal / Tujuan", body: "Bagian ini menjawab: apa yang harus dibuat AI? Tulis secara langsung dan spesifik. Tujuan yang kuat membuat AI tidak menebak-nebak." },
  { title: "Context / Konteks", body: "Konteks menjelaskan latar, pengguna, masalah, dan situasi. AI semakin akurat jika tahu alasan di balik permintaan." },
  { title: "Style / Karakter", body: "Style mengatur rasa hasil: formal, santai, cinematic, metal, modern, minimalis, edukatif, dan sebagainya." },
  { title: "Structure / Struktur", body: "Struktur adalah urutan hasil. Untuk lagu: intro, verse, chorus, bridge, outro. Untuk artikel: pembuka, isi, contoh, penutup." },
  { title: "Technical Detail", body: "Detail teknis memberi batas praktis: durasi, BPM, rasio gambar, bahasa, ukuran, framework, file output, atau jumlah karakter." },
  { title: "Guardrail / Batasan", body: "Guardrail menjawab: apa yang tidak boleh terjadi? Misalnya jangan terlalu panjang, jangan datar, jangan robotic, jangan meniru langsung." },
  { title: "Output Final", body: "Minta bentuk hasil yang siap dipakai: prompt final, kode lengkap, lirik, JSON, tabel, markdown, storyboard, atau brief produksi." }
];

const state = {
  mode: "music",
  values: {},
  targetAI: "music",
  promptMode: "structured",
  outputLanguage: "Indonesia",
  charLimit: 1200,
  collapsed: {},
  history: loadJSON("ups_history", []),
  theme: localStorage.getItem("ups_theme") || "dark"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function init() {
  document.documentElement.dataset.theme = state.theme;
  $("#themeIcon").textContent = state.theme === "dark" ? "☾" : "☀";
  bindEvents();
  renderModes();
  switchMode("music");
  renderCommandResults("");
  updateAll();
}

function bindEvents() {
  document.body.addEventListener("click", handleAction);
  $("#targetAI").addEventListener("change", (e) => { state.targetAI = e.target.value; updateAll(); });
  $("#promptMode").addEventListener("change", (e) => { state.promptMode = e.target.value; updateAll(); });
  $("#outputLanguage").addEventListener("change", (e) => { state.outputLanguage = e.target.value; updateAll(); });
  $("#charLimit").addEventListener("input", (e) => { state.charLimit = Number(e.target.value || 1200); updateAll(); });
  $("#jsonImport").addEventListener("change", importProject);
  $("#commandInput").addEventListener("input", (e) => renderCommandResults(e.target.value));
  $("#commandModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeCommand();
  });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openCommand(); }
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); updateAll(); toast("Prompt disusun ulang."); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") { e.preventDefault(); saveVersion(); }
    if (e.key === "Escape") { closeDrawer(); closeCommand(); }
  });
}

function handleAction(e) {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;
  if (action === "toggle-theme") toggleTheme();
  if (action === "fill-example") fillExample();
  if (action === "reset-form") resetForm();
  if (action === "copy-prompt") copyPrompt();
  if (action === "download-txt") downloadPrompt("txt");
  if (action === "download-md") downloadPrompt("md");
  if (action === "save-version") saveVersion();
  if (action === "show-library") showLibrary();
  if (action === "show-kitabs") showKitab();
  if (action === "close-drawer") closeDrawer();
  if (action === "export-json") exportProject();
  if (action === "import-json") $("#jsonImport").click();
  if (action === "open-command") openCommand();
  if (action === "close-command") closeCommand();
  if (action === "toggle-mobile-menu") toggleMobileMenu();
  if (action === "collapse-all") collapseAll(true);
  if (action === "expand-all") collapseAll(false);
  if (action === "apply-template") applyTemplate(actionEl.dataset.mode);
  if (action === "delete-history") deleteHistory(Number(actionEl.dataset.index));
  if (action === "load-history") loadHistory(Number(actionEl.dataset.index));
  if (action === "chip") addChip(actionEl.dataset.field, actionEl.dataset.value);
}

function renderModes() {
  const list = $("#modeList");
  const strip = $("#mobileModeStrip");
  list.innerHTML = "";
  strip.innerHTML = "";
  Object.entries(MODES).forEach(([key, mode]) => {
    const btn = document.createElement("button");
    btn.className = `mode-button ${key === state.mode ? "active" : ""}`;
    btn.innerHTML = `<span class="mode-icon">${mode.icon}</span><span class="mode-text"><strong>${mode.title}</strong><small>${mode.subtitle}</small></span>`;
    btn.addEventListener("click", () => switchMode(key));
    list.appendChild(btn);

    const chip = document.createElement("button");
    chip.className = key === state.mode ? "active" : "";
    chip.textContent = mode.title;
    chip.addEventListener("click", () => switchMode(key));
    strip.appendChild(chip);
  });
}

function switchMode(key) {
  state.mode = key;
  const mode = MODES[key];
  state.targetAI = mode.ai;
  $("#targetAI").value = mode.ai;
  $("#pageTitle").textContent = `${mode.title} Prompt Builder`;
  $("#formTitle").textContent = mode.title;
  $("#activeModePill").textContent = mode.title;
  if (!state.values[key]) state.values[key] = {};
  renderModes();
  renderForm();
  updateAll();
  $("#sidebar").classList.remove("mobile-open");
}

function renderForm() {
  const mode = MODES[state.mode];
  const container = $("#formContainer");
  container.innerHTML = "";

  mode.groups.forEach(group => {
    const wrapper = document.createElement("section");
    wrapper.className = `field-group ${state.collapsed[group.id] ? "collapsed" : ""}`;
    const done = group.fields.filter(k => (state.values[state.mode]?.[k] || "").trim()).length;
    wrapper.innerHTML = `
      <button class="group-head" type="button" aria-expanded="${!state.collapsed[group.id]}">
        <span><strong>${group.title}</strong><span>${group.hint}</span></span>
        <span class="mini-pill">${done}/${group.fields.length}</span>
      </button>
      <div class="group-body"></div>
    `;
    wrapper.querySelector(".group-head").addEventListener("click", () => {
      state.collapsed[group.id] = !state.collapsed[group.id];
      renderForm();
    });
    const body = wrapper.querySelector(".group-body");

    group.fields.forEach(fieldKey => {
      const field = mode.fields[fieldKey];
      const row = document.createElement("div");
      row.className = "field-row";
      const value = state.values[state.mode]?.[fieldKey] || "";
      const chips = QUICK_CHIPS[state.mode] || [];
      row.innerHTML = `
        <div class="field-meta">
          <label class="field-label" for="${state.mode}-${fieldKey}">${field.label} ${field.required ? '<span class="required-dot">WAJIB</span>' : ''}</label>
          <span class="field-helper">${field.helper || ""}</span>
        </div>
        <div class="field-control">
          ${field.type === "textarea" ? `<textarea id="${state.mode}-${fieldKey}" rows="${field.rows || 3}" placeholder="${escapeAttr(field.placeholder || "")}">${escapeHTML(value)}</textarea>` : `<input id="${state.mode}-${fieldKey}" type="text" placeholder="${escapeAttr(field.placeholder || "")}" value="${escapeAttr(value)}" />`}
        </div>
        <div class="quick-chips">${chips.slice(0, 6).map(c => `<button class="chip" data-action="chip" data-field="${fieldKey}" data-value="${escapeAttr(c)}" type="button">+ ${c}</button>`).join("")}</div>
      `;
      const input = row.querySelector(`#${state.mode}-${fieldKey}`);
      input.addEventListener("input", (e) => {
        state.values[state.mode][fieldKey] = e.target.value;
        updateAll();
        refreshGroupCounts();
      });
      body.appendChild(row);
    });
    container.appendChild(wrapper);
  });
}

function refreshGroupCounts() {
  // keep group count accurate without re-rendering on every keystroke.
  const mode = MODES[state.mode];
  $$(".field-group").forEach((groupEl, idx) => {
    const group = mode.groups[idx];
    const done = group.fields.filter(k => (state.values[state.mode]?.[k] || "").trim()).length;
    const pill = groupEl.querySelector(".mini-pill");
    if (pill) pill.textContent = `${done}/${group.fields.length}`;
  });
}

function addChip(fieldKey, value) {
  const current = state.values[state.mode]?.[fieldKey] || "";
  const next = current.trim() ? `${current.trim()}, ${value}` : value;
  state.values[state.mode][fieldKey] = next;
  renderForm();
  updateAll();
}

function collapseAll(yes) {
  MODES[state.mode].groups.forEach(g => state.collapsed[g.id] = yes);
  renderForm();
}

function fillExample() {
  state.values[state.mode] = { ...MODES[state.mode].example };
  renderForm();
  updateAll();
  toast("Contoh diisi.");
}

function applyTemplate(modeKey) {
  switchMode(modeKey);
  fillExample();
  closeDrawer();
}

function resetForm() {
  state.values[state.mode] = {};
  renderForm();
  updateAll();
  toast("Form direset.");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem("ups_theme", state.theme);
  $("#themeIcon").textContent = state.theme === "dark" ? "☾" : "☀";
}

function toggleMobileMenu() {
  $("#sidebar").classList.toggle("mobile-open");
}

function updateAll() {
  state.promptMode = $("#promptMode").value;
  state.outputLanguage = $("#outputLanguage").value;
  state.charLimit = Number($("#charLimit").value || 1200);
  const prompt = buildPrompt();
  $("#promptOutput").textContent = prompt;
  updateScore(prompt);
  updateBreakdown();
  updateDna();
  $("#charCount").textContent = prompt.length;
  $("#charLimitLabel").textContent = state.charLimit;
  $(".char-counter").classList.toggle("over", prompt.length > state.charLimit);
}

function buildPrompt() {
  const mode = MODES[state.mode];
  const values = state.values[state.mode] || {};
  const filled = Object.fromEntries(Object.entries(values).filter(([, v]) => String(v || "").trim()));
  if (Object.keys(filled).length === 0) {
    return "Isi brief di panel kiri. Prompt final akan muncul otomatis di sini.";
  }

  const groups = collectGroups(mode, filled);
  const targetLine = targetText(state.targetAI);

  if (state.promptMode === "json") {
    return JSON.stringify({
      target_ai: targetLine,
      mode: mode.title,
      output_language: state.outputLanguage,
      character_limit: state.charLimit,
      brief: groups
    }, null, 2);
  }

  if (state.promptMode === "compact") {
    return compactPrompt(mode.title, targetLine, groups);
  }

  if (state.promptMode === "pro") {
    return professionalPrompt(mode.title, targetLine, groups);
  }

  return structuredPrompt(mode.title, targetLine, groups);
}

function collectGroups(mode, filled) {
  const groups = {};
  mode.groups.forEach(group => {
    const parts = group.fields
      .filter(key => filled[key])
      .map(key => `${mode.fields[key].label}: ${filled[key].trim()}`);
    if (parts.length) groups[group.id] = { label: CATEGORY_META[group.id]?.label || group.title, content: parts };
  });
  return groups;
}

function targetText(target) {
  const map = {
    general: "AI umum / model generatif apa pun",
    chat: "ChatGPT, Claude, Gemini, atau AI teks sejenis",
    music: "Suno, Udio, atau AI musik sejenis",
    image: "Midjourney, DALL·E, Ideogram, Leonardo, atau Image AI sejenis",
    video: "Runway, Pika, Kling, Luma, atau Video AI sejenis",
    code: "Coding AI seperti ChatGPT, Claude, Copilot, Cursor, atau Devin"
  };
  return map[target] || map.general;
}

function structuredPrompt(modeTitle, targetLine, groups) {
  const lines = [];
  lines.push(`Gunakan prompt ini untuk ${targetLine}.`);
  lines.push(`Mode project: ${modeTitle}.`);
  lines.push(`Bahasa output: ${state.outputLanguage}.`);
  lines.push("");
  Object.values(groups).forEach(group => {
    lines.push(`${group.label.toUpperCase()}:`);
    group.content.forEach(item => lines.push(`- ${item}`));
    lines.push("");
  });
  lines.push("TUGAS AI:");
  lines.push("Susun hasil akhir yang jelas, siap dipakai, tidak ambigu, dan mengikuti semua konteks, gaya, struktur, detail teknis, serta batasan di atas.");
  if (state.charLimit) lines.push(`Usahakan hasil tetap ringkas dan tidak melebihi kebutuhan. Batas acuan: ${state.charLimit} karakter.`);
  return lines.join("\n").trim();
}

function compactPrompt(modeTitle, targetLine, groups) {
  const chunks = [`Buat output untuk ${targetLine} dalam mode ${modeTitle}. Bahasa: ${state.outputLanguage}.`];
  Object.values(groups).forEach(group => {
    chunks.push(`${group.label}: ${group.content.map(x => x.replace(/^[^:]+:\s*/, "")).join("; ")}.`);
  });
  chunks.push("Hasil harus jelas, siap copy, tidak ambigu, dan mengikuti batasan.");
  return chunks.join(" ").trim();
}

function professionalPrompt(modeTitle, targetLine, groups) {
  const lines = [];
  lines.push(`Anda adalah asisten ahli yang membantu menyusun hasil berkualitas profesional untuk ${targetLine}.`);
  lines.push(`Jenis proyek: ${modeTitle}. Gunakan bahasa output: ${state.outputLanguage}.`);
  lines.push("");
  lines.push("Baca brief berikut dan hasilkan output yang matang, rapi, dan siap digunakan:");
  Object.values(groups).forEach(group => {
    lines.push(`\n${group.label}:`);
    group.content.forEach(item => lines.push(`• ${item}`));
  });
  lines.push("\nPrioritaskan kejelasan, struktur, karakter yang kuat, dan eksekusi yang tidak terasa generik. Hindari output yang datar, bertele-tele, atau mengabaikan batasan brief.");
  return lines.join("\n").trim();
}

function updateScore(prompt) {
  const mode = MODES[state.mode];
  const values = state.values[state.mode] || {};
  const groups = mode.groups.map(group => {
    const filled = group.fields.filter(k => (values[k] || "").trim()).length;
    return { id: group.id, label: CATEGORY_META[group.id].label, total: group.fields.length, filled, pct: Math.round((filled / group.fields.length) * 100) };
  });
  const required = Object.entries(mode.fields).filter(([,f]) => f.required).map(([k]) => k);
  const requiredPct = required.length ? Math.round(required.filter(k => (values[k] || "").trim()).length / required.length * 100) : 100;
  let score = Math.round(groups.reduce((sum, g) => sum + g.pct, 0) / groups.length * 0.82 + requiredPct * 0.18);
  if (prompt.length > state.charLimit && state.charLimit > 0) score = Math.max(0, score - 12);

  $("#scoreLabel").textContent = `${score}%`;
  $("#scoreNumber").textContent = score;
  $("#scoreRing").style.background = `conic-gradient(${score >= 75 ? "var(--good)" : score >= 45 ? "var(--warn)" : "var(--bad)"} ${score * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;

  $("#scoreBars").innerHTML = groups.map(g => `
    <div class="score-item">
      <div><span>${g.label}</span><strong>${g.pct}%</strong></div>
      <div class="bar"><span style="width:${g.pct}%"></span></div>
    </div>
  `).join("");

  const tips = [];
  groups.filter(g => g.pct < 50).slice(0, 2).forEach(g => tips.push(`Lengkapi bagian ${g.label.toLowerCase()} agar prompt tidak terasa kosong.`));
  if (prompt.length > state.charLimit) tips.push("Prompt melewati batas karakter. Pakai Mode Ringkas atau kurangi detail yang tidak penting.");
  if (!tips.length) tips.push("Brief sudah kuat. Coba simpan versi ini sebelum eksperimen style lain.");
  $("#suggestionBox").innerHTML = tips.map(t => `<div>• ${t}</div>`).join("");
}

function updateBreakdown() {
  const mode = MODES[state.mode];
  const values = state.values[state.mode] || {};
  $("#breakdownList").innerHTML = mode.groups.map(group => {
    const filled = group.fields.filter(k => (values[k] || "").trim()).length;
    const done = filled > 0;
    return `<div class="breakdown-item ${done ? "done" : ""}"><span class="dot"></span><div><strong>${group.title}</strong><span>${done ? `${filled} elemen terbaca oleh engine.` : "Belum ada input."}</span></div></div>`;
  }).join("");
}

function updateDna() {
  const values = state.values[state.mode] || {};
  const mode = MODES[state.mode];
  $(".dna-node").forEach(node => {
    const stage = node.dataset.stage;
    const group = mode.groups.find(g => g.id === stage || (stage === "goal" && g.id === "foundation"));
    const done = group ? group.fields.some(k => (values[k] || "").trim()) : false;
    node.classList.toggle("complete", done);
  });
}

async function copyPrompt() {
  const text = $("#promptOutput").textContent;
  try {
    await navigator.clipboard.writeText(text);
    toast("Prompt berhasil dicopy.");
  } catch {
    fallbackCopy(text);
    toast("Prompt dicopy dengan fallback.");
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
}

function downloadPrompt(type) {
  const text = $("#promptOutput").textContent;
  const ext = type === "md" ? "md" : "txt";
  const content = type === "md" ? `# Prompt ${MODES[state.mode].title}\n\n\`\`\`text\n${text}\n\`\`\`\n` : text;
  downloadFile(`prompt-${state.mode}.${ext}`, content, type === "md" ? "text/markdown" : "text/plain");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function saveVersion() {
  const prompt = $("#promptOutput").textContent;
  const item = {
    id: Date.now(),
    mode: state.mode,
    title: `${MODES[state.mode].title} - ${new Date().toLocaleString("id-ID")}`,
    prompt,
    values: state.values[state.mode] || {},
    targetAI: state.targetAI,
    promptMode: state.promptMode,
    outputLanguage: state.outputLanguage,
    charLimit: state.charLimit
  };
  state.history.unshift(item);
  state.history = state.history.slice(0, 30);
  saveJSON("ups_history", state.history);
  toast("Versi prompt disimpan.");
}

function showLibrary() {
  openDrawer("Prompt Library", "Riwayat Lokal", state.history.length ? state.history.map((item, index) => `
    <article class="history-item">
      <h4>${escapeHTML(item.title)}</h4>
      <p>${escapeHTML(item.prompt.slice(0, 160))}${item.prompt.length > 160 ? "..." : ""}</p>
      <div class="drawer-actions">
        <button class="ghost-button small" data-action="load-history" data-index="${index}">Load</button>
        <button class="ghost-button small" data-action="delete-history" data-index="${index}">Hapus</button>
      </div>
    </article>
  `).join("") : `<div class="kitab-section"><h4>Belum ada prompt tersimpan</h4><p>Klik Save di panel Final Prompt untuk menyimpan versi.</p></div>`);
}

function showKitab() {
  const templates = Object.entries(MODES).map(([key, mode]) => `
    <article class="template-item">
      <h4>${mode.icon} Template ${mode.title}</h4>
      <p>${mode.subtitle}. Isi contoh yang sudah dirancang untuk mode ini.</p>
      <div class="drawer-actions"><button class="primary-button" data-action="apply-template" data-mode="${key}">Pakai Template</button></div>
    </article>
  `).join("");
  const content = KITAB.map(item => `<section class="kitab-section"><h4>${item.title}</h4><p>${item.body}</p></section>`).join("") + templates;
  openDrawer("Kitab Prompt", "Framework", content);
}

function openDrawer(title, eyebrow, content) {
  $("#drawerTitle").textContent = title;
  $("#drawerEyebrow").textContent = eyebrow;
  $("#drawerContent").innerHTML = content;
  $("#drawerBackdrop").hidden = false;
  $("#drawer").classList.add("open");
  $("#drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  $("#drawerBackdrop").hidden = true;
  $("#drawer").classList.remove("open");
  $("#drawer").setAttribute("aria-hidden", "true");
}

function deleteHistory(index) {
  state.history.splice(index, 1);
  saveJSON("ups_history", state.history);
  showLibrary();
  toast("Riwayat dihapus.");
}

function loadHistory(index) {
  const item = state.history[index];
  if (!item) return;
  switchMode(item.mode);
  state.values[item.mode] = item.values;
  state.targetAI = item.targetAI;
  state.promptMode = item.promptMode;
  state.outputLanguage = item.outputLanguage;
  state.charLimit = item.charLimit;
  $("#targetAI").value = state.targetAI;
  $("#promptMode").value = state.promptMode;
  $("#outputLanguage").value = state.outputLanguage;
  $("#charLimit").value = state.charLimit;
  renderForm();
  updateAll();
  closeDrawer();
  toast("Prompt dimuat.");
}

function exportProject() {
  const data = {
    app: "Universal Prompt Studio Indonesia",
    version: "10.0.0",
    exported_at: new Date().toISOString(),
    state: {
      mode: state.mode,
      values: state.values,
      targetAI: state.targetAI,
      promptMode: state.promptMode,
      outputLanguage: state.outputLanguage,
      charLimit: state.charLimit
    }
  };
  downloadFile("prompt-studio-project.json", JSON.stringify(data, null, 2), "application/json");
}

function importProject(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const imported = data.state || data;
      state.values = imported.values || state.values;
      state.mode = imported.mode || state.mode;
      state.targetAI = imported.targetAI || MODES[state.mode].ai;
      state.promptMode = imported.promptMode || state.promptMode;
      state.outputLanguage = imported.outputLanguage || state.outputLanguage;
      state.charLimit = imported.charLimit || state.charLimit;
      $("#targetAI").value = state.targetAI;
      $("#promptMode").value = state.promptMode;
      $("#outputLanguage").value = state.outputLanguage;
      $("#charLimit").value = state.charLimit;
      switchMode(state.mode);
      renderForm();
      updateAll();
      toast("Project berhasil diimport.");
    } catch {
      toast("File JSON tidak valid.");
    }
    e.target.value = "";
  };
  reader.readAsText(file);
}

function openCommand() {
  const modal = $("#commandModal");
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("command-open");
  $("#commandInput").value = "";
  renderCommandResults("");
  setTimeout(() => $("#commandInput").focus(), 30);
}

function closeCommand() {
  const modal = $("#commandModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("command-open");
}

function renderCommandResults(query) {
  const q = query.toLowerCase().trim();
  const items = [];
  Object.entries(MODES).forEach(([key, mode]) => items.push({ type: "Mode", title: mode.title, desc: mode.subtitle, action: () => { switchMode(key); closeCommand(); } }));
  QUICK_CHIPS[state.mode].forEach(chip => items.push({ type: "Istilah", title: chip, desc: "Tambahkan ke field aktif secara manual", action: () => { toast(`Istilah: ${chip}`); closeCommand(); } }));
  KITAB.forEach(item => items.push({ type: "Kitab", title: item.title, desc: item.body.slice(0, 72) + "...", action: () => { showKitab(); closeCommand(); } }));
  const filtered = items.filter(item => !q || `${item.type} ${item.title} ${item.desc}`.toLowerCase().includes(q)).slice(0, 16);
  $("#commandResults").innerHTML = filtered.map((item, idx) => `
    <button class="command-result" data-command-index="${idx}"><strong>${escapeHTML(item.title)}<br><span>${escapeHTML(item.desc)}</span></strong><span>${item.type}</span></button>
  `).join("");
  $$("[data-command-index]").forEach((btn, idx) => btn.addEventListener("click", filtered[idx].action));
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1900);
}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}
function escapeAttr(str) { return escapeHTML(str).replace(/\n/g, "&#10;"); }

init();
