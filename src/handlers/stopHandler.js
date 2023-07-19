import { data } from "../data.js"


export const stopHandler = () => {
  clearInterval(data.watchInterval);
}