import Box from "./Box";

export default function List({ input, setInput }) {
	return (
		<div className='list'>
			{input.length ? (
				input.map((item, i) => (
					<Box
						key={i}
						item={item}
						setInput={setInput}
						input={input}
						index={i}
					/>
				))
			) : (
				<div className='no-item'>Start Adding Items </div>
			)}
		</div>
	);
}
