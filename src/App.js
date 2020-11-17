import React from 'react';
import Layout from './components/Layout/Layout';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Content from './containers/Content/Content';
import Team from './components/Team/Team';
import Payment from './components/Payment/Payment';
import Login from './components/Login/Login';
import Topic from './containers/Topic/Topic';
import Video from './components/Vid/Videos';
import "../node_modules/video-react/dist/video-react.css"; // import css
// import classes from './App.module.css';


function App(props) {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path={'/content/:slug/:id'} component={Video}/>
          <Route path={'/content/:slug'} component={Topic} />
          <Route path='/content' exact component={Content}/>
          <Route path='/team'  component={Team}/>
          <Route path='/payment' exact component={Payment}/>
          <Route path='/login' exact component={Login}/>
         

        </Switch>
      </Layout>
    
    </div>
  );
}

export default App;
