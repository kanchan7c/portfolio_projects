import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-4 mb-5 servicesCard mx-auto">
            <div class="card " style={{width: "18rem;"}}>
              <div>
              <img src={props.imgsrc} className="card-img-top cardImage img-fluid" alt="..." />
              <div className="card-body">
                <h3 className="text-center my-3">{props.cardName}</h3>
                <p className="card-text lead fs-6 mb-3">{props.text}</p>
              </div>
            </div>
            </div>
            </div>
    )
}

export default Card;

