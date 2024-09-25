import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
	interface CommonColors {
		cardForeground: string;
		notificationBadge: string;
		black: string;
		muted: string;
		blue: string;
	}
}
declare module '@mui/material/styles' {
	interface Palette {
		accent: {
			main: string;
		};
	}
}
