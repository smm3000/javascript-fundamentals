const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    const thermostat = new Thermostat();

    it('shows the current default temp is at 20', () => {
        expect(thermostat.getTemperature()).toBe(20);
    });

    it('the temp can be increased', () => {
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(21)
    });

    it('the temp can be decreased', () => {
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(19)
    });
});