import './../style/normalize.css';
import '../style/index.scss';
import '../index.html';
import '../style/swiper.css'
import { swiperController } from './swiperController';
import { mapController } from './map';
const init = () => {
     swiperController();
     mapController();
}


init();


