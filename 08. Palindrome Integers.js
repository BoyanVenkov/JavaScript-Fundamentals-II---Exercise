function palindrome(inputArray) {
    function isPalindrome(num) {
        let numAsString = num.toString();
        let numReversed = numAsString.split("").reverse().join("");
        return numAsString === numReversed;
    }

    for (const element of inputArray) {
        console.log(isPalindrome(element));
    }
}