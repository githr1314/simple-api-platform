import * as React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { HomeOutlined, AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

class Login extends React.Component {
    constructor(props:Object) {
        super(props)
    }
    render():JSX.Element {
        return (
            <Layout style={{
                minHeight: '100%'
            }}>
                <Header>
                    <span>登陆</span>
                </Header>
                <Layout>
                    <Sider>
                    </Sider>
                    <Content>
                        <span>contnet</span>
                    </Content>
                </Layout>
                <Footer>
                </Footer>
            </Layout>
        )
    }
}



export default Login;