const year = document.getElementById("current-year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const videos = document.querySelectorAll(".project-media video");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    video.play().catch(() => {
                        // Autoplay may be blocked. The project text and links remain visible.
                    });
                } else {
                    video.pause();
                }
            });
        },
        { threshold: 0.35 }
    );

    videos.forEach((video) => observer.observe(video));
}
