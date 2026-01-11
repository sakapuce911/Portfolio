import React from "react";
import "../assets/styles/TrustedBy.scss";

/* ===== IMPORT DES LOGOS ===== */
import logoCarrefour from "../assets/images/brands/logo_carrefour.png";
import logoEsprit from "../assets/images/brands/logo_esprit.png";
import logoCelio from "../assets/images/brands/logo_celio.png";
import logoXti from "../assets/images/brands/logo_xti.png";
import logoBizou from "../assets/images/brands/logo_bizou.png";
import logoChaussea from "../assets/images/brands/logo_chaussea.png";
import logoEtam from "../assets/images/brands/logo_etam.png";
import logoUndiz from "../assets/images/brands/logo_undiz.png";
import logoZippy from "../assets/images/brands/logo_zippy.png";
import logoDcmJennyfer from "../assets/images/brands/logo_dcm_jennyfer.png";
import logoNineWest from "../assets/images/brands/logo_nine_west.png";
import logoFunecap from "../assets/images/brands/logo_funecap.png";

type Brand = {
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { name: "Carrefour Maurice", logo: logoCarrefour },
  { name: "Esprit", logo: logoEsprit },
  { name: "Celio", logo: logoCelio },
  { name: "XTI", logo: logoXti },
  { name: "Bizou", logo: logoBizou },
  { name: "Chaussea", logo: logoChaussea },
  { name: "Etam", logo: logoEtam },
  { name: "Undiz", logo: logoUndiz },
  { name: "Zippy", logo: logoZippy },
  { name: "DCM Jennyfer", logo: logoDcmJennyfer },
  { name: "Nine West", logo: logoNineWest },
  { name: "Funecap", logo: logoFunecap },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="trustedby-section" id="trustedby">
      <div className="trustedby-card">
        <div className="trustedby-header">
          <h2>They trusted me</h2>
          <p>
            Brands I supported through digital initiatives, performance marketing,
            and cross-functional project delivery.
          </p>
        </div>

        <div className="trustedby-grid">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="trustedby-logoCard"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="trustedby-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
export {};
