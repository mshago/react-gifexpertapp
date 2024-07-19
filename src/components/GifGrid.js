import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import Proptypes from 'prop-types'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}

      <div className="card-grid">
        {images.map((img, index) => (
          <GifGridItem key={img.id} {...img} time={index} />
        ))}
      </div>
    </>
  );
};


GifGrid.propTypes = {
    category: Proptypes.string.isRequired,
}