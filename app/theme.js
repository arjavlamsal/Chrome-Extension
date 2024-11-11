// Sidebar-view
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeLabel = document.querySelector('.sidebar-themeLabel');

    // Handle theme toggle
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        themeLabel.classList.toggle('switched');
    });
});