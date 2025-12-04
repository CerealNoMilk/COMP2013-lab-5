import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivatePage() {

    const navigate = useNavigate();
    const token = Cookies.get("jwt-authorization");
    const username = Cookies.get("username");

    if (!token) {
        navigate("/not-auth");
    }


    return (
        <div>
            <h1>This Is A Private Page</h1>
            <p>Welcome {username}</p>
            <Link to="/home">Go To Home Page</Link>
            </div>
    );
}
