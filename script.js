document.addEventListener('DOMContentLoaded', function() {
    
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
        const discordStatusText = discordBadge.querySelector('span:last-child');
        const spotifyContainer = document.getElementById('spotify-now-playing');
        const spotifyInfo = document.getElementById('spotify-info');

        try {
            const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
            if (!response.ok) { return; }
            const { data } = await response.json();

            if (data.discord_status) {
                const status = data.discord_status;
                discordBadge.className = `status-badge ${status}`;
                
                let statusText = 'Çevrimdışı';
                if (status === 'online') statusText = 'Şu an Aktif';
                if (status === 'idle') statusText = 'Boşta';
                if (status === 'dnd') statusText = 'Rahatsız Etmeyin';
                discordStatusText.textContent = statusText;
            }

            if (data.listening_to_spotify) {
                const track = data.spotify;
                spotifyInfo.innerHTML = `<a href="https://open.spotify.com/track/${track.track_id}" target="_blank">${track.song}</a>`;
                spotifyContainer.style.display = 'flex';
            } else {
                spotifyContainer.style.display = 'none';
            }

        } catch (error) {
            console.error('Lanyard API hatası:', error);
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
            if (!response.ok) { throw new Error('API isteği başarısız'); }
            const repos = await response.json();

            repoTableBody.innerHTML = ''; 

            if(repos.length === 0){
                repoTableBody.innerHTML = '<tr class="repo-placeholder-row"><td colspan="2">Gösterilecek repository bulunamadı.</td></tr>';
                return;
            }

            repos.forEach(repo => {
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
                    <td><div class="language-cell">${repo.language ? `<span class="language-dot" style="background-color: ${getLanguageColor(repo.language)}"></span> ${repo.language}` : 'Diğer'}</div></td>
                `;
                repoTableBody.appendChild(tableRow);
            });

        } catch (error) {
            repoTableBody.innerHTML = '<tr class="repo-placeholder-row"><td colspan="2">Repository\'ler yüklenemedi.</td></tr>';
            console.error('GitHub API hatası:', error);
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
