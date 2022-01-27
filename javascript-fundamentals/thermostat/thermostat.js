class Thermostat {
    constructor() {
        this.temperature = 20
        this.maximumTemperature = 25
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.temperature >= this.maximumTemperature) {
            console.log('Max Temp Reached')}
        else 
            this.temperature += 1
        return this.temperature
    }

    down() {
        if (this.temperature === 10) {
            console.log('Min Temp Reached')}
        else 
        this.temperature -= 1
        return this.temperature
    }

    setPowerSavingMode(status) {
        this.maximumTemperature = 32
        return this.maximumTemperature
    }
}

module.exports = Thermostat;