import { 
    SET_USERS_PURCHASES, 
    SET_PURCHASE_DETAIL
} from './types';


export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,       
        payload: _id
    })
}

export function fetchUsersPurchases() {
    return({
        type: SET_USERS_PURCHASES,
        payload:  [
            {
                _id: 0,
               total: 19.40,
               orderNumber: 'A042482343',
               orderDate: new Date().toDateString(),
               creditCard: '-0000',
               user: {
                   name: 'Mack Ramirez',
                   shippingAddress: '1234 columbian st'
               }
            },
            {
                _id: 1,
                total: 30.03,
                orderNumber: '2343433',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mercedes Ramirez',
                    shippingAddress: '34343 Hannon Dr'
                }
            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'B0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 16.40,
                orderNumber: 'ADFasdlfkjwe',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Asher Nelson',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 3.20,
                orderNumber: '5UFISHDFJASUSHI298',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Wold',
                    shippingAddress: '348 Yo State Street'
                }
            },
        ]
    })
}