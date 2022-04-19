import stylesText from '../ig-label/styles'
export default {
    search_box: {
        width: '100%',
        height: 36,
        backgroundColor: '#EDEDED',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        
    },
    search_section: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '16px',
        backgroundColor: '#EDEDED',
    },
    search_field: {
        ...stylesText.default,
        width: '100%',
        marginLeft: 8,
        height: 24,
        backgroundColor: '#EDEDED',
        border: '0',
        outline: 'none',
        fontFamily: 'BlinkMacSystemFont'
    },
    magnifying_icon: {
        width: 20,
        height: 20,
    }
}