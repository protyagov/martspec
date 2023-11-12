import * as React from 'react';
import _, { Locale } from 'src/i18n/locale';
import NavigationBar from 'src/atomic/organism/navbar';
import ImageI18N from 'src/atomic/atom/img-i18n';

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

export default function ColorTest() {	
	const [sectorModelCollection, setSectorModelCollection] = React.useState(
		COLORS.map((color, id) => ({ color, id }))
	);

	const shuffle = () => {
		setSectorModelCollection(current => [...current].sort(() => Math.random() - 0.5));
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
		return sectorModelCollection[id].id === 7 || sectorModelCollection[id].id < 2;
	};

	React.useLayoutEffect(() => {
		if (hasWrongOrder()) {
			shuffle();
		}
	}, [sectorModelCollection]);

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

					<div className="row">
						{
							sectorModelCollection.map((sector) => (
								<div
									key={sector.color}
									className="col-3"
									style={{ background: "#" + sector.color, height: "250px" }}
								></div>
							))
						}
					</div>
				</section>

				<section>
					<div className="row">
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
				</section>
			</div>
		</>
	);
}
