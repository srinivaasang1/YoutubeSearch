import React from 'react';


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

const VideoDetail =  ({video}) =>  {
  if(!video){
    return <div>loading..</div>;
  }

  //cant define const outside of a method. it should be inside of a method
    const videoId = video.id.videoId;
    //const URL = 'https://www.youtube.com/embed/' + videoId;
    const URL = `https://www.youtube.com/embed/${videoId}`;

    return (



      <div className="video-detail col-md-8 listPadding">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={URL}></iframe>
        </div>
        <div className="details">
          <div className="detailPadding">Title: {video.snippet.title}</div>
          <div className="detailPadding">Description: {video.snippet.description}</div>
        </div>
      </div>

    );



};



export default VideoDetail;
