import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import _ from "src/i18n/locale"

export default function PrivacyPolicy() {
    return (<>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <h3 className="text-center">{_("PP.HEAD")}</h3>
            <img src="/img/privacy.svg" alt="Privacy Policy" />

            <section>
                <h6>{_("PP.DATE")}</h6>
                <p>{_("PP.P1")}</p>
                <p>{_("PP.P2")}</p>
                <p>{_("PP.P3")}</p>
            </section>


            <section>
                <hr />
                <h4>{_("PP.DEFINITION.HEAD")}</h4>
                <p>{_("PP.DEFINITION.P1")}</p>
                <p>{_("PP.DEFINITION.P2")}</p>
                <ul>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.ACCOUNT.STRONG")}</strong>{_("PP.DEFINITION.UL.ACCOUNT.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.APP.STRONG")}</strong>{_("PP.DEFINITION.UL.APP.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.BUSINESS.STRONG")}</strong>{_("PP.DEFINITION.UL.BUSINESS.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.COMPANY.STRONG")}</strong>{_("PP.DEFINITION.UL.COMPANY.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.CONSUMER.STRONG")}</strong>{_("PP.DEFINITION.UL.CONSUMER.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.COOKIES.STRONG")}</strong>{_("PP.DEFINITION.UL.COOKIES.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.COUNTRY.STRONG")}</strong>{_("PP.DEFINITION.UL.COUNTRY.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.DEVICE.STRONG")}</strong>{_("PP.DEFINITION.UL.DEVICE.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.PERSONAL_DATA.STRONG")}</strong>{_("PP.DEFINITION.UL.PERSONAL_DATA.P1")}</p>
                        <p>{_("PP.DEFINITION.UL.PERSONAL_DATA.P2")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.SALE.STRONG")}</strong>{_("PP.DEFINITION.UL.SALE.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.SERVICE.STRONG")}</strong>{_("PP.DEFINITION.UL.SERVICE.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.SERVICE_PROVIDER.STRONG")}</strong>{_("PP.DEFINITION.UL.SERVICE_PROVIDER.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.THIRD_PARTY_MEDIA.STRONG")}</strong>{_("PP.DEFINITION.UL.THIRD_PARTY_MEDIA.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.USAGE_DATA.STRONG")}</strong>{_("PP.DEFINITION.UL.USAGE_DATA.P1")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.WEBSITE.STRONG")}</strong>{_("PP.DEFINITION.UL.WEBSITE.P1")}<a href="https://martspec.com/" rel="external nofollow noopener" target="_blank">{_("PP.DEFINITION.UL.WEBSITE.A")}</a></p>
                    </li>
                    <li>
                        <p><strong>{_("PP.DEFINITION.UL.YOU.STRONG")}</strong>{_("PP.DEFINITION.UL.YOU.P1")}</p>
                    </li>
                </ul>
            </section>


            <section>
                <hr />
                <h4>{_("PP.TYPES_OF_DATA.HEAD4")}</h4>
                <h5>{_("PP.TYPES_OF_DATA.HEAD5.PERSONAL_DATA")}</h5>
                <p>{_("PP.TYPES_OF_DATA.P1")}</p>
                <ul>
                    <li>
                        <p>{_("PP.TYPES_OF_DATA.UL1.EMAIL")}</p>
                    </li>
                    <li>
                        <p>{_("PP.TYPES_OF_DATA.UL1.FIRST_LAST_NAMES")}</p>
                    </li>
                    <li>
                        <p>{_("PP.TYPES_OF_DATA.UL1.USAGE_DATA")}</p>
                    </li>
                </ul>
                <h5>{_("PP.TYPES_OF_DATA.HEAD5.USAGE_DATA")}</h5>
                <p>{_("PP.TYPES_OF_DATA.P2")}</p>
                <p>{_("PP.TYPES_OF_DATA.P3")}</p>
                <p>{_("PP.TYPES_OF_DATA.P4")}</p>
                <p>{_("PP.TYPES_OF_DATA.P5")}</p>

                <h5>{_("PP.TYPES_OF_DATA.HEAD5.INFORMATION_COLLECTED")}</h5>
                <p>
                    {_("PP.TYPES_OF_DATA.P6")}
                    <ul>
                        <li>
                            <strong>{_("PP.TYPES_OF_DATA.UL2.MOBILE_ACCESS.STRONG")}</strong>{_("PP.TYPES_OF_DATA.UL2.MOBILE_ACCESS.TEXT")}
                        </li>
                        <li>
                            <strong>{_("PP.TYPES_OF_DATA.UL2.MOBILE_DATA.STRONG")}</strong>{_("PP.TYPES_OF_DATA.UL2.MOBILE_DATA.TEXT")}
                        </li>
                        <li>
                            <strong>{_("PP.TYPES_OF_DATA.UL2.PUSH_NOTIFICATIONS.STRONG")}</strong>{_("PP.TYPES_OF_DATA.UL2.PUSH_NOTIFICATIONS.TEXT")}
                        </li>
                    </ul>
                </p>
            </section>

            <section>
                <hr />
                <h4>{_("PP.TRACKING.HEAD4")}</h4>
                <p>{_("PP.TRACKING.P1.TEXT")}<a href="https://termsfeed.com/blog/cookies/" target="_blank">{_("PP.TRACKING.P1.A")}</a></p>
                <p>{_("PP.TRACKING.P2")}</p>
                <ul>
                    <li>
                        <p><strong>{_("PP.TRACKING.UL.NECESSARY.P1")}</strong></p>
                        <p>{_("PP.TRACKING.UL.NECESSARY.P2")}</p>
                        <p>{_("PP.TRACKING.UL.NECESSARY.P3")}</p>
                        <p>{_("PP.TRACKING.UL.NECESSARY.P4")}</p>
                    </li>
                    <li>
                        <p><strong>{_("PP.TRACKING.UL.FUNCTIONALITY.P1")}</strong></p>
                        <p>{_("PP.TRACKING.UL.FUNCTIONALITY.P2")}</p>
                        <p>{_("PP.TRACKING.UL.FUNCTIONALITY.P3")}</p>
                        <p>{_("PP.TRACKING.UL.FUNCTIONALITY.P4")}</p>
                    </li>
                </ul>
                <h5>{_("PP.TRACKING.HEAD5")}</h5>
                <p>{_("PP.TRACKING.P3")}</p>
            </section>

            <section>
                <hr />
                <h4>{_("PP.PERSONAL_DATA.USE.HEAD4")}</h4>
                <h5>{_("PP.PERSONAL_DATA.USE.HEAD5.DISCLOSE")}</h5>
                <ul>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL1.LAW_ENFORCEMENT.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL1.LAW_ENFORCEMENT.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL1.BUSINESS_TRANSFER.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL1.BUSINESS_TRANSFER.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.TEXT")}
                        <ul>
                            <li>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.UL.L1")}</li>
                            <li>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.UL.L2")}</li>
                            <li>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.UL.L3")}</li>
                            <li>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.UL.L4")}</li>
                            <li>{_("PP.PERSONAL_DATA.USE.UL1.OTHER.UL.L5")}</li>
                        </ul>
                    </li>
                </ul>
                <h5>{_("PP.PERSONAL_DATA.USE.HEAD5.USE")}</h5>
                <ul>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L1.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L1.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L2.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L2.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L3.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L3.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L4.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L4.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L5.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L5.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L6.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L6.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L7.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L7.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL2.L8.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL2.L8.TEXT")}</li>
                </ul>
                <h5>{_("PP.PERSONAL_DATA.USE.HEAD5.SHARING")}</h5>
                <ul>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL3.L1.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL3.L1.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL3.L2.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL3.L2.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL3.L3.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL3.L3.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL3.L4.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL3.L4.TEXT")}</li>
                    <li><strong>{_("PP.PERSONAL_DATA.USE.UL3.L5.STRONG")}</strong>{_("PP.PERSONAL_DATA.USE.UL3.L5.TEXT")}</li>
                </ul>

                <h4>{_("PP.PERSONAL_DATA.RETENTION.HEAD4")}</h4>
                <p>{_("PP.PERSONAL_DATA.RETENTION.P1")}</p>
                <p>{_("PP.PERSONAL_DATA.RETENTION.P2")}</p>
                <p>{_("PP.PERSONAL_DATA.RETENTION.P3")}</p>

                <h4>{_("PP.PERSONAL_DATA.TRANSFER.HEAD4")}</h4>
                <p>{_("PP.PERSONAL_DATA.TRANSFER.P1")}</p>
                <p>{_("PP.PERSONAL_DATA.TRANSFER.P2")}</p>
                <p>{_("PP.PERSONAL_DATA.TRANSFER.P3")}</p>

                <h4>{_("PP.PERSONAL_DATA.SECURITY.HEAD4")}</h4>
                <p>{_("PP.PERSONAL_DATA.SECURITY.P")}</p>
            </section>

            <section>
                <hr />
                <h4>{_("PP.CHILD.HEAD4")}</h4>
                <p>{_("PP.CHILD.P")}</p>
            </section>

            <section>
                <hr />
                <h4>{_("PP.RIGHTS.HEAD4")}</h4>
                <p>{_("PP.RIGHTS.P1")}</p>
                <p>{_("PP.RIGHTS.P2")}</p>
                <p>
                    {_("PP.RIGHTS.P3.TEXT")}<a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">{_("PP.RIGHTS.P3.A")}</a>.
                </p>
                <p>
                    {_("PP.RIGHTS.P4.TEXT")}<a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">{_("PP.RIGHTS.P4.A")}</a>
                </p>
                <h5>{_("PP.RIGHTS.HEAD5")}</h5>
                <p>{_("PP.RIGHTS.P5")}</p>
            </section>


            <section>
                <hr />
                <h4>{_("PP.CCPA.HEAD4.CCPA")}</h4>

                <h4>{_("PP.CCPA.HEAD4.CALIFORNIA")}</h4>
                <p>{_("PP.CCPA.P1")}</p>
                <p>{_("PP.CCPA.P2")}</p>
                <p>{_("PP.CCPA.P3")}</p>

                <h4>{_("PP.CCPA.HEAD4.MINOR")}</h4>
                <p>{_("PP.CCPA.P4")}</p>
                <p>{_("PP.CCPA.P5")}</p>
                <p>{_("PP.CCPA.P6")}</p>



                <h4>{_("PP.CCPA.HEAD4.EXERCISING")}</h4>
                <p>{_("PP.CCPA.P7.TEXT1")}
                    <ul>
                        <li>{_("PP.CCPA.P7.UL.L1")}</li>
                        <li>{_("PP.CCPA.P7.UL.L2")}</li>
                    </ul>
                    {_("PP.CCPA.P7.TEXT2")}
                </p>
                <p>{_("PP.CCPA.P8")}</p>




                <h4>{_("PP.CCPA.HEAD4.YOUR_RIGHTS")}</h4>
                <p>{_("PP.CCPA.P9")}</p>
                <ul>
                    <li><strong>{_("PP.CCPA.UL1.L1.STRONG")}</strong>{_("PP.CCPA.UL1.L1.TEXT")}</li>
                    <li><strong>{_("PP.CCPA.UL1.L2.STRONG")}</strong>{_("PP.CCPA.UL1.L2.TEXT")}</li>
                    <li><strong>{_("PP.CCPA.UL1.L3.STRONG")}</strong>{_("PP.CCPA.UL1.L3.TEXT")}</li>
                    <li><strong>{_("PP.CCPA.UL1.L4.STRONG")}</strong>{_("PP.CCPA.UL1.L4.TEXT")}
                        <ul>
                            <li>{_("PP.CCPA.UL1.L4.UL.L1")}</li>
                            <li>{_("PP.CCPA.UL1.L4.UL.L2")}</li>
                            <li>{_("PP.CCPA.UL1.L4.UL.L3")}</li>
                            <li>{_("PP.CCPA.UL1.L4.UL.L4")}</li>
                            <li>{_("PP.CCPA.UL1.L4.UL.L5")}</li>
                        </ul>
                    </li>
                    <li><strong>{_("PP.CCPA.UL1.L5.STRONG")}</strong>{_("PP.CCPA.UL1.L5.TEXT")}</li>
                    <li><strong>{_("PP.CCPA.UL1.L6.STRONG")}</strong>{_("PP.CCPA.UL1.L6.TEXT")}
                        <ul>
                            <li>{_("PP.CCPA.UL1.L6.UL.L1")}</li>
                            <li>{_("PP.CCPA.UL1.L6.UL.L2")}</li>
                            <li>{_("PP.CCPA.UL1.L6.UL.L3")}</li>
                            <li>{_("PP.CCPA.UL1.L6.UL.L4")}</li>
                        </ul>
                    </li>
                </ul>


                <h4>{_("PP.CCPA.HEAD4.PERSONAL_INFORMATION")}</h4>
                <p>{_("PP.CCPA.P10")}</p>
                <p>{_("PP.CCPA.P11")}</p>

                <h5>{_("PP.CCPA.HEAD5.SHARED")}</h5>
                <p>{_("PP.CCPA.P12")}</p>
                <p>{_("PP.CCPA.P13")}</p>
                <p>{_("PP.CCPA.P14")}</p>

                <h5>{_("PP.CCPA.HEAD5.YOUR_RIGHTS")}</h5>
                <ul>
                    <li>{_("PP.CCPA.UL2.L1")}</li>
                    <li>{_("PP.CCPA.UL2.L2")}</li>
                    <li>{_("PP.CCPA.UL2.L3")}</li>
                    <li>{_("PP.CCPA.UL2.L4")}</li>
                </ul>

                <h5>{_("PP.CCPA.HEAD5.OTHER")}</h5>
                <ul>
                    <li>{_("PP.CCPA.UL3.L1")}</li>
                    <li>{_("PP.CCPA.UL3.L2")}</li>
                    <li>{_("PP.CCPA.UL3.L3")}</li>
                    <li>{_("PP.CCPA.UL3.L4")}</li>
                </ul>
                <p>{_("PP.CCPA.P15")}</p>
            </section>



            <section>
                <hr />
                <h4>{_("PP.LINK.HEAD4")}</h4>
                <p>{_("PP.LINK.P1")}</p>
                <p>{_("PP.LINK.P2")}</p>
            </section>


            <section>
                <hr />
                <h4>{_("PP.CHANGES.HEAD4")}</h4>
                <p>{_("PP.CHANGES.P1")}</p>
                <p>{_("PP.CHANGES.P2")}</p>
            </section>


            <section>
                <hr />
                <h4>{_("PP.CONTACT.HEAD4")}</h4>
                <p>{_("PP.CONTACT.TEXT")}</p>
                <ul>
                    <li>{_("PP.CONTACT.UL.L1.TEXT")}<a href="https://martspec.com/privacy-policy" rel="external nofollow noopener" target="_blank">{_("PP.CONTACT.UL.L1.A")}</a></li>
                    <li>{_("PP.CONTACT.UL.L2.TEXT")}<a href={_("PP.CONTACT.UL.L2.LINK")} target="_blank">{_("PP.CONTACT.UL.L2.A")}</a></li>
                    <li>{_("PP.CONTACT.UL.L3.TEXT")}<a href={_("PP.CONTACT.UL.L3.LINK")} target="_blank">{_("PP.CONTACT.UL.L3.A")}</a></li>
                    <li>{_("PP.CONTACT.UL.L4.TEXT")}<a href={_("PP.CONTACT.UL.L4.LINK")} target="_blank">{_("PP.CONTACT.UL.L4.A")}</a></li>
                </ul>
            </section>

            <br className="my-5" />
        </div>
        <Footer />
    </>
    );
}