import React from 'react';
import LayoutStyle from './LayoutStyle.module.css';


const Layout = ({ children }) =>{
    return(
        <>
			<div className={LayoutStyle.documentLayout}>
				<main className={LayoutStyle.mainBody}>
					{ children }
				</main>
			</div>
		</>
    )
}

export default Layout;