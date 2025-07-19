// Imports
import Link from 'next/link';

// Mui Components
import {
	Typography
} from '@mui/material';

// Page
const ProjectsPage = () => {
	return(<>
		<Typography
			variant="h4"
			className="text-center"
		>
			Welcome to my Projects page
		</Typography>
		<Link
			href="/projects/ecommerce/1"
			className="text-blue-500"
		>Bookino</Link>
	</>);
};

// Exports
export default ProjectsPage;