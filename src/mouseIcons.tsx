import './mouseIcons.css';
import clickIcon from '/left-click.png'
import scrollIcon from '/scroll.png';

function MouseIcons(){

    return(
        <>
            <div className='mouseIcon'>
                <img src={clickIcon} className="image" alt="Icon showing a computer mouse clicking the left mouse button"/>
                <p className='iconText'>Click to drag image</p>
            </div>
            <div className='mouseIcon'>
                <img src={scrollIcon} className="image" alt="Icon showing a computer mouse scrolling the mouse wheel"/>
                <p className='iconText'>Scroll to zoom</p>
            </div>
        </>
    )
};

export default MouseIcons