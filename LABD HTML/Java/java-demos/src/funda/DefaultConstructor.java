package funda;

public class DefaultConstructor {
    int x;
    int f;
    boolean b;
    public static void main(String[] args){
        DefaultConstructor defaultConstructor;
        defaultConstructor = new DefaultConstructor();
        System.out.println(defaultConstructor.x);
        System.out.println(defaultConstructor.f);
        System.out.println(defaultConstructor.b);

        // instance vs static
        Thread thread = Thread.currentThread();
        System.out.println(thread);
        System.out.println(thread.getName());
    }


    public DefaultConstructor(){
        x=10;
        f=20;
        b=true;
    }
}
