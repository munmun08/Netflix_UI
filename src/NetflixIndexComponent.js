import NetflixRgistrationComponent from "./NetflixComponents/SmallerComponent/NetflixRegistrationComponenet";
import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixComponents/NetflixHeaderComponent'; // Import the NetflixHeaderComponent
import NetflixMainComponent from './NetflixComponents/SmallerComponent/NetflixMainComponent';
import NetflixFooterComponenet from './NetflixComponents/SmallerComponent/NetflixFooterComponenet'; 
import NetflixFAQComponent from './NetflixComponents/SmallerComponent/NetflixFAQComponent'; 
import NetflixGalaryComponent from './NetflixComponents/SmallerComponent/NetflixGalaryComponent'; 
import NetflixGalaryComponent2 from './NetflixComponents/SmallerComponent/NetflixGalaryComponent2'; 
import NetflixGalaryComponent3 from './NetflixComponents/SmallerComponent/NetflixGalaryComponent3'; 

function NetflixIndexComponent(){
    return (
        <div className="netflix_index">

             <div className="welcome">
                <header>
                    <NetflixHeaderComponent/>
                </header>
                <main>
                    <NetflixMainComponent/>
                </main>
            </div>
            
            <div className="galary1">
                <NetflixGalaryComponent/>
            </div>
            
            <div className="galary2">
                <NetflixGalaryComponent2/>
            </div>
            <div className="galary3">
                <NetflixGalaryComponent3/>
            </div>
            <section>
                <NetflixFAQComponent/>
            </section>
           
            <footer>
                <NetflixFooterComponenet/>
            </footer>

        </div>
    );
}

export default NetflixIndexComponent;
