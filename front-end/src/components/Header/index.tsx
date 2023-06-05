import { ContactNavBar, HeaderContainer, NavBar } from "./styles";
import whatsappLogo from "../../assets/whatsappLogo.svg"
import infoListLogo from "../../assets/infoListLogo.svg"
import Cart from "../../assets/Cart.svg"
import searchIcon from "../../assets/searchIcon.svg"
import { useState } from "react";

export default function Header(){
    const [Toggle, showMenu] = useState(false)

    return (
        <HeaderContainer>
            <ContactNavBar>
                <span className="flex">
                    <img src={whatsappLogo.src} />
                    <p className="small">(XX) YYYYY-ZZZZ</p>
                </span>
                <p className="small">
                    contato@infomart.com
                </p>
            </ContactNavBar>

            <NavBar>
                <span className="logo">
                    <img src={infoListLogo.src} alt="" />
                    <p className="h3">InfoList</p>
                </span>
                
                <label className="burger" >
                    <input type="checkbox" onClick={() => showMenu(!Toggle)} checked={Toggle}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={!Toggle ? "menuList flex" : "menuList flex show-menu"}>
                    <a href="" className="h4">Meus Favoritos</a>
                    <a href="" className="h4">Categorias</a>
                    <form className="searchBar">
                        <div className="search">
                            <input type="text" className="search__input" placeholder="Type your text"/>
                            <button className="search__button">
                                <img className="searchIcon" src={searchIcon.src}/>
                            </button>
                        </div>
                    </form>
                </nav>

                    <span className="mylist flex">
                        <img src={Cart.src}/>
                        <a className="h4" href="#">Minha Lista</a>
                    </span>                   
            </NavBar>
        </HeaderContainer>
    )
}

