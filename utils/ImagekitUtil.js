import ImageKit from "imagekit";

const getGalleryImages = (folderPath) => {
    const urlEndpoint = 'https://ik.imagekit.io/tattvahathayoga'
    
    return new Promise((resolve, reject) => {
      // ImageKit API initialization
      const imgkit = new ImageKit({
        publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint : process.env.IMAGEKIT_ENDPOINT
      })
      
      console.log("fetching images.... ")
      
      imgkit.listFiles({
        path : folderPath,
        limit: 9
      }, function(error, result){
        if(error) {
          console.error(error)
          reject(error)
        } else {
        //   console.log(result)
          resolve(result)
        }
      })  
    })
}

export default getGalleryImages