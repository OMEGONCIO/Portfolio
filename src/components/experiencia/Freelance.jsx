import React from "react";

const divStyle = {
    margin:"50px 100px"
}

const secDivStyle = {
    margin:"-20px 0 0 17px",
    padding:"40px 0px 10px 100px",
    fontSize:"1.4rem",
    borderLeft:"dotted white 5px"
}

const Freelance = (props) =>{

    return(
        <div style={divStyle}>
            <h1><i class="fas fa-dot-circle"></i> {props.title}</h1>
            <div style={secDivStyle}>
                <h2> Descripción <i class="fas fa-feather-alt"></i></h2>
                <p>{props.concept}</p>
                <hr/>
                <div className="row" style={{}}>
                    <div className="col">
                        <h2>Institución <i class="fas fa-university"></i></h2>
                        <p>{props.institution}</p>
                    </div>
                    <div className="col">
                        <h2>Link del sitio <i class="fas fa-link"></i></h2>
                        <p><a href={props.link} target="blank">{props.link}</a></p>
                        <p><a href={props.git} target="blank"><i class="fab fa-github"></i> Código en gitHub.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freelance;