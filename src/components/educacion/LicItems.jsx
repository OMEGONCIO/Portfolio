import React from "react";

const LicItem = (props) => {
    const [getDivStile, setDivStyle] = React.useState({maxHeight:"0px"});

    function increaseHeight(){
        setDivStyle({
            maxHeight:"150rem"
        })
    }

    function decreseHeight(){
        setDivStyle({
            maxHeight:"0"
        })
    }

    return(
        <div onMouseOver={increaseHeight} onMouseLeave={decreseHeight} className="licDiv">
            <div>
                <i class="far fa-arrow-alt-circle-down fa-3x courseIcon"></i>
                <h2 style={{display:"inline", marginLeft:"15px", position:"relative", bottom:"5px"}}>{props.title}</h2>
            </div> 
            
            <div className="infoStudyContent" style={getDivStile}>
                <div className="row propTag">
                    <div className="col-8">
                        <p><strong>Institución:</strong> {props.institución}</p>
                    </div>
                    <div className="col">
                        <img style={{width:"100%"}} src="https://www.univdep.edu.mx/img/Logos/univdep_acronimo_azul.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default LicItem;