import axios from "axios";

//0a51749d-d420-4004-93e2-c7c87491c7aa

export function find() {
  // const request = axios
  //   .get("/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI", {
  //     headers: {
  //       "x-Gateway-APIKey": "0a51749d-d420-4004-93e2-c7c87491c7aa",
  //     },
  //   })
  //   .then((response) => response.data);
  // return {
  //   payload: request,
  // };
  const req = new Request('/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI', {
    method: "GET",
    headers: {
      "x-Gateway-APIKey": "0a51749d-d420-4004-93e2-c7c87491c7aa",
    }
  });
}
