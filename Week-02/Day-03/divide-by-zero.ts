// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function division(input: number) {
    try {
        if (input === 0) {
            throw new Error('Fail');
        }
        console.log(10 / input);
    }
    catch (error) {
        console.log(error.message);
    }
}
division(0)