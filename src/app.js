/**
 * Created by HUQ on 9/14/15.
 **/

//import angular from "angular";

"use strict";

let app = angular.module("twitterClone", []);


app.controller("TweetCtrl" , function() {
  this.tweet = '';

  this.invalidLength = () => this.tweet.length === 0 || this.remainingLength() <  0;
  this.remainingLength = () => 140 - this.tweet.length;

  this.tweetList = [];
  this.sendTweet = () => {
    this.tweetList.unshift(this.tweet);
    this.tweet ='';
  }
});
