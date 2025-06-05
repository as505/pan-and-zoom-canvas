import './GithubButton.css'
import githubLogo from '/github.svg'

function GithubButton(){
    return (
        <div className='gitLink'>
            <a href="https://github.com/as505/" target="_blank">
            <img src={githubLogo} className="logo github" alt="Github link to user as505"/>
            <p className='as505'>as505</p>
            </a>
        </div>
    )
}

export default GithubButton