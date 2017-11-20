import React, { Component } from 'react';

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      charRemaining: 140
    };
  }

  handleChange(text) {
    this.setState({
      text: text,
      charRemaining: 140 - text.length
    });
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder={this.props.prompt}
          onChange={e => this.handleChange(e.target.value)}
        />
        <p>{this.state.charRemaining}</p>
        <button
          onClick={() => this.props.onTweet(this.state.text)}
          disabled={this.state.charRemaining < 0}
        >
          Tweet{""}
        </button>

      </div>
    );
  }
}

export default TweetBox;
