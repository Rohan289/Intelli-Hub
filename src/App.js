import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';
import { I18nPropvider, LOCALES } from './i18nProvider';

const Layout = styled.div`
width:100%;
height:100vh;
`

function App() {
  const [defaultLanguage,setDefaultLanguage] = React.useState(LOCALES.ENGLISH);
  const updateLocale = (value) => {
    setDefaultLanguage(value);
  }

  return (
    <React.Fragment>
        <I18nPropvider locale={defaultLanguage}>
      <Router>
        <Layout>
        <NavigationBar updateLocale={updateLocale}/>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        </Layout>
      </Router>
      </I18nPropvider>
    </React.Fragment>
  );
}

export default App;
