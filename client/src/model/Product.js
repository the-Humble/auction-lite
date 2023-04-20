class Product {

    constructor(id = 0 , name ='Base Product', description = 'Base Description', initialPrice = '0', author = 'Base Author', imageURL = "C:/Repos/auction-lite/client/src/img/Placeholder.png")
    {
        this.productID = id;
        this.name = name;
        this.description = description;
        this.initialPrice = initialPrice;;
        this.currentprice = initialPrice;
        this.author = author;
        this.imageURL = imageURL;
    }
}

export default Product;