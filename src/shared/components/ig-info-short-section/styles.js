import stylesText from '../ig-label/styles'
export default {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    centerItem: {
        marginLeft: 12,
        width: 196
    },
    sm_centerItem: {
        marginLeft: 12,
        width: 222
    },
    rightItem: {
        marginLeft: 12,
        cursor: 'pointer'
    },
    main_title: {
        ...stylesText.main_title,
        marginBottom: 2
    },
    image_section: {
        width: 56,
        height: 56,
        borderRadius: 40
    },
    sm_image_section: {
        width: 32,
        height: 32,
        borderRadius: 40
    }
}