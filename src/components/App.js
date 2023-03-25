"use strict";
exports.__esModule = true;
var Map_1 = require("./Map");
var location = {
    address: "34 Maple Street, Biddeford, Maine",
    lat: 43.49889,
    lng: -70.45546
};
var App = function () {
    return (<>
      <div className="min-h-full min-w-full">
        <button>Get the Weather</button>
        <Map_1["default"] location={location}/>
      </div>
    </>);
};
exports["default"] = App;
