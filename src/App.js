import logo from './logo.svg'
import './App.css'
import MNavbar from './components/MobileApp/Navbar'
import Mobiles from './components/MobileApp/Mobiles'
import SingleMobile from './components/MobileApp/SingleMobile'
import AddCart from './components/MobileApp/Addcart'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(reducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>
      <div className='con'>
        <Router>
          <MNavbar />
          <Switch>
            <Route exact path='/'>
              <Mobiles />
            </Route>
            <Route path='/mobile/:id'>
              <SingleMobile />
            </Route>
            <Route path='/addcart'>
              <AddCart />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
