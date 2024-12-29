
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "LightMode";
    } else {
        darkModeToggle.textContent = "DarkMode";
    }
});
