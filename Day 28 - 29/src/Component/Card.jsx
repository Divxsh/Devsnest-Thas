import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Card = () => {
	const data = useSelector((state) => state.data);
	const loading = useSelector((state) => state.loading);

	return (
		<>
			{loading ? (
				<Loader
					type='MutatingDots'
					color='#000'
					height={100}
					width={100}
					timeout={2000}
				/>
			) : data.location ? (
				<div className=' card w-3/12 border-2 border-gray-300 flex flex-col justify-center items-center bg-white px-2'>
					<div className='row w-32 mt-3'>
						<img src={data.current.condition.icon} alt='' />
					</div>
					<div className='w-full w-full text-6xl font-medium my-3 text-center'>
						{data.current.temp_c}°
					</div>
					<div className='w-full text-center'>
						{data.current.condition.text}
					</div>
					<div className='w-full text-center my-2 mt-1'>
						{data.location.name}
					</div>

					<div className=' w-full row flex flex-row justify-around border-t-2 border-gray-300 py-2'>
						<div className='col w-min text-center text-gray-400 p-0'>
							Wind
							<div className='font-bold text-black text-xl'>
								{data.current.wind_kph}
								<small className='font-normal text-gray-500 text-sm'>
									km/h
								</small>
							</div>
						</div>

						<div className='col w-min text-center text-gray-400 p-0'>
							Humidity
							<div className='font-bold text-black text-xl'>
								{data.current.humidity}
								<small className='font-normal text-gray-500 text-sm'>
									%
								</small>
							</div>
						</div>
						<div className='col w-min text-center text-gray-400 p-0'>
							Temperature
							<div className='font-bold text-black text-xl '>
								{data.current.pressure_mb}
								<small className='font-normal text-gray-500 text-sm'>
									hPa
								</small>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='card w-3/12 bg-white p-2 text-2xl italic font-semibold text-center '>
					Place not Found
				</div>
			)}
		</>
	);
};

export default Card;
