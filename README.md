# Minimalist ve İnteraktif Geliştirici Portfolyo Şablonu

Bu proje, modern ve minimalist bir tasarıma sahip, tek sayfalık (single-page) bir developer portfolyo şablonudur. Vanilla JS kullanılarak hazırlandığı için herhangi bir derleme (build) işlemine ihtiyaç duymaz ve kolayca kişiselleştirilebilir.

![Projenin Ekran Görüntüsü](link/to/screenshot.png)
<!-- Buraya sitenin bir ekran görüntüsünü koy -->

➡️ **Canlı Demo:** [https://yusuf-eken.github.io/portfolio/](https://yusuf-eken.github.io)
<!-- Buraya sitenin canlı linkini koy -->

## ✨ Öne Çıkan Özellikler

- **Modern ve Sade Tasarım:** Odak noktası içerik olan, göz yormayan bir arayüz.
- **Duyarlı (Responsive):** Mobil, tablet ve masaüstü cihazlarda kusursuz görünüm.
- **Açık & Koyu Tema:** Tek tıkla tema değiştirme ve kullanıcının tercihini tarayıcıda saklama.
- **Çoklu Dil Desteği:** TR / EN dilleri arasında geçiş yapma özelliği.
- **API Entegrasyonları:**
  - **Discord & Spotify:** Lanyard API ile anlık Discord durumunu ve Spotify'da dinlenen şarkıyı gösterme.
  - **GitHub:** GitHub API ile en son güncellenen repoları dinamik olarak çekme.
- **Çalışan İletişim Formu:** Formspree entegrasyonu ile mail adresini gizli tutarak mesaj alabilme.
- **Sıfır Bağımlılık (Zero Dependency):** Sadece HTML, CSS ve Vanilla JavaScript ile oluşturulmuştur. Hızlıdır ve kurulum gerektirmez.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **API'lar:** Lanyard (Discord/Spotify), GitHub API
- **Form Servisi:** Formspree
- **Fontlar:** Google Fonts (Inter)
- **İkonlar:** Font Awesome, Devicon

## 🚀 Başlarken (Getting Started)

Bu şablonu kendi portfolyon olarak kullanmak çok kolay!

### Kurulum

1.  Bu repoyu **fork'layın** veya **ZIP** olarak indirin.
2.  Dosyaları kendi hosting alanınıza veya GitHub Pages'e yükleyin.
3.  Aşağıdaki kişiselleştirme adımlarını takip edin.

### Kişiselleştirme

#### 1. Temel Bilgiler (`index.html`)

`index.html` dosyasını bir kod editörü ile açın ve aşağıdaki alanları kendi bilgilerinizle güncelleyin:

-   **Hakkımda Bölümü (`#about`):** İsim, başlık (`Software Developer`), açıklama metni ve sosyal medya linklerinizi (`LinkedIn`, `GitHub`, `Instagram`) güncelleyin.
-   **Deneyim Bölümü (`#experiences`):** Kendi iş veya staj deneyimlerinizi ekleyin.
-   **Projeler Bölümü (`#projects`):** Kendi projelerinizi ve kullandığınız teknolojileri yazın.
-   **Yetenekler Bölümü (`#technologies`):** Yeteneklerinizi ve kullandığınız araçları düzenleyin.

#### 2. API Ayarları (`script.js`)

`script.js` dosyasını açarak API'ların size özel çalışmasını sağlayın:

-   **Discord & Spotify:** `fetchPresenceData` fonksiyonu içindeki `discordUserId` değişkenini kendi Discord ID'niz ile değiştirin.
    ```javascript
    const discordUserId = '372423797812494336'; // Kendi ID'nizi buraya yazın
    ```
-   **GitHub Repoları:** `fetchGithubRepos` fonksiyonu içindeki `username` değişkenini kendi GitHub kullanıcı adınızla değiştirin.
    ```javascript
    const username = 'Yusuf-Eken'; // Kendi kullanıcı adınızı buraya yazın
    ```

#### 3. İletişim Formu (`index.html`)

Formun size mail atabilmesi için:

1.  **[formspree.io](https://formspree.io/)** adresine gidin ve ücretsiz bir hesap oluşturun.
2.  Yeni bir form oluşturun ve size verilen `action` linkini kopyalayın.
3.  `index.html` dosyasındaki `<form>` etiketinin `action` özelliğini kendi linkinizle değiştirin:
    ```html
    <form class="contact-form" action="https://formspree.io/f/SENIN_KODUN" method="POST">
    ```

## 📜 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Kopyalamak, düzenlemek ve kendi projelerinizde kullanmakta özgürsünüz.

---

Bu README'yi GitHub profiline koyduğunda projen çok daha profesyonel ve anlaşılır duracaktır. LinkedIn paylaşımın için de buradan bazı cümleleri alabilirsin. Başarılar!
