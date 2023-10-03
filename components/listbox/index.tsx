import styles from './styles.module.scss';

interface ListBoxProps {
	name: string;
	options: string[];
}

export const Listbox = (props: ListBoxProps) => {
	const { name, options } = props;

	return (
		<label>
			<select name="options" className={styles.listbox}>
				{options.map((option, index) => (
					<option key={index} className={styles.listbox__options} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
};
