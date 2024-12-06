package assignments;

public class Asgn11 {
    public static void main(String[] args) {
        Overloading overloading = new Overloading();
        System.out.println(overloading.add((short)10, (short)20));
        System.out.println(overloading.add((short)10,(short)20,(short)30));
        System.out.println(overloading.add((float)10.5, 20.1));
        System.out.println(overloading.add("Hello", 20));
    }
    
}

class Overloading{
    short add(short number1, short number2){
        return (short) (number1+number2);
    }

    short add(short number1, short number2, short number3){
        return (short) (number1+number2+number3);
    }

    double add(float number1, double number2){
        double result =  number1 + number2;
        return result;
    }

    String add(String text, int number) {
        return text + " " + number;
    }
}
