import { decimalToPercentage } from '@/utils';

import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Spacer,
	useNumberInput,
} from '@chakra-ui/react';

export const CategoryField = ({
	label,
	value,
	upgrade,
	type,
	use,
}) => {
	const isDecimal = type === 'float';
	const { getInputProps } = useNumberInput({
		defaultValue: upgrade || value,
		precision: isDecimal ? 2 : 0,
	});

	if (use === false) return null;

	return (
		<FormControl
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			gap={10}
		>
			<FormLabel margin={0} opacity={0.5}>
				{label}
			</FormLabel>
			<Spacer />
			<Box width="20" textAlign="right" opacity={0.5}>
				{isDecimal ? decimalToPercentage(value) : value}
			</Box>
			<Input width="20" variant="filled" {...getInputProps()} />
		</FormControl>
	);
};
