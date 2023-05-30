import { ContactNavBar, HeaderContainer } from "./styles";
import whatsappLogo from "../../assets/whatsappLogo.svg"
import infoListLogo from "../../assets/infoListLogo.svg"
import Cart from "../../assets/Cart.svg"

export default function Header() {
    return (
        <HeaderContainer>
            <ContactNavBar>
               <span className="whatsapp">
                    <img src={whatsappLogo.src} alt="" />
                    <p>(xx) xxxxx-xxxx</p>
               </span>
               <p className="email">
                    contato@infomart.com
               </p>
            </ContactNavBar>
        </HeaderContainer>
    )
}