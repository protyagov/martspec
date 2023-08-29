import * as React from "react";
import _ from "src/i18n/locale"

export default function ComingSoon() {
    return <div className="ms-base-page text-center pb-5 mt-5">
        <section>
            <img src="/img/coming-soon.png" className="mb-5" alt={_("COMING_SOON.HEAD")} height={300} width={328} />
            <h1 className="mb-4">{_("COMING_SOON.HEAD")}</h1>
            <p className="mb-0">{_("COMING_SOON.TEXT_1")}</p>
            <p className="mb-5">{_("COMING_SOON.TEXT_2")}</p>
            <a href="/" className="ms-btn-large">{_("COMING_SOON.BTN")}</a>
        </section>
        <section>
            <p>{_("COMING_SOON.CTA")}</p>
            <div className="d-flex justify-content-center flex-nowrap">
                <a className="social-icon" href="https://www.linkedin.com/company/martspec" target="_blank" rel="noopener" aria-label="">
                    <img src="/img/linkedin_icon.svg" alt="linkedin" width={40} height={40} />
                </a>

                <a className="social-icon social-icon-dark" href={`mailto:support@martspec.com?subject=Martspec Question&body=I have a question about your products. `} target="_self" rel="noopener" aria-label="">
                    <img src="/img/email_icon.svg" alt="email" width={40} height={40} />
                </a>

                <a className="social-icon social-icon-dark" href="https://twitter.com/MartspecCom" target="_blank" rel="noopener" aria-label="">
                    <img src="/img/twitter_icon.svg" alt="twitter" width={40} height={40} />
                </a>

                <a className="social-icon social-icon-dark" href="https://www.facebook.com/martspec" target="_blank" rel="noopener" aria-label="">
                    <img src="/img/facebook_icon.svg" alt="facebook" width={40} height={40} />
                </a>
            </div>
        </section>
    </div>
}