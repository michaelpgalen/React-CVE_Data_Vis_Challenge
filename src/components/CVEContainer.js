import React, {useState,useEffect} from 'react';
import DataHeader from './DataHeader';
import DataHeaderLegend from './DataHeaderLegend'

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

  // sort records by risk number descending
  topEntries.sort(function(a, b) {
      a = a[1].risk
      b = b[1].risk
      return (a - b)
    })
    .reverse()

  // create a list of CVE container buttons
  const cveContainers = topEntries.map(
    (item) => <CVEButton cve = {item[1]} key = {item[0]} setCVE = {props.setCVE}
    />
  )

  return (
    <div className = "columnWrapper"  >
      <DataHeader />
      <DataHeaderLegend />
      <div className='cveList'>
      {cveContainers}
      </div>
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
  riskStyle.width = hostSize * 3 + 'px';
  //console.log(riskStyle)

  return (
    <div className='cveListColumn' risk={props.cve.risk} onClick = {() => {
      const newClickedCVE = props.cve;
      props.setCVE(newClickedCVE);
    }}>
      <Clickable identifier = {props.cve.identifier}
      risk = {Math.round(props.cve.risk)}
      styleRisk={riskStyle}
      id = {props.cve.id}
      >
      </Clickable>
    </div>
  )
}

function Clickable (props) {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={isActive ? 'cveButton active': 'cveButton'}
      onClick={toggleClass}
      id={props.id}
    >
      <div className='cveAccItem'>
        {props.identifier}
      </div>
      <div className='cveAccItem risk' style={props.styleRisk}>
        {props.risk}
      </div>
    </button>
   );
}

export default CVEContainer;
