import { _axios } from "./axios";

export const getSeatData = () => _axios.get("/seats.json").then((ret) => console.log("axios:: ", ret));
export const updateSeatData = (key, data) => {
    console.log('api:: update', key, data );
}
