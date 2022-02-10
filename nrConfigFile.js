/**
 * Interface CustomWindowProps
 * Use to define the New Relic object NREUM
 * this object is added to the GlobalThis (window)
 * using the NewRelic snippet code in the layout/index.tsx
 */
/**
 * setNewRelicConfig
 * Set the NewRelic script values
 * based on the environment we are running the application on.
 * This will add to the NREUM object the appropriate
 * NewRelic values for Development, Onboarding, Staging or Production.
 */
const setNewRelicConfig = (({ accountID, trustKey, agentID, licenseKey, applicationID }) => {
    window.NREUM.loader_config = {
        accountID,
        trustKey,
        agentID,
        licenseKey,
        applicationID,
    };
    window.NREUM.info = {
        beacon: 'bam.eu01.nr-data.net',
        errorBeacon: 'bam.eu01.nr-data.net',
        licenseKey,
        applicationID,
        sa: 1,
    };
})(newRelicConfig);
export default setNewRelicConfig;
