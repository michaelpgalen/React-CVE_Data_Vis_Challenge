import React, {useState,useEffect} from 'react';

const divStyle = {
  border: '1px solid green'
};

// const riskStyle = function (riskNum) {
//   const riskNum = props.cve.risk
//   switch (true) {
//     case (riskNum < 50): risk.style = 'background-color: PaleGreen'
//       break
//     case (riskNum < 100): risk.style = 'background-color: Orange'
//       break
//     case (riskNum >= 100): risk.style = 'background-color: Tomato'
//       break
//   }
// }

// WORKS in risk div, style =
// (props.cve.risk < 50) ? ({backgroundColor: 'PaleGreen'})
// : (props.cve.risk < 100) ? ({backgroundColor: 'Orange'})
// : ({backgroundColor: 'Tomato'})
//}>

function CVEContainer(props) {

  //begin fetch JSON data https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  const topEntries = Object.entries(data)
  console.log(topEntries)

  // sort records by risk number descending
  topEntries.sort(function(a, b) {
      a = a[1].risk
      b = b[1].risk
      return (a - b)
    })
    .reverse()

  // create a list of CVE container buttons
  const cveContainers = topEntries.map((item) => <CVEButton cve = {item[1]} key = {item[0]}/>)

  return (
    <div className = "columnWrapper" style = {divStyle}>
      {cveContainers}
    </div>
  );
}


function CVEButton(props) {
  let riskStyle = { }

  const risk = props.cve.risk;
  if (risk < 50) {
    riskStyle.backgroundColor = 'PaleGreen';
  } else if (risk < 100) {
    riskStyle.backgroundColor = 'Orange';
  } else {
    riskStyle.backgroundColor = 'Tomato';
  }

  const hostSize = props.cve.hosts.length;
  riskStyle.width = hostSize * 4 + 'px';
  console.log(riskStyle)

  return (
    <div className='cveContainer' risk={props.cve.risk}>
      <button className='cveButton' style = {divStyle}>
        <div className='cveAccItem'>
          {props.cve.identifier}
        </div>
        <div className='cveAccItem risk' style={riskStyle}>
          {Math.round(props.cve.risk)}
        </div>
        <div className='cveAccItem hosts'>
          {props.cve.hosts.length}
        </div>
      </button>
    </div>
  )
}

export default CVEContainer;
