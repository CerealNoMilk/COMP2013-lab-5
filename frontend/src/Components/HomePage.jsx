import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div>
            <h1>Home Page!</h1>
            <Link to="/register">Go to Register Page</Link>
            <br />
            <Link to="/login">Go to LogIn Page</Link>
        </div>
    );
}