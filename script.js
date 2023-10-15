let container=document.getElementById("count")
let appContainer=document.getElementById("app-container")
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>
    {
      
        for(i=0;i<data.products.length;i++){
    
    let  element=document.createElement('div');
    element.className='product'
    element.innerHTML=`
    <div class="product-photo">
    <img src=${data.products[i]["images"][0]} alt="device image">
    </div>
    <h3 class="phone-type">${data.products[i]["title"]} </h3>
    <p class="description">${data.products[i]["description"]} </p>
    <p class="price">${data.products[i]["price"]}$ <del>${(data.products[i]["price"]*(data.products[i]["discountPercentage"]/100)).toFixed()}   $</del></p>
    <div class="click-add">
        <button class="btn">
            <img src="Bag_alt.png">
            <p>Add to cart</p>
        </button>
        <img src="Group 3.png">
    </div>
    `
               
  container.appendChild(element)


 }
appContainer.appendChild(container);
    });