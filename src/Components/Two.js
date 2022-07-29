import { Parallax } from 'react-parallax';
import Nasa1 from '../Images/nasa1.jpg'

const Two = () => (
    <Parallax className='image' bgImage={Nasa1} strength={900}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
    </Parallax>
);
export default Two;