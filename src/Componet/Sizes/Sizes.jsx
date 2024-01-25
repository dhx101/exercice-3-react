import React from "react";

const Sizes = ({ sizes }) => {
	return (
		<div>
			{sizes.map((item, index) => (
				<div key={index}>
					{item.qty <= 3 && item.qty !== 0 && (<p>Pocas {item.name}</p> )}
					{item.qty === 0 && <p className="agotado">{item.name}</p>}
                    {item.qty > 3 && <p>{item.name}</p>}
				</div>
			))}
		</div>
	);
};

export default Sizes;
