'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var BurgerMenu = /*#__PURE__*/function () {
    function BurgerMenu(buttonOpenMenu, blockMenu) {
      var _this = this;

      _classCallCheck(this, BurgerMenu);

      _defineProperty(this, "handlerOpenButton", function (evt) {
        evt.preventDefault();

        _this.openedMenu();
      });

      _defineProperty(this, "handlerCloseButton", function (_ref) {
        var target = _ref.target;

        if (target.classList.contains("".concat(_this.classMenu, "_close"))) {
          _this.closesMenu();
        }
      });

      _defineProperty(this, "openedMenu", function () {
        if (_this.blockMenu.classList.contains("".concat(_this.classMenu, "--close"))) _this.blockMenu.classList.remove("".concat(_this.classMenu, "--close"));

        _this.blockMenu.classList.add("".concat(_this.classMenu, "--active"));

        document.addEventListener('keydown', _this.closeMenuBtnEsc);
      });

      _defineProperty(this, "closesMenu", function () {
        _this.blockMenu.classList.remove("".concat(_this.classMenu, "--active"));

        _this.blockMenu.classList.add("".concat(_this.classMenu, "--close"));

        setTimeout(function () {
          _this.blockMenu.classList.remove("".concat(_this.classMenu, "--close"));
        }, 2500);
      });

      _defineProperty(this, "openMenuBtnEnter", function () {
        if (evt.keyCode === 13) {
          _this.openedMenu();
        } else {
          return;
        }
      });

      _defineProperty(this, "closeMenuBtnEsc", function (evt) {
        if (evt.keyCode === 27) {
          _this.closesMenu();

          document.removeEventListener('keydown', _this.closeMenuBtnEsc);
        } else {
          return;
        }
      });

      this.classMenu = blockMenu;
      this.buttonOpenMenu = document.querySelector(".".concat(buttonOpenMenu));
      this.blockMenu = document.querySelector(".".concat(blockMenu));
      this.initMenu();
    }

    _createClass(BurgerMenu, [{
      key: "initMenu",
      value: function initMenu() {
        this.buttonOpenMenu.addEventListener('click', this.handlerOpenButton);
        this.blockMenu.addEventListener('click', this.handlerCloseButton);
        this.blockMenu.addEventListener('keydown', this.openMenuBtnEnter);
      }
    }]);

    return BurgerMenu;
  }();

  new BurgerMenu("header__burger_button", "main__burger_menu");
})();