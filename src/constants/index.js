import {
	backend,
	css,
	funiro,
	html,
	javascript,
	marvelHooks,
	mobile,
	mongodb,
	nestjs,
	nextjs,
	nodejs,
	onlineCinema,
	portfolio,
	postgresql,
	reactjs,
	redflix,
	redux,
	tailwind,
	threejs,
	typescript,
	web
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
]

const services = [
	{
		title: 'Web Developer',
		icon: web
	},
	{
		title: 'React Native Developer',
		icon: mobile
	},
	{
		title: 'Backend Developer',
		icon: backend
	}
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'TypeScript',
		icon: typescript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Redux Toolkit',
		icon: redux
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Node JS',
		icon: nodejs
	},
	{
		name: 'MongoDB',
		icon: mongodb
	},
	{
		name: 'Three JS',
		icon: threejs
	},
	{
		name: 'Next JS',
		icon: nextjs
	},
	{
		name: 'Nest JS',
		icon: nestjs
	},
	{
		name: 'PostgreSQL',
		icon: postgresql
	}
]

const projects = [
	{
		name: 'Marvel',
		description:
			'Database application, for browsing and searching information about characters, comics in which they appeared, using Marvel API.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient'
			},
			{
				name: 'redux',
				color: 'red-text-gradient'
			}
		],
		image: marvelHooks,
		isDemo: true,
		source_code_link: 'https://github.com/GUN-SET/MARVEL_HOOKS',
		demo_code_link: 'https://marvel-hooks-solovev.vercel.app/'
	},
	{
		name: 'Online Cinema',
		description:
			'Full stack online cinema app, with player, roles, admin panel, stats, favorites, liked, rating, with full text editor.',
		tags: [
			{
				name: 'nextjs',
				color: 'purple-text-gradient'
			},
			{
				name: 'nestjs',
				color: 'pink-text-gradient'
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient'
			},
			{
				name: 'TypeScript',
				color: 'dark-blue-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'white-text-gradient'
			}
		],
		image: onlineCinema,
		isDemo: true,
		source_code_link: 'https://github.com/GUN-SET/ONLINE_CINEMA',
		demo_code_link: 'https://online-cinema-solovev.vercel.app/'
	},
	{
		name: 'Online Cinema Mobile',
		description:
			'Full functionality of the web version (ONLINE-CINEMA), but in mobile version. Same backend. More work with animation.',
		tags: [
			{
				name: 'react-native',
				color: 'light-green-text-gradient'
			},
			{
				name: 'nestjs',
				color: 'pink-text-gradient'
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient'
			},
			{
				name: 'TypeScript',
				color: 'dark-blue-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'white-text-gradient'
			}
		],
		image: redflix,
		source_code_link: 'https://github.com/GUN-SET/ONLINE_CINEMA_MOBILE'
	},
	{
		name: '3D Portfolio',
		description: 'Portfolios using Three.js and animations.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient'
			},
			{
				name: 'threejs',
				color: 'dark-green-text-gradient'
			},
			{
				name: 'tailwindcss',
				color: 'white-text-gradient'
			}
		],
		image: portfolio,
		isDemo: true,
		source_code_link: 'https://github.com/GUN-SET/3d_portfolio',
		demo_code_link: 'https://portfolio-solovev.vercel.app/'
	},
	{
		name: 'Funiro',
		description:
			'Adaptive furniture sales sliding store on pure Java Script, with beautiful sliders, gallery, and the effect of adding to cart on pure JS.',
		tags: [
			{
				name: 'html',
				color: 'red-text-gradient'
			},
			{
				name: 'css',
				color: 'dark-blue-text-gradient'
			},
			{
				name: 'js',
				color: 'yellow-text-gradient'
			}
		],
		image: funiro,
		isDemo: true,
		source_code_link: 'https://github.com/GUN-SET/FUNIRO',
		demo_code_link: 'https://funiro-solovev.vercel.app/'
	}
]

export { services, technologies, projects }
