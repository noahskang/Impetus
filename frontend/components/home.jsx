import NavBar from './navbar/navbar_container';
import React from 'react';
import ProjectContainer from './projects/project_container';

const Home = () => (
  <div>
    <NavBar />
    <div>
      <ProjectContainer />
    </div>
  </div>
);

export default Home;
