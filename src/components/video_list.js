import React from 'react';
import VideoListItem from './video_list_item';


/*const VideoList = (props) => {

 const videoItems = this.props.videos.map((video) => {
    return <VideoListItem  video = {video}/>
  });


    return (
      <div>
      <h3>video list</h3>
      <ul className="col-md-4 list-group">
{this.props.videos.length}
{videoItems}
      </ul>
      </div>

    );


};*/

const VideoList =  React.createClass( {

//cant define const outside of a method. it should be inside of a method
render(){
  const videoItems = this.props.videos.map((video) => {
     return (<VideoListItem  onVideoSelect = {this.props.onVideoSelect} key ={video.etag} video = {video}/>);
   });
    return (
      <div className="listPadding">
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
      </div>

    );
  }


});



export default VideoList;
