'use client';

import Button from '@/UI/button';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import styles from './styles.module.scss';

export interface AppModalProps {
	buttonIcon: React.ReactNode;
	children: React.ReactNode;
}

const AppModal = ({ children, buttonIcon }: AppModalProps) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button style="icon_btn" onClick={handleOpen}>
				{buttonIcon}
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div className={styles.modal}>{children}</div>
			</Modal>
		</>
	);
};

export default AppModal;
