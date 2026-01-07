import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://wa.me/23057261909" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
        <a href="https://www.linkedin.com/in/natiora/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Copyright 2026<a href="https://www.linkedin.com/in/natiora/" target="_blank" rel="noreferrer"> Natiora</a> </p>
    </footer>
  );
}

export default Footer;