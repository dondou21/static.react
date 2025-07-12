
import logo from '../src/react.png';
 
console.log(logo)
export default function Navbar() {
    return (
        <div className='navBar'>
            <nav className='logo-title' >
                <img src= {logo} className="logo" alt="React-Logo" />
                <span>React Learning</span>
            </nav> 
            
            <ul className="nav-links">
                <li>HomePage</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Services</li>
            </ul>
        </div>
    )
}