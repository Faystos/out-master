'use strict';

(function() {
  class BurgerMenu {
    constructor(buttonOpenMenu, blockMenu) {
      this.classMenu = blockMenu;
      this.buttonOpenMenu = document.querySelector(`.${buttonOpenMenu}`);
      this.blockMenu = document.querySelector(`.${blockMenu}`);
      this.initMenu();
    }

    initMenu() {
      this.buttonOpenMenu.addEventListener('click', this.handlerOpenButton);
      this.blockMenu.addEventListener('click', this.handlerCloseButton);
      this.blockMenu.addEventListener('keydown', this.openMenuBtnEnter);
    }

    handlerOpenButton = (evt) => {
      evt.preventDefault();
      this.openedMenu();

    }

    handlerCloseButton = ({target}) => {
      if (target.classList.contains(`${this.classMenu}_close`)) {
        this.closesMenu();
      }
    }

    openedMenu = () => {
      if (this.blockMenu.classList.contains(`${this.classMenu}--close`)) this.blockMenu.classList.remove(`${this.classMenu}--close`);
      this.blockMenu.classList.add(`${this.classMenu}--active`);
      document.addEventListener('keydown', this.closeMenuBtnEsc);
    }

    closesMenu = () => {
      this.blockMenu.classList.remove(`${this.classMenu}--active`);
      this.blockMenu.classList.add(`${this.classMenu}--close`);
      setTimeout(()=> {
        this.blockMenu.classList.remove(`${this.classMenu}--close`);
      }, 2500);
    }

    openMenuBtnEnter = () => {
      if (evt.keyCode === 13) {
        this.openedMenu();
      } else {
        return;
      }
    }

    closeMenuBtnEsc = (evt) => {
      if (evt.keyCode === 27) {
        this.closesMenu();
        document.removeEventListener('keydown', this.closeMenuBtnEsc);
      } else {
        return;
      }
    }
  }

  new BurgerMenu(`header__burger_button`, `main__burger_menu`);
})();
