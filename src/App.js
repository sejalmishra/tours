import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
    const newTour = tours.filter((tour) =>  tour.id !== id
    )
    setTours(newTour);
  }
  /*const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }*/
  const fetchTour = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tour = await response.json();
      console.log(tour);
      setLoading(false);
      setTours(tour);
    }
    catch(error){
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTour();
  },[])


  if(loading){
    return <>
      <Loading />
    </>
  }
  if(tours.length === 0){
    return <>
      <h1>No tour left</h1>
      <button onClick={() => {
        fetchTour();
      }}>refresh</button>
    </>
  }
  return(
    <Tours tours={tours} removeItem={removeItem}/>
  )
}

export default App
