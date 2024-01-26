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
  const appleIconName = "icon-apple-health.svg"
  const appleIconClass = "no-filter"

	return (
		<li>
			<div className={`icon${icon.includes(appleIconName) ? ` ${appleIconClass}` : ""}`}>
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
