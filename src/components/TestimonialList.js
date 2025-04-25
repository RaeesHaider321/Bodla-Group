import React from 'react';
import { Carousel, Card } from 'react-bootstrap'

const VideoCarousel = () => {
  // Array of YouTube video data
  const videos = [
    {
      id: "q2sWR3vKCt0",
      title: "Video 1",
      embedId: "q2sWR3vKCt0?si=5jag5AImtXcRyRfZ"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Video 2",
      embedId: "LSIpEsI57gM?si=7sOEligeX1k6YOqu"
    },
  ];
  
  return (
    <Card className='testimonials'>
    <Carousel interval={null}>
      {videos.map((video) => (
        <Carousel.Item key={video.id}>
          <div className="d-flex justify-content-center">
            <iframe 
              width="100%" 
              height="400" 
              src={`https://www.youtube.com/embed/${video.embedId}`}
              title={`YouTube video player - ${video.title}`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </Card>
);
};

export default VideoCarousel;