import React, {useState} from 'react';
import StockTable from '../components/StockTable/StockTable';
import Websocket from 'react-websocket';
import moment from 'moment';

const StockContainer = () => {
    const [map, setMap] = useState({});

    const handleData = (data) => {
        const mappedData = JSON.parse(data);
        const newMap = {...map}
        if (mappedData.length > 0) {
            mappedData.forEach(stock => {
                const key = stock[0];
                const latestVal = stock[1];
                if (newMap[key]) {
                    const initialVal = newMap[key].val;
                    newMap[key] = (latestVal > initialVal) ? { val: latestVal, color: 'green', timeStamp: moment(new Date()).fromNow()} : { val: latestVal, color: 'red', timeStamp: moment(new Date()).fromNow()};
                } else {
                    newMap[key] = { val: latestVal, color: 'white', timeStamp: moment(new Date()).fromNow()};
                }
            });
        }
        console.log(newMap)
        setMap(newMap);
    };

    return (<React.Fragment>
        <Websocket url='ws://stocks.mnet.website'
              onMessage={handleData}/>
        <StockTable stockData={map}/>
    </React.Fragment>)
};

export default StockContainer;