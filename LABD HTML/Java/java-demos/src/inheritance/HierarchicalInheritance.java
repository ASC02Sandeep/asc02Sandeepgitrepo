package inheritance;

public class HierarchicalInheritance {
    public static void main(String[] args) {
        
    }
    
}

class Phone {
    void call() {
        System.out.println("Calling...");
    }
}

class SmartPhone extends Phone {
    void browse() {
        System.out.println("Browsing...");
    }
}

class FeaturePhone extends Phone {
    void text() {
        System.out.println("Texting...");
    }
}
