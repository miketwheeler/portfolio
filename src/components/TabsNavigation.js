import React from 'react';
import DegreeCerts from '../Sections/DegreeCerts';
import Resume from '../Sections/Resume';
import Projects from '../Sections/Projects';
import TabsComponent from './TabsComponent';
import { Typography } from '@mui/material';
import HomeBannerComponent from './HomeBannerComponent';



function TabPanel(props) {
	const { children, idname, bgc, passElement, ...other } = props;
	return (
		<div id={`#${idname}`} aria-labelledby={idname} style={{ overflowY: 'hidden', backgroundColor: bgc }} { ...other }>
			{ 
                <Typography>{children}</Typography>
			}
		</div>
	);
}



function TabsNavigation() {
    return (
        <>
            <HomeBannerComponent />
            <TabsComponent  
                tabsInScroll={[
                    {
                        text: 'Resume',
                        component: <TabPanel idName={'home'} bgc='#3b3b3b' children={<Resume />} />
                    },
                    {
                        text: 'Projects',
                        component: <TabPanel idName={'projects'} bgc='#2b2b2b' children={<Projects />} />
                    },
                    {
                        text: 'Education',
                        component: <TabPanel idName={'education'} bgc='#3b3b3b' children={<DegreeCerts />} />
                    },
                    
                ]} 
            />
        </>
    )
}

export default TabsNavigation;