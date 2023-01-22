// Chakra imports
import { Box, Flex, Icon, Progress, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox';
import Menu from 'components/menu/MainMenu';
import React from 'react';
// Assets
import { MdOutlineCloudDone } from 'react-icons/md';

export default function Banner(props: { used: number; total: number; [x: string]: any }) {
	const { used, total } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	const textColorSecondary = 'gray.400';
	const box = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Card mb={{ base: '0px', lg: '20px' }} alignItems='center'>
			<Flex w='100%'>
				<Menu ms='auto' />
			</Flex>
			<IconBox
				mx='auto'
				h='100px'
				w='100px'
				icon={<Icon as={MdOutlineCloudDone} color={brandColor} h='46px' w='46px' />}
				bg={box}
			/>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px'>
				Your storage
			</Text>
			<Text color={textColorSecondary} fontSize='md' maxW={{ base: '100%', xl: '80%', '3xl': '60%' }} mx='auto'>
				Supervise your drive space in the easiest way
			</Text>
			<Box w='100%' mt='auto'>
				<Flex w='100%' justify='space-between' mb='10px'>
					<Text color={textColorSecondary} fontSize='sm' maxW='40%'>
						{used} GB
					</Text>
					<Text color={textColorSecondary} fontSize='sm' maxW='40%'>
						{total} GB
					</Text>
				</Flex>
				<Progress alignItems='start' colorScheme='brandScheme' value={used / total * 100} w='100%' />
			</Box>
		</Card>
	);
}


/**
 * <Storage gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} used={25.6} total={50} />
				<Upload
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '1 / 3 / 2 / 4'
					}}
					minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
					pe='20px'
					pb={{ base: '100px', lg: '20px' }}
				/>
 * 
 * <Notifications
					used={25.6}
					total={50}
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '2 / 1 / 3 / 3',
						'2xl': '1 / 3 / 2 / 4'
					}}
				/>
 * <Projects
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Product Designer'
					posts='17'
					followers='9.7k'
					following='274'
				/>

				<General gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} minH='365px' pe='20px' />

				
			 <Flex w='max-content' mx='auto' mt='26px'>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{posts}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Posts
					</Text>
				</Flex>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{followers}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Followers
					</Text>
				</Flex>
				<Flex mx='auto' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{following}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Following
					</Text>
				</Flex>
			</Flex>
			 
			 -->
			


 */