import React, {useState,useEffect} from 'react';

function DetailsPanel(props) {

  const hosts = props.hosts?.join(', ')
  const patches = props.patches?.join(', ')
  const urls = props.urls?.trim().split('\n').map((item) => <a href = {item} key = {item}>{item}</a>)

  return (
    <div className = "columnWrapper" >
      <div className = 'detailsPanel'>
        <h4 className = 'detailTitle'> CVE Identifier</h4>
        <p className = 'cveDetails' id = 'cveIdentifier'>
          {props.identifier}
        </p>
        <h4 className = 'detailTitle'>Risk</h4>
        <p className = 'cveDetails' id = 'risk'>
          {props.risk}
        </p>
        <h4 className = 'detailTitle' >Description</h4>
        <p className = 'cveDetails' id = 'description'>
          {props.description}
        </p>
        <h4 className = 'detailTitle'>Hosts = {props.hosts?.length}</h4>
        <p className = 'cveDetails' id = 'hosts'>
          {hosts}
        </p>
        <h4 className = 'detailTitle'>Local ID</h4>
        <p className = 'cveDetails' id = 'localId'>
          {props.localId}
        </p>
        <h4 className = 'detailTitle'>Patches</h4>
        <p className = 'cveDetails' id = 'patches'>
          {patches}
        </p>
        <h4 className = 'detailTitle'>URLs</h4>
        <p className = 'cveDetails' id = 'urls'>
          {urls}
        </p>
        <h4 className = 'detailTitle'>Modified</h4>
        <p className = 'cveDetails' id = 'modified'>
          {props.modified}
        </p>
      </div>
    </div>
  )
}

export default DetailsPanel;
