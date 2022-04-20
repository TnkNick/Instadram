import React from "react";
import styles from "./styles";
import { Images } from "../../themes";
import { IGLabel } from "../ig-label";
import { Container, Row, Col } from "react-grid-system";
import stylesText from '../ig-label/styles'
import './styles.css'

export const IGComment = (props) => {
    const comments = props.comments

    return (
        <div style={styles.comment} ref={props.refUse}>
            <span onClick={(e) => props.onClickCloseViewAll(e)} className="close">&times;</span>
            <Container style={styles.container}>
                <Row>
                    <Col xl={1} />
                    <Col xl={7}>
                        <img style={styles.image_content} src={props.photos[0]} />
                    </Col>
                    <Col xl={3}>
                        <div style={styles.comment_content}>
                            <div style={styles.comment_header_content}>
                                <img style={styles.title_image} src={props.image} />
                                <div style={styles.title_box}>
                                    <IGLabel style={styles.title_content}>
                                        {props.name}
                                    </IGLabel>
                                    <IGLabel style={styles.sub_title_content}>
                                        {props.location}
                                    </IGLabel>
                                </div>
                                <img style={styles.title_icon} src={Images.more} />
                            </div>
                            <div style={styles.comment_body_box}>
                                <div style={styles.comment_body_content}>
                                    <img style={styles.title_image} src={props.image} />
                                    <div style={styles.title_box}>
                                        <div style={styles.caption_box}>
                                            <IGLabel style={styles.title_content}>
                                                {props.name}&nbsp;
                                            </IGLabel>
                                            <IGLabel style={styles.caption_content}>
                                                {props.captions}
                                            </IGLabel>
                                        </div>
                                        <IGLabel style={styles.time_content}>
                                            {props.timestamp}
                                        </IGLabel>
                                    </div>
                                </div>
                                {/* comment section */}
                                {comments && comments.map(value => {
                                    return (
                                        <div style={styles.comment_body_content}>
                                            <img style={styles.comment_image} src={value.image} />
                                            <div style={styles.title_box}>
                                                <div style={styles.caption_box}>
                                                    <IGLabel style={styles.title_content}>
                                                        {value.name}&nbsp;
                                                    </IGLabel>
                                                    <IGLabel style={styles.caption_content}>
                                                        {value.text}
                                                    </IGLabel>
                                                </div>
                                                <IGLabel style={styles.time_content}>
                                                    {value.timestamp}
                                                </IGLabel>
                                            </div>
                                            <img style={styles.title_icon} src={Images.heart} />
                                        </div>
                                    )
                                })}
                                {/* comment section */}
                            </div>
                            <div style={styles.footer_box}>
                                <div style={styles.icon_section}>
                                    <div style={styles.icon_left_section}>
                                        <img style={styles.icon} src={Images.heart} />
                                        <img style={styles.icon} src={Images.comment} />
                                        <img style={styles.icon} src={Images.shared} />
                                    </div>
                                    <div>
                                        <img style={styles.icon} src={Images.save} />
                                    </div>
                                </div>
                                <div style={styles.info_like_section}>
                                    <IGLabel style={styles.info_like_content}>
                                        Liked by&nbsp;
                                    </IGLabel>
                                    <IGLabel style={styles.info_highlight_content}>{props.likeByName}&nbsp;</IGLabel>
                                    <IGLabel style={styles.info_like_content}>
                                        and&nbsp;
                                    </IGLabel>
                                    <IGLabel style={styles.info_highlight_content}>
                                        {props.amountLikes} others
                                    </IGLabel>
                                </div>
                                <div style={styles.info_time_section}>
                                    <IGLabel style={stylesText.time_label}>{props.timestamp}</IGLabel>
                                </div>
                                <div style={styles.comment_section}>
                                    <img style={styles.comment_emo_icon} src={Images.smile} />
                                    <textarea style={styles.comment_text_area} placeholder={'Add a comment...'} />
                                    <IGLabel style={styles.comment_btn}>
                                        Post
                                    </IGLabel>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}