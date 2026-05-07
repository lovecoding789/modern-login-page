const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});