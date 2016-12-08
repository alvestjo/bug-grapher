import React from 'react';
import { createQueryContainer } from 'meteor/cultofcoders:grapher-react';
import query from '/imports/api/posts/query/postsByOwnerWithChanges.js';

class Posts extends React.Component {
    render() {
        const {data, loading, error} = this.props;

        if (loading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>Error: {error.reason}</div>
        }

        return (
            <ul>
                {
                    data.map(post => <Post post={post} key={post._id} onClick={this.props.onSelect} />)
                }
            </ul>
        )
    }
}
var formatDate = function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
};

const Post = ({post, onClick}) => (
    <li onClick={onClick.bind(this, post._id)}>
        {post.title} {post.changelog? post.changelog.map((change) => {
            return <div>{formatDate(change.date)} {change.changedby }</div>
        }):"No changes"} 
    </li>
);

export default createQueryContainer(query.clone(), Posts, {
    reactive: true
});