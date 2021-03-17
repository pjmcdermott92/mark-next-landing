import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <main className='page-wrapper'>
            <Meta />
            <Nav />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
