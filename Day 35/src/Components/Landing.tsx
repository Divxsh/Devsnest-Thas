import { useSelector } from "react-redux";
import "../Styles/Landing.css";
import { GrFormNext } from "react-icons/gr";
import { useRef, useState } from "react";

const Landing = () => {
	const users = useSelector((state: any) => state.data.hits);
	const [Isliked, setIsliked] = useState<boolean>(false);
	const nextref = useRef<any>(null);
	const scrollhandler = () => {
		console.log(nextref);
		nextref.current.scrollBy({
			top: 0,
			left: 70,
			behavior: "smooth",
		});
	};
	return (
		<div className='posts-container'>
			<div>
				<div className='story-container' ref={nextref}>
					{users
						? users.map((item: any, index: any) => (
								<div className='story' key={index}>
									<img src={item.userImageURL} alt='' />
								</div>
						  ))
						: null}
				</div>
				<button onClick={scrollhandler}>
					<GrFormNext />
				</button>
			</div>

			{users
				? users.map((person: any, index: number) => (
						<div key={index} className='post'>
							<div className='Card'>
								<div className='title'>
									<h4>{person.user}</h4>
									<i className='fas fa-ellipsis-v'></i>
								</div>
								<img src={person.userImageURL} alt='' />

								<div className='buttons'>
									<i
										className='liked'
										onClick={() => {
											setIsliked(!Isliked);
										}}
									>
										{Isliked ? (
											<img src='./icons/fillheart.svg' alt='' />
										) : (
											<img src='./icons/heart.svg' />
										)}
									</i>
									<i>
										<img src='./icons/comment.svg' alt='' />
									</i>
									<i>
										<img src='./icons/share.svg' alt='' />
									</i>
									<i style={{ marginLeft: "auto" }}>
										<img src='./icons/save.svg' alt='' />
									</i>
								</div>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export default Landing;
