import "./Contact.css";
import { Link } from "react-router-dom";
export function Contact() {
  return (
    <div className="Contact">
      <h2>Contactame:</h2>
      <div className="Contact-Grid">
        <a
          className="mail"
          href="mailto:vdevalero44@gmail.com?subject=Me%20Interesa%20tu%20portfolio"
          target="_blank"
        >
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
            alt=""
          />
          <p>Mail</p>
        </a>

        <a
          className="whatsapp"
          href="https://api.whatsapp.com/send?phone=+34692663552&text=Hola, vi tu portafolio y quiero conversar para trabajar en un proyecto"
          target="_blank"
        >
          <img
            src="https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png"
            alt=""
          />
          <p>Whatsapp</p>
        </a>

        <a className="telegram" href="https://t.me/DarcWolf" target="_blank">
          <img src="https://telegram.org/img/t_logo.png" alt="" />
          <p>Telegram</p>
        </a>
        <a
          className="cv"
          href="/Victor_Valero_CV_Dev.pdf"
          download="Victor_Valero_CV_DEV.pdf"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/909/909314.png"
            alt=""
          />
          <p>CV Vitae</p>
        </a>
      </div>
    </div>
  );
}
