import React from "react";

export default function Card() {
    return (
        <>
        <div className="card w-full bg-base-100 rounded-none border shadow-xl">
            <figure><img src="img/chips.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Keripik Ketela</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </>
    )
}