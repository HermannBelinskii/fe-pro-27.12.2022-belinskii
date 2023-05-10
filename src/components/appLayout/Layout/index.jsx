import { Outlet, Link } from "react-router-dom";

export const Loyout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Loyout;