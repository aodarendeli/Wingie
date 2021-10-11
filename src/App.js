import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistedStore } from './redux/stores/store'
import { PersistGate } from 'redux-persist/integration/react'
import Ozgur from './ozgur'
import Home from './components/home/home'
import Cards from './components/Card/Card'

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/ozgur' component={Ozgur} />
          <Route exact path='/map' component={Cards}/>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
  );
}
export default App;
