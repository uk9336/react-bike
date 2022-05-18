import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Header from "../Common/Header/Header";
import CommonTemplate from "../Common/CommonTemplate";

var points = [
  { lat: 37.400465, lng: 127.11348 },
  { lat: 37.400463, lng: 127.11347 },
  { lat: 37.400464, lng: 127.11346 },
  { lat: 37.400455, lng: 127.11345 },
];

class MapAPI extends Component {
  // componentDidMount() {
  //   var bounds = new this.props.google.map.LatLngBounds();
  //   for (var i = 0; i < points.length; i++) {
  //     bounds.extend(points[i]);
  //   }
  // }

  render() {
    return (
      <CommonTemplate>
        <Header title={"자전거 대여소 정보"} />
        <div>
          <Map
            google={this.props.google}
            zoom={16}
            initialCenter={{ lat: 37.400465, lng: 127.11348 }}
          ></Map>
        </div>
      </CommonTemplate>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPKEY,
})(MapAPI);
