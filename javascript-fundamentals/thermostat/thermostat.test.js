const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    it('shows the current default temp is at 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);
    });
});