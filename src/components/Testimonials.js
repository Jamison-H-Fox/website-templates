import React from "react";
import { testimonialData } from '../data/data'


// major rebuild into a testimonial section
function Testimonials() {


    return (
        <section className="testimonials">
            {testimonialData.classNames.map((element, index) => {
                return (
                    <div key={index} className={element}>
                        <div className="hide">
                            <h2>{testimonialData.testimonialTitles[index]}</h2>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Testimonials;