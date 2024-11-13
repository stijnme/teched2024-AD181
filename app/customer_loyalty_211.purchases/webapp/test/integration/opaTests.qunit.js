sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customerloyalty211/purchases/test/integration/FirstJourney',
		'customerloyalty211/purchases/test/integration/pages/PurchasesList',
		'customerloyalty211/purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customerloyalty211/purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);