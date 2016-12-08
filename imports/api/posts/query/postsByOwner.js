import { createQuery } from 'meteor/cultofcoders:grapher';

export default createQuery({
    posts: {
        $filter({filters, params}) {
            filters.ownerId = params.ownerId
        },
        title: 1,
         'changelog.date': 1,
    }
});