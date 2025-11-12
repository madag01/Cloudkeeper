import java.util.*;
import java.util.stream.Collectors;

@FunctionalInterface
interface NumberRule {
    boolean apply(int n);
}

public class Main {
    public static void main(String[] args) {

        NumberRule isEven = n -> n % 2 == 0;

        NumberRule isPrime = n -> {
            if (n <= 1) return false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) return false;
            }
            return true;
        };

        List<Integer> nums = Arrays.asList(3, 10, 15, 8, 21, 14, 7);

        List<Integer> result = nums.stream()
                .filter(n -> isEven.apply(n) && isPrime.apply(n))
                .map(n -> n * n)
                .collect(Collectors.toList());

        System.out.println("Result list: " + result);

        Optional<Integer> first = result.stream().findFirst();

        first.ifPresentOrElse(
                System.out::println,
                () -> System.out.println("No matching number found")
        );
    }
}
