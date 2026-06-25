# Prompt Engine Guide

## 1. Goal

Goal adalah tujuan utama. Tanpa goal yang jelas, AI akan menebak arah pekerjaan.

Contoh buruk:

```text
Buatkan sesuatu yang keren.
```

Contoh baik:

```text
Buat prompt untuk menghasilkan lagu alternative pop rock tentang operator CS yang lelah menghadapi DEPO dan WEDE.
```

## 2. Context

Context menjelaskan situasi, pengguna, masalah, cerita, atau latar. AI butuh konteks agar hasil tidak generik.

## 3. Style

Style mengatur rasa dan karakter. Dalam musik bisa berupa genre, mood, vokal. Dalam gambar bisa berupa visual style, warna, lighting. Dalam coding bisa berupa UI direction.

## 4. Structure

Structure memberi alur. Struktur membuat output lebih mudah dipakai.

Contoh musik:

```text
Intro piano mellow, verse sedang, chorus heavy, verse 2 turun, bridge double pedal, final chorus besar.
```

Contoh artikel:

```text
Pembuka, masalah, solusi, contoh, checklist, penutup.
```

## 5. Technical Detail

Detail teknis bisa berupa durasi, BPM, karakter, ukuran, rasio, bahasa, framework, atau format file.

## 6. Guardrail

Guardrail adalah hal yang dihindari.

Contoh:

```text
Jangan terlalu panjang, jangan datar, jangan robotic, jangan meniru langsung.
```

## 7. Output

Output menjelaskan bentuk hasil final: prompt siap copy, kode lengkap, JSON, markdown, tabel, lirik, storyboard, atau brief.

## Formula Universal

```text
Buat [output] untuk [target] dengan tujuan [goal].
Konteks: [context].
Gaya: [style].
Struktur: [structure].
Detail teknis: [detail].
Hindari: [guardrail].
Hasil akhir harus [output requirement].
```
