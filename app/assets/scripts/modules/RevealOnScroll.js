import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWayPoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        var that = this;
        this.itemsToReveal.each(function () {
            new Waypoint({
                element: this,
                handler:  () => {
                    $(this).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            })
        })
    }
}

export default RevealOnScroll;