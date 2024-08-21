import './App.css';
import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{
  PageSize=15;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path='/'element={<News setProgress={this.setProgress} key="apple" PageSize={this.PageSize} search="apple"/>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" PageSize={this.PageSize} search="business"/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" PageSize={this.PageSize} search="entertainment"/>}></Route>
          <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" PageSize={this.PageSize} search="general"/>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" PageSize={this.PageSize} search="health"/>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" PageSize={this.PageSize} search="science"/>}></Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" PageSize={this.PageSize} search="sports"/>}></Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" PageSize={this.PageSize} search="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
