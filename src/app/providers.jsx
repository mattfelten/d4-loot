'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

export const Providers = ({ children }) => (
	<CacheProvider>
		<ChakraProvider theme={theme}>{children}</ChakraProvider>
	</CacheProvider>
);
