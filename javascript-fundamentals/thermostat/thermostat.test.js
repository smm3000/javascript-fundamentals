const Thermostat = require('./thermostat');

describe('Thermostat default temp, up & down', () => {
    const thermostat = new Thermostat();

    it('shows the current default temp is at 20', () => {
        expect(thermostat.getTemperature()).toBe(20);
    });

    it('the temp can be increased', () => {
        expect(thermostat.up()).toBe(21)
    });

    it('the temp can be decreased', () => {
        const thermostat = new Thermostat();
        expect(thermostat.down()).toBe(19);
    });
});

describe('minimum possible temperate', () => {
    it('does not go below 10', () => {
        // if you initialize a new instance it starts with 20
        // you will have to bring down the value by using down
        // the test could be that getTemperature is not less than 10
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