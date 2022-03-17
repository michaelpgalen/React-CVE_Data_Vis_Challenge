import React, {useState,useEffect} from 'react';

function DataHeaderLegend(props) {

  return (
    <div className = 'cveListColumn'>
    <div className = 'legend'>
      <div className = 'legendItem' style={{width: '40%'}}>
        Legend: Risk numbers are rounded. Bar size proportionate to number of hosts.
      </div>
      <div className= 'legend legendItem'>
        <p className = 'legendItem' style={{backgroundColor: 'PaleGreen'}}>
        {'Risk < 50'}
        </p>
        <p className = 'legendItem' style={{backgroundColor: 'orange'}}>
        {'50 - 100'}
        </p>
        <p className = 'legendItem' style={{backgroundColor: 'Tomato'}}>
        {'Risk > 100'}
        </p>
      </div>
    </div>
  </div>
  )
}

export default DataHeaderLegend;
