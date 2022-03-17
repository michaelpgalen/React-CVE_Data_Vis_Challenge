import React,{useState,useEffect} from 'react';
import CVEContainer from './CVEContainer';
import DetailsPanel from './detailsPanel';


function DataWrapper(props) {
  const [activeCVE, setCVE] = useState({});
  const updateActiveCVE = (newActiveCVE) => {
    setCVE(newActiveCVE)
  };

  useEffect(() => {
    const activeRows = document.querySelectorAll('.active')
    activeRows.forEach((item) => {
      if (item.id != activeCVE.id) {
        item.className = 'cveButton'
      } else {
        item.className = 'cveButton active'
      }
    });

  });

  console.log(activeCVE.id)
  console.log(activeCVE.description)
  return (
    <div className="DataWrapper">
      <CVEContainer setCVE = {setCVE}/>
      <DetailsPanel
        identifier = {activeCVE.identifier}
        risk = {activeCVE.risk}
        description = {activeCVE.description}
        hosts = {activeCVE.hosts}
        patches = {activeCVE.patches}
        urls = {activeCVE.urls}
        modified = {activeCVE.modified}
        localId = {activeCVE.id}/>
    </div>

  );
}

export default DataWrapper;
