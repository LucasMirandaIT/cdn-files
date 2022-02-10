"use strict";
/**
 * Interface CustomWindowProps
 * Use to define the New Relic object NREUM
 * this object is added to the GlobalThis (window)
 * using the NewRelic snippet code in the layout/index.tsx
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * setNewRelicConfig
 * Set the NewRelic script values
 * based on the environment we are running the application on.
 * This will add to the NREUM object the appropriate
 * NewRelic values for Development, Onboarding, Staging or Production.
 */
var setNewRelicConfig = (function (_a) {
    var accountID = _a.accountID, trustKey = _a.trustKey, agentID = _a.agentID, licenseKey = _a.licenseKey, applicationID = _a.applicationID;
    window.NREUM.loader_config = {
        accountID: accountID,
        trustKey: trustKey,
        agentID: agentID,
        licenseKey: licenseKey,
        applicationID: applicationID,
    };
    window.NREUM.info = {
        beacon: 'bam.eu01.nr-data.net',
        errorBeacon: 'bam.eu01.nr-data.net',
        licenseKey: licenseKey,
        applicationID: applicationID,
        sa: 1,
    };
})(newRelicConfig);
exports.default = setNewRelicConfig;
