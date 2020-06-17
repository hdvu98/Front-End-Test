import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';
import {Humans} from './containers/humanManagement';
import {Spinner} from './components/spinner';
import {ScrollTop} from './components/scrollTop';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }
  componentDidMount(){
    setTimeout(()=> this.setState({...this.state, loading: false}), 1000)
  }

  render(){
    const { loading } = this.state
    return (
      <div className="App">
        {
          loading ?
            <Spinner />
            :
            <BrowserRouter>
              <NavBar />
              <ScrollTop/>
              <Switch>
                <Route path="/">
                  <Humans />
                </Route>
              </Switch>
              <Footer />
            </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;
