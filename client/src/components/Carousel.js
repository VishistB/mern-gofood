import React from "react";

function Carousel() {
    return (
        <div className="d-block w-100" style={{"background":"url('https://source.unsplash.com/random/100×100/?burger')", "background-size":"cover", "height":"70vh", "filter": "brightness(50%)"}}>
            <form className="form-inline" style={{"margin":"auto 0"}}>
              <div style={{"display":"flex"}}>
                <input
                    className="form-control w-80 mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
                </div>
            </form>
            
            {/* <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/100×700/?burger"
                alt="First slide"
                style={{ filter: "brightness(50%)" }}
            /> */}

        </div>
    );
}

export default Carousel;
