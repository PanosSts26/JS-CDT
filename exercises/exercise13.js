// exercise13.js
// Simulating ICS control with JavaScript
const icsDevice = {
    id: 'PLC1',
    status: 'inactive',
    toggleStatus: function () {
        this.status = this.status === 'active' ? 'inactive' : 'active';
        console.log(`ICS Device ${this.id} is now ${this.status}`);
    }
};

// Toggling ICS device status every 2 seconds
setInterval(() => {
    icsDevice.toggleStatus();
}, 2000);
