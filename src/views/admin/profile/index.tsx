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

// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
// import General from 'views/admin/profile/components/General';
// import Notifications from 'views/admin/profile/components/Notifications';
// import Projects from 'views/admin/profile/components/Projects';
// import Storage from 'views/admin/profile/components/Storage';
// import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

export default function Overview() {
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={avatar}
					name='Moria Nduru'
					email='moria@taasa.app'
					/**posts='17'
					followers='9.7k'
					following='274'*/
				/>
				
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1.34fr 1.62fr 1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				
				
				
			</Grid>
		</Box>
	);
}
