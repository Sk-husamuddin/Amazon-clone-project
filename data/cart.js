 export const cart=[];



 export function addToCart(productId){
    let mathchingitem;
        
        cart.forEach((item)=>{
            if(productId==item.productId){
                mathchingitem=item;
            }
        });

        const quantitySelector=(document.querySelector(`.js-quantity-selector-${productId}`));
        const quantity=Number(quantitySelector.value);


        if(mathchingitem){
            mathchingitem.quantity+=quantity;
        }else{
            cart.push({
            productId:productId,
            quantity:quantity
        });
        }
}
