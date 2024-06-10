 // Function to toggle between light and dark themes
 function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  // Toggle theme class on body
  body.classList.toggle('dark');

  // Update icon based on theme
  if (body.classList.contains('dark')) {
    // Dark theme is active
    localStorage.setItem('theme', 'dark'); // Store theme state in local storage
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    // Light theme is active
    localStorage.setItem('theme', 'light'); // Store theme state in local storage
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}

// Event listener for the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Check the theme state from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const theme = localStorage.getItem('theme');

  // Apply the theme based on the stored value
  if (theme === 'dark') {
    body.classList.add('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    body.classList.remove('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});



  