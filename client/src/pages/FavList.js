import { Link } from "react-router-dom";


function FavList({appData}){
    return(
    <>   
    <div className="">
      {/* {appData.map((appData) => (
        <Link key={appData.title} to={`./App.js/${appData.title}`}>
          < App key={appData.title} songs={appData} />
        </Link>
      ))} */}
    </div>
       
    </>  
    );
}

export default FavList;