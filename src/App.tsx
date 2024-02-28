import React, { useState, useEffect } from 'react'
import { useAuthors } from './useAuthors'
import { useVideos } from './useVideos'
import AuthorCard from './AuthorCard'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const App = () => {
  const { getAuthors } = useAuthors()
  const [authors, setAuthors] = useState([])

  const { getVideos } = useVideos()
  const [videos, setVideos] = useState([])

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await getAuthors()
        setAuthors(response)
      } catch (error) {
        console.error('Error fetching author data:', error)
      }
    }
    fetchAuthors()
  }, [])

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
  }, [])

  const nextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length)
  }

  const previousVideo = () => {
    setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length)
  }

  return (
    <div className="flex-col w-screen h-screen relative">
      <video
        className="w-full h-full object-cover fixed top-0 left-0 -z-10"
        src={videos.length ? videos[currentVideoIndex % videos.length].url : ''}
        autoPlay
        loop
        muted
      />
      <div className="bg-stone-900 flex justify-center items-center text-pink-800 gap-5 p-3 rounded-lg border-2 border-black absolute top-2 left-1/2 transform -translate-x-1/2">
        <button
            className={`flex flex-row ${currentVideoIndex === 0 ? 'opacity-50 cursor-default' : ''}`}
            onClick={previousVideo}
            disabled={currentVideoIndex === 0}
            >
                <IconChevronLeft /> 
        </button>
        <button
            className={`flex flex-row ${currentVideoIndex === videos.length - 1 ? 'opacity-50 cursor-default' : ''}`}
            onClick={nextVideo}
            disabled={currentVideoIndex === videos.length - 1}
            >
               <IconChevronRight />
        </button>
      </div>
      <div className="flex justify-end absolute bottom-2 right-2">
        {authors.length > 0 && (
          <AuthorCard author={authors[currentVideoIndex % videos.length]} />
        )}
      </div>

    </div>
  );
        }
export default App