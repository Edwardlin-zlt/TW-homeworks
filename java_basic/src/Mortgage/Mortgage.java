package Mortgage;

import java.text.NumberFormat;
import java.util.Scanner;

public class Mortgage {
    public static void main(String[] args) {
        final  byte MONTHS_IN_YEAR = 12;
        final byte PERCENTAGE = 100;

        Scanner scanner = new Scanner(System.in);
        int principal;
        while (true) {
            System.out.print("Principal: ");
            principal = scanner.nextInt();
            if (principal>1000 && principal <= 1_000_000){
                break;
            }
            System.out.println("Principal should more than 1000 and less or equal to 1,000,000");
        }
        float yearlyInterest;
        while (true){
            System.out.print("Annual Interest Rate: ");
            yearlyInterest = scanner.nextFloat() / PERCENTAGE;
            if (yearlyInterest>0 && yearlyInterest <=0.3) {
                break;
            }
            System.out.println("Interest rate should be more than 0 and less or equal to 30%");
        }
        float monthlyInterest =  yearlyInterest / MONTHS_IN_YEAR;
        System.out.print("Periods(years): ");
        byte years = scanner.nextByte();
        int numberOfPayments = years * MONTHS_IN_YEAR;

        double mortgage = principal
            * monthlyInterest * Math.pow((1 + monthlyInterest), numberOfPayments)
            / (Math.pow((1 + monthlyInterest), numberOfPayments) - 1);

        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.print("Mortgage: " + mortgageFormatted);
    }
}
