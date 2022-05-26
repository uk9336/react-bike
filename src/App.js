import './App.css';
import MapAPI from './component/Main/MapAPI';
import Test from './component/Test';
import Title from './component/Title';
import { Route, Switch } from "react-router-dom";

// redux
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const { value } = useSelector(state => state.value)
  const { count } = useSelector(state => state.count)

  const addValue = () => {
    dispatch({ type: 'increment' })
  }
  const subValue = () => {
    dispatch({ type: 'decrement' })
  }
  const resetValue = () => {
    dispatch({ type: 'reset' })
  }
  const pushButton = () => {
    dispatch({ type: 'push' })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MapAPI} />
      </Switch>
    </div>
  );
}
export default App;
