import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import fetch from "isomorphic-fetch";
import ProTip from "../ProTip";
import Link from "../Link";
import Thoughts from "../components/Thoughts";

function Index(props) {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					<Thoughts thoughts={props.thoughts} />
				</Typography>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
				<ProTip />
			</Box>
		</Container>
	);
}

Index.getInitialProps = async ({ req }) => {
	const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
	const res = await fetch(`${baseURL}/api/thoughts`);
	return {
		thoughts: await res.json()
	};
};

export default Index;
