import React from "react";
import { IGLabel } from '../index'
import styles from "./styles";
import stylesText from '../ig-label/styles'

export const IGInfoShortSection = (props) => {
    const isSmall = props.isSmall || false
    return (
        <div style={props.style}>
            <div style={styles.container}>
                <img style={isSmall ? styles.sm_image_section : styles.image_section} src={props.image} />
                <div style={isSmall ? styles.sm_centerItem : styles.centerItem}>
                    <IGLabel style={styles.main_title}>{props.name}</IGLabel>
                    <IGLabel style={isSmall ? stylesText.main_sm_subTitle : stylesText.main_subTitle}>{props.infoFollow}</IGLabel>
                </div>
                <div style={styles.rightItem}>
                    <IGLabel style={stylesText.right_btn}>{props.btnTitle}</IGLabel>
                </div>
            </div>
        </div>
    )
}