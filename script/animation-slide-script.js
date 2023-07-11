function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const imgElement = document.querySelector('.slide-in-image');
    if (isElementInViewport(imgElement)) {
      imgElement.classList.add('slide-in');
      if (isAnimationFinished(imgElement)) {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }
  
  function isAnimationFinished(el) {
    const animation = getComputedStyle(el).animationName;
    const duration = getComputedStyle(el).animationDuration;
    const iterationCount = getComputedStyle(el).animationIterationCount;
    return (
      animation !== 'none' &&
      duration !== '0s' &&
      iterationCount !== 'infinite'
    );
  }
  
  window.addEventListener('scroll', handleScroll);
  