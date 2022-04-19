import stylesText from '../../shared/components/ig-label/styles'
export default {
    container: {
        width: '100%',
        height: '100%'
    },
    profileSession: {
        marginTop: 30,
        marginBottom: 22
    },
    suggestSession: {
        display: 'flex'
    },
    suggestTitle: {
        width: 277
    },
    suggestItemSession: {
        padding: '10px 0px 10px 0px',
    },
    suggestItem: {
        padding: '8px 0px 8px 0px',
    },
    see_all_label: {
        ...stylesText.see_all_btn,
        cursor: 'pointer'
    }
}