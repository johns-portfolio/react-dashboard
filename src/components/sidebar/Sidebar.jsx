import React from "react"
import "./sidebar.scss"

import DashboardIcon from "@mui/icons-material/Dashboard"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">My Admin</span>
			</div>
			<hr />
			<div className="center">
				<ul>
                    <p className="title">Main</p>
					<li>
						<GridViewOutlinedIcon className="icon" />
						<span>Dashboard</span>
					</li>
                    <p className="title">List</p>
					<li>
						<PersonOutlineOutlinedIcon className="icon" />
						<span>Users</span>
					</li>
					<li>
						<StoreOutlinedIcon className="icon" />
						<span>Products</span>
					</li>
					<li>
						<ViewListOutlinedIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className="icon" />
						<span>Delivery</span>
					</li>
                    <p className="title">Useful</p>
					<li>
						<SignalCellularAltOutlinedIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneOutlinedIcon className="icon" />
						<span>Notifications</span>
					</li>
                    <p className="title">Service</p>
					<li>
						<FavoriteBorderOutlinedIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className="icon" />
						<span>Settings</span>
					</li>
                    <p className="title">User</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LockOutlinedIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">Color Options</div>
		</div>
	)
}

export default Sidebar
