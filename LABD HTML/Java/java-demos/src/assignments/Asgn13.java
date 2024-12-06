package assignments;


class MultiplicationTable {
    // Method to display multiplication table using a for loop
    public void displayUsingForLoop(int number) {
        System.out.println("Multiplication Table using for loop:");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }

    // Method to display multiplication table using a while loop
    public void displayUsingWhileLoop(int number) {
        System.out.println("\nMultiplication Table using while loop:");
        int i = 1;
        while (i <= 10) {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        }
    }

    // Method to display multiplication table using a do-while loop
    public void displayUsingDoWhileLoop(int number) {
        System.out.println("\nMultiplication Table using do-while loop:");
        int i = 1;
        do {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        } while (i <= 10);
    }
}

public class Asgn13 {

    public static void main(String[] args) {
        
        MultiplicationTable table = new MultiplicationTable();

        // Input number for multiplication table
        int number = 2;

        // Display multiplication table using for loop
        table.displayUsingForLoop(number);

        // Display multiplication table using while loop
        table.displayUsingWhileLoop(number);

        // Display multiplication table using do-while loop
        table.displayUsingDoWhileLoop(number);
    }
    
}


