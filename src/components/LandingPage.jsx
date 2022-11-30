import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <main className="landing">
            <h2 className="landing-header">Welcome to Board Games Galore!</h2>
            <p className="landing-content"><Link to="/reviews">Click here to enter</Link></p>
        </main>
    )
}

export default LandingPage;