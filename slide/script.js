// mover o slide transform: translate3d(200px,0px,0px);
//quando clicar tem o evento de click
//mover evento de mouse move
// evento de mouse up

import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev','.next');
slide.addControl();