/* eslint-disable */

import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	let textColor = useColorModeValue('gray.400', 'gray.400');
	let linkColor = useColorModeValue({ base: 'gray.500', lg: 'gray.600' }, 'white');
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				lg: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '0px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', lg: '0px' }}>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px'>
					 All Rights Reserved. 
					<Link mx='3px' color={textColor} href='https://www.taasa.app' target='_blank' fontWeight='700'>
						Taasa Analytics
					</Link>
				</Text>
			</Text>
			<List display='flex'>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='mailto:hello@taasa.app'>
						Support
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='https://www.taasa.com/privacy-policy'>
						Privacy Policy
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='https://taasa.com/terms-of-service'>
						Terms & Conditions
					</Link>
				</ListItem>
				<ListItem>
					<Link fontWeight='500' color={linkColor} href='https://www.blog.taasa.app/'>
						Blog
					</Link>
				</ListItem>
			</List>
		</Flex>
	);
}
