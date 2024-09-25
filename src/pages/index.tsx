import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
	alpha,
	Avatar,
	Badge,
	Box,
	type BoxProps,
	Card,
	IconButton,
	LinearProgress,
	linearProgressClasses,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Typography,
	useTheme
} from '@mui/material';
import Button from '@mui/material/Button';
import Head from 'next/head';
import Image from 'next/image';

const SIDEBAR_WIDTH = '285px';
const TOPBAR_HEIGHT = '84px';
const NAV_ITEMS = [
	{
		icon: <DashboardOutlinedIcon />,
		text: 'Dashboard'
	},
	{
		icon: <DashboardOutlinedIcon />,
		text: 'Contributions'
	},
	{
		icon: <DashboardOutlinedIcon />,
		text: 'Employees'
	},
	{
		icon: <DashboardOutlinedIcon />,
		text: 'Users'
	},
	{
		icon: <DashboardOutlinedIcon />,
		text: 'Settings'
	}
];
const ANALYTICS_ITEMS = [
	{
		icon: (
			<GroupsOutlinedIcon
				sx={{
					width: '48px',
					height: '48px',
					fill: 'url(#linearColors)'
				}}
			/>
		),
		text: 'Dashboard',
		value: '0'
	},
	{
		icon: (
			<GroupsOutlinedIcon
				sx={{
					width: '48px',
					height: '48px',
					fill: 'url(#linearColors)'
				}}
			/>
		),
		text: 'Contributions',
		value: '$0'
	},
	{
		icon: (
			<GroupsOutlinedIcon
				sx={{
					width: '48px',
					height: '48px',
					fill: 'url(#linearColors)'
				}}
			/>
		),
		text: 'Employees Opted Out',
		value: '0'
	}
];
const ACTIVITY_ITEMS = [
	{
		src: '/activity1.png',
		name: 'Jhon Added a new Employee.',
		datetime: 'Dec 30, 2019 07:52'
	},
	{
		src: '/activity2.png',
		name: 'Employee Sam Carron Opted Out.',
		datetime: 'Dec 30, 2019 05:18'
	},
	{
		src: '/activity2.png',
		name: 'Employee Sam Carron Opted Out.',
		datetime: 'Dec 30, 2019 05:18'
	},
	{
		src: '/activity2.png',
		name: 'Employee Sam Carron Opted Out.',
		datetime: 'Dec 30, 2019 05:18'
	},
	{
		src: '/activity2.png',
		name: 'Employee Sam Carron Opted Out.',
		datetime: 'Dec 30, 2019 05:18'
	}
];
const USER_ITEMS = [
	{
		src: '/user1.png',
		name: 'Leslie Alexander',
		role: 'Global Administrator',
		isOnline: true
	},
	{
		src: '/user2.png',
		name: 'Savannah Nguyen',
		role: 'Viewer',
		isOnline: true
	},
	{
		src: '/user3.png',
		name: 'Esther Howard',
		role: 'Moderator',
		isOnline: false
	},
	{
		src: '/user4.png',
		name: 'Ronald Richards',
		role: 'Administrator',
		isOnline: true
	}
];

const SideBar = () => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 20,
				width: SIDEBAR_WIDTH,
				height: '100%',
				bgcolor: 'primary.main',
				borderRadius: '40px',
				py: '60px',
				px: 0,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '60px',
				boxShadow: '2px 0px 20px 2px rgba(0, 0, 0, 0.1)'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
					mb: '60px'
				}}
			>
				<Badge
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					variant="dot"
					sx={{
						'& .MuiBadge-badge': {
							bgcolor: '#E63C48',
							color: 'white',
							bottom: 5,
							right: 5,
							height: '12px',
							width: '12px',
							borderRadius: '50%'
						}
					}}
				>
					<Box
						sx={{
							width: '32px',
							height: '32px',
							bgcolor: 'white',
							borderRadius: '50%',
							flexShrink: 0
						}}
					/>
				</Badge>
				<Typography
					variant="body1"
					color="white"
					sx={{ fontWeight: 'bold', fontSize: '24px' }}
				>
					Compound
				</Typography>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<nav>
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '40px'
						}}
					>
						{NAV_ITEMS.map(({ icon, text }, index) => (
							<ListItem
								key={index}
								disablePadding
								sx={{
									position: 'relative'
								}}
							>
								{index === 0 && (
									<Box
										sx={{
											position: 'absolute',
											left: -4,
											width: 'calc(100% + 40px)',
											height: '150%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											bgcolor: 'accent.main',
											borderRadius: '50px 0 0 50px',
											p: '30px',
											'&:before': {
												content: '""',
												position: 'absolute',
												bottom: '100%',
												right: -1,
												width: '100px',
												height: '100px',
												bgcolor: 'transparent',
												borderRadius: '50px',
												boxShadow: `50px 50px 0 0 ${theme.palette.accent.main}`
											},
											'&:after': {
												content: '""',
												position: 'absolute',
												top: '100%',
												right: -1,
												width: '100px',
												height: '100px',
												bgcolor: 'transparent',
												borderRadius: '50px',
												boxShadow: `50px -50px 0 0 ${theme.palette.accent.main}`
											}
										}}
									/>
								)}

								<ListItemButton>
									<ListItemIcon sx={{ color: 'white' }}>
										{icon}
									</ListItemIcon>
									<ListItemText
										primary={text}
										sx={{
											'& span': {
												fontWeight: 'medium',
												fontSize: '20px'
											}
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</nav>
				<Button
					startIcon={<LogoutOutlinedIcon fontSize="large" />}
					variant="contained"
					size="large"
					sx={{
						mt: 'auto',
						bgcolor: 'white',
						color: 'primary.main',
						width: '162px',
						height: '64px',
						borderRadius: '15px',
						fontWeight: 'bold',
						fontSize: '20px'
					}}
				>
					Logout
				</Button>
			</Box>
		</Card>
	);
};

const TopBar = () => {
	return (
		<Card
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 10,
				width: '100%',
				height: TOPBAR_HEIGHT,
				boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.1)',
				py: 0,
				pl: SIDEBAR_WIDTH
			}}
			square
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					pl: '40px',
					pr: '20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'end'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
						mr: 'auto'
					}}
				>
					<Image
						src="/logo.webp"
						alt="Compound Logo"
						width={56}
						height={56}
					/>
					<Typography
						variant="body1"
						fontWeight="bold"
						sx={{ opacity: 0.6 }}
					>
						JDT Property Investment Limited
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
					<Button
						startIcon={
							<AddCircleIcon
								sx={{ width: '40px', height: '40px' }}
							/>
						}
						color="secondary"
						sx={{
							fontWeight: 'bold',
							fontSize: '16px'
						}}
					>
						Add a User
					</Button>
					<IconButton color="secondary">
						<Badge
							badgeContent={2}
							sx={{
								'& .MuiBadge-badge': {
									bgcolor: 'common.notificationBadge',
									color: 'white',
									top: 6
								}
							}}
						>
							<InboxRoundedIcon
								sx={{
									width: '40px',
									height: '40px'
								}}
							/>
						</Badge>
					</IconButton>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton color="secondary">
							<HelpOutlineRoundedIcon
								sx={{
									width: '20px',
									height: '20px'
								}}
							/>
						</IconButton>
						<IconButton color="secondary">
							<NotificationsOutlinedIcon
								sx={{
									width: '20px',
									height: '20px'
								}}
							/>
						</IconButton>
					</Box>
					<IconButton color="secondary">
						<Avatar
							sx={{
								width: '40px',
								height: '40px',
								bgcolor: 'secondary.main',
								fontSize: '16px'
							}}
						>
							E
						</Avatar>
					</IconButton>
				</Box>
			</Box>
		</Card>
	);
};

type ContentLayoutProps = {
	children: React.ReactNode;
} & BoxProps;

const ContentLayout = ({ children, ...props }: ContentLayoutProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '3rem',
				width: '100%',
				height: '100%',
				flexGrow: 1,
				pl: SIDEBAR_WIDTH
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					flexGrow: 1,
					p: '40px'
				}}
				{...props}
			>
				{children}
			</Box>
		</Box>
	);
};

const Dashboard = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
				gridTemplateRows: 'repeat(11, 1fr)',
				gap: '20px',
				width: '1543px',
				height: '979px',
				'& > div': {
					boxShadow: 'none'
				}
			}}
		>
			<Card
				sx={{
					gridColumn: 'span 10',
					gridRow: 'span 3',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px'
				}}
			>
				<Typography
					variant="body1"
					color="common.cardForeground"
					fontWeight="bold"
				>
					Analytics
				</Typography>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						gap: '20px'
					}}
				>
					<svg width={0} height={0} style={{ visibility: 'hidden' }}>
						<linearGradient
							id="linearColors"
							x1={1}
							y1={0}
							x2={1}
							y2={1}
						>
							<stop
								offset={0}
								stopColor={theme.palette.primary.main}
							/>
							<stop
								offset={1}
								stopColor={theme.palette.secondary.main}
							/>
						</linearGradient>
					</svg>
					{ANALYTICS_ITEMS.map(({ icon, text, value }, index) => (
						<Card
							key={index}
							sx={{
								width: '100%',
								height: '100%',
								borderRadius: '14px',
								boxShadow:
									'0px 2px 20px 2px rgba(0, 0, 0, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '40px',
								'&:first-of-type': {
									ml: '-20px'
								}
							}}
						>
							{icon}
							<Typography variant="body1" color="initial">
								{text}
							</Typography>
							<Typography
								variant="body1"
								color="accent"
								sx={{ fontWeight: 'bold', fontSize: '32px' }}
							>
								{value}
							</Typography>
						</Card>
					))}
				</Box>
			</Card>
			<Card
				sx={{
					gridColumn: 'span 2',
					gridRow: 'span 7',
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
					p: '20px'
				}}
			>
				<Typography
					variant="body1"
					color="common.cardForeground"
					fontWeight="bold"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '4px'
					}}
				>
					Recent Activity
					<HistoryToggleOffOutlinedIcon
						sx={{
							width: '20px',
							height: '20px'
						}}
					/>
				</Typography>
				{ACTIVITY_ITEMS.map((item, index) => (
					<RecentActivityItem key={index} {...item} />
				))}
				<Button
					sx={{
						wdidth: '100%',
						mt: 'auto',
						textDecoration: 'underline',
						color: 'common.black',
						fontWeight: 'thin'
					}}
				>
					see all
				</Button>
			</Card>
			<Card
				sx={{
					gridColumn: 'span 5',
					gridRow: 'span 9',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px'
				}}
			>
				<Typography
					variant="body1"
					color="common.cardForeground"
					fontWeight="bold"
				>
					Add Employees
				</Typography>
				<UploadFiles
					label="Employee Info"
					progress={50}
					maxProgress={100}
				/>
			</Card>
			<Card
				sx={{
					gridColumn: 'span 5',
					gridRow: 'span 9',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px'
				}}
			>
				<Typography
					variant="body1"
					color="common.cardForeground"
					fontWeight="bold"
				>
					Add Contributions
				</Typography>
				<UploadFiles
					label="Contributions"
					progress={100}
					maxProgress={100}
				/>
			</Card>
			<Card
				sx={{
					gridColumn: 'span 2',
					gridRow: 'span 5',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					p: '20px'
				}}
			>
				<Typography
					variant="body1"
					color="common.cardForeground"
					fontWeight="bold"
				>
					Users
				</Typography>
				{USER_ITEMS.map((item, index) => (
					<UserItem key={index} {...item} />
				))}
			</Card>
		</Box>
	);
};

type RecentActivityItemProps = {
	src: string;
	name: string;
	datetime: string;
};

const RecentActivityItem = ({
	src,
	name,
	datetime
}: RecentActivityItemProps) => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				gap: '16px'
			}}
		>
			<Avatar
				sx={{
					width: '32px',
					height: '32px',
					bgcolor: 'secondary.main',
					fontSize: '16px'
				}}
				src={src}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography
					color="common.black"
					sx={{
						fontSize: '16px'
					}}
				>
					{name}
				</Typography>
				<Typography
					color="common.muted"
					sx={{ fontSize: '12px', fontWeight: 'light' }}
				>
					{datetime}
				</Typography>
			</Box>
		</Box>
	);
};

type UploadFilesProps = {
	label: string;
	progress: number;
	maxProgress: number;
};

const UploadFiles = ({ label, progress, maxProgress }: UploadFilesProps) => {
	const theme = useTheme();
	const isComplete = progress === maxProgress;

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					gap: '20px',
					alignItems: 'center',
					pb: '10px',
					borderBottom: `3px solid ${theme.palette.common.muted}`
				}}
			>
				<Box
					sx={{
						width: '48px',
						height: '48px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '50%',
						flexShrink: 0,
						border: `3px solid ${theme.palette.common.muted}`
					}}
				>
					<CloudDoneOutlinedIcon />
				</Box>
				<Box>
					<Typography
						variant="body1"
						color="common.cardForeground"
						fontWeight="medium"
					>
						Upload Files
					</Typography>
					<Typography variant="body1" color="common.muted">
						Select and upload the files of your choice
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '28px',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '12px',
					backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23CBD0DC' stroke-width='5' stroke-dasharray='8%2c24' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
				}}
			>
				<CloudDoneOutlinedIcon sx={{ width: '48px', height: '48px' }} />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '8px'
					}}
				>
					<Typography
						variant="body1"
						color="common.cardForeground"
						fontWeight="medium"
					>
						Choose a file or drag & drop it here
					</Typography>
					<Typography variant="body1" color="common.muted">
						JPEG, PNG, PDF formats, up to 50MB
					</Typography>
				</Box>
				<Button
					variant="contained"
					sx={{
						backgroundImage: `linear-gradient(to bottom, ${theme.palette.accent.main}, ${theme.palette.secondary.main})`,
						width: '200px',
						height: '60px',
						borderRadius: '24px',
						fontSize: '16px',
						fontWeight: 'light'
					}}
				>
					Browse File
				</Button>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '110px',
					bgcolor: alpha(theme.palette.common.muted, 0.3),
					borderRadius: '16px',
					flexShrink: 0,
					display: 'flex',
					justifyContent: 'center',
					p: '16px',
					gap: '16px'
				}}
			>
				<Box
					sx={{
						position: 'relative'
					}}
				>
					<DescriptionOutlinedIcon
						sx={{
							color: 'common.muted',
							width: '56px',
							height: '56px'
						}}
					/>
					<Box
						sx={{
							position: 'absolute',
							top: '30%',
							left: -2,
							width: '34px',
							height: '20px',
							borderRadius: '20px',
							backgroundColor: '#D82042',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'white',
							fontSize: '12px'
						}}
					>
						PDF
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						gap: '8px'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							gap: '8px'
						}}
					>
						<Typography
							variant="body1"
							color="common.cardForeground"
							fontWeight="medium"
						>
							{label}
						</Typography>
						<IconButton
							sx={{
								color: 'common.black',
								width: '24px',
								height: '24px'
							}}
						>
							<HighlightOffOutlinedIcon />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px'
						}}
					>
						<Typography variant="body1" color="common.muted">
							60 KB of 120 KB •
						</Typography>
						{isComplete ? (
							<CheckCircleIcon
								sx={{
									color: 'success.main',
									width: '20px',
									height: '20px'
								}}
							/>
						) : (
							<DownloadingOutlinedIcon
								sx={{
									color: 'common.blue',
									width: '20px',
									height: '20px',
									transform: 'rotate(180deg)'
								}}
							/>
						)}
						<Typography
							variant="body1"
							color="common.cardForeground"
						>
							{isComplete ? 'Complete' : 'Uploading...'}
						</Typography>
					</Box>
					{!isComplete && (
						<BorderLinearProgress
							variant="determinate"
							value={60}
						/>
					)}
				</Box>
			</Box>
		</Box>
	);
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.common.muted,
		...theme.applyStyles('dark', {
			backgroundColor: theme.palette.common.muted
		})
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.secondary.main,
		...theme.applyStyles('dark', {
			backgroundColor: theme.palette.secondary.main
		})
	}
}));

type UserItemProps = {
	src: string;
	name: string;
	role: string;
	isOnline: boolean;
};

const UserItem = ({ name, src, role, isOnline }: UserItemProps) => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				gap: '16px'
			}}
		>
			<Badge
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				overlap="circular"
				variant="dot"
				sx={{
					'& .MuiBadge-badge': {
						bgcolor: isOnline ? 'success.main' : '#9F9F9F',
						color: 'white',
						bottom: 5,
						right: 5,
						height: '16px',
						width: '16px',
						borderRadius: '50%'
					}
				}}
			>
				<Avatar
					sx={{
						width: '48px',
						height: '48px',
						bgcolor: 'secondary.main',
						fontSize: '16px'
					}}
					src={src}
				/>
			</Badge>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography
					color="common.black"
					sx={{
						fontSize: '14px'
					}}
				>
					{name}
				</Typography>
				<Typography color="common.muted" sx={{ fontSize: '14px' }}>
					{role}
				</Typography>
			</Box>
		</Box>
	);
};

export default function Home() {
	return (
		<>
			<Head>
				<title>Compound</title>
				<meta name="description" content="Made by Kairos" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<link rel="icon" href="/logo.webp" />
			</Head>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100vh',
					bgcolor: 'background.default',
					position: 'relative'
				}}
			>
				<SideBar />
				<TopBar />
				<ContentLayout>
					<Dashboard />
				</ContentLayout>
			</Box>
		</>
	);
}
