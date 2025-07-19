// Imports
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import localFont from 'next/font/local';

// Styles
import './index.css';

// Metadata
const metadata: Metadata = {
	title: 'Landing Hub',
	description: 'A project that contains all my simple & mini projects',
	creator: 'Alireza Moradi'
}

const IranSans = localFont({
	src: './fonts/IRANSans.ttf',
	variable: '--font-IranSans',
	display: 'swap'
})

// Layout
const RootLayout = (
	{children}: { children: ReactNode }
) => {
	return(
		<html lang="en" dir="rtl" className={IranSans.className} suppressHydrationWarning>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					{children}
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

// Exports
export default RootLayout;

export {
	metadata,
	IranSans
}