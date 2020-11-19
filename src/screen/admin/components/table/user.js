import React from 'react';
import { Col, Row, Button, Table, Container, } from 'reactstrap';
import { Color } from '../../../../constants/constant';

const user = ({ users, selectUser, removeUser }) => {
    return (
        <Container>
            <Row>
                <Col className="ml-auto mr-auto" md="12 ">
                    <Table responsive style={{ borderRadius: 3 }}>
                        <thead>
                            <tr>
                                <th style={{ color: Color.white, padding: 0,paddingLeft:10 }}>Title</th>
                                <th className="text-right" style={{ color: Color.white, padding: 12 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{ padding: 0, color: Color.white,paddingLeft:10  }}>
                                            {data.firstName || data.lastName ? <img
                                                alt="..."
                                                style={{ height: 35, width: 35, borderRadius: 50, marginRight: 15 }}
                                                src={require(`../../../../icons/${data.firstName + " " + data.lastName}.jpg`)}
                                            ></img> : ""}{data.title}</td>
                                        <td className="text-right" style={{ padding: 10 }}>
                                            <Button
                                                className="btn-icon mr-1 btn btn-success btn-sm"
                                                color="success"
                                                size="sm"
                                                type="button"
                                                onClick={() => selectUser(data)}>
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                            </Button>
                                            <Button
                                                className="btn-icon btn btn-danger btn-sm"
                                                color="danger"
                                                size="sm"
                                                type="button"
                                                onClick={() => removeUser(data)}>
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default user;