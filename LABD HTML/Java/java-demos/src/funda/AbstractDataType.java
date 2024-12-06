package funda;

public class AbstractDataType {
    //primitiveDatatypes
    //variables declared in class-instance variables
    byte byteVar = -128;
    short shortVar = 32767;
    int intVar = -2147483647;
    long longVar = 9223372036854775807L;
    float floatVar = 123.456f;
    double doubleVar = 123.456;
    char charVar = 'A';
    boolean boolVar = true;

    //instance method
    public void display(){
        System.out.println("byteVar: " + byteVar);
        System.out.println("shortVar: " + shortVar);
        System.out.println("intVar: " + intVar);
        System.out.println("longVar: " + longVar);
        System.out.println("floatVar: " + floatVar);
        System.out.println("doubleVar: " + doubleVar);
        System.out.println("charVar: " + charVar);
        System.out.println("boolVar: " + boolVar);
    }
    public static void main (String [] args){
        //reference variables
       AbstractDataType abstractDataType = new AbstractDataType();
       System.out.println(abstractDataType.byteVar);
       // calling a method
       abstractDataType.display();
    }
}
