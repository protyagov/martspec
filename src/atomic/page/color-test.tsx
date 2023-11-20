import * as React from 'react';
import _, { Locale } from 'src/i18n/locale';
import NavigationBar from 'src/atomic/organism/navbar';
import { Footer } from '../organism/footer';

const useShuffled = ([modelCollection, setCollection]: useShuffleArgs) => {

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
			modelCollection[id].id === 7 ||
			modelCollection[id].id < 2
		);
	};

	React.useLayoutEffect(() => {
		if (hasWrongOrder()) {
			shuffle();
		}
	}, [modelCollection]);
};

type useShuffleArgs = [
	SectorModel[],
	React.Dispatch<React.SetStateAction<SectorModel[]>>
];

type SectorModel = {
	id: SectorModelId;
	color: typeof COLORS[number];
};

type SectorModelId = number;

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

const useSelected = ([selectedCollection, setResult]: useSelectedArgs) => {

	const monEnergy = (): number => {
		let iRed = 0, iYel = 0, iBlu = 0, iGrn = 0;
		const sc = selectedCollection;

		for (let i = 0; i <= 7; i++) {
			switch (sc[i]) {
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
				return {
					lvl: "E1",
					icons: [v >= 0.2 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
					color: IconColor.RED
				};
			case v >= 0.5 && v < 0.9:
				return {
					lvl: "E2",
					icons: [Icon.FULL, v >= 0.7 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL, Icon.NULL],
					color: IconColor.YELLOW
				};
			case v >= 0.9 && v < 1.3:
				return {
					lvl: "E3",
					icons: [Icon.FULL, Icon.FULL, v >= 1.1 ? Icon.HALF : Icon.NULL, Icon.NULL, Icon.NULL],
					color: IconColor.GREEN
				};
			case v >= 1.3 && v < 1.9:
				return {
					lvl: "E3",
					icons: [Icon.FULL, Icon.FULL, Icon.FULL, v >= 1.6 ? Icon.HALF : Icon.NULL, Icon.NULL],
					color: IconColor.ORANGE
				};
			default:
				return {
					lvl: "E4",
					icons: [Icon.FULL, Icon.FULL, Icon.FULL, Icon.FULL, v <= 2.6 ? Icon.HALF : Icon.FULL],
					color: IconColor.RED
				};
		}
	};

	React.useLayoutEffect(() => {
		if (selectedCollection.length !== COLORS.length) return;
		setResult(energyForValue(monEnergy()));
	}, [selectedCollection]);
};

type useSelectedArgs = [
	SectorModel["id"][],
	React.Dispatch<React.SetStateAction<TestResult>>
]

type TestResult = {
	lvl: string,
	icons: Icon[],
	color: IconColor
};

const enum Icon {
	NULL = "NULL",
	HALF = "HALF",
	FULL = "FULL"
};

const enum IconColor {
	RED = "FF392E",
	ORANGE = "FE8429",
	YELLOW = "E0BD64",
	GREEN = "A8E03B",
}

export default function ColorTest() {
	const initSectors = COLORS.map((color, id) => ({ color, id }));
	
	const [sectorModelCollection, setSectorModelCollection] = React.useState<SectorModel[]>(initSectors);

	const [userSelectionCollection, setUserSelectionCollection] = React.useState<SectorModelId[]>([]);

	const [testResult, setTestResult] = React.useState<TestResult>(null);

	useShuffled([sectorModelCollection, setSectorModelCollection]);

	useSelected([userSelectionCollection, setTestResult]);

	return (
		<>
			<NavigationBar />

			<div className="ms-base-page ms-base-new emotion color-test">
				<section className="text-center my-0">
					<div className="row">
						<div className="col-9 mx-auto">
							<h2>{_("COLOR_TEST.HEAD1")}</h2>
							<p className="mb-0">{_("COLOR_TEST.DESC1")}</p>
							{testResult && <a
								href={Locale.i18nLink("emotion/color-test")}
								className="ms-btn-large"
							>
								{_("COLOR_TEST.BTN_AGAIN")}
							</a>}
						</div>
					</div>
				</section>

				{
					!testResult ?
						<section>
							<div className="row text-center mb-0">
								<div className="col-10 mx-auto">
									<h1>{_("COLOR_TEST.TEST_HEAD")}</h1>
									<p className="mb-6">{_("COLOR_TEST.TEST_DESC")}</p>
								</div>
							</div>
							<div className="row flex-wrap justify-content-center g-4 color-sectors">
								{sectorModelCollection.map((sector) => (
									<div key={sector.color} className="col-lg-3 col-6">
										<button
											onClick={() => setUserSelectionCollection(current => [...current, sector.id])}
											className="sector"
											style={
												{
													background: '#' + sector.color,
													visibility: userSelectionCollection.includes(sector.id) ? "hidden" : "visible"
												}
											}
										></button>
									</div>
								))}
							</div>
						</section>
						:
						<>
						<section className="test-result">
							<div className="row mb-0">
								<div className="col-12">
									<h2 className="mb-7">{_("COLOR_TEST.RES")}</h2>
								</div>
							</div>
							<div className="row g-4">
								{
									["E", "A", "P", "O", "I", "G"].map((groupTitle) => (
										<div className="col-lg-4 col-sm-6 col-12">
											<div className="block bg-gray">
												<h3>{_("COLOR_TEST.GROUP_TITLE_" + groupTitle)}</h3>
												{
													groupTitle === "E" ?
														<>
															<div
																className="d-flex"
																style={{ "--color": "#" + testResult.color } as React.CSSProperties}
															>
																{
																	testResult.icons.map(icon => (
																		<div className={"me-2 test-result-icon " + icon}></div>
																	))
																}
															</div>
															<p className="mt-2">{_("COLOR_TEST._" + testResult.lvl)}</p>
														</>
														:
														<img
															src="/img/page/emotion/emotion-color-test-result-blur.png"
															className="test-result-blur"
															alt=""
														/>
												}
											</div>
										</div>
									))
								}
							</div>

							<div className="row mb-0">
								<div className="col-12">
									<p className="mb-7">{_("COLOR_TEST." + testResult.lvl)}</p>
								</div>
							</div>
							<div className="row g-4">
								<div className="col-md-6 col-12 text-center">
									<div className="block bg-violet">
										<p>{_("COLOR_TEST.LEV")}</p>
										<h2 className="mb-0">{_("COLOR_TEST._" + testResult.lvl)}</h2>
									</div>
								</div>
								<div className="col-md-6 col-12 text-center">
									<div className="block bg-yellow">
										<p>{_("COLOR_TEST.PERC")}</p>
										<h2 className="mb-0">Percent</h2>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12">
									<h3 className="mb-3">{_("COLOR_TEST.GROUP_DESC")}</h3>
									<p className="mb-4">{_("COLOR_TEST.GROUP_DESC1_E")}</p>
									<p className="mb-4">{_("COLOR_TEST.GROUP_DESC2_E")}</p>
									<p className="mb-0">{_("COLOR_TEST.GROUP_DESC3_E")}</p>
								</div>
							</div>
						</section>

						<section>
							<div className="row text-center">
								<div className="col-8 mx-auto">
									<h2>{_("COLOR_TEST.CTA_HEAD")}</h2>
									<p>{_("COLOR_TEST.CTA_DESC")}</p>
									<a
										href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
										target="_blank"
										title={_("EMOTION.HEAD")}
										className="ms-btn-apple"
										style={{
											backgroundImage:
												"url(/img/apple_btn/" +
												Locale.language +
												".svg)",
										}}
								></a>
								</div>
							</div>
						</section>
						</>
				}

				<section>
					<div className="row">
						<div className="block bg-gray test-principles">
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
