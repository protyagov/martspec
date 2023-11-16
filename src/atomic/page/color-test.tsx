import * as React from 'react';
import _ from 'src/i18n/locale';
import NavigationBar from 'src/atomic/organism/navbar';
import { Footer } from '../organism/footer';

const COLORS = [
	"98938D",
	"004983",
	"1D9772",
	"F12F23",
	"F2DD00",
	"D42481",
	"C55223",
	"000000"
] as const;

type SectorModel = {
	id: number;
	color: typeof COLORS[number];
};

type useShuffleArgs = [
	SectorModel[],
	React.Dispatch<React.SetStateAction<SectorModel[]>>
];

const useShuffled = ([collection, setCollection]: useShuffleArgs) => {

	const shuffle = () => {
		setCollection((current) =>
			[...current].sort(() => Math.random() - 0.5)
		);
	};

	const hasWrongOrder = () => {
		for (let i = 0; i <= 7; i++) {
			if (isNextTo(i)) {
				return true;
			}
		}
		return false;
	};

	const isNextTo = (id: number) => {
		if (!isGBB(id)) {
			return false;
		}

		const idxBefore = id === 0 ? 7 : id - 1;
		const idxAfter = id === 7 ? 0 : id + 1;

		return isGBB(idxBefore) || isGBB(idxAfter);
	};

	const isGBB = (id: number) => {
		return (
			collection[id].id === 7 ||
			collection[id].id < 2
		);
	};

	React.useLayoutEffect(() => {
		if (hasWrongOrder()) {
			shuffle();
		}
	}, [collection]);
};

export default function ColorTest() {
	const sectorModelCollection = React.useState(
		COLORS.map((color, id) => ({ color, id }))
	);

	useShuffled(sectorModelCollection);

	return (
		<>
			<NavigationBar />

			<div className="ms-base-page ms-base-new emotion color-test">
				<section className="text-center my-0">
					<div className="row">
						<div className="col-10 mx-auto">
							<h2>{_("COLOR_TEST.HEAD1")}</h2>
							<p className="mb-0">{_("COLOR_TEST.DESC1")}</p>
						</div>
					</div>
				</section>

				<section className="text-center">
					<div className="row">
						<div className="col-10 mx-auto">
							<h1>{_("COLOR_TEST.TEST_HEAD")}</h1>
							<p>{_("COLOR_TEST.TEST_DESC")}</p>
						</div>
					</div>

					<div className="row flex-wrap justify-content-center g-4 color-sectors">
						{
							sectorModelCollection[0].map((sector) => (
								<div key={sector.color} className="col-lg-3 col-6">
									<div
										className="sector"
										style={{ background: "#" + sector.color }}
									></div>
								</div>
							))
						}
					</div>
				</section>

				<section>
					<div className="row">
						<div className="block bg-gray">
							<div className="col-12">
								<h2>{_("COLOR_TEST.HEAD2")}</h2>
								<p>{_("COLOR_TEST.DESC2")}</p>
							</div>
							<div className="col-12">
								<h2>{_("COLOR_TEST.HEAD3")}</h2>
								<p>{_("COLOR_TEST.DESC3")}</p>
							</div>
							<div className="col-12">
								<h2>{_("COLOR_TEST.HEAD4")}</h2>
								<p>{_("COLOR_TEST.DESC4")}</p>
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />
		</>
	);
}
