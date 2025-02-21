public class reverseWord {
  public static void main(String[] arg) {
    String word = "olleH";
    String reversed = new StringBuilder(word).reverse().toString();
    System.out.println(reversed);
  }
}
