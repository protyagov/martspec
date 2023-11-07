import * as React from 'react';
import _, { Locale } from 'src/i18n/locale';
import NavigationBar from 'src/atomic/organism/navbar';
import ImageI18N from 'src/atomic/atom/img-i18n';

export default function EmotionSampleTest() {
	return (
		<>
			<NavigationBar />

			<div className="ms-base-page ms-base-new emotion">
				<section className="sample-test-header text-center my-0">
					<h2>{_('EMOTION.LIST1.LI1_HEAD')}</h2>
					<p>{_('EMOTION.LIST1.LI1_TEXT')}</p>
				</section>
			</div>
		</>
	);
}
