var $ = require("jquery");

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import Modal from './modules/Modal';

const mobileMenu = new MobileMenu();

new RevealOnScroll($("#the-problemID"), "85%");
new RevealOnScroll($("#structureID"), "60%");
new RevealOnScroll($("#solutionID"), "50%");
new RevealOnScroll($("#changesID"), "40%");
new RevealOnScroll($("#establishmentID"),"30%");
new RevealOnScroll($("#roadmapID"), "20%");
new RevealOnScroll($("#teamID"), "10%");

var modal = new Modal();