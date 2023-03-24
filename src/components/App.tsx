const App = () => {

  const location:{address: string, lat:number, lng:number} = {
    address: "34 Maple Street, Biddeford, Maine",
    lat: 43.49889,
    lng: -70.45546
  }

  return (
    <>
      <div>
        <button>Get the Weather</button>
      </div>
    </>
  );
};

export default App;
