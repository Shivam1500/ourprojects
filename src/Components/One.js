import { Parallax } from 'react-parallax';
import Nasa from '../Images/nasa2.jpg'

const One = () => (
    <Parallax className='image' bgImage={Nasa} strength={900}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
    </Parallax>
);

export default One;