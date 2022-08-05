const scrollTop = document.querySelector('.page-top-text');
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});