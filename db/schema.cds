using { S4HANA_Joule_Product } from '../srv/external/S4HANA_Joule_Product.cds'; 
namespace customer_loyalty_211;
using { cuid, managed } from '@sap/cds/common';

@assert.unique: { name: [name] }
entity Customers : cuid, managed {
  name: String(100) @mandatory;
  email: String(100);
  customerNumber: Integer;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
  purchases: Association to many Purchases on purchases.customer = $self;
  redemptions: Association to many Redemptions on redemptions.customer = $self;
}

@assert.unique: { purchaseValue: [purchaseValue] }
entity Purchases : cuid {
  purchaseValue: Integer @mandatory;
  rewardPoints: Integer;
  selectedProduct: String(100);
  customer: Association to Customers;
}

@assert.unique: { redeemedAmount: [redeemedAmount] }
entity Redemptions : cuid {
  redeemedAmount: Integer @mandatory;
  customer: Association to Customers;
}

