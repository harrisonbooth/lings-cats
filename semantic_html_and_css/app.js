const parallaxers = document.querySelectorAll('html');
if (parallaxers) {
  document.addEventListener('scroll', () => {
    for (let i = 0; i < parallaxers.length; i++) {
      const parallaxer = parallaxers[i];

      const scrolledHeight = window.pageYOffset,
      limit = parallaxer.offsetTop + parallaxer.offsetHeight;

      parallaxer.style.backgroundPositionY
        = -((scrolledHeight - parallaxer.offsetTop) / 4) + "px"

    }
  });

}
