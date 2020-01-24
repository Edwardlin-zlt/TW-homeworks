package S4_Java_data_type;

public class StringMethods {
    public static void main(String[] args) {
        String strLength = "Edward";
        System.out.println(strLength.length());

        String strIndexOf = "Amons";
        System.out.println(strIndexOf.indexOf('o'));

        String strCharAt = "ThoughtWorks";
        System.out.println(strCharAt.charAt(2));

        String strStartWith = "YouKnowWhat";
        System.out.println(strStartWith.startsWith("You"));

        String strEndsWith = "foo";
        System.out.println(strEndsWith.endsWith("o"));

        String strSubString = "Give me 100";
        System.out.println(strSubString.substring(8, 10));
    }
}
