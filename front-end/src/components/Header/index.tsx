import { ContactNavBar, HeaderContainer, NavBar } from "./styles";
import whatsappLogo from "../../assets/whatsappLogo.svg"
import infoListLogo from "../../assets/infoListLogo.svg"
import Cart from "../../assets/Cart.svg"
import searchIcon from "../../assets/searchIcon.svg"

export default function Header(){
    return (
        <HeaderContainer>
            <ContactNavBar>
                <span className="whatsappNumber">
                    <img src={whatsappLogo.src} />
                    <p>(XX) YYYYY-ZZZZ</p>
                </span>
                <p className="email">
                    contato@infomart.com
                </p>
            </ContactNavBar>

            <NavBar>
                <span className="logo">
                    <img src={infoListLogo.src} alt="" />
                    <p>InfoList</p>
                </span>
                
                    <a href="" className="links">Meus Favoritos</a>
                    <a href="" className="links">Categorias</a>
                    
                    <form className="searchBar">
                        <input className="searchInput" type="text" placeholder="Pesquisar itens" />
                        <button  className="searchButton" type="submit">
                            <img className="searchIcon" src={searchIcon.src}/> 
                        </button>
                    </form>

                    <span className="mylist">
                        <img src={Cart.src}/>
                        <a href="#">Minha Lista</a>
                    </span>                   
            </NavBar>
        </HeaderContainer>
    )
}

