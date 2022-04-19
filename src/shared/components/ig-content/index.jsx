import React from "react";
import styles from "./styles";
import stylesText from '../ig-label/styles'
import { IGLabel } from "../";
import { Images } from '../../themes/'

export const IGContent = (props) => {
    const imageGallery = props.photoGallery
    const comments = props.comments
    const spliceArray = comments && comments.slice(0, 2)
    return (
        <div style={styles.container}>
            <div style={styles.title_section}>
                <img style={styles.title_image} src={props.imageProfileURL} />
                <IGLabel style={styles.title_content}>
                    {props.name}
                </IGLabel>
                <img style={styles.title_icon} src={Images.more} />
            </div>
            <div style={styles.image_section}>
                {imageGallery && imageGallery.map((value, index) => {
                    return (
                        <img key={index} style={styles.image_content} src={value} />
                    )
                })}
            </div>
            <div style={styles.icon_section}>
                <div style={styles.icon_left_section}>
                    <img style={styles.icon} src={Images.heart} />
                    <img style={styles.icon} src={Images.comment} />
                    <img style={styles.icon} src={Images.shared} />
                </div>
                <div style={styles.page_control_section}>
                    {
                        imageGallery.length !== 1 && imageGallery && imageGallery.map((_, index) => {
                            if (index == 0) {
                                return <div key={index} style={styles.page_control_selected} />
                            } else {
                                return <div key={index} style={styles.page_control} />
                            }
                        })
                    }
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
            <div style={styles.info_caption_section}>
                <IGLabel style={styles.info_highlight_content}>{props.name}&nbsp;</IGLabel>
                <IGLabel style={styles.info_like_content}>
                    {props.captions}&nbsp;
                </IGLabel>
            </div>
            {
                comments && comments.length > 2 ?
                    <>
                        <div style={styles.info_view_all_section}>
                            <IGLabel style={styles.info_viewall_content}>{`View all ${comments.length} comments`}&nbsp;</IGLabel>
                        </div>
                    </>
                    :
                    undefined
            }
            {
                spliceArray && spliceArray.map((value, index) => {
                    return (
                        <div style={styles.info_comment_section} key={index}>
                            <IGLabel style={styles.info_highlight_content}>{value.name}&nbsp;</IGLabel>
                            <IGLabel style={styles.info_like_content}>
                                {value.text}&nbsp;
                            </IGLabel>
                        </div>
                    )
                })}
            <div style={styles.info_time_section}>
                <IGLabel style={stylesText.time_label}>{props.timeToPost}</IGLabel>
            </div>
            <div style={styles.comment_section}>
                <img style={styles.comment_emo_icon} src={Images.smile} />
                <textarea style={styles.comment_text_area} placeholder={'Add a comment...'} />
                <IGLabel style={styles.comment_btn}>
                    Post
                </IGLabel>
            </div>
        </div>
    )
}