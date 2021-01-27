import React from 'react'
import { Col, Typography, List, Row, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
    {
        ticketNo: 33,
        desktop: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 34,
        desktop: 4,
        agent: 'Melissa Flores'
    },
    {
        ticketNo: 35,
        desktop: 5,
        agent: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        desktop: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 37,
        desktop: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 38,
        desktop: 2,
        agent: 'Melissa Flores'
    },
    {
        ticketNo: 39,
        desktop: 5,
        agent: 'Carlos Castro'
    },
];

export const ColaScreen = () => {

    useHideMenu(true);

    return (
        <>
            <Title level={1}>Serving the client</Title>
            <Row>
                <Col span="12">
                    <List
                        dataSource={ data.slice(0, 3) }
                        renderItem={({ ticketNo, desktop, agent }) => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    actions={[
                                        <Tag color="volcano">{ agent }</Tag>,
                                        <Tag color="magenta">Desktop: { desktop }</Tag>
                                    ]}
                                >
                                    <Title>No. { ticketNo }</Title>
                                </Card>
                            </List.Item>
                        ) }
                    />
                </Col>
                <Col span="12">
                    <Divider>History</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={({ ticketNo, agent }) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={ `Ticket No. ${ ticketNo }` }
                                    description={
                                        <>
                                            <Text type="secondary">Ticket No: </Text>
                                            <Tag color="magenta">{ticketNo}</Tag>
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
