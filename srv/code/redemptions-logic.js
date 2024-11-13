/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_loyalty_211Srv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;
    const { data } = request;

    if (!data || !data.customer_ID || !data.redeemedAmount) {
        return;
    }

    const customerId = data.customer_ID;
    const redeemedAmount = data.redeemedAmount;

    // Fetch the customer record
    const customer = await SELECT.one.from(Customers).where({ ID: customerId });

    if (!customer) {
        return;
    }

    // Update the customer's reward points
    const updatedCustomer = {
        totalRewardPoints: customer.totalRewardPoints - redeemedAmount,
        totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints + redeemedAmount
    };

    await UPDATE(Customers).set(updatedCustomer).where({ ID: customerId });
}