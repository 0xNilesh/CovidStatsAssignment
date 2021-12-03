import {
	Button,
	Container,
	CssBaseline,
	Grid,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Img from "../Assets/img.png";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		height: "100vh",
		textAlign: "center",
		background: `url(${Img}) no-repeat`,
		backgroundSize: "cover",
	},
	boxClass: {
		marginTop: "10rem",
	},
}));

const HomeComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root} id="home">
			<Container maxWidth="lg">
				<CssBaseline />
				<Box>
					<Grid container alignItems="flex-end" direction="column">
						<Grid item>
							<Box className={classes.boxClass}>
								<Typography
									variant="h1"
									component="h1"
									style={{
										color: "darkblue",
									}}
								>
									<span
										style={{
											fontWeight: 550,
										}}
									>
										Covid-19 Stats
									</span>
								</Typography>
							</Box>
						</Grid>
						<Grid item>
							<Link to="/countries/all">
								<Button
									color="primary"
									size="large"
									variant="contained"
								>
									Explore Stats
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default HomeComponent;
