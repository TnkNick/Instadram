import stylesText from '../ig-label/styles'
export default {
    container: {
        width: '100%',
        outline: '1px solid #D6D6D6',
        borderRadius: 8,
        backgroundColor: 'white',
        marginBottom: 16
    },
    title_section: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        borderRadius: '8px 8px 0px 0px',
    },
    title_image: {
        width: 32,
        height: 32,
        borderRadius: 40,
        flexGrow: '0',
        border: '2px solid white',
        outline: '2px solid #D32F6B',
    },
    title_icon: {
        flexGrow: '0',
        width: 14,
        height: 14,
        marginRight: 6
    },
    title_content: {
        ...stylesText.main_title,
        flexGrow: '1',
        marginLeft: 12,
        cursor: 'pointer'
    },
    image_section: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
    },
    image_content: {
        width: '100%',
    },
    icon_section: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
    },
    icon_left_section: {
        display: 'flex',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    page_control_section: {
        display: 'flex',
        marginRight: 48
    },
    page_control: {
        borderRadius: 30,
        width: 7,
        height: 7,
        marginRight: 4,
        backgroundColor: '#9E9E9E'
    },
    page_control_selected: {
        borderRadius: 30,
        width: 7,
        height: 7,
        marginRight: 4,
        backgroundColor: '#018DF3'
    },
    info_like_section: {
        display: 'flex',
        padding: '8px 8px 2px 12px',
    },
    info_caption_section: {
        display: 'flex',
        padding: '8px 8px 6px 12px',
        alignItems: 'baseline'
    },
    info_view_all_section: {
        display: 'flex',
        padding: '2px 8px 6px 12px',
        alignItems: 'baseline',
    },
    info_comment_section: {
        display: 'flex',
        padding: '2px 8px 2px 12px',
        alignItems: 'baseline'
    },
    info_time_section: {
        padding: '12px 8px 2px 12px',
        marginBottom: 16
    },
    info_like_content: {
        ...stylesText.default,
    },
    info_highlight_content: {
        ...stylesText.main_title,
        cursor: 'pointer'
    },
    info_viewall_content: {
        ...stylesText.main_subTitle,
        cursor: 'pointer'
    },
    comment_section: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        borderRadius: '0px 0px 8px 8px',
        outline: '1px solid #D6D6D6',
    },
    comment_emo_icon: {
        width: 24,
        height: 24,
        borderRadius: 40,
        flexGrow: '0',
    },
    comment_btn: {
        ...stylesText.post_label,
        flexGrow: '0',
        cursor: 'pointer'
    },
    comment_text_area: {
        ...stylesText.default,
        flexGrow: '1',
        resize: 'inherit',
        height: 14,
        border: 'none',
        outline: 'none',
        marginLeft: 16,
        marginRight: 16,
        fontFamily: 'BlinkMacSystemFont'
    }

}