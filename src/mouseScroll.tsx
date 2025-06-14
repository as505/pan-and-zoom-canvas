import './mouseIcons.css';
import scrollIcon from '/scroll.png';

function MouseScroll(){
    return(
        <>
            <div>
                <img src={scrollIcon} className="mouseIcon scroll" alt="Icon showing a computer mouse scrolling the mouse wheel"/>
                <p>Text</p>
            </div>
        </>
    )
}


export default MouseScroll