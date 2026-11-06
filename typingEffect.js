document.querySelectorAll(".typing-effect").forEach((el) => {
    const text = el.textContent;
    el.setAttribute("aria-label", text);
    el.textContent = "";

    [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.setAttribute("aria-hidden", 'true');
        span.style.setProperty("--i", i);
        el.appendChild(span);
    });
});