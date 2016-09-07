import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

import $ from 'jquery';


import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyAqQ7xIO0HMkZW2j3S9tMYM1-wMfz9HRuY"

/*YTSearch({key: API_KEY, term:'ajith thala'}, function(data){
  console.log(data);

})*/

/*var App = React.createClass({
  render: function() {
    return (
      <div>
      <SearchBar/>
      <h1>test babel comment js</h1>
      </div>
    );
  }
});*/

class App extends Component {
  constructor(props){
    super(props);
    //var $ = require ('jquery');

    this.state = {videos:[],selectedVideo:null};

    this.checkst = this.checkst.bind(this);
    //this.checkst();

    //working
  /*  YTSearch({key: API_KEY, term:'ajith thala'},  (data) => {
        console.log(data);
        this.setState({videos : data});
      });*/

      this.loadVideosFromServer = this.loadVideosFromServer.bind(this);
      this.testingfunc = this.testingfunc.bind(this);

      this.loadVideosFromServer('reactjs');
      //this.testingfunc();



  }

/*  YTSearch({key: API_KEY, term:'ajith thala'}, function(data){
    //console.log(data);
    this.setState({videos : data});
  });*/
testingfunc(){
  console.log('testing fuc');
}

  loadVideosFromServer(term) {
        $.ajax({
          url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAqQ7xIO0HMkZW2j3S9tMYM1-wMfz9HRuY&q='+term+'&type=video',
          dataType: 'json',
          cache: false,
          success: function(data) {
            //this.setState({data: data});
            //<SearchBar onSearchChange={term => this.loadCommentsFromServer(term)}/>

            console.log('ajax request');
            console.log(data.items);

            this.setState({videos : data.items, selectedVideo:data.items[1]});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      }

  checkst(){
      this.setState({videos:[6,7] });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.loadVideosFromServer(term)},300);
    return (
      <div>
      <SearchBar onSearchChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'));
