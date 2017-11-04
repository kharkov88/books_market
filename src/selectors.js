export const  getBooksFromCart = (cart,products)=>{
    var result=[]
    var ids = cart.ids
    if(ids){
    for(var i=0;i<ids.length;i++){
        products.map(item=>{
            (item.id==ids[i])&&result.push(Object.assign({},item))
        })
    }
    console.log('result:',result)
}
    return products
}