import React from "react";
import styles from "./styles";
import { Images } from "../../themes";

export const IGSearchBox = () => {
    return (
        <div style={styles.search_box}>
            <div style={styles.search_section}>
                <img style={styles.magnifying_icon} src={Images.magnifying} />
                <input style={styles.search_field} type={'text'} placeholder={'Search'}></input>
            </div>
        </div>
    )
}