import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 38,
    longitude: -97,
    zoom: 3,
  });

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapGL
        width={"100%"}
        height={"100%"}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN || ""}
        {...viewport}
        onViewportChange={setViewport}
      />
    </div>
  );
}

export default App;
