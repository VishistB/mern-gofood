import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import axios from "axios";



function Home() {
    const baseUrl = "http://localhost:8000/api";
    const[foodCat,setFoodCat]=useState([]);
    const[foodItem,setFoodItem]=useState([]);
    
    const loadData = async () =>{
        axios.post(baseUrl + "/foodData",{})
        .then((Response)=>{
            const resp=Response.data
            setFoodCat(resp[1]);
            setFoodItem(resp[0]);
            console.log(foodCat,foodItem)
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    // useEffect(()=>{
    //     console.log(foodCat)
    // },[foodCat])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel/>
            </div>
            <div className="container">
                {
                    foodCat !==[]
                    ?foodCat.map((data)=>{
                        // console.log('hi',data)
                        return(
                            <div className="row mb-3">
                            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                            <hr/>
                            {foodItem!==[]?foodItem.filter((item)=>item.CategoryName===data.CategoryName)
                            .map(filterItems=>{
                                return(
                                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                        <Card foodName={filterItems.name} options={filterItems.options[0]} imgsrc={filterItems.img}/>
                                    </div>
                                )
                            }
                            ):<div>No such data found</div>}
                            </div>
                        )
                    })
                    :<div>lol</div>
                }
                
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
