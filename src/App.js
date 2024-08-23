import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  let PageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progresss, setProgresss] = useState(0);
  // state={
  //   progress:0
  // }
  const setProgress = (progresss) => {
    // this.setState({progress:progress})
    setProgresss({ progresss: progresss });
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progresss}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="apple" PageSize={PageSize} search="apple" />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" PageSize={PageSize} search="business" />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" PageSize={PageSize} search="entertainment" />}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" PageSize={PageSize} search="general" />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" PageSize={PageSize} search="health" />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" PageSize={PageSize} search="science" />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" PageSize={PageSize} search="sports" />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" PageSize={PageSize} search="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}
