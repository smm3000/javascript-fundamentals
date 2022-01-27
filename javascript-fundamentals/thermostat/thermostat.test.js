const Thermostat = require('./thermostat');

describe('Thermostat default temp, up & down', () => {
    const thermostat = new Thermostat();

    it('shows the current default temp is at 20', () => {
        expect(thermostat.getTemperature()).toBe(20);
    });

    it('the temp can be increased', () => {
        expect(thermostat.up()).toBe(21);
    });

    it('the temp can be decreased', () => {
        const thermostat = new Thermostat();
        expect(thermostat.down()).toBe(19);
    });
});

describe('minimum possible temperate', () => {
    it('does not go below 10', () => {
        const thermostat = new Thermostat();
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBeGreaterThanOrEqual(10);
    })
})

describe('maximum possible temperate', () => {
    it('temp does not exceed 25 when PSM is on', () => {
        const thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBeLessThanOrEqual(25);
    });
});