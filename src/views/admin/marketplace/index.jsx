/*!
   _______    ___           ___       _______       ___
  |__   __|  / _ \         / _ \     / _ _ __\     / _ \
     | |    / / \ \       / / \ \    \ \          / / \ \
     | |   / /___\ \     / /___\ \      \\\      / /___\ \
     | |  / /     \ \   / /     \ \  __ _ _\ \  / /     \ \
     |_| /_/       \_\ /_/       \_\ \_______/ /_/       \_\                                                                                                                                                                                                                                                                                                        
===============================================================
* taasa analytics - v1.0.0
===============================================================

* Company Page: https://www.taasa.app
* Copyright 2022 taasa analytics (https://www.taasa.app/)

* Created by Samson

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// Chakra imports
import { Box, Button, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/marketplace/components/Banner';
// import TableTopCreators from 'views/admin/marketplace/components/TableTopCreators';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets
import Nft1 from 'assets/img/nfts/Nft1.png';
import Nft2 from 'assets/img/nfts/Nft2.png';
import Nft3 from 'assets/img/nfts/Nft3.png';
import Nft4 from 'assets/img/nfts/Nft4.png';
import Nft5 from 'assets/img/nfts/Nft5.png';
import Nft6 from 'assets/img/nfts/Nft6.png';
import Avatar1 from 'assets/img/avatars/avatar1.png';
import Avatar2 from 'assets/img/avatars/avatar2.png';
import Avatar3 from 'assets/img/avatars/avatar3.png';
import Avatar4 from 'assets/img/avatars/avatar4.png';
// import tableDataTopCreators from 'views/admin/marketplace/variables/tableDataTopCreators.json';
// import { tableColumnsTopCreators } from 'views/admin/marketplace/variables/tableColumnsTopCreators';

export default function Marketplace() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
					<Banner />
					<Flex direction='column'>
						<Flex
							mt='45px'
							mb='20px'
							justifyContent='space-between'
							direction={{ base: 'column', md: 'row' }}
							align={{ base: 'start', md: 'center' }}>
							<Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
								Trending Products
							</Text>
							<Flex
								align='center'
								me='20px'
								ms={{ base: '24px', md: '0px' }}
								mt={{ base: '20px', md: '0px' }}>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									to='#art'>
									Medical
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									to='#music'>
									Essentials
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									to='#collectibles'>
									Wearables
								</Link>
								<Link color={textColorBrand} fontWeight='500' to='#sports'>
									Branded Merch
								</Link>
							</Flex>
						</Flex>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
							<NFT
								name='Cloudin Beads'
								author='By Taasa'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft1}
								currentbid='0.91 ETH'
								download='#'
							/>
							<NFT
								name='Vibranium Helmet'
								author='By Taasa'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft2}
								currentbid='0.91 ETH'
								download='#'
							/>
							<NFT
								name='Gradient Reflector '
								author='By GM Tumpeco'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft3}
								currentbid='0.91 ETH'
								download='#'
							/>
						</SimpleGrid>
						<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
							Recently Added
						</Text>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px' mb={{ base: '20px', xl: '0px' }}>
							<NFT
								name='Swipe Gloves'
								author='By Taasa'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft4}
								currentbid='0.91 ETH'
								download='#'
							/>
							<NFT
								name='Colorful Velcro Straps'
								author='By Epsilon'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft5}
								currentbid='0.91 ETH'
								download='#'
							/>
							<NFT
								name='First-Aid Kit'
								author='By RedCross'
								bidders={[ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ]}
								image={Nft6}
								currentbid='0.91 ETH'
								download='#'
							/>
						</SimpleGrid>
					</Flex>
				</Flex>
					
				<Flex flexDirection='column' gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}>
					
					
					<Card p='0px'>
						<Flex
							align={{ sm: 'flex-start', lg: 'center' }}
							justify='space-between'
							w='100%'
							px='22px'
							py='18px'>
							<Text color={textColor} fontSize='xl' fontWeight='600'>
								Purchases History
							</Text>
							<Button variant='action'>See all</Button>
						</Flex>

						<HistoryItem
							name='Reflector Jacket'
							author='By Black Tech'
							date='30s ago'
							image={Nft5}
							price='0.91 ETH'
						/>
						<HistoryItem
							name='Irridiscent Helmet'
							author='By Ethereal tech'
							date='58s ago'
							image={Nft1}
							price='0.91 ETH'
						/>
						<HistoryItem
							name='Rider Gloves'
							author='By Sidereum'
							date='1m ago'
							image={Nft2}
							price='0.91 ETH'
						/>
						<HistoryItem
							name='Rider googles'
							author='By Taasa'
							date='1m ago'
							image={Nft4}
							price='0.91 ETH'
						/>
						<HistoryItem
							name='Refelctor Jacket'
							author='By GM Tumpeco'
							date='2m ago'
							image={Nft3}
							price='0.91 ETH'
						/>
						<HistoryItem
							name='Helmet'
							author='By SBI Group'
							date='3m ago'
							image={Nft6}
							price='0.91 ETH'
						/>
					</Card>
				</Flex>
			</Grid>
			{/* Delete Product */}
		</Box>
	);
}
