import * as React from 'react';
import Style from './style.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';

const layout = {
    labelCol: {
        offset: 4,
        span: 5,
    },
    wrapperCol: {
      span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
    },
};


class Login extends React.Component {
    constructor(props:any) {
        super(props)
    }

    onFinish(values:any) {
        this.props?.history.push('/main');
    };
    
    render():JSX.Element {
        return (
            <div className={Style.bg}>
                <div className={Style.login}>
                    <div className={Style.title}>一个简单的API管理工具</div>
                    <Form {...layout} name="basic" onFinish={this.onFinish.bind(this)}>
                        <Form.Item label="用户名" name="username" rules={[{required: true, message: '请输入用户名',}]}>
                            <Input size='small' />
                        </Form.Item>

                        <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码'},]}>
                            <Input.Password  size='small' />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">登 陆</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);