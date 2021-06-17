import {Layout,Col, Row, Typography,Image } from "antd";
import { Content,Footer} from 'antd/lib/layout/layout';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Entry from "./components/Entry"
import NavBar from "./components/NavBar";
import Report from "./components/Report";
import ViewEntry from "./components/ViewEntry";
import logo from "./assets/logo.png"
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
              <Route exact path="/">
                <Entry />
              </Route>
              </Switch>
      
             
        
     </div>

        </Content>
        <Footer >
          <Row style={{ dispaly: 'flex', justifyContent: 'center' }} >
            <Image preview={false}
              width={100}
              src={logo}
            />
        </Row>
    
         
        </Footer>
        
 </Layout>
    </HashRouter>
  );
}

export default App;
