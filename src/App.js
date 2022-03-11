import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';

const Layout = styled.div`
width:100%;
height:100vh;
`

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
