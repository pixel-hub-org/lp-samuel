export function initDnaHighlight() {
  const features = document.querySelectorAll('[data-feature]');
  let currentIndex = 0;

  const highlightedClasses = ['bg-linear-to-r', 'from-white/4', 'to-transparent', 'border-l-4', 'border-[#4489E3]'];

  const updateHighlight = () => {
    features.forEach((feature, index) => {
      const div = feature.querySelector('div');
      if (div) {
        if (index === currentIndex) {
          highlightedClasses.forEach(cls => div.classList.add(cls));
        } else {
          highlightedClasses.forEach(cls => div.classList.remove(cls));
        }
      }
    });

    currentIndex = (currentIndex + 1) % features.length;
  };

  updateHighlight();
  setInterval(updateHighlight, 3000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDnaHighlight);
} else {
  initDnaHighlight();
}
