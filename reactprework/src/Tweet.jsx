import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                {tweet.text}
                <br />
                <a href="#like"
                    onClick={() => this.props.handleLike(tweet)}
                > {!tweet.liked ? 'Like' : 'Unlike'} post</a>
                <a href="#del"
                    onClick={() => this.props.handleDelete(tweet)}
                > Delete </a>
                
            </div>
        );
    }
}

export default Tweet;
