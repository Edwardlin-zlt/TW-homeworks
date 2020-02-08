package S6_Statements;

import java.util.Scanner;

public class Demo03Re {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int aNumber = scanner.nextInt();
        if (aNumber >= 0) {
            switch (aNumber) {
                case 0:
                    System.out.println("first string");
                    break;
                default:
                    System.out.println("second string");
            }
        }
        System.out.println("third string");
    }
}
