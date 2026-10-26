function generateNumber(seconds) {
    setInterval(() => {
        const number = Math.floor(Math.random() * 10) + 1;
        console.log(number);
    }, seconds * 1000);
}
generateOTP(3000)

generateNumber(10); // Generates a number after 10 seconds
