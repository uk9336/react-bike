import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Header from "../Common/Header/Header";
import CommonTemplate from "../Common/CommonTemplate";
import { find } from "../../api/api_bike";
import axios from "axios";

var points = [
  { lat: 37.400465, lng: 127.11348 },
  { lat: 37.400463, lng: 127.11347 },
  { lat: 37.400464, lng: 127.11346 },
  { lat: 37.400455, lng: 127.11345 },
];

// class MapAPI extends Component {
function MapAPI({ google, locations = [] }) {

  var call = 0;

  useEffect(() => {
    onBikeHandler();
    call = 1;
  }, []);

  const dispatch = useDispatch();
  const onBikeHandler = () => {
    console.log('click')
    // dispatch(find())
    //   .then(
    //     response => {
    //       console.log(response);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    if (call == 0) {
      axios
        .get("/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI", {
          headers: {
            'x-Gateway-APIKey': process.env.REACT_APP_TMONEYKEY,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    }

  };


  return (
    <CommonTemplate>
      <Header title={"자전거 대여소 정보"} />
      <div>
        <Map
          google={google}
          zoom={16}
          initialCenter={{ lat: 37.400465, lng: 127.11348 }}
        ></Map>
      </div>
    </CommonTemplate>
  );
}
// }
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPKEY,
})(MapAPI);
