import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='page-footer'>
            <div className="container">
                <div className="footer-logo">
                    <Logo />
                </div>
                <ul className='nav-links defaults-removed'>
                    <li className='nav-link'><Link href='/'>Terms</Link></li>
                    <li className='nav-link'><Link href='/'>Privacy</Link></li>
                    <li className='nav-link'><Link href='/'>Support</Link></li>
                </ul>
                <p>California residents can obtain information about the categories of personal information collected, and the business purposes for which the information is collected, by <Link href='/'>clicking here</Link>.</p>
                <p>&copy; 2021 Devslopes - All Rights Reserved. Page developed by <Link href='http://www.pjmcdermott.com'>PJMcDermott</Link></p>
            </div>
        </footer>
    )
}

export default Footer
