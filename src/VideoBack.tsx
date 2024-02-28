import React, { useState, useEffect } from 'react'
import { useAuthors } from './useAuthors'
import { useVideos } from './useVideos'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

  const VideoBack = () => {
  const { getVideos } = useVideos()
  const [videos, setVideos] = useState([])

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getVideos()
        setVideos(response)
      } catch (error) {
        console.error('Error fetching videos data:', error)
      }
    }
    fetchVideos()
  }, [getVideos])

  if(!videos) return null;

  return (
  <div className="flex-col w-screen h-screen relative">
    <video
      className="w-full h-full object-cover fixed top-0 left-0 -z-10"
      src={videos.length ? videos[currentVideoIndex % videos.length].url : ''}
      autoPlay
      loop
      muted
    />
  </div>
);
  }
export default VideoBack;