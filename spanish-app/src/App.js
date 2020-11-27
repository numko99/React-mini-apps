import React, { Component } from 'react';
import Main from './contrainer/Main';
import Layout from './component/Layout/Layout'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout><Main/></Layout>
    {/* koment */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
