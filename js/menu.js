(() => {
  const refs = {
      menu:document.querySelector('[open-menu]'),
      opened: document.querySelector('[menu]'),
      back: document.querySelector('backdrop'),
  };
  function openMenu(){
    refs.opened.classList.toggle('section_menu')
    refs.opened.classList.toggle("menu_active") 
    refs.menu.classList.toggle("burger_opened")
    document.body.classList.toggle("lock")
  }
  refs.menu.addEventListener("click", openMenu);
})();