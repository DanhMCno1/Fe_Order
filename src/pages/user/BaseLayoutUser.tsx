import TopNav from '../../layout/users/TopNav/TopNav'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/users/Header/Header'
import ItemProuduct from '../../layout/users/ItemProuduct/ItemProuduct'
import Footer from '../../layout/users/Footer/Footer'

const BaseLayoutUser = () => {
    return (
        <div className='wrapper'>
            <TopNav />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default BaseLayoutUser