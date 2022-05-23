import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './hooks/theme';
import { ThemeProvider } from '@mui/material/styles'

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);
