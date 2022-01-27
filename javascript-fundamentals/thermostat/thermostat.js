class Thermostat {
    constructor(temperatue) {
        this.temperatue = 20;
    }

    getTemperature() {
        return this.temperatue;
    }

    up() {
        this.temperatue += 1
    }

    down() {
        this.temperatue -= 1
    }
}

module.exports = Thermostat;