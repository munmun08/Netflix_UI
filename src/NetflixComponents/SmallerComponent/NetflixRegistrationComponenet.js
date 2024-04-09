
import"./NetflixRegistrationComponenet.css";

function NetflixRegistrationComponenet(){
    return(
        <div className="w-75 m-auto">
            <p className="text-center text-white fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg text-dark ">
            <div class="form-floating ">
                <input type="email" class="form-control text-dark" id="floatingInput" />
                <label htmlfor="floatingInput">Email address</label>
            </div>
    
       <button className="btn btn-danger">Get Started<span><i class="bi bi-chevron-right"></i></span></button>
    </div>
</div>
    );
}
export default NetflixRegistrationComponenet;