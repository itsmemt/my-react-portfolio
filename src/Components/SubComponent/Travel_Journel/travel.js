import React from "react";
import "./travel.css";
import data from "./travel_data"
export default function TravelBlog() {
    return (
       <div className="Travel_Blog">
        <div className="t-header">
            <h2 className="sub-title">Travel Blog</h2>
        </div>
         {
             data.map((item, index) => {
                return <section className="travel-container" key={index}>
                    <div className="img-container">
                        <img className="pic" src={item.img} alt="..." />
                    </div>
                    <div className="desc-container">
                        <h4 className="country"><i class="fa-solid fa-location-dot"></i>{item.country}</h4>
                        <h2 className="place">{item.place} </h2>
                        <p className="date">{item.date} </p>
                        <p className="desc">{item.desc} </p>
                    </div>
                </section>
            })
         }
       </div>
    )
}