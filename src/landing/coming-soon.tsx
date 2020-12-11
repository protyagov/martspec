import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import ContactUs from "src/part/contact-us";
import Spinner from "src/part/spinner";

const logo = require("src/img/cs.jpg").default;


export default function CommintSoonPage() {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <div>
            <Spinner show={isLoading} marginTop='50%' />

            <section className="comming-soon-callout">
                <div className="row" >

                    <div className="col-sm-12 col-md-9 my-auto">

                        <h3 >
                            RATE YOUR RECRUITER,<br />IMPROVE THE EXPERIENCE
                        </h3>
                        <h1 style={{ color: "#617fde", marginTop: "2rem" }}>
                            <b>COMING SOON</b>
                        </h1>

                        <br />
                        <p className="lead, rr-color-black">
                            We are working on the website design!<br />
                            If you would like to get in touch with us please use the form below.
                            </p>
                        <br />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img src={logo} style={{ minHeight: "200px" }} />
                    </div>
                </div>
            </section>

            <ContactUs setIsLoading={setIsLoading} />
            <Footer />
        </div>

    )
}


