import { Link } from "react-router-dom";
export default function NotAuthPage() {
    return (

        <div>
            <h1>No authorization without valid username</h1>
            <Link to="/login">Go to LogIn Page</Link>
        </div>
        
    );
}
