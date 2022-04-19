import React from 'react'
import styles from './styles'
import { IGLabel } from '../ig-label'

export const IGStoryCarousel = (props) => {

    return (
        <div style={styles.storySession}>
            {
                props.cell && props.cell.map(value => {
                    return (
                        <div style={styles.storyItem} key={value.sortOrder}>
                            <img style={styles.image_section} src={value.image} />
                            <IGLabel style={styles.story_content}>
                                {value.name}
                            </IGLabel>
                        </div>
                    )
                })
            }
        </div>
    )
}