import { createTheme, ThemeProvider } from '@mui/material';
import { type AppType } from 'next/dist/shared/lib/utils';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

let theme = createTheme();

theme = createTheme(theme, {
	palette: {
		primary: {
			main: '#8701E9'
		},
		secondary: {
			main: '#5924FF'
		},
		background: {
			default: '#F5F5F5'
		},
		accent: {
			main: '#D100D3'
		},
		success: {
			main: '#3EBF8F'
		},
		common: {
			cardForeground: '#695876',
			notificationBadge: '#FF6060',
			black: '#292D32',
			muted: '#CBD0DC',
			blue: '#375EF9'
		}
	},
	shape: {
		borderRadius: 6
	}
});

theme = createTheme(theme, {
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					padding: 26,
					color: theme.palette.common.cardForeground,
					boxShadow: 'none'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			}
		}
	}
});

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
