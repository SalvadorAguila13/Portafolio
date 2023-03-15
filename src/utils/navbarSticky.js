const navbarSticky = () => {
  let header = document.querySelector(".header");

  header.classlist.toggle("sticky", window.scrollY > 100);
};

export default navbarSticky;
