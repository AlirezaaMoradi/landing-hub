// Imports
import Link from 'next/link';

// Mui Components
import {
	Typography
} from '@mui/material';

// Page
const HomePage = () => {
	return(<>
		<Typography 
			variant="h4" 
			className="text-center"
		>Home Page</Typography>
		<Link 
			href="/projects"
			className="text-blue-500"
		>
			Go to my Projects
		</Link>
	</>);
};

// Exports
export default HomePage;