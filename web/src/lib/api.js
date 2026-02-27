import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiv2 = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_V2,
});
