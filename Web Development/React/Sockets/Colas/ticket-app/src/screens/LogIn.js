import { SaveOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    InputNumber,
    Typography,
    Divider
} from 'antd';
import { Redirect, useHistory } from 'react-router-dom';
import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 14 },
};

const { Title, Text } = Typography;

export const LogIn = () => {

    const history = useHistory();
    const { agent, desktop }= getUserStorage();

    useHideMenu(false);

    const onFinish = ({ agent, desktop }) => {
        localStorage.setItem('agent', agent);
        localStorage.setItem('desktop', desktop);
        history.push('/desktop');
    };
    
    if (agent && desktop) {
        return <Redirect to="/desktop" />
    }

    return (
        <>
            <Title label="2">Log In</Title>
            <Text>Write down below your name and desktop number</Text>
            <Divider />

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Name of the Agent"
                    name="agent"
                    rules={[{ required: true, message: 'Please input your username' }]}
                >
                    <Input />
                </Form.Item>
        
                <Form.Item
                    label="Desktop"
                    name="desktop"
                    rules={[{ required: true, message: 'Please input your desktop number' }]}
                >
                    <InputNumber min="1" max="99"/>
                </Form.Item>

        
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" shape="round">
                        <SaveOutlined />
                        Log In
                    </Button>
                </Form.Item>
        </Form>
        </>
        
    )
}
