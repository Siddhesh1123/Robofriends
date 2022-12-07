import React, { useState,useEffect} from "react";
import { Robo } from "./Robo";
import Searchbox from "../Components/Searchbox";
import Cr from "../Components/Cr";
import './App.css';
import Scroll from '../Components/Scroll';


function App() {
  //use state
  const [Robot, SetRobot] = useState([])
  const [searchfield,setSearchfield]=useState("")
  
  //for searching
  const searchboy = (event) => {
    setSearchfield(event.target.value)
    const fliterdrobo = Robot.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    SetRobot(fliterdrobo);
    }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {SetRobot(users) })
  },[]);
  if (Robot.length === 0) {
    return<h1>LOADING</h1>
  }
  else{
    return (
      <div>
        <h1 className="tc f1 dark-red">ROBOTS</h1>
        <Searchbox searching={searchboy} />
        <Scroll>
          <Cr data={Robot} />
          {/* //chilrden */}
        </Scroll>
      </div>
    );
  }}
export default App;
