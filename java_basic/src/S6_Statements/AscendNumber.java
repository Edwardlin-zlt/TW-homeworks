package S6_Statements;

public class AscendNumber {
    public static void main(String[] args) {
        int x = 10, y = 8, z = 9;
        threeNumSort(x, y, z);
    }

    public static void threeNumSort(int num1, int num2, int num3) {
        int max = num1;
        int min = num2;
        int meddle;
        if (num1 > num2) {
            if (num3 < min) {
                meddle = min;
                min = num3;
            } else if (num3 > max) {
                meddle = max;
                max = num3;
            } else {
                meddle = num3;
            }
        } else {
            max = num2;
            min = num1;
            if (num3 < min) {
                meddle = min;
                min = num3;
            } else if (num3 > max) {
                meddle = max;
                max = num3;
            } else {
                meddle = num3;
            }
        }
        System.out.println("Min: " + min + "\nMeddle: " + meddle + "\nMax: " + max);
    }
}
