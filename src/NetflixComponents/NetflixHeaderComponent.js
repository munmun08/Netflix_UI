import "./NetflixHeaderComponent.css";
import LanguageSelectionComponent from "./SmallerComponent/LanguageSelectionComponent";

export default function NetflixHeaderComponent() {
    return (
        <div className="netflix_header">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="../../public/Netflix_logo.jpg" width="180" alt="Netflix Logo" />
                </div>
                <div className="d-flex">
                    <LanguageSelectionComponent />
                    <button className="signin-btn">Sign in</button>
                </div>
            </div>
        </div>
    );
}
