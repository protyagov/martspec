import React from "react"

export interface IconTitleText {
	icon: string
	title: string
	subtitle: string
}

interface IconTitleTextElemProps extends IconTitleText {}

const IconTitleTextElem = ({
	icon,
	title,
	subtitle,
}: IconTitleTextElemProps): JSX.Element => {
	return (
		<li>
			<div className="icon">
				<img
					src={icon}
					alt={title}
				/>
			</div>
			<div>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
		</li>
	)
}

export default IconTitleTextElem
