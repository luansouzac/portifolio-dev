
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const line = document.getElementById("scroll-line");
    line.style.height = `${scrollPercent * 100}vh`;
});
