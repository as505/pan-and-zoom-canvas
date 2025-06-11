import './githubButton.css'
import githubLogo from '/github.svg'

function GithubButton(){
    return (
        <div className='gitLink'>
            <a href="https://github.com/as505/" target="_blank" className='clickable'>
                <img src={githubLogo} className="logo github" alt="Github link to user as505"/>
                <p className='as505 textbox'>as505</p>
                <div className='linkBorder textbox'></div>
            </a>
        </div>
    )
}

export default GithubButton