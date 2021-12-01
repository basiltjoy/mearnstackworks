import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
      await fetch("./restaurants.json")
      .then(res=>res.json())
      .then(data=>setHotels(data.restaurants));    
    }
    fetchData()  


  }, []);
  console.log("data is:", hotels);

  return (
  <>
   
<div>
 
  { hotels.map(data=>(
    <h5>{data.name}</h5>
  ))}
</div>
 
   
  </>
  )
}

export default Home;
