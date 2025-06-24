import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import Header from "@/atomic/organism/header";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "../atom/scroll-button";

export default function Magnesium() { 
  return (
      <>
          <NavigationBar />
          <Header
              title={_("SIZE.HEAD")}
              //appId={appId}
              appDownloadTitle={_("SIZE.DWN")}
              imgSrc="/img/page/body-size/img-header-en.png"
              imgAlt={_("SIZE.IMG")}
              imgH={305}
              imgW={450}
          >
              <div className="bodysize">
                  <ul className="header-content-list">
                      <li>{_("SIZE.ABOUT_1")}</li>
                      <li>{_("SIZE.ABOUT_2")}</li>
                      <li>{_("SIZE.ABOUT_3")}</li>
                  </ul>
              </div>
          </Header>

          <Footer />
          <ScrollButton />
      </>
  );
}