import { IconButton } from '@mui/material';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
	children: ReactNode;
	style?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
	if (style === undefined) {
		return (
			<button onClick={onClick} className={styles.button}>
				{children}
			</button>
		);
	} else {
		return (
			<IconButton onClick={onClick} className={styles[style]}>
				{children}
			</IconButton>
		);
	}
};

export default Button;
