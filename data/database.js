export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    light: '#f7f7f7',
    primary: '#122636',
    yellow: '#ffb900',
    tranparent: 'rgba(0,0,0,0)',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    grey: '#A9A9A9',
};

export const Items = [
    {
        id: 1,
        category: 'shirt',
        productName: 'Micke Shirt',
        productPrice: 1111,
        description: 'Just a shirt you need',
        isOff: true,
        offPercentage: 10,
        productImage: require('../assets/image/shirt/shirt1.jpg'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/shirt/shirt2.png'),
            require('../assets/image/shirt/shirt1.jpg'),
            require('../assets/image/shirt/shirt4.jpg'),

        ],
    },
    {
        id: 2,
        category: 'shirt',
        productName: 'Micke Shirt',
        productPrice: 2222,
        description: 'Just a shirt you need',
        isOff: false,
        productImage: require('../assets/image/shirt/shirt4.jpg'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/shirt/shirt7.jpg'),
            require('../assets/image/shirt/shirt3.jpg'),
            require('../assets/image/shirt/shirt5.jpg'),

        ],
    }, {
        id: 3,
        category: 'jacket',
        productName: 'Baseball Jacket',
        productPrice: 3500,
        description: 'Just a jacket you need',
        isOff: true,
        offPercentage: 18,
        productImage: require('../assets/image/jacket/Baseball.png'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/jacket/Baseball.png'),
            require('../assets/image/jacket/Baseball2.png'),
            require('../assets/image/jacket/Baseball3.png'),
            require('../assets/image/jacket/Baseball1.png'),

        ],
    }, {
        id: 4,
        category: 'jacket',
        productName: 'Biker Jackets',
        productPrice: 2500,
        description: 'Just a shirt you need',
        isOff: false,
        productImage: require('../assets/image/jacket/Biker jackets.jpg'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/jacket/Biker jackets.jpg'),
            require('../assets/image/jacket/Biker jackets1.jpg'),
            require('../assets/image/jacket/Biker jackets2.jpg'),
            require('../assets/image/jacket/Biker jackets3.jpg'),
        ],
    }, {
        id: 5,
        category: 'jacket',
        productName: 'Faux',
        productPrice: 8888,
        description: 'Just a shirt you need',
        isOff: false,
        productImage: require('../assets/image/jacket/Faux.jpg'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/jacket/Faux.jpg'),
            require('../assets/image/jacket/Faux1.jpg'),
            require('../assets/image/jacket/Faux2.jpg'),
            require('../assets/image/jacket/Faux3.jpg'),
        ],
    }, {
        id: 6,
        category: 'jacket',
        productName: 'HUF',
        productPrice: 5555,
        description: 'Just a shirt you need',
        isOff: false,
        productImage: require('../assets/image/jacket/HUF.jpg'),
        isAvailable: true,
        productImageList: [
            require('../assets/image/jacket/HUF.jpg'),
            require('../assets/image/jacket/HUF1.jpg'),
        ],
    },


]
