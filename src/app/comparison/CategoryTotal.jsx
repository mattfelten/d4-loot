import { Box, Flex, Spacer } from '@chakra-ui/react';

export const CategoryTotal = ({ current, upgrade }) => (
	<Flex
		justifyContent="space-between"
		alignItems="center"
		gap={10}
		fontSize="sm"
		opacity={0.5}
		marginTop={2}
	>
		<Spacer />
		<Box width="20" textAlign="right">
			{current}
		</Box>
		<Box width="20" textAlign="left">
			{upgrade}
		</Box>
	</Flex>
);
