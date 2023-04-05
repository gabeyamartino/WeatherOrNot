import React from "react";
import Map from "./Map";



const location: object = {
  address: "34 Maple Street, Biddeford, Maine",
  lat: 43.49889,
  lng: -70.45546
}

const App: React.FC = () => {

  return (
    <>
      <div className="min-h-full min-w-full">
        <button>Get the Weather</button>
    <Map />
      </div>
    </>
  );
};

export default App;
