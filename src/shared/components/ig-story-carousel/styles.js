import { Colors } from '../../themes/'
import stylesText from '../ig-label/styles'
export default {
    storySession: {
        backgroundColor: Colors.Background2,
        overflow: 'auto',
        whiteSpace: 'nowrap',
        marginTop: 12,
        marginBottom: 16,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8,
        overflowY: 'scroll',
        border: '1px solid #D6D6D6',
    },
    storyItem: {
        display: 'inline-block',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0px 20px 4px',
    },
    image_section: {
        width: 56,
        height: 56,
        borderRadius: 40,
        border: '2px solid white',
        outline: '2px solid #D32F6B'
    },
    story_content: {
        ...stylesText.story_title,
        maxWidth: 73,
        width: 73,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}