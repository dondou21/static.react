export default function Navbar() {
    return (
        <>
            <img src="../src/react.png" className="logo" alt="React-Logo" />
            <Span>React Learning</Span>
            <ul className="nav-links">
                <li>HomePage</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Services</li>
            </ul>
        </>
    )
}