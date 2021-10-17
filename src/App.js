import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import Routes from './routes';
import { Fragment } from 'react';
import  Footer  from './components/Footer/Footer';
import Header from './Header/Header';
import { CartProvider } from './components/Cart/CartProvider';
import axios from 'axios';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      data:[]
    };
  }

  
  componentDidMount() {
    axios.get('https://localhost:5001/api/user',{
        withCredentials: true,
        headers: {'Content-Type':'application/json'}
    }
    )
    .then(response=>{
      this.setState({data:response.data})
      this.setState({name:response.data.HoTen})
    })
}

  render() {
    const callBackFunction=(data)=>{
      axios.get('https://localhost:5001/api/user',{
          withCredentials: true,
          headers: {'Content-Type':'application/json'}
      }
      )
      .then(response=>{
        this.setState({data:response.data})
        this.setState({name:response.data.HoTen})
      })
    }
    return (
      <CartProvider>
        <Router>
          <Fragment>
            <div className = "container">
            <Header name={this.state.name} setName={callBackFunction} />
            <div>
                {this.showContentMenus(Routes)}
            </div>
            </div>
            <Footer/>
          </Fragment>
          </Router>
      </CartProvider>
    );
  }
  showContentMenus = (Routes) => {
    var result = null;
    if (Routes.length > 0)
    {
      result = Routes.map((route, index) => {
        return (
          <Route
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
            />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}
const  mapStateToProps = (state) => {
  return{
      name : state.login
  }
}
export default App;
