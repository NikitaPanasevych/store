import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
