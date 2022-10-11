import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type Response<T = any> = AxiosResponse<T>;
export type List<T> = Promise<Response<Array<T>>>;
export type Item<T> = Promise<Response<T>>;

export type Bff = AxiosInstance;
export type Get = typeof axios.get;
export type Post = typeof axios.post;
export type Delete = typeof axios.delete;
export type Put = typeof axios.put;
export type Patch = typeof axios.patch;

export const ARDUINO_MAKER: Bff = axios.create({
  baseURL: 'https://arduino-maker-bff.herokuapp.com/',
  timeout: 30000,
});
