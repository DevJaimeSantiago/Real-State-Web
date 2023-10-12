// Components
import CustomButton from "./CustomButton";

// Components - Material UI
import { Box, Typography, styled } from "@mui/material";
import { Container } from "@mui/system";

// Material Icons - Material UI
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

// images
import logoImg from "../media/logo.png";

const Navbar = () => {
	const NavLink = styled(Typography)(({ theme }) => ({
		fontSize: "14px",
		color: "#4F5361",
		fontWeight: "bold",
		cursor: "pointer",
		"&:hover": {
			color: "#fff",
		},
	}));

	const NavbarLinksBox = styled(Box)(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	}));

	const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
		cursor: "pointer",
		display: "none",
		marginRight: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			display: "block",
		},
	}));

	const NavbarContainer = styled(Container)(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: theme.spacing(5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(2),
		},
	}));

	const NavbarLogo = styled("img")(({ theme }) => ({
		cursor: "pointer",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	}));
	return (
		<NavbarContainer>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "2.5rem",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<CustomMenuIcon />

					<NavbarLogo
						src={logoImg}
						alt="logo"
					/>
				</Box>

				<NavbarLinksBox>
					<NavLink variant="body2">Home</NavLink>
					<NavLink variant="body2">Features</NavLink>
					<NavLink variant="body2">Services</NavLink>
					<NavLink variant="body2">Listed</NavLink>
					<NavLink variant="body2">Contact</NavLink>
				</NavbarLinksBox>
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				<NavLink variant="body2">Sign Up</NavLink>
				<CustomButton
					backgroundColor="#0F1B4C"
					color="#fff"
					buttonText="Register"
				/>
			</Box>
		</NavbarContainer>
	);
};
export default Navbar;
