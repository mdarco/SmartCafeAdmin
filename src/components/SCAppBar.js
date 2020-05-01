import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const SCAppBar = () => {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6">
					Smart Cafe Admin
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default SCAppBar;
