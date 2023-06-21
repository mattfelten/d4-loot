'use client';

import { Link } from '@chakra-ui/next-js';

import { Box, Flex } from '@chakra-ui/react';

export const ClientLayout = ({ children }) => (
	<div>
		<Box padding={4}>
			<Link
				href="/"
				fontWeight="bold"
				_hover={{
					textDecoration: 'none',
					opacity: 0.8,
				}}
			>
				Diablo 4 Item Comparison
			</Link>
		</Box>
		<Flex
			direction="column"
			align="center"
			gap={20}
			padding={24}
			minHeight="100vh"
		>
			{children}
		</Flex>
	</div>
);
