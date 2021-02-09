import ItemCount from '../components/itemCount/itemCount';
import ItemList from '../components/itemList/ItemList';
import Item from '../components/item/Item';
import jsonpack from '../components/data.json';
import React, {useState,useEffect} from 'react';




const ItemListContainer = ({name}) => {
    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
    })



    return (

       <div name="test">



    <div class="p-3 mb-2 bg-dark text-white">
        {name}

        <ItemList items={item}/>

       </div>



           </div>
   )
}


export default ItemListContainer;