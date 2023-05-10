import { Outlet, Link } from "react-router-dom";

export const Loyout = () => {
    return (
        <>
            <nav className="bg-success-subtle ">
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link active text-success-emphasis" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active text-success-emphasis" to="/users">Users</Link></li>
                    <li className="nav-item"><Link className="nav-link active text-success-emphasis" to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default Loyout;