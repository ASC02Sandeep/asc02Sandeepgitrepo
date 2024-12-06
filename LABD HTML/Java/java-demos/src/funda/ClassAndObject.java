package funda;
//Create a class
class Car{
    // instance variables
    // String type ="Gasoline";
    // int price = 1000000;
    String type;
    int price;
    Car(){
        type = "Gasoline";
        price = 1000000;
    }
    void display(){
        System.out.println("Type of car: "+ type);
        System.out.println("Price of car: "+ price);
    }
    @Override
    public String toString(){
        String message = "Type of car: "+type+"\nPrice of car:"+price;
        return message;
    }
}
public class ClassAndObject {
    public static void main(String[] args) {
        // Car car = null;
        // car = new Car();
        Car car = new Car();
        // System.out.println("Type of car: "+ car.type);
        // System.err.println("Price of car: "+car.price);
        car.display();
        System.out.println(car);
        String message = car.toString();
        System.out.println(message);
    }
}
