export default new SimpleSchema({
    title: {
        type: String
    },
    'changelog.$.date': {
        type: Date
    },
    'changelog.$.changedby': {
        type: String
    },
})