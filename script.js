document.addEventListener('DOMContentLoaded', function() {
    
    const translations = {
        tr: {
            nav_about: "Hakkımda",
            nav_exp: "Deneyim",
            nav_projects: "Projeler",
            nav_skills: "Yetenekler",
            nav_contact: "İletişim",
            hero_desc: "Karmaşık problemleri, kullanıcı odaklı ve ölçeklenebilir yazılım çözümlerine dönüştürmeye odaklanıyorum. Özellikle Flutter ile mobil uygulama geliştirme konusunda tutkuluyum ve kendimi sürekli olarak yeni teknolojiler öğrenmeye adadım.",
            hero_cta: "İletişime Geç",
            section_exp: "Deneyim",
            exp_role: "Stajyer - Node.js Web Service",
            exp_company: "Eskişehir Su ve Kanalizasyon İdaresi (ESKİ) - Genel Müdürlüğü",
            exp_desc_1: "Node.js ortamında çalışan web servislerinin geliştirilmesi süreçlerine katkı sağlandı.",
            exp_desc_2: "Veritabanı ile iletişim kuran HTTP istekleri (GET, POST) kurgulandı ve CRUD (Veri Ekleme/Okuma) işlemleri gerçekleştirildi.",
            exp_desc_3: "İstemci (Client) tarafına iletilen verilerin JSON formatında düzenlenmesi ve veri akışının optimizasyonu sağlandı.",
            exp_desc_4: "Geliştirilen API uç noktalarının (Endpoints) testleri yapılarak hatalar giderildi.",
            section_projects: "Kişisel Projeler",
            status_soon: "Yakında",
            status_dev: "Geliştiriliyor",
            status_archived: "Arşivlendi",
            proj_1_desc: "Sürücü adayları için Flutter ile geliştirilen, sınav stresini azaltmayı hedefleyen interaktif simülasyon uygulaması.",
            proj_2_desc: "Doğum haritası ve burç yorumları sunan, RESTful API entegrasyonlu mobil uygulama.",
            proj_3_desc: "Kullanıcıların yazma hızını ölçen, Vanilla JS ile geliştirilmiş web platformu.",
            section_social: "Sosyal Medya",
            repo_loading: "Repository'ler yükleniyor...",
            repo_error: "Repository'ler yüklenemedi.",
            repo_empty: "Gösterilecek repository bulunamadı.",
            section_skills: "Yetenekler",
            tech_lang: "Diller & Framework",
            tech_tools: "Araçlar",
            tech_competence: "Yetkinlikler",
            comp_ui: "UI Tasarımı",
            section_contact: "İletişim",
            contact_title: "Birlikte Çalışalım",
            contact_desc: "Projelerinizi hayata geçirmek veya tanışmak için formu doldurabilir ya da doğrudan e-posta gönderebilirsiniz.",
            form_name: "İsim Soyisim",
            form_email: "E-posta",
            form_message: "Mesajınız",
            form_send: "Gönder",
            footer_rights: "Tüm hakları saklıdır.",
            status_offline: "Çevrimdışı",
            status_online: "Şu an Aktif",
            status_idle: "Boşta",
            status_dnd: "Rahatsız Etmeyin"
        },
        en: {
            nav_about: "About",
            nav_exp: "Experience",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_contact: "Contact",
            hero_desc: "I focus on transforming complex problems into user-centric and scalable software solutions. I am particularly passionate about mobile application development with Flutter and dedicated to continuously learning new technologies.",
            hero_cta: "Get in Touch",
            section_exp: "Experience",
            exp_role: "Intern - Node.js Web Service",
            exp_company: "Eskişehir Water and Sewerage Administration (ESKI) - General Directorate",
            exp_desc_1: "Contributed to the development processes of web services running in the Node.js environment.",
            exp_desc_2: "Constructed HTTP requests (GET, POST) communicating with the database and performed CRUD operations.",
            exp_desc_3: "Ensured the JSON formatting of data sent to the Client side and optimized data flow.",
            exp_desc_4: "Tested developed API endpoints and fixed bugs.",
            section_projects: "Personal Projects",
            status_soon: "Coming Soon",
            status_dev: "In Development",
            status_archived: "Archived",
            proj_1_desc: "Interactive simulation app developed with Flutter for driver candidates, aiming to reduce exam stress.",
            proj_2_desc: "Mobile application offering birth charts and horoscope interpretations with RESTful API integration.",
            proj_3_desc: "Web platform developed with Vanilla JS that measures users' typing speed.",
            section_social: "Social Media",
            repo_loading: "Loading repositories...",
            repo_error: "Could not load repositories.",
            repo_empty: "No repositories found.",
            section_skills: "Skills",
            tech_lang: "Languages & Frameworks",
            tech_tools: "Tools",
            tech_competence: "Competencies",
            comp_ui: "UI Design",
            section_contact: "Contact",
            contact_title: "Let's Work Together",
            contact_desc: "You can fill out the form or send an email directly to bring your projects to life or just to meet.",
            form_name: "Full Name",
            form_email: "Email",
            form_message: "Your Message",
            form_send: "Send",
            footer_rights: "All rights reserved.",
            status_offline: "Offline",
            status_online: "Online",
            status_idle: "Idle",
            status_dnd: "Do Not Disturb"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'tr';
    const langToggle = document.getElementById('lang-toggle');
    
    function updateLanguage(lang) {
        currentLang = lang;
        langToggle.textContent = lang === 'tr' ? 'EN' : 'TR';
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);

        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        fetchPresenceData(); 
    }
    
    langToggle.addEventListener('click', () => {
        updateLanguage(currentLang === 'tr' ? 'en' : 'tr');
    });

    updateLanguage(currentLang);
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') { body.classList.add('dark-theme'); }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); 
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });

    const header = document.querySelector('header.card');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled'); 
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        } 
        else { 
            header.classList.remove('scrolled'); 
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => { observer.observe(el); });

    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    async function fetchPresenceData() {
        const discordUserId = '372423797812494336';
        
        const discordBadge = document.getElementById('discord-status-badge');
        const discordStatusText = document.getElementById('discord-text');
        const spotifyContainer = document.getElementById('spotify-now-playing');
        const spotifyInfo = document.getElementById('spotify-info');

        try {
            const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
            if (!response.ok) { return; }
            const { data } = await response.json();

            if (data.discord_status) {
                const status = data.discord_status;
                discordBadge.className = `status-badge ${status}`;
                
                let statusKey = 'status_offline';
                if (status === 'online') statusKey = 'status_online';
                if (status === 'idle') statusKey = 'status_idle';
                if (status === 'dnd') statusKey = 'status_dnd';
                
                discordStatusText.textContent = translations[currentLang][statusKey];
            }

            if (data.listening_to_spotify) {
                const track = data.spotify;
                spotifyInfo.innerHTML = `<a href="https://open.spotify.com/track/${track.track_id}" target="_blank">${track.song}</a>`;
                spotifyContainer.style.display = 'flex';
            } else {
                spotifyContainer.style.display = 'none';
            }

        } catch (error) {
            console.error('Lanyard API Error:', error);
        }
    }
    fetchPresenceData();
    setInterval(fetchPresenceData, 10000);
    
    async function fetchGithubRepos() {
        const repoTableBody = document.querySelector('.repo-table tbody');
        const username = 'Yusuf-Eken';
        const apiUrl = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=4&type=owner`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) { throw new Error('API Request Failed'); }
            const repos = await response.json();

            repoTableBody.innerHTML = ''; 

            if(repos.length === 0){
                repoTableBody.innerHTML = `<tr class="repo-placeholder-row"><td colspan="2">${translations[currentLang].repo_empty}</td></tr>`;
                return;
            }

            repos.forEach(repo => {
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
                    <td><div class="language-cell">${repo.language ? `<span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span> ${repo.language}` : 'Other'}</div></td>
                `;
                repoTableBody.appendChild(tableRow);
            });

        } catch (error) {
            repoTableBody.innerHTML = `<tr class="repo-placeholder-row"><td colspan="2">${translations[currentLang].repo_error}</td></tr>`;
            console.error('GitHub API Error:', error);
        }
    }

    function getLanguageColor(language) {
        const colors = {
            "JavaScript": "#f1e05a", "Dart": "#00B4AB", "HTML": "#e34c26",
            "CSS": "#563d7c", "Python": "#3572A5", "C#": "#178600"
        };
        return colors[language] || "#cccccc";
    }

    fetchGithubRepos();

});
