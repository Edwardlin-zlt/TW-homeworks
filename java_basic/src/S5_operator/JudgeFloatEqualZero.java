package S5_operator;

public class JudgeFloatEqualZero {
    public static void main(String[] args) {
        float fNum = 0.0F;
        boolean isEqualToZero = fNum < 1e-6;
        System.out.println(isEqualToZero);
    }
}
