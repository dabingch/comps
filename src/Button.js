import PropTypes from 'prop-types'

function Button({
	children,
	primary,
	secondary,
	success,
	danger,
	warning,
	outline,
	rounded,
}) {
	return <button>{children}</button>
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!danger) +
			Number(!!warning)

		if (count > 1) {
			throw new Error(
				'Only one of primary, secondary, success, danger, or warning can be true'
			)
		}
	},
}

export default Button
