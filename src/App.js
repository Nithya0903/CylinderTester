import {Layout,Col, Row, Typography } from "antd";
import { Content} from 'antd/lib/layout/layout';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Entry from "./components/Entry"
import NavBar from "./components/NavBar";
import Report from "./components/Report";
import ViewEntry from "./components/ViewEntry";
import './App.css';

function App() {

  return (

    <HashRouter>
        <Layout>
        <Row style={{ justifyContent: 'center' }}>
          <Typography.Title level={4} style={{ textAlign: "center" }} >
            MANORAMA OXYGEN PVT LTD,KALAMASSERY,COCHIN,KERALA
          </Typography.Title>
        </Row>
        <Row>
          <Col span={24}>
            <NavBar />
          </Col>


        </Row>
        <Content className="site-layout">
          <div className="site-layout-background" style={{ minHeight: 480 }}>
          
  
            <Switch>
              
              <Route path="/ViewEntry">
             <ViewEntry />
              </Route>
              <Route path="/Report">
         <Report />
              </Route>
              <Route path="/addEntry">
                <Entry />
              </Route>
              </Switch>
      
             
        
     </div>

        </Content>
     
 </Layout>
    </HashRouter>
  );
}

export default App;
