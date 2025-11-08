const products = [
    // --- Section: Minimum 40% Discount ---
    { 
        id: 1, 
        title: 'Atomic Habits', 
        author: 'James Clear',
        price: 499, 
        oldPrice: 899,
        rating: 4.8,
        discount: '44%',
        image: 'https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg' 
    },
    { 
        id: 2, 
        title: 'The Psychology of Money', 
        author: 'Morgan Housel',
        price: 420, 
        oldPrice: 799,
        rating: 4.7,
        discount: '47%',
        image: 'https://mybookmanager.in/wp-content/uploads/2023/08/Untitled-design-50.jpg' 
    },
    { 
        id: 3, 
        title: 'Rich Dad Poor Dad', 
        author: 'Robert Kiyosaki',
        price: 380, 
        oldPrice: 699,
        rating: 4.6,
        discount: '46%',
        image: 'https://minoa.com/cdn/shop/files/5_5b6a122e-f75f-446d-b4b6-c9f82f876772_2400x.png?v=1756473726' 
    },
    { 
        id: 4, 
        title: 'Ikigai: The Japanese Secret to a Long and Happy Life', 
        author: 'Héctor García',
        price: 349, 
        oldPrice: 599,
        rating: 4.5,
        discount: '42%',
        image: 'https://cdn.shopify.com/s/files/1/1163/9680/products/Ikigai_Book.jpg?v=1536585232' 
    },
    { 
        id: 5, 
        title: 'The Monk Who Sold His Ferrari', 
        author: 'Robin Sharma',
        price: 299, 
        oldPrice: 500,
        rating: 4.4,
        discount: '40%',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jG6t7Q8eL.jpg' 
    },

    // --- Section: New Arrivals ---
    { 
        id: 6, 
        title: 'Fourth Wing (The Empyrean, 1)', 
        author: 'Rebecca Yarros',
        price: 899, 
        oldPrice: 1200,
        rating: 4.9,
        discount: '25%',
        image: 'https://online.anyflip.com/rbjhf/cdzs/files/large/dc134fd77f68d97345d21d82874220de.webp?1729681049' 
    },
    { 
        id: 7, 
        title: 'King of Sloth (Kings of Sin)', 
        author: 'Ana Huang',
        price: 650, 
        oldPrice: 850,
        rating: 4.7,
        discount: '23%',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81RkbLwbQDL._AC_UL600_SR600,600_.jpg' 
    },
    { 
        id: 8, 
        title: 'The Heaven & Earth Grocery Store', 
        author: 'James McBride',
        price: 720, 
        oldPrice: 900,
        rating: 4.6,
        discount: '20%',
        image: 'https://static01.nyt.com/images/2023/08/08/books/08james-mcbride-cover/08james-mcbride-cover-articleLarge.jpg?quality=75&auto=webp&disable=upscale' 
    },
    { 
        id: 9, 
        title: 'Iron Flame (The Empyrean, 2)', 
        author: 'Rebecca Yarros',
        price: 950, 
        oldPrice: 1250,
        rating: 4.8,
        discount: '24%',
        image: 'https://static.wixstatic.com/media/060505_85cb8157b11e4e4988f9a03584410598~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,usm_0.66_1.00_0.01/060505_85cb8157b11e4e4988f9a03584410598~mv2.jpg' 
    },
    { 
        id: 10, 
        title: 'Poverty, by India', 
        author: 'T.N. Ninan',
        price: 600, 
        oldPrice: 800,
        rating: 4.3,
        discount: '25%',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71u9K8rK4dL.jpg' 
    },

    // --- Section: Fantasy & Sci-Fi Bestsellers ---
    { 
        id: 11, 
        title: 'Dune', 
        author: 'Frank Herbert',
        price: 599, 
        oldPrice: 850,
        rating: 4.7,
        discount: '30%',
        image: 'https://www.madrasshoppe.com/179163-home_default/dune-deluxe-edition-1-frank-herbert.jpg' 
    },
    { 
        id: 12, 
        title: 'Project Hail Mary', 
        author: 'Andy Weir',
        price: 650, 
        oldPrice: 900,
        rating: 4.9,
        discount: '28%',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMdyp2mQtzvL0q7Lq0pN7DajMkK5103oR9A&s' 
    },
    { 
        id: 13, 
        title: 'The Lord of the Rings', 
        author: 'J.R.R. Tolkien',
        price: 1200, 
        oldPrice: 1800,
        rating: 4.9,
        discount: '33%',
        image: 'https://johnatkinsonbooks.co.uk/wp-content/uploads/2023/12/jrr_tolkien_the_lord_of_the_rings_first_paperback1-scaled.jpg' 
    },
    { 
        id: 14, 
        title: 'Mistborn: The Final Empire', 
        author: 'Brandon Sanderson',
        price: 700, 
        oldPrice: 950,
        rating: 4.8,
        discount: '26%',
        image: 'https://m.media-amazon.com/images/I/A1UiLnAoHcL._AC_UF350,350_QL80_.jpg' 
    },

    // --- Section: Biographies & Memoirs ---
    { 
        id: 15, 
        title: 'Wings of Fire: An Autobiography', 
        author: 'A.P.J. Abdul Kalam',
        price: 350, 
        oldPrice: 500,
        rating: 4.7,
        discount: '30%',
        image: 'https://m.media-amazon.com/images/I/515aLTX6WlL.jpg' 
    },
    { 
        id: 16, 
        title: 'The Diary of a Young Girl', 
        author: 'Anne Frank',
        price: 250, 
        oldPrice: 400,
        rating: 4.6,
        discount: '37%',
        image: 'https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg' 
    },
    { 
        id: 17, 
        title: 'Becoming', 
        author: 'Michelle Obama',
        price: 750, 
        oldPrice: 1100,
        rating: 4.8,
        discount: '32%',
        image: 'https://prh.imgix.net/articles/Becoming_Social_1600x800px_1.jpg' 
    }
];