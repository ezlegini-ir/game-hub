
import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImage = (url: string) => {
  if (!url) return noImage;
  const target = 'media/'
  const index = url.indexOf(target) + target.length;
  const cropSize = 'crop/600/400/'
  return url.slice(0, index) + cropSize + url.slice(index)
}

export default getCroppedImage