import React from 'react-dom';
import "./main.css";

function Main() {
    return(
        <div className={"main"}>
            <header className={"header"}>
                <h4 className={"header-text"}>
                    MGG
                </h4>
            </header>

            <div className={"mainBlock"}>
                <div className={"Masseng"}>
                    <p className={"Masseng-text"}>Masseng</p>
                </div>

                <div className={"input"}>
                    <input className={"input-input"}/>


                    <div className={"E"}>
                        <p className={"E-text"}><button className={"E-text-butt"}>E</button></p>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Main;
