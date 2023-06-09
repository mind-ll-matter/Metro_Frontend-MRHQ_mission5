import { useEffect, useState } from "react";
import React from "react";
// import GalleryStyle from './GallerySection.module.css'

const GallerySection = (props) => {
  const { images } = props; // names of properties I am senting it
  // console.log({images})

  const [mainImage, setMainImage] = useState(images[0]);
  // console.log("IMAGES IS ", images);
  console.log("IMAGE MAIN IMAGE IS ", mainImage);
  return (
    <section>
      {/* Section with the image gallery */}
      <div className="gallery">
        <div className="main-image">
          <img src={`../../${mainImage}`} alt="Main Image" id="main-image" />
        </div>
        <div className="thumbnails">
          {images.map((image, index) => {
            // return  <img onClick={()=>setMainImage(image)} key={index} src={image} alt="Thumbnail" className="thumbnail" />
            console.log("IMAGES IS ", image);

            return (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                // src={image === `${mainImage}` ? image : `../../${mainImage}`}
                alt="Thumbnail"
                className="thumbnail"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
