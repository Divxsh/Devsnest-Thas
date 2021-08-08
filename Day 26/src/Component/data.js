import { useSelector } from "react-redux";
import "../Style/data.css";

const Data = () => {
	const count = useSelector((state) => state.value);
	console.log(count);
	return (
		<div className='data'>
			<h1>Data</h1>
			<p>Username : {count.name}</p>
			<p>Email : {count.email}</p>
		</div>
	);
};

export default Data;
