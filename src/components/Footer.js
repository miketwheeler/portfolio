import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import TitleBar from './TitleBar.js'


const gridCont = {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'fit-content',
    width: '100%',
    backgroundColor: '#2b2b2b',
    padding: '80px 54px',
    // border: '1px solid red',
}
const leftSide = {
    '@media(max-width: 700px)': {
        textAlign: 'center'
    }
    // border: '1px dashed lightblue',
}
const rightSide = {
    float: 'right',
    '@media(max-width: 720px)': {
        float: 'none',
    },
    '@media(max-width: 600px)': {
        textAlign: 'center',
        marginTop: '20px'
    }
    // border: '1px dashed lightblue',
}


function Footer() {
    return (
        <Box sx={{flexGrow: 1, zIndex: 200}}>
            <Grid container spacing={0} sx={gridCont}>
                <Grid item xs={12} sm={6.2}>
                    <Box sx={leftSide}>
                        <div style={{marginBottom: '40px'}}>
                            <Typography sx={{fontSize: '32px'}}>I'm ready to bring some magic to the team.</Typography>
                        </div>
                        <div style={{fontSize: '30px', color: '#FFBC28'}}>
                            Feel free to reach out, I'm always on
                        </div>
                    </Box>
                    
                </Grid>
                <Grid item xs={12} sm={5.8}>
                    <Box sx={rightSide}>
                        <div style={{marginRight: '10%'}}>
                            <Typography sx={{marginBottom: '24px', fontSize: '1rem', opacity: '50%'}}>Information</Typography>
                            <Typography sx={{fontSize: '1.1rem', opacity: '55%'}}>Redmond, Washington</Typography>
                            <Typography sx={{fontSize: '1.4rem'}}>mikeytwheeler@gmail.com</Typography>
                        </div>
                        <div>

                        </div>
                    </Box>
                </Grid>
            </Grid> 
            <TitleBar pos={''} />
        </Box>
    )
}

export default Footer;