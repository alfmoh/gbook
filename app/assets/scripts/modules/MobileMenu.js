import $ from "jquery";

class MobileMenu {
    constructor() {
        this.menuIcon = $(".s-header__menu-icon");
        this.headerLogo = $(".s-header__logo");
        this.headerNavList = $(".s-header-nav__list");
        this.header = $(".s-header");
        this.menuIcon = $(".s-header__menu-icon");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.headerNavList.toggleClass("s-header-nav__list--invisible");
        this.headerLogo.toggleClass("s-header__logo--invisible");
        this.header.toggleClass("s-header--invisible");
        this.menuIcon.toggleClass("s-header__menu-icon--close-x");
    }
}

export default MobileMenu;
