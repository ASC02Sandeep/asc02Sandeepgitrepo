package funda;

public class StringEx {
    String message = "Well, Have a Wonderful day!";
    boolean result = message.endsWith("!");
    public static void main(String[] args) {
        StringEx stringEx = new StringEx();
        System.out.println(stringEx.result);
        int index = stringEx.message.lastIndexOf("l");
        System.out.println(index);
        System.out.println(stringEx.message.indexOf("l"));
        System.out.println(stringEx.message.indexOf("z"));
        System.out.println(stringEx.message.lastIndexOf("l"));
        System.out.println(stringEx.message.length());
        System.out.println(stringEx.message.substring(0, 5));

    }
}
