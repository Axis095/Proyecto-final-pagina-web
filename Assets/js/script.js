document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    const revealElements = document.querySelectorAll(".intro, .esqueleto, .gallery-item, .habilidaduno, .habilidaddos, .habilidadtres, .habilidadcuatro, .contact-section");

    const revealOnScroll = () => {
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add("fade-in");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const overlay = item.querySelector(".gallery-overlay");
            if (overlay) {
                overlay.style.transform = "translateY(0)";
            }
        });

        item.addEventListener("mouseleave", () => {
            const overlay = item.querySelector(".gallery-overlay");
            if (overlay) {
                overlay.style.transform = "translateY(100%)";
            }
        });
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth",
                    });
                }
            }
        });
    });

    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");

    const galleryImages = document.querySelectorAll(".gallery-image");

    galleryImages.forEach((image) => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
            captionText.innerHTML = image.alt;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


const fadeInElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-image");
    let currentAudio = null;

    galleryImages.forEach((image) => {

        image.addEventListener("mouseenter", () => {
            const audioSrc = image.getAttribute("data-audio");
            if (audioSrc) {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                currentAudio = new Audio(audioSrc);
                currentAudio.play();
            }
        });

        image.addEventListener("mouseleave", () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
        });
    });
});