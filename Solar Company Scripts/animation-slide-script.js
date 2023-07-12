function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
    //   rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.bottom  >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right  >= 0 
    );
  }
  
  function handleScrollAboutUs() {
    const imgElement = document.querySelector('.slide-in-image');
    const textElement = document.querySelector('.slide-in-text');
    if (isElementInViewport(imgElement)) {
      imgElement.classList.add('slide-in');
      textElement.classList.add('fade-in');

      if (isAnimationFinished(textElement)) {
        window.removeEventListener('scroll', handleScroll);
      }
    } }

    function handleScrollServices() {
      const serviceElement = document.querySelector('.slide-down-services');
    if (isElementInViewport(serviceElement)) {
      serviceElement.classList.add('slide-down');
    if (isAnimationFinished(serviceElement)) {
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
  
  window.addEventListener('scroll', handleScrollAboutUs);
  window.addEventListener('scroll', handleScrollServices);
  