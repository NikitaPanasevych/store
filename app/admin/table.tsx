'use client';

import { Post } from '@/models/home.posts';
import { ProductProps } from '@/models/shop.product';
import { Categories } from '@/models/shop.categories';
import styles from './styles.module.scss';
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
import PostForm from '@/components/forms/add-post-form';
import ProductForm from '@/components/forms/add-product-form';
import CategoriesForm from '@/components/forms/add-category-form';
import removeItem from '@/lib/services/delete';
import UpdatePostForm from '@/components/forms/update-post-form';
import { isCategories, isPost, isProductProps } from '@/lib/functions/type-guards';
import UpdateProductForm from '@/components/forms/update-product-form';
import UpdateCategoriesForm from '@/components/forms/update-category-form';

export type Content = Post | ProductProps | Categories;

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
				<ListItemText className={styles.test} primary={name + '(' + content.length + ')'} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Typography variant="h4" gutterBottom component="div">
					Add new {name}
					<AppModal buttonIcon={<AddIcon />}>
						{name === 'posts' ? (
							<PostForm />
						) : name === 'products' ? (
							<ProductForm />
						) : (
							<CategoriesForm name={name} />
						)}
					</AppModal>
				</Typography>
				<TableContainer>
					<Table>
						<TableHead></TableHead>
						<TableBody>
							{content.map((item: Content, index: number) => (
								<TableRow key={index}>
									<TableCell>{isPost(item) ? item.title : item.name}</TableCell>
									<TableCell>
										<Button style="icon_btn">
											<AppModal buttonIcon={<EditIcon />}>
												{isPost(item) ? (
													<UpdatePostForm post={item} />
												) : isProductProps(item) ? (
													<UpdateProductForm product={item} />
												) : isCategories(item) ? (
													<UpdateCategoriesForm name={name} category={item} />
												) : null}
											</AppModal>
										</Button>
										<Button style="icon_btn" onClick={() => removeItem(item, name)}>
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
