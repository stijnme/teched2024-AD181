using customer_loyalty_211Srv as service from '../../srv/service';
using from '../annotations';

annotate service.Purchases with @(
    UI.FieldGroup #Main : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : purchaseValue,
            },
            {
                $Type : 'UI.DataField',
                Value : selectedProduct,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Customer',
                Value : customer_ID,
            },
        ],
    }
);

annotate service.Purchases with {
    selectedProduct @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'A_ProductBasicText',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : selectedProduct,
                    ValueListProperty : 'Product',
                },
            ],
            Label : 'Product',
        },
        Common.ValueListWithFixedValues : true
)};

