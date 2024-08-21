import './App.css';
import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default class App extends Component{
  PageSize=15;
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/'element={<News key="apple" PageSize={this.PageSize} search="apple"/>}></Route>
          <Route exact path='/business' element={<News key="business" PageSize={this.PageSize} search="business"/>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" PageSize={this.PageSize} search="entertainment"/>}></Route>
          <Route exact path='/general' element={<News key="general" PageSize={this.PageSize} search="general"/>}></Route>
          <Route exact path='/health' element={<News key="health" PageSize={this.PageSize} search="health"/>}></Route>
          <Route exact path='/science' element={<News key="science" PageSize={this.PageSize} search="science"/>}></Route>
          <Route exact path='/sports' element={<News key="sports" PageSize={this.PageSize} search="sports"/>}></Route>
          <Route exact path='/technology' element={<News key="technology" PageSize={this.PageSize} search="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
