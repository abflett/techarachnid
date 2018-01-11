import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     49.9115604,-97.1103054*/
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0uxgjwm4fye1imo1xVLWQ8-ECynIOI1U",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={5} defaultCenter={{ lat: 49.9115604, lng: -97.1081167 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 49.9115604, lng: -97.1081167 }} />
    )}
  </GoogleMap>
));

export default Map;