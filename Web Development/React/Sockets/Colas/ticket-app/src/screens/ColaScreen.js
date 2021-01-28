import React, { useContext, useEffect, useState } from 'react'
import { Col, Typography, List, Row, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { getLast } from '../helpers/getLast';

const { Title, Text } = Typography;

export const ColaScreen = () => {

    useHideMenu(true);

    const { socket } = useContext(SocketContext);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        socket.on('assigned-ticket', (tickets) => {
            setTickets(tickets);
        });

        return () => {
            socket.off('assigned-ticket');
        }
    }, [ socket ]);
    
    useEffect(() => {
        getLast()
            .then(({last}) => setTickets(last))
    }, []);

    return (
        <>
            <Title level={1}>Serving the client</Title>
            <Row>
                <Col span="12">
                    <List
                        dataSource={ tickets.slice(0, 3) }
                        renderItem={({ number, desktop, agent }) => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    actions={[
                                        <Tag color="volcano">{ agent }</Tag>,
                                        <Tag color="magenta">Desktop: { desktop }</Tag>
                                    ]}
                                >
                                    <Title>No. { number }</Title>
                                </Card>
                            </List.Item>
                        ) }
                    />
                </Col>
                <Col span="12">
                    <Divider>History</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={({ number, desktop, agent }) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={ `Ticket No. ${ number }` }
                                    description={
                                        <>
                                            <Text type="secondary">Desktop: </Text>
                                            <Tag color="magenta">{desktop}</Tag>
                                            <Text type="secondary">Agent: </Text>
                                            <Tag color="volcano">{agent}</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}
