import * as TodoActionCreators from './todo';
import * as ColorActionCreators from './color';

export default {
  ...TodoActionCreators,
  ...ColorActionCreators,
};
