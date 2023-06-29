import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

function Card(props) {
    // const[modifiedFoodName,setmodifiedFoodName]=useState("");
    let fudoptions = props.options;
    let data=useCart()
    let dispatch = useDispatchCart();
    const priceRef=useRef();

    const priceOptions = Object.keys(fudoptions).filter((key) => key !== "_id");
    const[qty,setQty]=useState(1);
    const[size,setSize]=useState("");
    let finalPrice=qty*parseInt(fudoptions[size]);
    const handleAddToCart = async() => {
        // updation
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
              await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
              return
            }
            else if (food.size !== size) {
              await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
              console.log("Size different so simply ADD one more to the list")
              return
            }
            return
          }
        // updation above
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
        console.log(data)
    }

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (
        <div>
            <div
                className="card mt-3"
                style={{ width: "18rem", maxHeight: "360px" }}
            >   
                {/* <div className="container w-100 h-40 p-0 overflow-hidden"> */}
                    <img className="card-img-top" src={props.foodItem.img} alt="Card image cap" style={{height:"150px",objectFit:"fill"}} />
                {/* </div> */}
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some import Text here</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-sucess rounded" onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>

                        <select className="m-2 h-100 bg-sucess rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceOptions.map((data)=>{
                                return(
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
                    </div>
                    <hr/>
                    <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Card</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
