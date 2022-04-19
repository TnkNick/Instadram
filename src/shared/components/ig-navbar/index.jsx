import React from "react";
import styles from "./styles";
import { Images } from "../../themes";
import { Container, Row, Col } from 'react-grid-system';
import { IGSearchBox } from '../index'

export const IGNavBar = () => {
    return (
        <div style={styles.container}>
            <Container>
                <Row style={styles.block_header}>
                    <Col xl={2} />
                    <Col xl={2}>
                        <Row>
                            <Col xl={2} />
                            <Col xl={10}>
                                <Row>
                                    <Col xl={2} />
                                    <Col xl={10}>
                                        <img style={styles.header_image} src={Images.instagramHeader} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={1} />
                    <Col xl={2}>
                        <IGSearchBox />
                    </Col>
                    <Col xl={5}>
                        <Row>
                            <Col xl={1} />
                            <Col xl={11} >
                                <Row>
                                    <Col xl={0.4} />
                                    <Col xl={11.6}>
                                        <img style={styles.icon_image} src={Images.home} />
                                        <img style={styles.icon_image} src={Images.messager} />
                                        <img style={styles.icon_image} src={Images.plus} />
                                        <img style={styles.icon_image} src={Images.safari} />
                                        <img style={styles.icon_image} src={Images.heart} />
                                        <img style={styles.icon_image} src={Images.profile} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}