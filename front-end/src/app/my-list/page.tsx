import Item from "./itens";
import { ListContainer, ListContent } from "./styles";

export default function MyList(){
    return (
        <ListContainer>
            <h1 className="h2">Sua lista</h1>
            <ListContent>
            {/*     <section className="empty">
                    <h1 className="h2">Sua lista está vazia!</h1>
                    <p className="emptyDescription h4">
                        Para inserir produtos basta clicar no botão “+ Lista” debaixo dos itens!
                    </p>
                    <a className="homeButton" href="/">Home</a>
                </section> */}

                <Item />
     
            </ListContent>
         
        </ListContainer>
        
    )
}