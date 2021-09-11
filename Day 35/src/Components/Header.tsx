import "../Styles/Header.css";
import { AiFillHome } from "react-icons/ai";
import {
	IoCompassOutline,
	IoChatbubbleOutline,
	IoPersonCircleOutline,
} from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const Header = () => {
	return (
		<>
			<div className='navbar'>
				<div className='navbar-items'>
					<div className='logo'>
						<img src='logo.png' alt='' height='100%' />
					</div>
					<div className='searchbox'>
						<i>
							<BiSearch />
						</i>
						<input
							type='text'
							className='searchbar'
							placeholder='Search'
						/>
					</div>

					<div className='items'>
						<i className='home'>
							<AiFillHome />
						</i>
						<i className='chat'>
							<IoChatbubbleOutline />
						</i>
						<i className='compass'>
							<IoCompassOutline />
						</i>
						<i className='like'>
							<IoMdHeartEmpty />
						</i>
						<i
							className='profile'
							style={{ color: "#8e8e8e", fontWeight: "normal" }}
						>
							<IoPersonCircleOutline />
						</i>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
