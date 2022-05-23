import React from 'react'
import ContentStyles from '../components/Layout/ContentLayout.module.css';
import DegreeStyles from '../components/DegreeDisp/DegreeStyles.module.css';
import DegreeCard from '../components/DegreeDisp/DegreeCard.js';
import data from '../hooks/data';
import { Typography } from '@mui/material';

const tabHeading = {
    fontSize: '56px', 
    color: 'white', 
    margin: '20px auto', 
    opacity: '30%',
    fontWeight: 500,
    width: '100%'
}

function DegreeCerts() {
	return (
		<div>
			<div className={ContentStyles.contentConfig}>
				<Typography sx={tabHeading}>Education</Typography>
				<div className={DegreeStyles.degreeContainer}>
					{/* Acredited Section */}
					<div className={DegreeStyles.acreditedWrapper}>
						<h3 className={DegreeStyles.acreditedSideHeader}>
							Acredited
						</h3>
						<DegreeCard props={data.degreeCardData.collegeDegree} />
						<DegreeCard props={data.degreeCardData.collegeCert} />
					</div>
					{/* Extracurricular Section */}
					<div className={DegreeStyles.extracurricularWrapper}>
						<h3 className={DegreeStyles.extracurricularSideHeader}>
							Extracurricular
						</h3>
						<DegreeCard props={data.degreeCardData.fullstackNucamp} />
						<DegreeCard props={data.degreeCardData.frontendNucamp} />
						<DegreeCard props={data.degreeCardData.onlineBlazor} />
						<DegreeCard props={data.degreeCardData.onlineReact} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DegreeCerts;