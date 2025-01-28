// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Add event listener for toggling themes
themeToggle.addEventListener("click", () => {
    // Toggle the 'dark-theme' class on the body
    document.body.classList.toggle("dark-theme");

    // Change the button text based on the current theme
    const isDarkMode = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
});
