import React from "react";
// Images
import w_350 from "../media/fcc_z9ruhh_ar_16_9,c_fill,g_auto__c_scale,w_350.png";
import w_1137 from "../media/fcc_z9ruhh_ar_16_9,c_fill,g_auto__c_scale,w_1137.png";
import w_480 from "../media/fcc_z9ruhh_c_scale,w_480.png";
import w_1280 from "../media/fcc_z9ruhh_c_scale,w_1280.png";

export default function Home() {
  const pageTitle = "FCC Front End Dev Libs";

  React.useEffect(() => {
    const updateTitle = () => (document.title = pageTitle);
    updateTitle();
  }, []);

  return (
    <>
      <section className="section">
        <p className="text-center">
          Thanks for checking out my spin on the{" "}
          <a href="https://www.freecodecamp.org/">freecodecamp.org</a>{" "}
          <b>Front End Development Libraries</b> projects.
        </p>
        <picture className="mb-3">
          <source
            media="(max-width: 1199px)"
            sizes="(max-width: 1895px) 75vw, 1137px"
            srcSet={`${w_350} 200w, ${w_1137} 1137w`}
          />
          <img
            sizes="(max-width: 3200px) 40vw, 1280px"
            srcSet={`${w_480} 480w, ${w_1280} 1280w`}
            src={w_1280}
            alt="freecodecamp.org Front End Development Libraries certificate"
          />
        </picture>
      </section>
    </>
  );
}
