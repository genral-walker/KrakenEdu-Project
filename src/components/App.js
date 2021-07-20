
import React from 'react';
import './App.scss';
import Box from './Box/Box';
import Btn from './Btn/Btn';
import { ReactComponent as Idea } from '../assets/svgs/idea.svg';

const App = () => {

  return (
    <div className='app'>

      <nav className='nav'>
        <Idea />
        <h2>6 Suggestions</h2>

        <span>Sort by:</span>
        <select>
          <option selected>Most Upvotes</option>
          <option>Least Upvotes</option>
        </select>

        <Btn type='nav'>+ Add Feedback</Btn>
      </nav>


      <div className='aside'>

        <Box type='inverse'>
          <h1>Frontend Mentor</h1>
          <h4>Feedback Board</h4>
        </Box>


        <Box type='overview'>
          <Btn>All</Btn>
          <Btn>UI</Btn>
          <Btn>UX</Btn>
          <Btn>Enhancement</Btn>
          <Btn>Bug</Btn>
          <Btn>Feature</Btn>
        </Box>


        <Box type='roadmap'>

          <div>
            <h2>Roadmap</h2>
            <a href='#'>View</a>
          </div>

          <div>
            <span></span>
            <p>Planned</p>
            <h2>2</h2>
          </div>

          <div>
            <span></span>
            <p>In-Progress</p>
            <h2>3</h2>
          </div>

          <div>
            <span></span>
            <p>Live</p>
            <h2>1</h2>
          </div>

        </Box>
      </div>


      <div className='main'>

        <Box>
        
        </Box>
      </div>

    </div>
  );
}

export default App;


