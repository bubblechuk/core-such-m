import "./Header.css"
import Burger from './burger.svg'
export const Header = () => {
    return <div className="header">
        <div className="headerBlock">
        <div className="headerMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 10H3V4a1 1 0 0 1 1-1h6zm11-6a1 1 0 0 0-1-1h-6v7h7zM4 21h6v-7H3v6a1 1 0 0 0 1 1zm17-1v-6h-7v7h6a1 1 0 0 0 1-1z"/></svg>
        </div>
        <div className="headerLogo">Transmisson.NET</div>
        </div>
    </div>
}