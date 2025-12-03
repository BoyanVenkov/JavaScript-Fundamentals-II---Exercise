function divideFactorials(num1, num2) {
    function factorial(n) {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i
        }
        return result
    }

    const fact1 = factorial(num1)
    const fact2 = factorial(num2)

    const division = fact1 / fact2

    console.log(division.toFixed(2))
}