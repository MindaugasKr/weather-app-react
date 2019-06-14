import img_1 from '../../images/backgrounds/barry-simon-310250-unsplash.jpg';
import img_2 from '../../images/backgrounds/brandon-morgan-15365-unsplash.jpg';
import img_3 from '../../images/backgrounds/gabriele-diwald-201135-unsplash.jpg';
import img_4 from '../../images/backgrounds/jessica-fadel-453102-unsplash.jpg';
import img_5 from '../../images/backgrounds/john-westrock-1547565-unsplash.jpg';
import img_6 from '../../images/backgrounds/milkovi-1143501-unsplash.jpg';
import img_7 from '../../images/backgrounds/nicholas-kampouris-97080-unsplash.jpg';
import img_8 from '../../images/backgrounds/val-vesa-1280252-unsplash.jpg';
import img_9 from '../../images/backgrounds/vincenzo-di-giorgi-51527-unsplash.jpg';

const matchImageToWeatherCondition = (code) => {
  switch (true) {
    case (code < 300): return img_2; // actual [200, 232], // thunderstorm
    case (code < 400): return img_6; // actual [300, 321], // drizzel
    case (code < 505): return img_3; // actual [500, 504], // rain
    case (code < 512): return img_8; // actual [511, 511], // freezing rain
    case (code < 600): return img_3; // actual [520, 531], // shower rain
    case (code < 611): return img_4; // actual [600, 602], // snow
    case (code < 700): return img_8; // actual [611, 622], // snow and rain
    case (code < 800): return img_5; // actual [700, 781], // mist
    case (code < 801): return img_7; // actual // clear
    case (code < 803): return img_9; // actual [801, 802], // clouds few
    case (code < 900): return img_1; // actual [803, 804], // clouds overcast
    default: return img_7;
  }
};

export default matchImageToWeatherCondition;