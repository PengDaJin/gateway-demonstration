var iconMenu = document.querySelector('.icon-menu'),
  menu = document.querySelector('.menu'),
  menuLink = document.querySelectorAll('.menu-link.sub');

iconMenu.addEventListener('click', openMenu);

menuLink.forEach(function (el) {
  el.addEventListener('click', openSubmenu);
});

function openMenu() {

  if (menu.classList.contains('open')) {
    menu.classList.add('close');
    iconMenu.classList.remove('icon-closed');

    setTimeout(function () { menu.classList.remove('open'); }, 1300);

  } else {
    // 移除已经存在的类名;
    menu.classList.remove('close');
    // 添加新的类名，如已经存在，取消添加
    menu.classList.add('open');
    iconMenu.classList.add('icon-closed');
  }
}

function openSubmenu(event) {

  if (event.currentTarget.classList.contains("active")) {
    event.currentTarget.classList.remove("active");
  } else {
    event.currentTarget.classList.add("active");
  }
}