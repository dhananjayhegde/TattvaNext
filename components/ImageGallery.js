import React from 'react'

const ImageGallery = ({images}) => {
    return (
      <div className='columns-1 md:columns-3 gap-8'>
        {
          images.map((image, index) => {
            const aspectRatio = index % 4 == 0 ? ' aspect-[2/3]' : ' aspect-[4/3]'
            return (
                <img 
                    key={index}
                    src={image.url}
                    className={'mb-8 w-full rounded-lg object-cover trasnition ease-in-out delay-150 hover:scale-150 duration-300' + aspectRatio}
                />
            )
          })
        }
      </div>
    )
}

export default ImageGallery