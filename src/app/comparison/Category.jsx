import { Heading, Stack } from '@chakra-ui/react';

import { CategoryField } from './CategoryField';
import { CategoryTotal } from './CategoryTotal';

export const Category = ({ category, key, setState }) => {
	const { label, fields } = category;
	return (
		<div>
			<Heading
				size="xs"
				marginBottom={2}
				textTransform="uppercase"
			>
				{label}
			</Heading>

			<Stack spacing={2}>
				{fields &&
					Object.keys(fields).map((attrKey, attrIndex) => {
						const attr = fields[attrKey];
						return (
							<CategoryField
								key={`cat-${key}-attr-${attrIndex}`}
								{...attr}
							/>
						);
					})}
				{!fields && <CategoryField {...category} />}
			</Stack>
			<CategoryTotal current="100" upgrade="105" />
		</div>
	);
};
