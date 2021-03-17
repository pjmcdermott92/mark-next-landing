import Link from 'next/link'
import Logo from './Logo'

const Nav = () => {
    return (
        <nav className='site-nav'>
            <div className="site-brand">
                <Logo />
            </div>
            <ul className='nav-links main-nav defaults-removed'>
                <li className='nav-link'><Link href='/'>Join</Link></li>
                <li className='nav-link'><Link href='/'>Members Login</Link></li>
                <li className='nav-link'><Link href='/'>Success Stories</Link></li>
                <li className='nav-link'><Link href='/'>Support</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
