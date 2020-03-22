import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Websocket from 'react-websocket';
import StockContainer from './containers/StockContainer';

function App() {

  const handleData = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      {/* <Websocket url='ws://stocks.mnet.website'
              onMessage={handleData}/> */}
              <StockContainer />
    </div>
  );
}

export default App;
