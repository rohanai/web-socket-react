import React from 'react';
import sn from 'classnames';

import './StockTable.scss';

const blockName = 'stock-table';

const StockTable = React.memo((props) => {
    const { stockData } = props;
    return (
        <React.Fragment>
            <div className={blockName}>
                <div className='stock-row'>
                    <div className={sn(`${blockName}__cell`)}>Ticker</div>
                    <div className={sn(`${blockName}__cell`)}>Price</div>
                    <div className={sn(`${blockName}__cell`)}>Last Update</div>
                </div>
                {Object.keys(stockData).map((key, value) => (
                    <div className='stock-row'>
                        <div className={sn(`${blockName}__cell`)}>
                            {key}
                        </div>
                        <div className={sn(`${blockName}__cell`)} style={{backgroundColor: stockData[key].color}}>
                            {stockData[key].val}
                        </div>
                        <div className={sn(`${blockName}__cell`)}>
                            {stockData[key].timeStamp}
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
});

export default StockTable;