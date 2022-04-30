import React from 'preact/compat'
import SliderImage from 'react-zoom-slider';
export default function DetailsSlider({ data }) {
  const sliderListData = data.map((e, i) => {
    return {
      image : e.data[0].url,
      text : 'img' + i
    }    
  });
    return (
        <div className="pdetail-slider">
            <SliderImage 
                data={sliderListData} 
                showDescription={false} 
                direction="right" />
        </div>
    )
}
