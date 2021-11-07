import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant, icon, onClick, badge, ...props }) => {

	const bg = variant ? 'btn__' + variant : '';
	const size = props.size ? 'btn-' + props.size : '';
	const animate = props.animate ? 'btn-animate' : '';

	return (
		<button className={`btn ${bg} ${size} ${animate}`} onClick={onClick}>
			<span className="btn__txt">{children}</span>
			{
				icon ? <span className="btn__icon"> <i className={`${icon}`}></i> </span> : null
			}

			{
				badge > 0 ? <span className="btn__badge">{badge}</span> : null
			}
		</button>
	);
};

Button.propTypes = {
	backgroundColor: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	animate: PropTypes.bool,
	onClick: PropTypes.func

};

export default Button;
