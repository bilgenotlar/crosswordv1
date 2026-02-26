# Bulmaca Stüdyosu 🎯

Modern ve mobil uyumlu Türkçe çapraz bulmaca (crossword) uygulaması.

## 🚀 Özellikler

### Temel Özellikler
- ✅ **Otomatik Bulmaca Oluşturma**: Kelime listesinden otomatik çapraz bulmaca üretme
- ✅ **Hazır Konular**: Dünya Şehirleri, Bilim ve Teknoloji, Tarih konularında hazır bulmacalar
- ✅ **Özel Bulmaca Oluşturma**: Kendi kelimelerinizle bulmaca yaratma
- ✅ **Kaydetme Sistemi**: LocalStorage ile bulmacaları kaydetme ve yükleme
- ✅ **Paylaşım**: URL ile bulmaca paylaşma
- ✅ **Çözüm Gösterme**: İsteğe bağlı çözüm görüntüleme
- ✅ **Türkçe Karakter Desteği**: Ğ, Ü, Ş, İ, Ö, Ç karakterleri tam destek

### Kullanıcı Deneyimi
- ✅ **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- ✅ **Touch Optimizasyonu**: Mobil cihazlar için optimize edilmiş dokunmatik kontroller
- ✅ **Responsive Tasarım**: Küçük telefonlardan büyük ekranlara kadar uyumlu
- ✅ **Klavye Navigasyonu**: Ok tuşları ve Backspace desteği
- ✅ **Akıllı Otomatik İlerleme**: Doğru harf girişinde otomatik bir sonraki hücreye geçiş
- ✅ **Görsel Geri Bildirim**: Yanlış harfler kırmızı renkte gösterilir
- ✅ **Tamamlanma Kontrolü**: Otomatik doğrulama ve başarı mesajı

## 📱 Tarayıcı Desteği

- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)
- Opera (76+)
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

## 🎮 Kullanım

### Hazır Bulmaca Oynamak
1. Ana menüden bir konu seçin (Şehirler, Bilim, Tarih)
2. İpuçlarına tıklayarak kelimeleri seçin
3. Harfleri girin ve bulmacanı tamamlayın

### Özel Bulmaca Oluşturmak
1. "Kendi Bulmacanı Oluştur" butonuna tıklayın
2. Format: `KELİME: İpucu` (her satıra bir kelime)
3. Bulmaca başlığı girin
4. "Oluştur ve Oyna" veya "Arşive Kaydet" seçeneklerinden birini seçin

### Bulmaca Paylaşmak
1. Oyun ekranında "🔗 Paylaş" butonuna tıklayın
2. Link otomatik olarak kopyalanır
3. Linki paylaştığınız kişi aynı bulmacayı oynayabilir

## 🔧 Teknik Detaylar

### Dosya Yapısı
```
/
├── index.html      # Ana HTML dosyası
├── style.css       # Responsive CSS stilleri
├── script.js       # Bulmaca motoru ve oyun mantığı
└── README.md       # Bu dosya
```

### Bulmaca Oluşturma Algoritması
- Backtracking algoritması ile kelime yerleştirme
- 80x80 grid boyutu
- Maksimum 20 deneme ile en iyi yerleşimi bulma
- Otomatik numaralandırma sistemi

### Encoding
- UTF-8 encoding
- Unix line endings (LF)
- Cross-platform uyumlu

## 🎨 Renk Paleti

Proje [ColorHunt](https://colorhunt.co/palette/f6f0d7c5d89d9cab8489986d) paletini kullanır:
- **Cream**: #F6F0D7 (Arka plan)
- **Light Green**: #C5D89D (Grid konteynır)
- **Sage**: #9CAB84 (Vurgular)
- **Olive**: #89986D (Ana renk)

## 🐛 Bilinen Sınırlamalar

- Bazı kelime kombinasyonları yerleştirilemeyebilir (çok az ortak harf)
- Minimum 2 kelime gereklidir
- Maksimum önerilen: 30 kelime
- LocalStorage limiti: ~5MB

## 📝 Lisans

Bu proje kişisel kullanım içindir.

## 👥 Geliştirici

- **Kod**: Antigravity (Claude AI)
- **Fikir ve Düzenleme**: Sonmez

## 🔄 Versiyon

**v1.0.0** - İlk stabil sürüm
- Tüm temel özellikler
- Mobil uyumluluk
- GitHub uyumlu encoding

---

**Son Güncelleme**: 6 Şubat 2026
