let lastScrollTop = 0;
let navbar = document.getElementById('desktop-nav');
let scrollTimeout;
const meteorsContainer = document.querySelector('.meteors-container');
const profileSection = document.getElementById('profile');

window.addEventListener('scroll', function () {
    // Efek Parallax pada Meteor
    if (meteorsContainer && profileSection) {
        const scrollY = window.scrollY;
        const profileHeight = profileSection.offsetHeight;
        // Hanya aktifkan parallax jika masih di dalam atau dekat hero section
        if (scrollY < profileHeight * 1.5) {
            meteorsContainer.style.transform = `translateY(${scrollY * 0.3}px)`;
        } else {
            meteorsContainer.style.transform = `translateY(0px)`; // Reset setelah melewati
        }
    }

    // Navbar Slide Down/Up (Tanpa Delay Muncul)
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 100) { // Scroll ke bawah dan melewati batas 100px
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Clear any previous timeouts (untuk efek navbar yang lebih responsif)
    clearTimeout(scrollTimeout);
});


//meteor effect hero secttion
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".meteors-container");

    function createMeteor() {
        const meteor = document.createElement("div");
        meteor.classList.add("meteor");

        meteor.style.left = `${Math.random() * 98}vw`;
        meteor.style.animationDuration = `${Math.random() * 5 + 3}s`;

        container.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, 8000);
    }

    setInterval(createMeteor, 110);
});


//word rotation efek hero section
document.addEventListener("DOMContentLoaded", function () {
    const words = ["chocomint.", "Andi Albukhari f."];
    let index = 0;
    const titleElement = document.querySelector(".title");

    function rotateWord() {
        titleElement.style.opacity = 0; // Efek fade out
        setTimeout(() => {
            index = (index + 1) % words.length;
            titleElement.textContent = words[index];
            titleElement.style.opacity = 1; // Efek fade in
        }, 500);
    }

    setInterval(rotateWord, 2700); // Ubah setiap 2.5 detik
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Hanya aktif sekali
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update jam setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi updateClock sekali saat halaman dimuat agar jam langsung terlihat
updateClock();