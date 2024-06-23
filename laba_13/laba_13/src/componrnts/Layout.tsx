import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header>
                <NavLink className="link" to='/'>home</NavLink>
                <NavLink className="link" to='/films'>films</NavLink>
                <NavLink className="link" to='/cartoons'>cartoon</NavLink>
                <NavLink className="link" to='/series'>series</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    );
}

export default Layout;