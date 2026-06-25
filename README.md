# Universal Prompt Studio Indonesia v11

Prompt engine berbasis web untuk menyusun prompt yang rapi, jelas, dan siap dipakai ke banyak AI: ChatGPT, Claude, Gemini, Suno, Udio, image AI, video AI, dan coding AI.

## Fitur Utama

- Mode project: Universal, Musik, Gambar, Video, Tulisan, Coding, Bisnis, Belajar.
- Dynamic form: pertanyaan berubah sesuai mode.
- Final prompt realtime.
- Prompt Health Score.
- Engine Breakdown: melihat bagian prompt yang sudah terbaca.
- Prompt DNA: Goal, Context, Style, Structure, Guardrail.
- Mode output: Terstruktur, Ringkas, Profesional, JSON Brief.
- Target AI: AI umum, ChatGPT/Claude/Gemini, Suno/Udio, Image AI, Video AI, Coding AI.
- Copy prompt, download TXT/MD.
- Save prompt ke localStorage.
- Export/import project JSON.
- Kitab Prompt internal.
- Dark mode dan light mode.
- Mobile responsive dengan bottom dock.
- Favicon dan manifest PWA dasar.
- Tanpa backend dan tanpa dependency wajib.

## Cara Menjalankan

Cara paling cepat:

1. Extract ZIP.
2. Buka `index.html` di browser.
3. Pilih mode project.
4. Isi brief.
5. Copy prompt final.

Cara lokal dengan server:

```bash
python scripts/serve.py
```

Lalu buka:

```text
http://localhost:8080
```

## Deploy ke GitHub Pages

1. Buat repository baru.
2. Upload semua isi folder ini.
3. Buka `Settings > Pages`.
4. Pilih branch `main` dan folder `/root`.
5. Save.

## Struktur Folder

```text
universal-prompt-studio-v11/
├─ index.html
├─ manifest.webmanifest
├─ assets/
│  ├─ styles.css
│  ├─ app.js
│  └─ favicon.svg
├─ docs/
│  ├─ PROMPT_ENGINE_GUIDE.md
│  ├─ UI_UX_NOTES.md
│  └─ ROADMAP.md
├─ templates/
│  ├─ universal.md
│  ├─ music.md
│  ├─ image.md
│  ├─ video.md
│  └─ coding.md
└─ scripts/
   └─ serve.py
```

## Prinsip Engine

Framework dasarnya:

```text
Goal → Context → Style → Structure → Detail → Guardrail → Output
```

Pola ini sengaja dibuat universal agar tetap relevan untuk berbagai jenis AI, bukan hanya satu platform.

## Catatan

Project ini adalah web statis. Semua riwayat prompt disimpan di browser melalui `localStorage`, bukan server.


## Hotfix v11

- Fix command palette yang tampil otomatis karena atribut `hidden` tertimpa CSS.
- Klik area gelap di luar command palette sekarang menutup modal.
- Command palette lebih aman di mobile dan desktop.
