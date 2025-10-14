// Generate with AI
document.addEventListener('DOMContentLoaded', () => {
  // 1. Select all sections to observe and all navigation links
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  // 2. Options for the observer
  const options = {
    // The 'root' is the viewport by default
    // The -50% bottom margin ensures the section is highlighted when it occupies at least half of the viewport.
    rootMargin: '-80px 0px -50% 0px',
    // A threshold of 0.5 means the callback fires when 50% of the target is visible
    threshold: 0.5,
  };

  // 3. Observer callback (what to do when a change occurs)
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The section has entered the viewport (it is active)
        const currentSectionId = entry.target.id;

        // Remove the active class from ALL links
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
        });

        // Find the link that corresponds to the active section
        // It uses the custom data-section attribute
        console.log(`.nav-link[data-section="${currentSectionId}"]`);
        const activeLink = document.querySelector(`.nav-link[data-section="${currentSectionId}"]`);

        console.log('Active section:', currentSectionId);
        console.log('Active link:', activeLink);

        // Apply the active class to the correct link
        if (activeLink) {
          activeLink.classList.add('active-link');
        }
      }
    });
  };

  // 4. Create and start the observer
  const observer = new IntersectionObserver(observerCallback, options);

  // Observe each section element
  sections.forEach((section) => {
    observer.observe(section);
  });
});
