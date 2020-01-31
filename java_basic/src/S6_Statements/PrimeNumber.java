package S6_Statements;

public class PrimeNumber {
    public static void main(String[] args) {
        int number = 3;
        System.out.println(isPrime(number));
    }

    private static boolean isPrime(int srcNum) {
        double sqrt = Math.sqrt(srcNum);
        if (srcNum < 2) {
            return false;
        }
        if (srcNum == 2 || srcNum == 3) {
            return true;
        }
        if (srcNum % 2 == 0) {
            return false;
        }
        for (int i = 3; i <= sqrt; i+=2) {
            if (srcNum % i == 0) {
                return false;
            }
        }
        return true;
    }
}
