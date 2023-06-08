import React, { useEffect, useState } from "react";

function Card({foodName, options,imgsrc}) {
    const[modifiedFoodName,setmodifiedFoodName]=useState("");
    let fudoptions = options;
    const priceOptions = Object.keys(fudoptions).filter((key) => key !== "_id");

    return (
        <div>
            <div
                className="card mt-3"
                style={{ width: "18rem", maxHeight: "360px" }}
            >   
                <div className="container w-100 h-40 p-0 overflow-hidden">
                    <img className="card-img-top" src={imgsrc} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                    {/* <p className="card-text">Some import Text here</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-sucess rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>

                        <select className="m-2 h-100 bg-sucess rounded">
                            {priceOptions.map((data)=>{
                                return(
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
