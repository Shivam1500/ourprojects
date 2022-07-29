import { Parallax } from 'react-parallax';
import Nasa2 from '../Images/nasa3.jpg'

const Three = () => (
    <Parallax className='image' bgImage={Nasa2} strength={900}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
    </Parallax>
);

export default Three;