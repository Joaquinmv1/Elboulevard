import images from "../../utils/images"
import { useState } from "react"
import styled from "styled-components"

const CarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background-color: antiquewhite; */
  
  & img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
`

const imagesCarrousel = [images.image2, images.image1, images.image3]

export function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const prevImage = () => {
    const condition = currentImage > 0 ? currentImage - 1 : currentImage
    setCurrentImage(condition)
  }

  const nextImage = () => {
    const condition = currentImage < imagesCarrousel.length - 1 ? currentImage + 1 : currentImage
    setCurrentImage(condition)
  }

  return (
    <>
      <CarrouselContainer>
        <img src={(imagesCarrousel[currentImage])} alt="" />
        <button onClick={prevImage}>{'<'}</button>
        <button onClick={nextImage}>{'>'}</button>
      </CarrouselContainer>
    </>
  )
}