import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({item, onAdd}) => {
    return(   
        <>
            {item.id &&     
                <div className="itemDetailContainer">
                    <div>
                        <img src={`/${item.img}`} alt={item.description}/>
                    </div>
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="itemPrice">AR${item.price}</p>
                        <ItemCount item={item} initial='0' onAdd={onAdd}/>
                    </div>                
                </div>
            }
        </>
    )
}