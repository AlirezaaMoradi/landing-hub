// Imports
import Link from 'next/link';

// Mui Components
import {
	Button,
	Grid,
	Stack,
	TextField,
	InputAdornment,
	Card
} from '@mui/material';

import { LuFileWarning } from 'react-icons/lu';
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IranSans } from '@/app/layout';
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

// Component
const TheFooter = () => {
	return(<>
		<Grid
			container
			className="
				lg:!grid lg:grid-cols-12 lg:grid-rows-3 lg:w-full lg:row-start-9 lg:row-end-13 lg:col-span-full
				bg-[#1A1A1A] p-2"
		>

			<Grid
			container
			className="
				lg:!grid lg:grid-cols-12 lg:grid-rows-1 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-12
				bg-[#093F2A] -translate-y-25 rounded-3xl p-4 h-[130%]
			">
				<Grid
					container
					className="
						bg-[#1E4E3C] rounded-xl col-start-1 col-end-4 w-[120%] p-4
					"
				>
					<Stack
						direction="column"
						className="justify-around"
					>
						<Stack
							direction="row"
							className="justify-between"
						>
							<h4 
								className="text-white text-xl font-bold"
							>بوکیـنو</h4>

							<Stack
								direction="row"
								className="gap-2"
							>
								<Button
									className="
										!min-w-1 w-10 !bg-[#2B5B48]
									"
								>
									<Link href="#" className="text-xl text-white">
										<RiTelegram2Fill />
									</Link>
								</Button>
								<Button
									className="
										!min-w-1 w-10 !bg-[#2B5B48]
									"
								>
									<Link href="#" className="text-xl text-white">
										<IoLogoWhatsapp />
									</Link>
								</Button>
								<Button
									className="
										!min-w-1 w-10 h-10 !bg-[#2B5B48] 
									"
								>
									<Link href="#" className="text-xl text-white">
										<BiLogoInstagramAlt />
									</Link>
								</Button>
								<Button
									className="
										!min-w-1 w-10 h-10 !bg-[#2B5B48]
									"
								>
									<Link href="#" className="text-xl text-white">
										<FaTwitter />
									</Link>
								</Button>
							</Stack>
						</Stack>
						<p
							className="text-justify text-[#639481]"
						>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
							 از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
							 و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
							 و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
							 کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
						</p>
					</Stack>
				</Grid>

			<Stack
				direction="row"
				className="lg:col-start-5 lg:col-end-8 justify-between"
			>
				<Stack
					direction="column"
					className="gap-4"
				>
					<h4 className="text-white text-md font-bold mb-5">بخش های سایت</h4>
					<Link href="#" className="text-white">صفحه اصلی</Link>
					<Link href="#" className="text-white">درباره ما</Link>
					<Link href="#" className="text-white">قوانین</Link>
					<Link href="#" className="text-white">درباره ما</Link>
					<Link href="#" className="text-white">تماس با ما</Link>
				</Stack>

				<Stack
					direction="column"
					className="gap-4"
				>
					<h4 className="text-white text-md font-bold mb-5">بخش های سایت</h4>
					<Link href="#" className="text-white">صفحه اصلی</Link>
					<Link href="#" className="text-white">درباره ما</Link>
					<Link href="#" className="text-white">قوانین</Link>
					<Link href="#" className="text-white">درباره ما</Link>
					<Link href="#" className="text-white">تماس با ما</Link>
				</Stack>
			</Stack>

			<Stack
				direction="column"
				className="
					lg:col-start-9 lg:col-end-13 gap-5
				"
			>
				<p className="text-[#639481]">برای مطلع شدن از تخفیفات ایمیل خود را وارد کنید</p>
				<TextField
					type="text"
					placeholder="ایمیل"
					className="bg-white rounded-md border-none outline-none"
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									<Button
										variant="contained"
										className={`text-white !bg-[#093F2A] ${IranSans.className}`}
									>ارسال</Button>
								</InputAdornment>
							)
						}
					}}
				>Email</TextField>

				<Stack
					direction="row"
					className="w-full justify-between"
				>
					<Card
						className="w-28 h-28 !bg-[#1E4E3C]"
					></Card>
					<Card
						className="w-28 h-28 !bg-[#1E4E3C]"
					></Card>
					<Card
						className="w-28 h-28 !bg-[#1E4E3C]"
					></Card>
					<Card
						className="w-28 h-28 !bg-[#1E4E3C]"
					></Card>
				</Stack>

				<p
					className="
						bg-[#122F23] flex justify-between text-white items-center p-2
						rounded-md
					"
				>
					شماره تماس:
					<span>021-23456789</span>
					<span className="text-[#4B7564]">شنبه تا پنجشنبه از 8 تا 22</span>
				</p>
			</Stack>

			</Grid>

			<p
				className="
					lg:row-start-4 lg:row-end-5 lg:col-span-full flex h-12 !text-lg px-4 gap-2 rounded-md
					bg-[#262425] text-white items-center justify-center justify-self-center self-end
				"
			>
				<LuFileWarning />
				تمام حقوق محفوظ و متعلق به <span className="text-[#285B4A] text-xl">بوکیــنو</span> می باشد.
			</p>
		</Grid>
	</>);
};

// Exports
export default TheFooter;