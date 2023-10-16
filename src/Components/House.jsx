// Components - Material UI
import { Box, Typography, styled } from "@mui/material";

// Icons - Images 
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
	const HouseBox = styled(Box)(({ theme }) => ({
		maxWidth: "350",
		backgroundColor: "#fff",
		margin: theme.spacing(0, 2, 0, 2),
		[theme.breakpoints.down("md")]: {
			margin: theme.spacing(2, 0, 2, 0),
		},
	}));

	const InfoBox = styled(Box)(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}));

	const ImgContainer = styled(Box)(({ theme }) => ({
		width: "100%",
	}));

	return (
		<HouseBox>
			<ImgContainer>
				<img
					src={img}
					alt="housePhoto"
					style={{ maxWidth: "100%" }}
				/>
			</ImgContainer>

			<Box sx={{ padding: "1rem" }}>
				<Typography
					variant="body2"
					sx={{ fontWeight: "700" }}
				>
					${price}
				</Typography>
				<Typography
					variant="body2"
					sx={{ my: 2 }}
				>
					{address}
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<InfoBox>
						<img
							src={bedroomsIcon}
							alt="bedroomsIcon"
						/>
						<Typography
							variant="body2"
							sx={{ mt: 1 }}
						>
							{bedrooms}
						</Typography>
					</InfoBox>

					<InfoBox>
						<img
							src={bathroomsIcon}
							alt="bathroomsIcon"
						/>
						<Typography
							variant="body2"
							sx={{ mt: 1 }}
						>
							{bathrooms}
						</Typography>
					</InfoBox>

					<InfoBox>
						<img
							src={spaceIcon}
							alt="spaceIcon"
						/>
						<Typography
							variant="body2"
							sx={{ mt: 1 }}
						>
							{space}
						</Typography>
					</InfoBox>
				</Box>
			</Box>
		</HouseBox>
	);
};
export default House;
