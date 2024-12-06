package collections;

import java.util.HashSet;

public class SetEx {
    public static void main(String[] args) {
        HashSet<String> colors = new HashSet<String>();
        colors.add("Red");
        colors.add("Orange");
        colors.add("Yellow");
        colors.add("Green");
        colors.add("Blue");
        colors.add("Indigo");
        colors.add("Violet");

        System.out.println(colors);

        colors.add(null);
        System.out.println(colors);

        colors.add("Orange");
        System.out.println(colors);
        System.out.println(colors.size());
        colors.remove("Red");
        System.out.println(colors);
        colors.clear();
        System.out.println(colors);
    }
}
