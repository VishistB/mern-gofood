import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";
import axios from "axios";

function Home() {
    const baseUrl = "http://localhost:8000/api";
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        axios.post(baseUrl + "/foodData", {}).then((Response) => {
            const resp = Response.data;
            setFoodCat(resp[1]);
            setFoodItem(resp[0]);
            console.log(foodCat, foodItem);
        });
    };
    useEffect(() => {
        loadData();
    }, []);
    // useEffect(()=>{
    //     console.log(foodCat)
    // },[foodCat])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div
                    className="d-flex w-100"
                    style={{
                        background:
                            "url('https://source.unsplash.com/random/100×100/?burger')",
                        backgroundSize: "cover",
                        height: "50vh",
                        filter: "brightness(50%)",
                    }}
                >
                    <div className="container w-80" style={{ margin: "auto" }}>
                        <div className="form-inline">
                            <div style={{ display: "flex" }}>
                                <input
                                    className="form-control w-80 mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(e)=>{setSearch(e.target.value)}}
                                />
                                {/* <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {foodCat !== [] ? (
                    foodCat.map((data) => {
                        // console.log('hi',data)
                        return (
                            <div className="row mb-3">
                                <div key={data._id} className="fs-3 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem !== [] ? (
                                    foodItem
                                        .filter(
                                            (item) =>
                                                (item.CategoryName ===data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                                        )
                                        .map((filterItems) => {
                                            return (
                                                <div
                                                    key={filterItems._id}
                                                    className="col-12 col-md-6 col-lg-3"
                                                >
                                                    <Card
                                                        foodItem={filterItems}
                                                        options={
                                                            filterItems
                                                                .options[0]
                                                        }
                                                        
                                                    />
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div>No such data found</div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div>lol</div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
