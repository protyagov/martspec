import * as React from 'react';
import _, { Locale } from 'src/i18n/locale';
import NavigationBar from 'src/atomic/organism/navbar';
import ImageI18N from 'src/atomic/atom/img-i18n';

export default function ColorQuiz() {
	return (
		<>
			<NavigationBar />

			<div className="ms-base-page ms-base-new emotion color-quiz">
				<section className="text-center my-0">
					<div className="row">
						<div className="col">
							<h2>{_("COLOR_QUIZ.HEAD1")}</h2>
							<p className="mb-0">{_("COLOR_QUIZ.DESC1")}</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
