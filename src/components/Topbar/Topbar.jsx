import { Link } from 'react-router-dom'
import './topbar.scss'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__left__section">
                <div className="topbar__img__container">
                    <img src="./Assets/Images/movie__icon.png" alt="" className="logo" />
                </div>
                <div className="topbar__left__navbar">
                    <ul>
                        <li> <Link to="/"> SEARCH</Link></li>
                        <li> <Link to="/comparison"> COMPARISON</Link></li>
                        <li> <Link to="/trending"> TRENDING</Link></li>
                        <li> <Link to="/watched"> WATCHED</Link></li>
                        <li> <Link to="/createsession"> CREATE SESSION</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
