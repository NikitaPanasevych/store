'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styles from './styles.module.scss';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
	anchor: Anchor;
	buttonChildren: React.ReactNode;
	children: React.ReactNode;
}

export default function MyDrawer(props: DrawerProps) {
	const { anchor, children, buttonChildren } = props;

	const [state, setState] = React.useState({
		left: false,
		right: false,
		top: false,
		bottom: false,
	});

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Box style={{ height: '100%' }} role="presentation">
			{children}
		</Box>
	);

	return (
		<div>
			{([anchor] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<button className={styles.button} onClick={toggleDrawer(anchor, true)}>
						{buttonChildren}
					</button>
					<Drawer className="drawer" anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
