// Get the toggle switch, the body element, and the heading element
const toggleSwitch = document.getElementById('theme-toggle');
const heading = document.querySelector('h1');

// Function to update the heading text based on the current mode
function updateHeadingText() {
    if (document.body.classList.contains('dark-mode')) {
        heading.textContent = 'Dark Mode';
        heading.style.color="gold";

    } else {
        heading.textContent = 'Light Mode';
        heading.style.color="Black";

    }
}

// Check if the user's preference is stored in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
    updateHeadingText(); // Update heading text on page load
}

// Add an event listener to toggle the dark mode and save preference
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    updateHeadingText(); // Update heading text when mode is toggled

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
