import GoogleMapReact from 'google-map-react';

interface ChildComponentProps {
  location: Location;
}

const Map: React.FC<ChildComponentProps> = ({location}) => (
  <div className="min-h-full min-w-full">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={location}
        defaultZoom={17}
      >
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;