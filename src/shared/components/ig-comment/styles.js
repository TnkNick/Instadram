import stylesText from '../ig-label/styles'

export default {
    comment: {
        display: 'block', 
        position: 'fixed', 
        zIndex: 1, 
        left: 0,
        top: 0,
        width: '100%', 
        height: '100%', 
        overflow: 'auto', 
        backgroundColor: 'rgb(0,0,0)', 
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    container: {
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 6,
    },
    image_content: {
        width: '100%',
        borderRadius: '6px 0px 0px 6px',
        height: '100%',
    },
    comment_content: {
        borderRadius: '0px 6px 6px 0px',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    comment_header_content: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        flexGrow: '0',
        borderBottom: '1px solid #EDEDED',
    },
    comment_body_box: {
        overflowY: 'scroll',
        flexGrow: '1',
    },
    comment_body_content: {
        display: 'flex',
        alignItems: 'center',
        padding: '18px 12px 12px 12px',
    },
    caption_box: {
        display: 'flex'
    },
    title_image: {
        width: 32,
        height: 32,
        borderRadius: 40,
        flexGrow: '0',
        border: '2px solid white',
        outline: '2px solid #D32F6B',
    },
    title_box: {
        flexGrow: '1',
        marginLeft: 12,
    },
    title_content: {
        ...stylesText.main_title,
        cursor: 'pointer'
    },
    caption_content: {
        ...stylesText.default,
    },
    comment_image: {
        width: 32,
        height: 32,
        borderRadius: 40,
        flexGrow: '0',
    },
    sub_title_content: {
        ...stylesText.main_sm_subTitle,
        marginTop: 2
    },
    time_content: {
        ...stylesText.main_sm_subTitle,
        marginTop: 8
    },
    title_icon: {
        flexGrow: '0',
        width: 14,
        height: 14,
        marginRight: 6
    },
    footer_box: {
        borderTop: '1px solid #EDEDED',
        marginTop: 6,
        flexGrow: '0',
    },
    icon_section: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 12,
    },
    icon_left_section: {
        display: 'flex',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    info_like_section: {
        display: 'flex',
        padding: '0px 8px 2px 12px',
    },
    info_like_content: {
        ...stylesText.default,
    },
    info_highlight_content: {
        ...stylesText.main_title,
        cursor: 'pointer'
    },
    info_time_section: {
        padding: '4px 8px 2px 12px',
        marginBottom: 16
    },
    comment_section: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        borderTop: '1px solid #EDEDED',
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