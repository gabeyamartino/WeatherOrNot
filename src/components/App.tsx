import Map from "./Map";

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const location: Location = {
  address: "34 Maple Street, Biddeford, Maine",
  lat: 43.49889,
  lng: -70.45546
}

const App: React.FC = () => {

  return (
    <>
      <div className="min-h-full min-w-full">
        <button>Get the Weather</button>
        <Map location={location} />
      </div>
    </>
  );
};

export default App;
