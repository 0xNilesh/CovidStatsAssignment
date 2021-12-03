import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import api from "../api/api";

const columns = [
	{
		field: "id",
		headerName: "Id",
		width: 70,
	},
	{
		field: "Country",
		headerName: "Country",
		width: 150,
		editable: true,
	},
	{
		field: "CountryCode",
		headerName: "Code",
		width: 70,
		editable: true,
	},
	{
		field: "NewConfirmed",
		headerName: "New Confirmed",
		type: "number",
		width: 125,
		editable: true,
	},
	{
		field: "NewDeaths",
		headerName: "New Deaths",
		type: "number",
		width: 110,
		editable: true,
	},
	{
		field: "NewRecovered",
		headerName: "New Recovered",
		type: "number",
		width: 125,
		editable: true,
	},
	{
		field: "TotalConfirmed",
		headerName: "Total Confirmed",
		type: "number",
		width: 130,
		editable: true,
	},
	{
		field: "TotalDeaths",
		headerName: "Total Deaths",
		type: "number",
		width: 125,
		editable: true,
	},
	{
		field: "TotalRecovered",
		headerName: "Total Recovered",
		type: "number",
		width: 135,
		editable: true,
	},
];

const CountriesInfo = () => {
	const [countriesData, setCountriesData] = useState({
		countries: [],
		global: {},
	});

	useEffect(() => {
		const fetchData = async () => {
			const response = await api.get("/summary");
			const [countries, global] = [
				response.data.Countries,
				response.data.Global,
			];
			countries.map((obj, i) => {
				obj.id = i + 1;
				return obj;
			});
			const objData = { countries, global };
			console.log(objData);
			setCountriesData(objData);
		};
		fetchData();
	}, [setCountriesData]);

	return (
		<Box
			sx={{
				p: 3,
				m: 3,
				backgroundColor: "secondary",
			}}
		>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid>
					<Grid item>
						<Typography variant="h5" component="h5">
							<span style={{ fontWeight: 700 }}>Global Data</span>
						</Typography>
						<Typography variant="p" component="p">
							New Confirmed: {countriesData.global.NewConfirmed},
							New Deaths: {countriesData.global.NewDeaths}, New
							Recovered: {countriesData.global.NewRecovered}
						</Typography>
						<Typography variant="p" component="p">
							Total Confirmed:{" "}
							{countriesData.global.TotalConfirmed}, Total Deaths:{" "}
							{countriesData.global.TotalDeaths}, Total Recovered:{" "}
							{countriesData.global.TotalRecovered}
						</Typography>
						<br />
					</Grid>
					<Grid item>
						<Typography variant="h5" component="h5">
							<span style={{ fontWeight: 700 }}>
								Country Wise Data
							</span>
						</Typography>
						<div style={{ height: 700, width: "100%" }}>
							{countriesData !== [] ? (
								<DataGrid
									rows={countriesData.countries}
									columns={columns}
									pageSize={11}
									rowsPerPageOptions={[11]}
									checkboxSelection
									disableSelectionOnClick
								/>
							) : (
								<div>Loading</div>
							)}
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
export default CountriesInfo;
