import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [isLoading,setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //fetch tours
  const fetchTours = async () => {
    try{
      setIsLoading(true);
      const data = await fetch(url);
      const tours = await data.json();
      setTours(tours);
      // console.log(tours);
    }
    catch(error){
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  },[]);

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }
  else if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type="button" style={{marginTop : '2rem'}}
        className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  }
  else{
    return <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>;
  }

};
export default App;
