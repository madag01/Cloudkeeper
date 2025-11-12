import java.util.HashMap;

public class FindFirstNonRepeatingCharacter {
    public static void main(String[] args) {
        String s = "zzxxxaabbcdde";
        HashMap<Character, Integer> freqMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (freqMap.containsKey(c)) {
                freqMap.put(c, freqMap.get(c) + 1);
            } else {
                freqMap.put(c, 1);
            }
        }

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (freqMap.get(c) == 1) {
                System.out.println("First non-repeating: " + c);
                return;
            }
        }

        System.out.println("No non-repeating character found.");
    }
}
