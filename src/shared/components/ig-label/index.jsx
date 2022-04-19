import React from 'react';
import styles from './styles';

export const IGLabel = (props) => {
    return (
        <div {...props} style={{ ...styles.default, ...props.style }}></div>
    )
}

