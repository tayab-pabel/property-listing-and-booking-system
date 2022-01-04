import React from 'react'
import ImageUploadIcon from '../../../images/svgs/ImageUploadIcon'

const PropertyImagesUpload = () => {
  const [floorPlan, setFloorPlan] = React.useState(null)
  const floorPlanPhotoUploader = () => {
    alert('Floor plan uploaded')
  }

  const [featuredPhoto, setFeaturedPhoto] = React.useState(null)
  const featuredPhotoUploader = () => {
    alert('Featured plan uploaded')
  }

  const [imageGallery, setImageGallery] = React.useState(null)
  const imageGalleryUploader = () => {
    alert('Image Gallery plan uploaded')
  }

  return (
    <div className='grid grid-cols-1 gap-6'>
      <div>
        <p className='block font-medium text-blue-dark '>Upload Floor Plan</p>
        <div className='mt-1 flex items-center'>
          <div className='w-44 flex justify-center border border-blue-dark rounded-lg'>
            {floorPlan ? (
              <img
                className='w-full sm:rounded-t-lg lg:rounded-l-lg lg:rounded-none'
                src={URL.createObjectURL(floorPlan)}
                alt='Floor Plan Image'
              />
            ) : (
              <label
                htmlFor='floor-plan'
                className='space-y-1 text-center p-6 cursor-pointer'
              >
                <div className='mx-auto h-12 w-12'>
                  <ImageUploadIcon color='text-blue-dark' />
                </div>
                <span className='text-blue-light text-sm'>Floor Plan</span>
                <input
                  id='floor-plan'
                  name='floor-plan'
                  type='file'
                  className='sr-only'
                  onChange={(e) => setFloorPlan(e.target.files[0])}
                />
                <p className='text-xs text-blue-dark'>
                  PNG, JPG, JPEG up to 2MB Supported
                </p>
              </label>
            )}
          </div>
          <div className='ml-5'>
            {floorPlan && (
              <button
                type='button'
                onClick={() => setFloorPlan(null)}
                className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
              >
                Remove
              </button>
            )}
            <button
              type='button'
              onClick={floorPlanPhotoUploader}
              className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className='block font-medium text-blue-dark '>
          Upload Featured Photo
        </p>
        <div className='mt-1 flex items-center'>
          <div className='w-44 flex justify-center border border-blue-dark rounded-lg'>
            {featuredPhoto ? (
              <img
                className='w-full sm:rounded-t-lg lg:rounded-l-lg lg:rounded-none'
                src={URL.createObjectURL(featuredPhoto)}
                alt='Featured Photo'
              />
            ) : (
              <label
                htmlFor='featured-photo'
                className='space-y-1 text-center p-6 cursor-pointer'
              >
                <div className='mx-auto h-12 w-12'>
                  <ImageUploadIcon color='text-blue-dark' />
                </div>
                <span className='text-blue-light text-sm'>Featured Photo</span>
                <input
                  id='featured-photo'
                  name='featured-photo'
                  type='file'
                  className='sr-only'
                  onChange={(e) => setFeaturedPhoto(e.target.files[0])}
                />
                <p className='text-xs text-blue-dark'>
                  PNG, JPG, JPEG up to 2MB Supported
                </p>
              </label>
            )}
          </div>
          <div className='ml-5'>
            {featuredPhoto && (
              <button
                type='button'
                onClick={() => setFeaturedPhoto(null)}
                className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
              >
                Remove
              </button>
            )}
            <button
              type='button'
              onClick={featuredPhotoUploader}
              className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className='block font-medium text-blue-dark '>
          Upload Image Gallery
        </p>
        <div className='mt-1 flex items-center'>
          <div className='w-44 flex justify-center border border-blue-dark rounded-lg'>
            {imageGallery ? (
              <img
                className='w-full sm:rounded-t-lg lg:rounded-l-lg lg:rounded-none'
                src={URL.createObjectURL(imageGallery)}
                alt='Featured Photo'
              />
            ) : (
              <label
                htmlFor='image-gallery'
                className='space-y-1 text-center p-6 cursor-pointer'
              >
                <div className='mx-auto h-12 w-12'>
                  <ImageUploadIcon color='text-blue-dark' />
                </div>
                <span className='text-blue-light text-sm'>Image Gallery</span>
                <input
                  id='image-gallery'
                  name='image-gallery'
                  type='file'
                  className='sr-only'
                  onChange={(e) => setImageGallery(e.target.files[0])}
                />
                <p className='text-xs text-blue-dark'>
                  PNG, JPG, JPEG up to 2MB Supported
                </p>
              </label>
            )}
          </div>
          <div className='ml-5'>
            {imageGallery && (
              <button
                type='button'
                onClick={() => setImageGallery(null)}
                className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
              >
                Remove
              </button>
            )}
            <button
              type='button'
              onClick={imageGalleryUploader}
              className='ml-5 bg-blue-light rounded-lg py-2 px-4 inline-flex justify-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-light'
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyImagesUpload
