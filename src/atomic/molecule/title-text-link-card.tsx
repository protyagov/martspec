import React from "react"

interface Props {
	title: string
	text: string
	link: Link
	image?: string
	bgColor?: string
	className?: string
}

interface Link {
	text: string
	href: string
}

const TitleTextLinkCard = ({
	title,
	text,
	link,
	image,
	bgColor = "#FFFFFF",
	className = "col-lg-4",
}: Props): JSX.Element => {
	return (
		<div className={className}>
			<div
				className="title-text-link-card"
				style={{ backgroundColor: bgColor }}
			>
        <img src={image} />
				<div>
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link.href}>
            {link.text}
						<i className="icon-angle-right" />
          </a>
        </div>
			</div>
		</div>
	)
}

export default TitleTextLinkCard
