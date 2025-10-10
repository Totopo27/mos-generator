// MOS core functionality - pure logic without UI
function coprime(...numbers) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    if (numbers.length < 2) return true;
    
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
        if (result === 1) return true;
    }
    return result === 1;
}

function getMosPoints(period, generator) {
    const mosPoints = [0];
    let nextPoint = generator % period;
    
    while (nextPoint !== 0) {
        mosPoints.push(nextPoint);
        nextPoint = (nextPoint + generator) % period;
    }
    
    mosPoints.push(period);
    return mosPoints;
}

// Include all your MOS calculation functions here
// [Copy all JavaScript functions from your script tag]