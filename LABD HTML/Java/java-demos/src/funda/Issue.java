package funda;

import java.time.LocalDate;
import java.util.Scanner;

class Issue {
    // Instance variables
    int issueId;
    String title;
    String description;
    String priority;
    String status;
    String assignee;
    LocalDate date;

    // Default constructor with user inputs
    Issue() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Issue ID (integer): ");
        this.issueId = scanner.nextInt(); // Read integer
        scanner.nextLine(); // Consume the leftover newline

        System.out.print("Enter Title: ");
        this.title = scanner.nextLine();

        System.out.print("Enter Description: ");
        this.description = scanner.nextLine();

        System.out.print("Enter Priority (Low/Medium/High): ");
        this.priority = scanner.nextLine();

        System.out.print("Enter Status (Open/In Progress/Resolved/Closed): ");
        this.status = scanner.nextLine();

        System.out.print("Enter Assignee: ");
        this.assignee = scanner.nextLine();

        System.out.print("Enter Date (YYYY-MM-DD): ");
        String dateInput = scanner.nextLine();
        this.date = LocalDate.parse(dateInput); // Convert string to LocalDate

        // Scanner is closed in the main method to avoid issues in chained objects
    }

    // Display method
    void display() {
        System.out.println("Issue ID: " + issueId);
        System.out.println("Title: " + title);
        System.out.println("Description: " + description);
        System.out.println("Priority: " + priority);
        System.out.println("Status: " + status);
        System.out.println("Assignee: " + assignee);
        System.out.println("Date: " + date);
    }

    // Overriding the toString() method
    @Override
    public String toString() {
        return "Issue ID: " + issueId + "\n" +
               "Title: " + title + "\n" +
               "Description: " + description + "\n" +
               "Priority: " + priority + "\n" +
               "Status: " + status + "\n" +
               "Assignee: " + assignee + "\n" +
               "Date: " + date;
    }

    // Main method within the same class
    public static void main(String[] args) {
        // Create an Issue object using the default constructor
        Issue issue = new Issue();

        // Display issue details using the display method
        System.out.println("\n--- Issue Details (Display Method) ---");
        issue.display();

        // Display issue details using the overridden toString() method
        System.out.println("\n--- Issue Details (toString Method) ---");
        System.out.println(issue);
    }
}
