package inheritance;

public class SingleInheritance {
    public static void main(String[] args) {
        A a = new A();
        a.display();
        B b = new B();
        b.display();
    }
}
class A{
    protected String message = "Welcome";

    public A(){
        System.out.println("A()");
    }

    public A(String message){
        this.message = message;
        System.out.println("A(String)");
    }

    void display(){
        System.out.println("base/parent/super class");
    }
}

class B extends A{
    public B(){
        super();
        System.out.println("B()");
    }
    void display(){
        System.out.println("derived/child/sub class method");
        System.out.println("message: " + message);
    }
}
