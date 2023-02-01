export const burgerController = () => {
  const burger = document.querySelector(".header__burger");
  const headerNavgiation = document.querySelector(".header__navgiation");
  const headerPhone = document.querySelector(".header__phone");
  const html = document.documentElement;
  const headerWrapper = document.querySelector(".header__wrapper");
  const phone__icon = headerPhone.querySelector(".phone__icon");
  const creatMenu = (...elems) => {
    const menu = document.createElement("div");
    menu.className = "header__menu hidden";
    elems.forEach((elem) => {
      if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
      } else if (elem.classList.contains("header__phone_hidden")) {
        elem.classList.remove("header__phone_hidden");
        console.log(elem.children);
        
      }
      const newNode = elem.cloneNode(true);
      newNode.children[0].classList.contains('phone__icon') && 
      newNode.children[0].remove();
      menu.append(newNode);
    });
    return menu;
  };
  const menu = creatMenu(headerNavgiation, headerPhone);
  headerWrapper.append(menu);

  const checkClietWidth = () => {
    if (html.clientWidth <= 550) {
      burger.classList.contains("hidden") && burger.classList.remove("hidden");
      !headerNavgiation.classList.contains("hidden") &&
        headerNavgiation.classList.add("hidden");
      !headerPhone.classList.contains("header__phone_hidden") &&
        headerPhone.classList.add("header__phone_hidden");
    } else {
      !burger.classList.contains("hidden") && burger.classList.add("hidden");
      headerNavgiation.classList.contains("hidden") &&
        headerNavgiation.classList.remove("hidden");
      headerPhone.classList.contains("header__phone_hidden") &&
        headerPhone.classList.remove("header__phone_hidden");
    }
  };

  document.addEventListener("click", (e) => {
    if (
      e.target === burger ||
      !e.target === headerNavgiation ||
      !e.target === headerPhone
    ) {
      menu.classList.toggle("hidden");
      phone__icon.classList.toggle("hidden");
      // headerPhone.classList.toggle('header__phone_hidden');
      // headerNavgiation.classList.toggle('hidden');
    }
  });

  window.addEventListener("resize", () => {
    checkClietWidth();
  });
  checkClietWidth();
};
