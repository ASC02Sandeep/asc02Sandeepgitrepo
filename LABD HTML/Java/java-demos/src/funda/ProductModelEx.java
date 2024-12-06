package funda;

 class ProductModel {
    private String productId = "P001";
    private String productName = "Laptop";
    private int productPrice = 1000;

    @Override
    public String toString(){
        return "Product [ProductId=" + productId + ",productName=" + productName + "]";
    }

    //setter or mutator method
    public void setProductPrice(int productPrice) {
        if(productPrice < 0 || productPrice > 100000) {
            System.out.println("Invalid product price");
            return;
        }
        this.productPrice = productPrice;

    }

    //getter or accesor method
    public int getProductPrice(){
        return productPrice;
    }

    public String getProductId() {
        return productId;
    }
}

public class ProductModelEx{
    public static void main(String[] args) {
        ProductModel productModel = new ProductModel();
        System.out.println(productModel);
        productModel.setProductPrice(2000);
        System.out.println(productModel);
        productModel.setProductPrice(10000000);
        System.out.println(productModel);
        System.out.println(productModel.getProductPrice());
        System.out.println(productModel.getProductId());
    }
}
