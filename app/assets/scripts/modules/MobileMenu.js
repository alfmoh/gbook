import $ from "jquery";

class MobileMenu {
    constructor(){
        this.menuIcon = $(".s-header__menu-icon");
        this.menuContent = $(".s-header__menu-content");
        this.events();
    }

    events(){
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass("s-header__menu-content--is-visible");
    }
}

export default MobileMenu;