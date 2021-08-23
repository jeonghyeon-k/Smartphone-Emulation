import Dog1 from './img/Dog1.png';
import Dog2 from './img/Dog2.png';
import Dog3 from './img/Dog3.png';
import Dog4 from './img/Dog4.png';
import Dog5 from './img/Dog5.png';
import Dog6 from './img/Dog6.png';
import Dog7 from './img/Dog7.png';
import Dog8 from './img/Dog8.png';
import Dog9 from './img/Dog9.png';
import Dog10 from './img/Dog10.png';


const routes = {
    'Dog1': Dog1,
    'Dog2': Dog2,
    'Dog3': Dog3,
    'Dog4': Dog4,
    'Dog5': Dog5,
    'Dog6': Dog6,
    'Dog7': Dog7,
    'Dog8': Dog8,
    'Dog9': Dog9,
    'Dog10': Dog10,
  };
 export const imageUrl = (item) => {
    return routes[item]
  };
