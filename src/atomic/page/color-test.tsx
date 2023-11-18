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

type useSelectedArgs = {
	userColorSelectionIds: number[],
	setTestResult: React.Dispatch<React.SetStateAction<TestResult>>
}

type TestResult = [string, Icon[], IconColor];

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

const useSelected = ({userColorSelectionIds, setTestResult}: useSelectedArgs) => {

	const monEnergy = (): number => {
		let iRed = 0, iYel = 0, iBlu = 0, iGrn = 0;
		const uc = userColorSelectionIds;

		for (let i = 0; i <= 7; i++) {
			switch (uc[i]) {
				case 3:
					iRed = i + 1;
					break;
				case 4:
					iYel = i + 1;
					break;
				case 2:
					iGrn = i + 1;
					break;
				case 1:
					iBlu = i + 1;
					break;
				default:
					continue;
			}
		}

		return (18 - iRed - iYel) / (18 - iBlu - iGrn);
	};

	const energyForValue = (v: number): TestResult => {
		switch (true) {
			case v >= -1 && v < 0.5:
				return ["E1", [v >= 0.2 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL], IconColor.RED];
			case v >= 0.5 && v < 0.9:
				return ["E2", [Icon.FULL, v >= 0.7 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL], IconColor.YELLOW];
			case v >= 0.9 && v < 1.3:
				return ["E3", [Icon.FULL, Icon.FULL, v >= 1.1 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL], IconColor.GREEN];
			case v >= 1.3 && v < 1.9:
				return ["E3", [Icon.FULL, Icon.FULL, Icon.FULL, v >= 1.6 ? Icon.HALF : Icon.NULL, Icon.NULL], IconColor.ORANGE];
			default:
				return ["E4", [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, v <= 2.6 ? Icon.HALF : Icon.FULL], IconColor.RED];
		}
	};

	React.useLayoutEffect(() => {
		if (userColorSelectionIds.length !== COLORS.length) return;
		setTestResult(energyForValue(monEnergy()));
	}, [userColorSelectionIds]);
};

const enum Icon {
	NULL,
	HALF,
	FULL
};

const enum IconColor {
	RED = "FF392E",
	ORANGE = "FE8429",
	YELLOW = "E0BD64",
	GREEN = "A8E03B",
}

export default function ColorTest() {
	const sectorModelCollection = React.useState(
		COLORS.map((color, id) => ({ color, id }))
	);

	const [userColorSelectionIds, setUserColorSelectionIds] = React.useState([]);
	const [testResult, setTestResult] = React.useState<TestResult>(null);

	useShuffled(sectorModelCollection);

	useSelected({userColorSelectionIds, setTestResult});

	const sectorClickHandler = (id: number) => setUserColorSelectionIds(current => [...current, id]);

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
					<div className="row mb-0">
						<div className="col-10 mx-auto">
							<h1>{_("COLOR_TEST.TEST_HEAD")}</h1>
							<p className="mb-6">{_("COLOR_TEST.TEST_DESC")}</p>
						</div>
					</div>

					<div className="row flex-wrap justify-content-center g-4 text-start color-sectors">
						{testResult ?
							<div className="col-12 d-flex flex-column">
								<h2>{_("COLOR_TEST.RES")}</h2>
								<p>{_("COLOR_TEST." + testResult[0])}</p>
							</div>
							:
							sectorModelCollection[0].map((sector) => (
							<div key={sector.color} className="col-lg-3 col-6">
								<button
									onClick={() => sectorClickHandler(sector.id)}
									className="sector"
									style={
										{
											background: '#' + sector.color,
											visibility: userColorSelectionIds.includes(sector.id) ? "hidden" : "visible"
										}
									}
								></button>
							</div>
						))}
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
