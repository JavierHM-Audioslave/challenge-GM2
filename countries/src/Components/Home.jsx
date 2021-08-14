import React from "react";
import Countries from "./Countries";


const Home = () => {


    return (
        <div>
            <header className="hdDark">
                <div id="home-flex-container">
                    <div className="title">
                        Where in the world?
                    </div>
                    <div className="mode">
                        <div className="float-right">
                            Dark Mode
                        </div>
                    </div>
                </div>
            </header>
            <Countries/>
        </div>
    );
};


export default Home;