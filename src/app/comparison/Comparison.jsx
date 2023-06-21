'use client';

import { defaults } from './defaults';
import { decimalToPercentage } from '@/utils';

import {
	Button,
	ButtonGroup,
	Flex,
	Stack,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
} from '@chakra-ui/react';

import { Category } from './Category';
import { Core } from './Core';

export const Comparison = ({ data = defaults }) => (
	<>
		<Stack spacing={10}>
			<Core key="cat-core" />
			{Object.keys(data).map((categoryKey, catIndex) => {
				const category = data[categoryKey];
				return (
					<Category
						key={`cat-${catIndex}`}
						category={category}
					/>
				);
			})}
		</Stack>

		<Flex width={400}>
			<Stat width="50%" textAlign="center">
				<StatLabel>Current Damage</StatLabel>
				<StatNumber>45</StatNumber>
			</Stat>
			<Stat width="50%" textAlign="center">
				<StatLabel>New Damage</StatLabel>
				<StatNumber>45</StatNumber>
				<StatHelpText>
					<StatArrow type="decrease" />
					9.05%
				</StatHelpText>
			</Stat>
		</Flex>

		<ButtonGroup variant="outline" spacing="6">
			<Button>Junk</Button>
			<Button colorScheme="blue">Upgrade</Button>
		</ButtonGroup>
	</>
);
