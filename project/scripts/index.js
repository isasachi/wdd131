
document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.querySelector('.nav-icon');
    const nav = document.querySelector('nav ul');
    
    navIcon.addEventListener('click', function() {
        if (nav.style.display === 'none') {
            nav.style.display = 'flex';
            navIcon.innerHTML = 'x'
        } else {
            nav.style.display = 'none';
            navIcon.innerHTML = '&#9776;';
        }
    });

});

const laptops = [
    {
        name: 'Asus - ROG Zephyrus G14',
        cpu: 'AMD Ryzen 9 8945HS',
        video_card: 'RTX 4070',
        ram: 32,
        ssd: 1024,
        price: 2199.00,
        imageUrl: 'https://shop.asus.com/media/catalog/product/8/3/837144e4316ea3f3d1e8a1abb16c5c03_2.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=439&width=439&canvas=439:439'
    },
    {
        name: 'Acer - Nitro V ANV15',
        cpu: 'Intel Core i7-13620H',
        video_card: 'RTX 4060',
        ram: 16,
        ssd: 512,
        price: 849.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576934_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'Asus - TUF Gaming F15',
        cpu: 'Intel Core i7-13620H',
        video_card: 'RTX 4070',
        ram: 16,
        ssd: 1024,
        price: 1149.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6573/6573673_rd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'Lenovo - LOQ 15.6" Gaming',
        cpu: 'AMD Ryzen 7 7435HS',
        video_card: 'RTX 4060',
        ram: 16,
        ssd: 512,
        price: 999.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578511_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'Asus - ROG Strix G16',
        cpu: 'Intel Core i9-14900HX',
        video_card: 'RTX 4060',
        ram: 32,
        ssd: 1024,
        price: 1699.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578920_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'MSI - Bravo 15',
        cpu: 'AMD Ryzen 5-7535HS',
        video_card: 'RTX 4050',
        ram: 16,
        ssd: 512,
        price: 879.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545083_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'GIGABYTE - 16" 165Hz Gaming Laptop',
        cpu: 'Intel Core i7-13620H',
        video_card: 'RTX 4060',
        ram: 32,
        ssd: 1024,
        price: 1099.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576659_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'Acer - Predator Helios Neo',
        cpu: 'Intel Core i9-14900HX',
        video_card: 'RTX 4060',
        ram: 16,
        ssd: 1024,
        price: 1199.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576933_sd.jpg;maxHeight=640;maxWidth=550'
    },
    {
        name: 'MSI - Katana 15',
        cpu: 'Intel Core i7-13620H',
        video_card: 'RTX 4050',
        ram: 16,
        ssd: 1024,
        price: 999.99,
        imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6567/6567906_sd.jpg;maxHeight=640;maxWidth=550'
    }   
]

function buildLaptopsCatalog(laptops, laptopsNode) {
    laptops.map(laptop => {
        const laptopCard = document.createElement('div');
        laptopCard.classList.add('laptop-card');
        const laptopCardContent = `<img src="${laptop.imageUrl}" alt="${laptop.name}">
                                <h3>${laptop.name}</h3>
                                <p><strong>CPU:</strong> ${laptop.cpu}</p>
                                <p><strong>Video Card:</strong> ${laptop.video_card}</p>
                                <p><strong>RAM:</strong> ${laptop.ram}GB</p>
                                <p><strong>SSD:</strong> ${laptop.ssd}GB</p>
                                <p><strong>Price:</strong> $${laptop.price}</p>
                                <button>Buy</button>`;
        
        laptopCard.innerHTML = laptopCardContent;

        laptopsNode.appendChild(laptopCard);
    })
}

const filteredLaptops = laptops.filter(laptop => laptop.price < 1200);
const featuredLaptopsNode = document.querySelector('.featured-laptops');

buildLaptopsCatalog(filteredLaptops, featuredLaptopsNode)