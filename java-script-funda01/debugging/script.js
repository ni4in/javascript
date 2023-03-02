const measureKelvin = function()
{
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degree celsius')
    }
    console
    const kelvin = Number(measurement.value) + 273;

    return kelvin;
}

console.log(measureKelvin());