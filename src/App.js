import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import DataWrapper from './components/DataWrapper'
import CVEContainer from './components/CVEContainer'

function App(props) {
  //begin fetch JSON data https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    // let values = Object.values(data)
    // let innerValues = Object.values(values)
    //testVar = 'Some random text'

  return (

    <div className="App">
      <h1> Current CVE Data </h1>
      <DataWrapper />
    </div>

  );
}

export default App;
