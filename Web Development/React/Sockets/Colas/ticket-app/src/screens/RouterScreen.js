import {
    Layout,
    Menu
} from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { LogIn } from './LogIn';
import { ColaScreen } from './ColaScreen';
import { CreateTicket } from './CreateTicket';
import { DesktopScreen } from './DesktopScreen';
import { UIContext } from '../context/UiContext';
import { useContext } from 'react';

const { Sider, Content } = Layout;

export const RouterScreen = () => {

    const { hideMenu } = useContext(UIContext);

    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider
                    collapsedWidth="0"
                    breakpoint="md"
                    hidden={ hideMenu }
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/login">
                                Log In
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/cola">
                                Cola de Tickets
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/create">
                                Create Tickets
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/login" component={ LogIn } />
                        <Route path="/cola" component={ ColaScreen } />
                        <Route path="/create" component={ CreateTicket } />
                        <Route path="/desktop" component={DesktopScreen} />
                            
                        <Redirect to="/login" />
                    </Switch>
                </Content>
                </Layout>
            </Layout>
        </Router>
    )
}
