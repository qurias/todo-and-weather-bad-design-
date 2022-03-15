import axios from "axios";
import { IColor } from "../../models/IColor";

export const setColorApp = (color: string) => {

  const tempColor = {
    colorApp: color,
  };

  axios.post<IColor>(`http://localhost:3001/colors`, tempColor);

  return {
    type: 'SET_COLOR_APP',
    payload: color,
  }
};

