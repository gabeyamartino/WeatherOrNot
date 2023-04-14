import GoogleMapReact from 'google-map-react';
import { stringify } from 'querystring';



const Map = () => {

  type TestObj =  {
    name: string ,
    greeting: string
  }

  const testing: TestObj = {
    name: "Gabe",
    greeting: "Hi"
  }

  return (
  <div className="min-h-full min-w-full">
    <div className="google-map">
    <div>`{testing.greeting}, {testing.name}`</div>
    </div>
  </div>
)}

export default Map;