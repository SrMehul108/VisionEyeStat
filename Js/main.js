 // Mobile menu toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');

 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
 });

 // Close mobile menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
         mobileMenu.classList.remove('active');
     }
 });

 // Get current page URL path
 const currentPath = window.location.pathname;

 // Add active class to current page link
 document.querySelectorAll('.nav-link').forEach(link => {
     if (link.getAttribute('href') === currentPath) {
         link.classList.add('active');
     }
 });