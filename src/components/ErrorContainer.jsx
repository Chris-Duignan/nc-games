import { Link } from "react-router-dom";

const ErrorContainer = () => {
    return (
        <main className="errorContainer">
            <Link to="/reviews">Sorry, we can't find that piece, click here to go to all reviews!</Link>
        </main>
    )
}

export default ErrorContainer;