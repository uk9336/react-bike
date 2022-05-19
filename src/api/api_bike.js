import axios from "axios";

//0a51749d-d420-4004-93e2-c7c87491c7aa

export function find() {
  const request = axios
    .get("https://apigw.tmoney.co.kr:5556/gateway/bsBikeRentIdGet/v1/bsBikeRentIdGet/restAPI", {
      headers: {
        // "Cache-Control": "no-cache",
        // "Accept": "*/*",
        // 'Access-Control-Allow-Origin': '*',
        "x-Gateway-APIKey": "0a51749d-d420-4004-93e2-c7c87491c7aa",
      },
    })
    .then((response) => response.data);
  return {
    type: "find",
    payload: request,
  };
}
