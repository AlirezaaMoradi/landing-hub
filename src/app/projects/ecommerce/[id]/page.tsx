// Imports


// Mui Components
import { 
	Typography
} from "@mui/material";


// Page
const EcommercePages = async ({ params }: { params: Promise<{ id: string }> }) => {
	const {id} = await params;

	return(<>
		<Typography
			variant="h4"
			className="text-center"
		>
			Welcome to project <span className="text-green-500">{id}</span>
		</Typography>
	</>);
};

// Exports
export default EcommercePages;