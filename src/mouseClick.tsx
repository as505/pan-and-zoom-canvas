import './mouseIcons.css';
import clickIcon from '/left-click.png'

function MouseClick(){
    return(
        <>
            <img src={clickIcon} className="mouseIcon click" alt="Icon showing a computer mouse clicking the left mouse button"/>
        </>
    )
};

export default MouseClick