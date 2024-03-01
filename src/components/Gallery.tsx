import { useState } from 'react'

const Gallery = () => {
  const [message, setMessage] = useState<string>('Hello world!')
  const [age, setAge] = useState<number>(10)
  const [galleryIndex, setGalleryIndex] = useState<number>(0)
  const [gallery, setGallery] = useState<string[]>([
    'Image 1',
    'Image 2',
    'Image 3',
    'Image 4',
    'Image 5',
  ])

  const updateMessage = () => {
    setMessage('Hi world I am John.')
    setAge(30)
  }

  const onPrevious = () => {
    if (galleryIndex === 0) {
      setGalleryIndex(gallery.length - 1)
    } else {
      setGalleryIndex((prevIndex) => prevIndex - 1)
    }
  }

  const onNext = () => {
    if (galleryIndex === gallery.length - 1) {
      setGalleryIndex(0)
    } else {
      setGalleryIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <div>
      {message} {age} <br />
      <strong>{gallery[galleryIndex]}</strong>
      <div>
        <button onClick={updateMessage}>Change message</button>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Gallery