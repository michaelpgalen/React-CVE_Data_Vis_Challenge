import React, {useState,useEffect} from 'react';

function DataHeader(props) {

  return (
    <div className = 'cveListColumn'>
      <div className = 'dataHeader'>
        <div className = 'dataHeaderItem'>
        CVE Identifier
        </div>
         <div className = 'dataHeaderItem'>
        Host Size and Risk
        </div>
      </div>
    </div>
    )
}

export default DataHeader;
