// Imports
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Styles
import './index.css';

// Metadata
const metadata: Metadata = {
	title: 'Landing Hub',
	description: 'A project that contains all my simple & mini projects',
	creator: 'Alireza Moradi'
}

// Layout
const RootLayout = (
	{children}: { children: ReactNode }
) => {
	return(
		<html lang="en" suppressHydrationWarning>
			<body className="p-4">
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
}