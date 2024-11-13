sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyalty211/redemptions/test/integration/FirstJourney',
		'customerloyalty211/redemptions/test/integration/pages/RedemptionsList',
		'customerloyalty211/redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyalty211/redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);