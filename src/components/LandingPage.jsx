import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <main>
            <h2>Welcome to Board Games Galore!</h2>
            <p><Link to="/reviews">Click here to enter</Link></p>
        </main>
    )
}

export default LandingPage;