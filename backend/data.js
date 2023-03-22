import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Yohannes',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: true,
    },
    {
      name: 'Tim',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false,
    },

    {
      name: 'consultant',
      email: 'consultant@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false,
    },
    {
      name: 'Service',
      email: 'service@gmail.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: 'Zara Slim shirt',
      slug: 'zara-slim-shirt',
      category: 'Shirts',
      image: '/assets/shirt1.jpg', // 679px × 829px
      price: 30,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 19770,
      description: 'high quality shirt',
    },
    {
      //_id: "2",
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt2.jpg',
      price: 40,
      countInStock: 6,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 35413,
      description: 'high quality product',
    },
    {
      //_id: "3",
      name: 'M&D Fit Shirt',
      slug: 'm&d-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt3.jpg',
      price: 25,
      countInStock: 2,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 2444,
      description: 'high quality product',
    },
    {
      //_id: "4",
      name: 'Lisa Fit Shirt',
      slug: 'lisa-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt4.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4,
      numReviews: 177674,
      description: 'high quality product',
    },
    {
      // _id: "5",
      name: 'LisaConsult Fit Shirt',
      slug: 'lisaConsult-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 17679,
      description: 'high quality product',
    },
    {
      //_id: "6",
      name: 'LisaBoutique Fit Shirt',
      slug: 'lisaBoutique-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt6.jpg',
      price: 20,
      countInStock: 30,
      brand: 'Puma',
      rating: 4,
      numReviews: 267670,
      description: 'high quality product',
    },

    {
      //_id: "7",
      name: 'Confort Fit Shirt',
      slug: 'confort-fit-shirt',
      category: 'Shirts',
      image: '/assets/shirt7.jpg',
      price: 20,
      countInStock: 10,
      brand: 'Puma',
      rating: 4,
      numReviews: 17672,
      description: 'high quality product',
    },

    {
      // _id: "8",
      name: 'Nakfa Fit Shirt',
      slug: 'nakfana-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt8.jpg',
      price: 40,
      countInStock: 5,
      brand: 'Puma',
      rating: 4,
      numReviews: 37672,
      description: 'high quality product',
    },

    {
      //_id: "9",
      name: 'Nebu Fit Shirt',
      slug: 'nebu-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt9.jpg',
      price: 40,
      countInStock: 34,
      brand: 'Puma',
      rating: 4,
      numReviews: 244545,
      description: 'high quality product',
    },

    {
      // _id: "10",
      name: 'Siwa Fit Shirt',
      slug: 'siwa-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt10.jpg',
      price: 20,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 36552,
      description: 'high quality product',
    },

    {
      //_id: "11",
      name: 'Asmara Fit Shirt',
      slug: 'asmarino-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt11.jpg',
      price: 23,
      countInStock: 3,
      brand: 'Puma',
      rating: 4.6,
      numReviews: 15650,
      description: 'high quality product',
    },

    {
      // _id: "12",
      name: 'Lilay Fit Shirt',
      slug: 'lilay-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt12.jpg',
      price: 9.99,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 25653,
      description: 'high quality product',
    },

    {
      //_id: "13",
      name: 'Akrur Fit Shirt',
      slug: 'akrur-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt13.jpg',
      price: 50,
      countInStock: 0,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 665657,
      description: 'high quality product',
    },

    {
      // _id: "14",
      name: 'Hebo Fit Shirt',
      slug: 'hebo-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt14.jpg',
      price: 10,
      countInStock: 30,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 565656,
      description: 'high quality product',
    },

    {
      //_id: "15",
      name: 'Segen Fit Shirt',
      slug: 'segen-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt15.jpg',
      price: 40,
      countInStock: 10,
      brand: 'Puma',
      rating: 4,
      numReviews: 4544,
      description: 'high quality product',
    },

    {
      // _id: "16",
      name: 'Lilo Fit Shirt',
      slug: 'lilo-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt16.jpg',
      price: 60,
      countInStock: 130,
      brand: 'Puma',
      rating: 4,
      numReviews: 456,
      description: 'high quality product',
    },

    {
      //_id: "17",
      name: 'Yohannes Fit Shirt',
      slug: 'yohannes-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt17.jpg',
      price: 100,
      countInStock: 3,
      brand: 'Akrur',
      rating: 5,
      numReviews: 872,
      description: 'high quality product',
    },

    {
      // _id: "18",
      name: 'Tekle Fit Shirt',
      slug: 'tekle-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt18.jpg',
      price: 20,
      countInStock: 5,
      brand: 'Akrur',
      rating: 4.7,
      numReviews: 134,
      description: 'high quality product',
    },
    {
      //_id: "19",
      name: 'Wow Fit Shirt',
      slug: 'wow-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt19.jpg',
      price: 50,
      countInStock: 6,
      brand: 'Nike',
      rating: 4.6,
      numReviews: 234,
      description: 'high quality product',
    },

    {
      // _id: "20",
      name: 'Women Fit Shirt',
      slug: 'women-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt20.jpg',
      price: 23,
      countInStock: 8,
      brand: 'Puma',
      rating: 4,
      numReviews: 345,
      description: 'high quality product',
    },

    {
      //_id: "21",
      name: 'Boys Fit Shirt',
      slug: 'boys-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt21.jpg',
      price: 18,
      countInStock: 7,
      brand: 'Men',
      rating: 4,
      numReviews: 863,
      description: 'high quality product',
    },

    {
      // _id: "22",
      name: 'Girls Fit Shirt',
      slug: 'girls-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt22.jpg',
      price: 28,
      countInStock: 4,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 648,
      description: 'high quality product',
    },
    {
      //_id: "23",
      name: 'Youths Fit Shirt',
      slug: 'youths-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt23.jpg',
      price: 19,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 220,
      description: 'high quality product',
    },

    {
      // _id: "24",
      name: 'America Fit Shirt',
      slug: 'america-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt24.jpg',
      price: 24,
      countInStock: 9,
      brand: 'Men',
      rating: 4.5,
      numReviews: 9634,
      description: 'high quality product',
    },

    {
      //_id: "25",
      name: 'ERI Fit Shirt',
      slug: 'eri-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt25.jpg',
      price: 20,
      countInStock: 6,
      brand: 'Men',
      rating: 4,
      numReviews: 248,
      description: 'high quality product',
    },

    {
      // _id: "26",
      name: 'Dr Fit Shirt',
      slug: 'dr-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt26.jpg',
      price: 30,
      countInStock: 6,
      brand: 'Men',
      rating: 4.5,
      numReviews: 29453,
      description: 'high quality product',
    },

    {
      //_id: "27",
      name: 'MERN Fit Shirt',
      slug: 'mern-fit-Shirt',
      category: 'Shirts',
      image: '/assets/shirt27.jpg',
      price: 30,
      countInStock: 8,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 129,
      description: 'high quality product',
    },

    {
      // _id: "28",
      name: 'Elegant Slim Suit',
      slug: 'elegant-slim-suit',
      category: 'Suits',
      image: '/assets/suit1.jpg', // 679px × 829px
      price: 130,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 3863,
      description: 'high quality shirt',
    },

    {
      //_id: "29",
      name: 'Awesome Fit Suit',
      slug: 'awesome-fit-suit',
      category: 'Suits',
      image: '/assets/suit2.jpg',
      price: 240,
      countInStock: 6,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 269,
      description: 'high quality product',
    },
    {
      //_id: "30",
      name: 'M&D Fit Suit',
      slug: 'm&d-fit-suit',
      category: 'Suits',
      image: '/assets/suit3.jpg',
      price: 125,
      countInStock: 2,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 6895,
      description: 'high quality product',
    },

    {
      //_id: "31",
      name: 'Lisa Fit Suit',
      slug: 'lisu-fit-suit',
      category: 'Suits',
      image: '/assets/suit4.jpg',
      price: 205,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 714,
      description: 'high quality product',
    },

    {
      //_id: "32",
      name: 'LisaConsult Fit Suit',
      slug: 'lisaConsult-fit-suit',
      category: 'Suits',
      image: '/assets/suit5.jpg',
      price: 165,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 2580,
      description: 'high quality product',
    },

    {
      //_id: "33",
      name: 'LisaBoutique Fit Suit',
      slug: 'lisaBoutique-fit-suit',
      category: 'Suits',
      image: '/assets/suit6.jpg',
      price: 260,
      countInStock: 10,
      brand: 'Puma',
      rating: 4.4,
      numReviews: 2973,
      description: 'high quality product',
    },

    {
      //_id: "34",
      name: 'Confort Fit Suit',
      slug: 'confort-fit-suit',
      category: 'Suits',
      image: '/assets/suit7.jpg',
      price: 190,
      countInStock: 9,
      brand: 'Puma',
      rating: 4,
      numReviews: 27890,
      description: 'high quality product',
    },
    {
      // _id: "35",
      name: 'Nakfa Fit Suit',
      slug: 'nakfa-fit-suit',
      category: 'Suits',
      image: '/assets/suit8.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Puma',
      rating: 4,
      numReviews: 23790,
      description: 'high quality product',
    },

    {
      //_id: "36",
      name: 'Semhar Fit Suit',
      slug: 'semhar-fit-suit',
      category: 'Suits',
      image: '/assets/suit9.jpg',
      price: 160,
      countInStock: 3,
      brand: 'Nike',
      rating: 4,
      numReviews: 7892,
      description: 'high quality product',
    },

    {
      // _id: "37",
      name: 'Akrur Fit Suit',
      slug: 'akrurian-fit-suit',
      category: 'Suits',
      image: '/assets/suit10.jpg',
      price: 160,
      countInStock: 5,
      brand: 'Puma',
      rating: 4,
      numReviews: 349,
      description: 'high quality product',
    },

    {
      //_id: "38",
      name: 'Lilo Fit Suit',
      slug: 'lilo-fit-suit',
      category: 'Suits',
      image: '/assets/suit11.jpg',
      price: 200,
      countInStock: 2,
      brand: 'Puma',
      rating: 4,
      numReviews: 2090,
      description: 'high quality product',
    },

    {
      // _id: "39",
       name: 'Wedi Fit Suit',
       slug: 'wedi-fit-suit',
       category: 'Suits',
       image: '/assets/suit12.jpg',
       price: 320,
       countInStock: 3,
       brand: 'Puma',
       rating: 4.5,
       numReviews: 2095,
       description: 'high quality product',
     },

     {
      //_id: "40",
      name: 'Lefay Fit Suit',
      slug: 'lefay-fit-suit',
      category: 'Suits',
      image: '/assets/suit13.jpg',
      price: 120,
      countInStock: 12,
      brand: 'Puma',
      rating: 4,
      numReviews: 3492,
      description: 'high quality product',
    },

    {
      // _id: "41",
       name: 'Limamle Fit Suit',
       slug: 'limamle-fit-suit',
       category: 'Suits',
       image: '/assets/suit14.jpg',
       price: 320,
       countInStock: 0,
       brand: 'Nike',
       rating: 4.5,
       numReviews: 2340,
       description: 'high quality product',
     },

     {
      //_id: "42",
      name: 'Arug Fit Suit',
      slug: 'arug-fit-suit',
      category: 'Suits',
      image: '/assets/suit15.jpg',
      price: 145,
      countInStock: 0,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 2890,
      description: 'high quality product',
    },

    {
      // _id: "43",
       name: 'Akrur Fit Trousers',
       slug: 'akrur-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers1.jpg',
       price: 110,
       countInStock: 11,
       brand: 'Puma',
       rating: 4,
       numReviews: 3690,
       description: 'high quality product',
     },

     {
      //_id: "44",
      name: 'Lilo Fit Trousers',
      slug: 'lilo-fit-trousers',
      category: 'Trousers',
      image: '/assets/trousers1.jpg',
      price: 60,
      countInStock: 11,
      brand: 'Puma',
      rating: 4,
      numReviews: 98670,
      description: 'high quality product',
    },

    {
      // _id: "45",
       name: 'Hebo Fit Trousers',
       slug: 'hebo-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers2.jpg',
       price: 40,
       countInStock: 3,
       brand: 'Puma',
       rating: 4,
       numReviews: 9746,
       description: 'high quality product',
     },

     {
      //_id: "46",
      name: 'Aster Fit Trousers',
      slug: 'aster-fit-trousers',
      category: 'Trousers',
      image: '/assets/trousers3.jpg',
      price: 230,
      countInStock: 12,
      brand: 'Puma',
      rating: 3,
      numReviews: 2398,
      description: 'high quality product',
    },

    {
      // _id: "47",
       name: 'Limamle Fit Trousers',
       slug: 'limamle-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers4.jpg',
       price: 210,
       countInStock: 8,
       brand: 'Puma',
       rating: 4,
       numReviews: 768,
       description: 'high quality product',
     },

     {
      //_id: "48",
      name: 'Yes Fit Trousers',
      slug: 'yes-fit-trousers',
      category: 'Trousers',
      image: '/assets/trousers5.jpg',
      price: 130,
      countInStock: 110,
      brand: 'Nike',
      rating: 3,
      numReviews: 8903,
      description: 'high quality product',
    },

    {
      // _id: "49",
       name: 'Beautiful Fit Trousers',
       slug: 'beautiful-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers6.jpg',
       price: 120,
       countInStock: 40,
       brand: 'Puma',
       rating: 3,
       numReviews: 29803,
       description: 'high quality product',
     },
 
     {
       //_id: "50",
       name: 'People Fit Trousers',
       slug: 'people-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers7.jpg',
       price: 134,
       countInStock: 30,
       brand: 'Puma',
       rating: 4,
       numReviews: 29757,
       description: 'high quality product',
     },
 
     {
       //_id: "51",
       name: 'Tim Fit Trousers',
       slug: 'tim-fit-trousers',
       category: 'Trousers',
       image: '/assets/trousers8.jpg',
       price: 142,
       countInStock: 20,
       brand: 'Puma',
       rating: 5,
       numReviews: 2220,
       description: 'high quality product',
     },
  ],
};
export default data;
