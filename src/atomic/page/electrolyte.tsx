import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import ImageI18N from "../atom/img-i18n";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import CardTitleTextButton from "../molecule/card-title-text-button";

const electrolyteSections = [
    {
      heading: () => _("ELECTROLYTE.HEAD3"),
      description: () => _("ELECTROLYTE.DESC3_1"),
      link: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional",
      linkText: () => _("BTN.SRC1")
    },
    {
      heading: () => _("ELECTROLYTE.HEAD4"),
      description: () => _("ELECTROLYTE.DESC4_1"),
      link: "https://ods.od.nih.gov/factsheets/Calcium-Consumer",
      linkText: () => _("BTN.FACT")
    },
    {
      heading: () => _("ELECTROLYTE.HEAD5"),
      description: () => _("ELECTROLYTE.DESC5_1"),
      link: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional",
      linkText: () => _("BTN.SRC2")
    },
    {
      heading: () => _("ELECTROLYTE.HEAD6"),
      description: () => _("ELECTROLYTE.DESC6_1"),
      link: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional",
      linkText: () => _("BTN.FACT")
    },
    {
      heading: () => _("ELECTROLYTE.HEAD7"),
      description: () => _("ELECTROLYTE.DESC7_1"),
      link: "https://en.wikipedia.org/wiki/Electrolyte_imbalance",
      linkText: () => _("BTN.WIKI"),
      headingStyle: { color: "#BF4803" }
    }
  ];
  

export default function Electrolyte() {
  return (
    <>
      <NavigationBar />
      <div className="electrolyte">
        <div className="ms-base-page ms-base-new">
          <Header
            title={_("ELECTROLYTE.HEAD")}
            appId={1507719251}
            appDownloadTitle={_("ELECTROLYTE.DWN")}
            imgSrc="/img/page/electrolyte/electrolyte-header-en.webp"
            imgAlt={_("ELECTROLYTE.IMG")}
            imgH={531}
            imgW={722}
            content={
              <ul className="header-content-list">
                <li>{_("ELECTROLYTE.ABOUT_1")}</li>
                <li>{_("ELECTROLYTE.ABOUT_2")}</li>
                <li>{_("ELECTROLYTE.ABOUT_3")}</li>
              </ul>
            }
          />

          <section>
            <div className="row d-flex justify-content-between g-4">
              <div className="col-12 col-xxl-6">
                <ImageI18N
                  src="/img/page/electrolyte/electrolyte-middle-pic-ru.webp"
                  w={487}
                  h={515}
                  cls="ms-base-image mt-mob-xs mb-6"
                  alt={_("ELECTROLYTE.IMG")}
                />
              </div>
              <div className="col-12 col-xxl-6">
                <CardTitleTextButton
                  title={_("ELECTROLYTE.HEAD2")}
                  textContent={[
                    _("ELECTROLYTE.DESC2_1"),
                    _("ELECTROLYTE.DESC2_2")
                  ]}
                  buttonText={_("ELECTROLYTE.BTN_MORE")}
                  buttonLink={Locale.i18nLink(`coming-soon`)}
                  buttonColor="#8079CC"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="ms-base-page">
            {electrolyteSections.map((section, index) => (
                <section key={index}>
                    <h4 style={section.headingStyle}>{section.heading()}</h4>
                    <p className="mt-3">
                    {section.description()}
                    <a href={section.link} target="_blank" rel="noopener noreferrer">
                        <small>
                        <i>{section.linkText()}</i>
                        </small>
                    </a>
                    </p>
                </section>
                ))}
        </div>

        <div className="container mb-5 pb-5 text-center">
          <img
            src="/img/page/electrolyte/electrolyte-app.webp"
            alt={_("MAIN.P1.IMG")}
            className="ms-base-image"
            width="512px"
            height="512px"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
