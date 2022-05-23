import React from 'react'
import ContentStyles from '../components/Layout/ContentLayout.module.css';
import CardDisp from '../components/CardDisp/CardDisp.js';
import { Typography } from '@mui/material';

const tabHeading = {
    fontSize: '56px', 
    color: 'white', 
    margin: '20px auto', 
    opacity: '30%',
    fontWeight: 500,
    width: '100%'
}

function Projects() {
	return (
		<div>
			<div className={ContentStyles.contentConfig}>
				<Typography sx={tabHeading}>Projects</Typography>
				<CardDisp />
			</div>
		</div>
	)
}

export default Projects;
