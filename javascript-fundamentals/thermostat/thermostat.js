class Thermostat {
    constructor(temperatue) {
        this.temperatue = 20;
    }

    getTemperature() {
        return this.temperatue;
    }

    up() {
        this.temperatue += 1
        return this.temperatue
    }

    down() {
        if (this.temperatue === 10) {
            console.log('Min Temp Reached')}
        else 
        this.temperatue -= 1
        return this.temperatue
    }
}

module.exports = Thermostat;