import React, {useState, useEffect} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header"
import Customize from "./components/Customize"
import Checkout from "./components/Checkout"
import './index.css';
function App() {
  const [ingredients, setIngredients] = useState({
    basil : false,
    cheese: false,
    mushroom : false,
    olive : false,
    pineapple: false,
    tomato : false
  })
  useEffect(() => {
    const data = localStorage.getItem('ingredients')
    if (data){setIngredients(JSON.parse(data))}
    
  }, [])
  return (
    <div className="App">
      <Header />
       <Router>
         <Switch>
          <Route exact path='/'>
            <Customize ingredients={ingredients} setIngredients={setIngredients} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout  ingredients={ingredients}  />
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
