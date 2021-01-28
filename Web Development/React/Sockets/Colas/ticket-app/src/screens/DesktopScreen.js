import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const DesktopScreen = () => {

    const { agent, desktop } = getUserStorage();
    const history = useHistory();
    const [ticket, setTicket] = useState(null);
    const { socket } = useContext(SocketContext);

    useHideMenu(false);

    const logout = () => {
        localStorage.clear();
        console.log("Eh");
        history.replace('/login');
    };

    const nextTicket = () => {
        socket.emit(
            'next-ticket',
            {
                agent,
                desktop
            },
            ( ticket ) => {
                setTicket(ticket);
                console.log(ticket);
            }
        )
    }

    if (!agent || !desktop) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <Row>
                <Col span="20">
                    <Title level={2}>{ agent }</Title>
                    <Text>Your are at desktop: </Text>
                    <Text type="success">{ desktop }</Text>
                </Col>
                <Col span="4" align="right">
                    <Button
                        onClick={logout}
                    >
                        <CloseCircleOutlined
                            shape="round"
                            type="danger"
                        />
                        Log Out
                    </Button>
                </Col>
            </Row>
            <Divider />
            {
                ticket && 
                    <Row>
                        <Col>
                            <Text>
                                Busy with ticket: {''}
                            </Text>
                            <Text
                                style={{ fontSize: 25 }}
                                type="danger"
                            >
                                { ticket.number }
                            </Text>
                        </Col>
                    </Row>
            }
            <Row>
                <Col offset="18" span="6" align="right">
                    <Button
                        onClick={nextTicket}
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Next
                    </Button>
                </Col>
            </Row>
        </>
    )
}
