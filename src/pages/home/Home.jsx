import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home-container">container</div>
		</div>
	)
}

export default Home
