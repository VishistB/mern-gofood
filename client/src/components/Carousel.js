import React from "react";

function Carousel() {
    return (
        <div className="d-flex w-100" style={{"background":"url('https://source.unsplash.com/random/100×100/?burger')", "background-size":"cover", "height":"50vh", "filter": "brightness(50%)"}}>
            <div className="container w-80" style={{"margin":"auto"}}>
            <form className="form-inline">
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
            </div>

        </div>
    );
}

export default Carousel;
