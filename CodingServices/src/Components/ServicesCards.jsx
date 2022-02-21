import React from "react";

const ServicesCards = (props) => {

    return (
        <>
        <div className="col-md-5 mx-auto mb-5">
        <h3 className="text-center fw-bold my-3">{props.servicesHeadingText}</h3>
        <p className="my-2 mx-3 lead fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ea nostrum reiciendis iste suscipit repellendus quis consequuntur necessitatibus ut quisquam.</p>
        <p className="my-3 mx-3 text-muted fs-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ea nostrum reiciendis iste suscipit repellendus quis consequuntur necessitatibus ut quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti hic porro ea dolor aliquam qui soluta, deserunt consectetur. Hic quos perspiciatis voluptatibus repellat optio nobis quas libero nemo nihil?</p>
        <hr  className="horizontal-line"/>
        </div>
        </>
    )
}

export default ServicesCards;