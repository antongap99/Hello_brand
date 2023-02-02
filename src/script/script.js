import './../style/normalize.css';
import '../style/index.scss';
import '../index.html';
import '../style/swiper.css'
import { swiperController } from './swiperController';
import { mapController } from './map';
import { burgerController } from './burger';
import { modalController } from './ModalController';
const init = () => {
     swiperController();
     mapController();
     burgerController();
     modalController();
}


init();


