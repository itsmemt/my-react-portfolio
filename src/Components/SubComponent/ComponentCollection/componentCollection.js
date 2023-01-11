import "./componentCollection.css";
import { NavLink, Outlet } from "react-router-dom";
export default function ComponentCollection() {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "bold",
            color: isActive ? "slateblue" : "white",
            textDecoration: isActive ? "underline" : "none",
            // backgroundColor: isActive ? "none" : "slateblue",
        };
    };
    return (
        <div className="component-collection">
            <h2 className="sub-title">Component Collections</h2>
            <div className="component-card">
                <div>
                    <NavLink style={navLinkStyles} to="Carousel">Carousel</NavLink>
                </div>
                <div>
                    <NavLink style={navLinkStyles} to="TravelBlog">TravelBlog</NavLink>
                </div>
                <div>
                    <NavLink style={navLinkStyles} to="Card">Card</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}