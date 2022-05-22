import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Header from "../Common/Header/Header";
import CommonTemplate from "../Common/CommonTemplate";
import { find } from "../../api/api_bike";
import axios from "axios";

function MapAPI(
  { google, locations = [] }
) {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  var call = 0;
  const [Location, setLocation] = useState([]);
  useEffect(() => {
    onBikeHandler();
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
    axios
      .get("/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI", {
        headers: {
          'x-Gateway-APIKey': process.env.REACT_APP_TMONEYKEY,
        },
      })
      .then((response) => {
        setLocation(response.data.valueResults)
      });
  };

  return (
    <CommonTemplate>
      <Header title={"자전거 대여소 정보"} />
      <div>
        <Map
          google={google}
          zoom={8}
          initialCenter={{ lat: 37.400465, lng: 127.11348 }}
          center={{ lat: 37.400465, lng: 127.11348 }}>

          <div>
            {Location.map((todo, index) => {
              return (
                <div>
                  <Marker
                    key={String(index)}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'Dolores park'}
                    position={{ lat: todo.rncnLttdLoc, lng: todo.rncnLngtLoc }} />
                </div>
              )
            })}
          </div>
        </Map>
      </div>
    </CommonTemplate>
  );
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPKEY,
})(MapAPI);
