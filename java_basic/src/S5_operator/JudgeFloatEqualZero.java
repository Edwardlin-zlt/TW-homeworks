package S5_operator;

import java.util.Scanner;

public class JudgeFloatEqualZero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        float fNum = scanner.nextFloat();
        System.out.println(judgeFloatEqualZero(fNum));
    }

    public static boolean judgeFloatEqualZero(float num) {
        return Math.abs(num) < 1e-6;
    }
}
