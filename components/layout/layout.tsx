import Footer from './footer';
import Header from './header'

interface LayoutInter {
    children: React.ReactNode | React.ReactElement;
}

const Layout = ({ children }: LayoutInter) => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout; 