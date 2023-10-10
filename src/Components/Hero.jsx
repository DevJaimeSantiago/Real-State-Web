import { Box, styled } from "@mui/material";

const Hero = () => {
	const CustomBox = styled(Box)(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		gap: theme.spacing(5),
		marginTop: theme.spacing(3),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
		},
	}));
	return <div>Hero</div>;
};
export default Hero;
