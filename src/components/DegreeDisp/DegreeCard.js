import React from 'react'
import Ds from './DegreeStyles.module.css';
import BachelorsDegree from '../../static/images/bachelorsDegree.png';
import CertificateCollege from '../../static/images/certificateCollege.png';
import UdemyBlazorCSharp from '../../static/images/udemyBlazorCSharp.png';
import UdemyDjangoReact from '../../static/images/udemyDjangoReact.png';
import ComingSoon from '../../static/images/comingSoon.png';
import FrontendNucamp from '../../static/images/frontendNucamp.png';
import FullstackNucamp from '../../static/images/fullstackNucamp.png';


const getDegree = (certName) => {
    switch(certName){
        case "Degree":
            return BachelorsDegree;
        case "Certificate":
            return CertificateCollege;
        case "BlazorCert":
            return UdemyBlazorCSharp;
        case "DjangoReactCert":
            return UdemyDjangoReact;
        case "FrontendNucamp":
            return FrontendNucamp;
        case "FullstackNucamp":
            return FullstackNucamp;
        default:
            return ComingSoon;
    }
}

function DegreeCard({props}) {
    return (
        <div className={Ds.degreeCardContainer}>
            <div className={Ds.degreeTextSection}>
                <h3 className={Ds.source}>
                    {props.source}
                </h3>
                <i className={Ds.location}>
                    {props.location}
                </i>
                <div className={Ds.dateComplete}>
                    {props.dateComplete}
                </div>
                <div className={Ds.blurb}>
                    {props.blurb}
                </div>
            </div>

            {/* Degree Image */}
            <div className={Ds.imageSection}>
                <img 
                    className={Ds.image} 
                    src={getDegree(props.image)} 
                    alt="Certificate of Completion"
                />
            </div>
            
        </div>
    )
}

export default DegreeCard;
