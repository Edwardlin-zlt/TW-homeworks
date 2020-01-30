package FizzBuzz;

import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int inputNumber = scanner.nextInt();

        if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
            System.out.print("FizzBuzz");
        } else if (inputNumber % 5 == 0 ) {
            System.out.print("Buzz");
        } else if (inputNumber % 3 == 0) {
            System.out.println("Fizz");
        } else {
            System.out.println(inputNumber);
        }
    }
}
