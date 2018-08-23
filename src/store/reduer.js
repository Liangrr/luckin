import { combineReducers } from 'redux'
import homeReducer from '../pages/home/root/store'
import menuReducer from '../pages/menu/root/store'
import orderReducer from '../pages/order/root/store'
import carReducer from '../pages/car/root/store'
import mineReducer from '../pages/mine/root/store'

export default combineReducers({
    home: homeReducer,
    menu: menuReducer,
    order: orderReducer,
    car:carReducer,
    mine: mineReducer
});