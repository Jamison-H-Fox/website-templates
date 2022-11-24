import React from "react";
import { galleryData } from '../data/data'
import { brandPallet } from "../data/data";

function Gallery() {


    return (
        <section className="gallery">
            {galleryData.classNames.map((element, index) => {
                return (
                    <div key={index} className={element}>
                        <div className="hide">
                            <h2>{galleryData.testimonialTitles[index]}</h2>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Gallery;

/*

.testimonials {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.testimonials div {
  width: 40%;
  height: 40vh;
  margin: 4% 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
}
.testimonials div .hide {
  width: 70%;
  height: 10vh;
  background-color: #fff;
  display: none;
}
.gallery div .hide h2 {
  font-size: 2.2rem;
}
.testimonials div:hover .hide {
  display: block;
}
.farm {
  background-image: url("https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/barn.jpg?raw=true");
}
.cook {
  background-image: url("https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/cook.jpg?raw=true");
}
.produce {
  background-image: url("https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/produce.jpg?raw=true");
}
.animals {
  background-image: url("https://github.com/BrityHemming/farm-to-table-practice-project/blob/solution/farm-to-table/images/sheep.jpg?raw=true");
}

*/