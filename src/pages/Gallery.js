import React, { useState } from "react";
import { galleryImages } from "../utils/galleryData";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  let [tempImgId, setTempImgId] = useState(0);
  //Getting the image which was clicked and displaying it in the modal
  const getImage = (imgSrc, imgId) => {
    setTempSrc(imgSrc);
    setTempImgId(imgId);
    setShowModal(true);
  };

 const getPreviousImg = () => {
    setTempImgId((prev) => {
      const prevId = prev > 1 ? prev - 1 : galleryImages.length;
      const prevImage = galleryImages.find(image => image.id === prevId);
      if (prevImage) {
        setTempSrc(prevImage.src);
      }
      return prevId;
    });
  };
  const getNextImg = () => {
    setTempImgId((prev) => {
      const nextId = prev < galleryImages.length ? prev + 1 : 1;
      const nextImage = galleryImages.find(image => image.id === nextId);
      if (nextImage) {
        setTempSrc(nextImage.src);
      }
      return nextId;
    });
  };

  return (
    <section id="gallery" className={`${showModal ? "lock-scroll" : ""}`}>
      <div className="container">
        <h2 className="section__title">
          <span className="heading-pink">Onyx</span> Gallery
        </h2>
        <div className={showModal ? "modal open" : "modal"}>
          <FontAwesomeIcon
            className="modal__icon"
            onClick={getPreviousImg}
            icon={faArrowLeft}
          />
          <img src={tempSrc} alt="modal-picture" />
          <FontAwesomeIcon
            className="modal__icon xmark"
            onClick={() => {
              setShowModal(false);
            }}
            icon={faXmark}
          />
          <FontAwesomeIcon
            className="modal__icon"
            onClick={getNextImg}
            icon={faArrowRight}
          />
        </div>
        {!showModal ? (
          <div className="gallery-images__wrapper">
            {galleryImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="img__wrapper"
                  onClick={() => getImage(image.src, image.id)}
                >
                  <img
                    src={image.src}
                    className="image__background"
                    alt={`gallery ${image.id}`}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Gallery;
