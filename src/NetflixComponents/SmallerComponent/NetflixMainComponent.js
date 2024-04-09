import "./NetflixMainComponent.css"
import NetflixRegistrationComponenet from "./NetflixRegistrationComponenet"
export default function NetflixMainComponent(){
    return(
        <div className="netflix_main">
            <div className="netflix_context">
            <div className="text-lg-center text-white">
            <h1 className="fw-bold p-2">Unlimited movies,TV shows and more</h1>
            <h3 className=" p-2">Watch anywhere. Cancel anytime.</h3>
        </div>
        <NetflixRegistrationComponenet/>
        </div>
        </div>
    );
}