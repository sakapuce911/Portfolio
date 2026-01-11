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
  url: string;
};

const brands: Brand[] = [
  { name: "Carrefour Maurice", logo: logoCarrefour, url: "https://carrefourmaurice.com/" },
  { name: "Esprit", logo: logoEsprit, url: "https://esprit.com/" },
  { name: "Celio", logo: logoCelio, url: "https://www.celio.com/" },
  { name: "XTI", logo: logoXti, url: "https://xtistore.com/en" },
  { name: "Bizou", logo: logoBizou, url: "https://bizou.com/" },
  { name: "Chaussea", logo: logoChaussea, url: "https://www.chaussea.com/fr/" },
  { name: "Etam", logo: logoEtam, url: "https://int.etam.com/fr_MG/Accueil" },
  { name: "Undiz", logo: logoUndiz, url: "https://int.undiz.com/fr_MG/home" },
  { name: "Zippy", logo: logoZippy, url: "https://zippyonline.com/fr" },
  { name: "DCM Jennyfer", logo: logoDcmJennyfer, url: "https://www.jennyfer.com/" },
  { name: "Nine West", logo: logoNineWest, url: "https://ninewest.com/" },
  { name: "Funecap", logo: logoFunecap, url: "https://www.funecap.group/" },
];

const TrustedBy: React.FC = () => {
  return (
    <section
      className="trustedby-section"
      id="trustedby"
      aria-label="Brands that trusted me"
    >
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
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="trustedby-logoCard trustedby-logoCard--link"
              title={`Visit ${brand.name} official website`}
              aria-label={`Visit ${brand.name} official website`}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="trustedby-logo"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
