'use client';

import { Post } from '@/models/home.posts';
import { Country } from '@/models/shop.countries';
import { Grape } from '@/models/shop.grapes';
import { ProductProps } from '@/models/shop.product';
import { Types } from '@/models/shop.types';
import {
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import Button from '@/UI/button';
import AppModal from '@/components/modal';
import PostForm from '@/components/forms/Add-post-form';

export type Content = Post | ProductProps | Types | Country | Grape;

export interface NestedTableProps {
	content: Content[];
	name: string;
}

export const NestedTable = (props: NestedTableProps) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	const { content, name } = props;

	return (
		<List>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<ArticleIcon />
				</ListItemIcon>
				<ListItemText primary={'Posts' + '(' + content.length + ')'} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Typography variant="h4" gutterBottom component="div">
					Add new post
					<AppModal buttonIcon={<AddIcon />}>
						<PostForm />
					</AppModal>
				</Typography>
				<TableContainer>
					<Table>
						<TableHead></TableHead>
						<TableBody>
							{content.map((item: Content, index: number) => (
								<TableRow key={index}>
									<TableCell>
										{
											// @ts-ignore
											name === 'Posts' ? item.title : item.name
										}
									</TableCell>
									<TableCell>
										<Button style="icon_btn">
											<EditIcon />
										</Button>
										<Button style="icon_btn">
											<HighlightOffIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Collapse>
		</List>
	);
};
