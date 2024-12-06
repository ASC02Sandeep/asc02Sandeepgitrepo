package collections;

import java.util.HashMap;

public class HashMapEx {
    public static void main(String[] args) {
        HashMap<String, Integer> countryCodesMap = new HashMap<String, Integer>();
        System.err.println(countryCodesMap.isEmpty());
        countryCodesMap.put("America",1);
        countryCodesMap.put("Singapore",65);
        countryCodesMap.put("India",91);
        countryCodesMap.put("Japan",81);
        countryCodesMap.put("Japan".toUpperCase(),81);
        countryCodesMap.put("JapPPPPPPPPAAANNNN",81);
        countryCodesMap.put("Japan",81);
        System.out.println(countryCodesMap);
        System.err.println(countryCodesMap.isEmpty());
        System.err.println(countryCodesMap.size());

        //Perform a search operation , if singapore key is present, if 65 value is present
        if (countryCodesMap.containsKey("Singapore")) {
            System.out.println("Key 'Singapore' is present.");
        } else {
            System.out.println("Key 'Singapore' is not present.");
        }

        // Check if the value 65 is present
        if (countryCodesMap.containsValue(65)) {
            System.out.println("Value '65' is present.");
        } else {
            System.out.println("Value '65' is not present.");
        }

    }
}
