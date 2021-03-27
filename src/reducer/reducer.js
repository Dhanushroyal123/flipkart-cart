import { data } from '../components/MobileApp/data'

import {
  INCREASE,
  DECREASE,
  ADD_ITEM,
  REM_ITEM,
  SER_ITEM,
} from '../actions/actions'

const initialStore = {
  mobiles: data,
  filter: [],
  cart: [],
}

function reducer(state = initialStore, action) {
  switch (action.type) {
    case ADD_ITEM:
      let mobile = state.mobiles.find((each) => {
        return each.id === action.payLoad
      })
      return { ...state, cart: [...state.cart, mobile] }

    case REM_ITEM:
      let removeMob = state.cart.filter((each) => each.id != action.payLoad)
      console.log('removed', removeMob)
      return { ...state, cart: removeMob }

    case SER_ITEM:
      let newMobiles = state.mobiles.filter(
        (each) => each.pname.search(action.payLoad) >= 0
      )
      return { ...state, filter: newMobiles }

    case INCREASE:
      if (action.payLoad.amt >= 10) {
        let temp = state.cart.map((each) => {
          if (each.id === action.payLoad.id) {
            return { ...each, amt: 10 }
          }
          return each
        })
        return { ...state, cart: temp }
      } else {
        let temp = state.cart.map((each) => {
          if (each.id === action.payLoad.id) {
            return { ...each, amt: each.amt + 1 }
          }
          return each
        })
        return { ...state, cart: temp }
      }

    case DECREASE:
      if (action.payLoad.amt <= 1) {
        let temp = state.cart.map((each) => {
          if (each.id === action.payLoad.id) {
            return { ...each, amt: 1 }
          }
          return each
        })
        return { ...state, cart: temp }
      } else {
        let tempD = state.cart.map((each) => {
          if (each.id === action.payLoad.id) {
            return { ...each, amt: each.amt - 1 }
          }
          return each
        })
        return { ...state, cart: tempD }
      }

    default:
      return state
  }
}

export default reducer
