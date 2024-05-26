export default function mapImagePathToCacheKey(imagePath) {
    const baseUrl = "http://localhost:3000"; 
    return `${baseUrl}${imagePath}`;
  }
  