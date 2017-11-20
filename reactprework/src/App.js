import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: '1',
          liked: true,
          btnDelete: true
        },
        {
          text: '2',
          liked: false,
          btnDelete: true
        }
      ],

      
    };
  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false,
      btnDelete: true,   //có btnDelete = có tồn tại Tweet
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map((tw) => {
      if (tw.text === tweet.text) {
        return {
          text: tw.text,
          liked: !tw.liked,
          btnDelete: tw.btnDelete
        }
      }
      return tw;
    });

    this.setState({
      tweets
    });
  }

  handleDelete(tweet) {
    let tweets = this.state.tweets.map((tw) => {
      if (tw.text === tweet.text) {
        return {
          text: tw.text,
          liked: tw.liked,
          btnDelete: false
        }
      }
      return tw;
    });

    this.setState({
      tweets: this.state.tweets.splice(this.findIndex(tweet), 1) // STUCK
    })

  }

  findIndex(tweet){
    for(var i = 0; i < this.state.tweets.length; i++){
      if(tweet.text === this.state.tweets[i].text){
        return i;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoderSchool Prework!</h1>
        </header>
        <div>
          <TweetBox prompt="How do you feel today?"
            onTweet={this.handleTweet.bind(this)} //pass function from parent to child
          />
        </div>

        <div>
          {this.state.tweets.map(tweet => (
            <Tweet
              tweet={tweet}
              handleLike={this.handleLike.bind(this)}
              handleDelete={this.handleDelete.bind(this)} 
              />
            
              
          )
          )}
        </div>

      </div>


    );
  }
}

export default App;
