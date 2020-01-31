package S6_Statements;

public class Demo03Re {
    public static void main(String[] args) {
        int aNumber = 3;
        if (aNumber >= 0) {
            switch (aNumber) {
                case 0:
                    System.out.println("first string");
                    break;
                default:
                    System.out.println("second string");
            }
            System.out.println("third string");
        }
    }
}
