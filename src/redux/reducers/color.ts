import { IColor } from '../../models/IColor';

const initialState: IColor = {
  color : {
    colorApp : "",
  },
};

const colors = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_COLOR_APP': {
      return {
        ...state,
        color: {
          colorApp: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default colors;
