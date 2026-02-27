# Bulmaca Stüdyosu 🎯

Modern ve mobil uyumlu Türkçe çapraz bulmaca (crossword) uygulaması. Saf HTML, CSS ve vanilla JavaScript — sıfır bağımlılık, sıfır framework.

![Versiyon](https://img.shields.io/badge/versiyon-2.0.0-green)
![Lisans](https://img.shields.io/badge/lisans-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobil-lightgrey)

---

## 🚀 Özellikler

### Bulmaca
- **Otomatik Bulmaca Oluşturma** — Kelime listesinden backtracking algoritmasıyla çapraz bulmaca üretme
- **Hazır Konular** — Dünya Şehirleri, Bilim ve Teknoloji, Tarih
- **Özel Bulmaca** — `KELİME: İpucu` formatıyla kendi kelimelerinizden bulmaca yaratma
- **Arşiv** — LocalStorage ile bulmacaları kaydetme ve yükleme
- **Paylaşım** — URL encode ile bulmaca paylaşma; linki alan kişi aynı bulmacayı oynayabilir
- **Çözüm Gösterme** — Onay sonrası tüm hücreleri doldurma

### Kullanıcı Deneyimi
- **Türkçe Karakter Desteği** — Ğ, Ü, Ş, İ, Ö, Ç tam destek
- **Klavye Navigasyonu** — Ok tuşları ve Backspace ile gezinme
- **Otomatik İlerleme** — Harf girişinde bir sonraki hücreye geçiş
- **Görsel Geri Bildirim** — Yanlış harfler kırmızıyla gösterilir
- **Tamamlanma Kutlaması** — Bulmaca bitince modal

### Mobil
- **Dokunmatik Optimizasyon** — 38×38px hücre boyutu (minimum dokunma hedefi)
- **iOS Zoom Engeli** — `font-size: 16px` + `inputmode`, `autocapitalize`, `autocorrect` öznitelikleri
- **Mobil İpucu Popup'u** — Hücreye dokunulduğunda ekranın üstünden kayan ipucu paneli
- **Manzara (Landscape) Desteği** — `max-height: 500px` media query ile kompakt görünüm

---

## 📁 Dosya Yapısı

```
/
├── index.html      # Ana HTML; menü, oyun alanı, modal'lar
├── style.css       # Responsive stiller + CSS değişkenleri
├── script.js       # Bulmaca motoru, oyun mantığı, UI
├── LICENSE         # MIT Lisansı
└── README.md       # Bu dosya
```

---

## 🎮 Kullanım

### Hazır Bulmaca
1. Menüden konu seçin
2. İpucuna tıklayın ya da doğrudan hücreye dokunun
3. Harfleri girin; bitmeden önce çözümü görme için **🔍 Çözümü Göster**

### Özel Bulmaca
1. **✨ Kendi Bulmacanı Oluştur** butonuna tıklayın
2. Her satıra bir kelime: `KELIME: İpucu metni`
3. Başlık girin → **Oluştur ve Oyna** veya **💾 Arşive Kaydet**

### Paylaşım
1. Oyun sırasında **🔗 Paylaş** butonuna tıklayın
2. Link otomatik kopyalanır — alan kişi aynı bulmacayı açar

---

## 🔧 Teknik Notlar

### Bulmaca Algoritması
- 80×80 dahili grid, backtracking ile kelime yerleştirme
- Uzun kelimeler önce yerleştirilir; her yeni kelime mevcut bir harf üzerinden kesişerek eklenir
- Yerleşemeyen kelimeler atlanır (bulmaca yine de çalışır)
- Yerleştirme sonrası grid sıkıştırılıp numaralandırılır

### Grid Render — Neden `<table>`?
`div` + CSS Grid kombinasyonunda `border` veya `box-shadow` tabanlı her çizgi yaklaşımı subpixel rendering farkları nedeniyle tarayıcıdan tarayıcıya değişiyordu. `<table border-collapse: collapse>` bu sorunu browser layout engine seviyesinde çözer — iki komşu hücrenin border'ı tek bir fiziksel piksel olarak render edilir.

> **Kritik not:** `display: flex` bir `<td>` üzerine uygulandığında `border-collapse` devre dışı kalır. Hücre içi ortalama `text-align` + `vertical-align` ile yapılmalıdır.

### Encoding
- UTF-8, Unix line endings (LF)
- `.gitattributes` ile cross-platform uyumluluk sağlanmış

---

## 🎨 Renk Paleti

[ColorHunt #f6f0d7c5d89d9cab8489986d](https://colorhunt.co/palette/f6f0d7c5d89d9cab8489986d)

| Değişken | Hex | Kullanım |
|---|---|---|
| `--color-cream` | `#F6F0D7` | Sayfa arka planı |
| `--color-light-green` | `#C5D89D` | Grid konteynır, vurgular |
| `--color-sage` | `#9CAB84` | Hücre kenarlıkları |
| `--color-olive` | `#89986D` | Ana renk, butonlar |

---

## 📱 Tarayıcı Desteği

| Tarayıcı | Versiyon |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |
| Chrome Mobile | 90+ |
| Brave | ✅ |

---

## ⚠️ Bilinen Sınırlamalar

- Çok az ortak harf içeren kelime kombinasyonları yerleştirilemeyebilir
- Minimum 2, önerilen maksimum 30 kelime
- Bulmaca her seferinde farklı yerleşimle üretilebilir (rastgele backtracking)

---

## 📋 Versiyon Geçmişi

### v2.0.0
- Hücre kenarlık sorunu kökten çözüldü (`<table border-collapse>`)
- iOS'ta sanal klavye açılışında sayfa zoom engellendi
- Dokunma hedefleri büyütüldü (32px → 38px)
- `autocapitalize`, `autocorrect`, `inputmode` öznitelikleri eklendi
- Menü kartı mobilede sıkışma sorunu giderildi
- `display:none` + `display:flex` çakışması düzeltildi

### v1.0.0
- İlk stabil sürüm

---

## 👥 Geliştirici

**F. Kemal Sonmez**

---

*Son Güncelleme: Şubat 2026*
