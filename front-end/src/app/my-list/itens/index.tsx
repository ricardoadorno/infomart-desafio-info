import itensImage from '../../../assets/itens.svg'
import { ItemContainer } from './styles'

export default function Item(){
    return(
        <ItemContainer>
            <div className="itemDescription">
                <img src={itensImage.src}/>
                <div className="itemClass">
                    <p className='h4'>Caqui</p>
                    <div className='category'>
                        <span className='p'>Categoria:</span> <span className='p'>Fruta</span>
                    </div>
                    
                </div>
            </div>

            <div className="itemInfo">
                <p className="itemPrice h4">
                    R$ 49,99
                </p>
                <button className='removeItem'>Remover item</button>
            </div>

            <div className="amount">
                    <span className="h3">Total:</span> <span className="value h3">R$ 149,97</span>
            </div>
        </ItemContainer>
    )
}