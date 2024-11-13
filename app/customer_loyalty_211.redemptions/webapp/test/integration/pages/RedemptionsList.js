sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'customerloyalty211.redemptions',
            componentId: 'RedemptionsList',
            contextPath: '/Redemptions'
        },
        CustomPageDefinitions
    );
});