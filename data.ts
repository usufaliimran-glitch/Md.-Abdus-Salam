
import { Product, GolfEvent } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: "Ace Performance Polo",
    price: 68.00,
    description: "Moisture-wicking fabric designed for athletic performance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkOXpDPKNHzjeT9pLRMsRXWaQYo_67ewinfoiG5_mEXyAnIQXBQtMv3E7XH85dJXmpteeN9_NCdq6XSOj51ZPaRRmizDd_sdgpOF54vCNbk2ZChtANwJlpqwCLtDXrOsoTu6Dk88HTfLgmsnkkyEEEqpRoyht-oI62efH_FGvJnhcyaB1QujxZgpiucVr25aOQcBDrBp3aoNCP2hoOmm4rVtYKNRVBZKa9czjhYmdbGOYURgjLu1tZ7BYJEI-wkVJn11EjvKFu23z7",
    category: 'Apparel',
    subCategory: 'Polos & Tops',
    isNew: true,
    rating: 4.5,
    reviews: 142,
    colors: ['#1e2a63', '#29abe2'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p2',
    name: "Signature Pleated Skort",
    price: 75.00,
    description: "Built-in shorts with pleated design for elegant movement.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCreS9F7lhRq8h1EzD3tJyf5Stgc3Wa4NBUxL06wWLcjxpL2gmWElC38lKNEI9lB12OsWaiezASPnRJixBTL6JLSSo4k2_g_55KT7N6FSCCN3RAuQPzJYweWvcJBkBiwJFjM6pyhHvvdrl6OCc_GHMEbLvA4L8WWL5K6akopEYYLzHQhI1i0NC09Q8YZ5b7jHsPFtKvwEgUENhvbbgSOZy-PZ_zW0raQW3tBbvG7zNuL6uYhLrmOAi90cb5kiYSb_JgCpIlbU0wUX0c",
    category: 'Apparel',
    subCategory: 'Skirts & Dresses',
    rating: 4.8,
    reviews: 89,
    colors: ['#FFFFFF', '#000000'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'p3',
    name: "Pro Tour Visor",
    price: 24.00,
    originalPrice: 30.00,
    description: "Adjustable fit with moisture-wicking sweatband.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_u_WFYrLXJJ_6slGfmQihEqEjFd0mT5sQigtrMoZY_WZUdXalB_KfRNeqT6XB5B6mq3brwPhhn7Tcdn_OdNbbfrE3qs8QILEHpmter4Q-bHCRZ8QMq2isVn12liPtLbHPbsV_LTujvyzZR04LDqSr-6Ym9Y5b_OUQyfs3yWJfTQOFNL_5ctiYQsUxszOSk1ddWLS4xOpvx7a2VZnTR2QX-6lIFKmkJCIEBAaLTcU6p-Tb29YsPiHs9MVGV39TZ-YtkPcDNdlcG8Up",
    category: 'Accessories',
    subCategory: 'Headwear',
    rating: 4.2,
    reviews: 56,
    colors: ['#FFFFFF', '#1e2a63'],
    sizes: ['One Size']
  },
  {
    id: 'p4',
    name: "Eagle Full-Zip Jacket",
    price: 110.00,
    description: "Water resistant material for those early morning tee times.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoVLJj_fOLPpCnstgM-fkLww8UN5IGoVBnwDS7g3zinmvkH4BTw_pV5dlWosn5LiXUOdFXi--apQQ62mHFa1GNuOcAu-LCodZQz-RRqQ4_x_GTlcxQV700afDgRJqTMfOBJ9czkBKyZ1mrFkzIpyMqgnUPmaW88CxC5bHPIcUJYP-0CMlHeAyD8sY3jrpp4WEWoSY8X1P6EAuFw9IIfOBef0uSyRaJYaQlLApiv2Zt41se2Poh0himeAiqkDcLG235jTuthZJtf0YO",
    category: 'Apparel',
    subCategory: 'Outerwear',
    rating: 4.9,
    reviews: 31,
    colors: ['#1e2a63'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p5',
    name: "Flex Motion Leggings",
    price: 88.00,
    description: "High-waisted support with side pockets for essentials.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGUm7k8y58ZecN3bH_VhiVAX4UqILI-APGP2lKj41R_muU1Zy_Olc41XFm0zYcOxtawwm-fv-UOpFOkJyPhHvjnJ5dpOk0__IHpczhtOVarl6YRvX4v-3xLO6VGL6Cp-oj8GuHVhUudRTXSjrBNfXOAVO6qECqm2ZIW0RfUc0KKfEGmL2zBbWLqoDPr7CWmzyUhpnFOz8BTi7U-HIxgRWedILtJKfubIvzI2aKpxyZYw8Yj8dm8hjO6cJK4JCCbt06su-XIoDjF_c1",
    category: 'Apparel',
    subCategory: 'Pants & Shorts',
    rating: 4.7,
    reviews: 112,
    colors: ['#000000', '#1e2a63'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'p6',
    name: "Birdie Grip Spikeless",
    price: 135.00,
    description: "All-day comfort with a sleek, modern aesthetic.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4qZJR6wj4NPnEyg9otuOh9NhGO5oVLqjkQHq3qpKkjZAAi9sN5B4_saGjt5a2XrahGbUFIl1ZzW1mC77HfPv6vGzdRCNnhlTARkhUApkq-6Xi7pA0L58RfiyK1rpgHPubdXKs_f08EjyvRmlPEws_KSYwx65a4x12cCzCVDgrvrtTytAOWZrGlejrkcX7tWOIYS5YeEBk7DDc_CWjY3Li1hL7o7onLoT0E9fjfpmp2Qvqo69a0puWXTKn84wdSz0qRNPxuSbw_kEp",
    category: 'Accessories',
    subCategory: 'Shoes',
    rating: 4.6,
    reviews: 44,
    colors: ['#FFFFFF', '#29abe2'],
    sizes: ['6', '7', '8', '9', '10']
  },
  {
    id: 'p7',
    name: "Fairway Glow SPF 50 Set",
    price: 65.00,
    description: "Editor's pick for total sun protection and post-game recovery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDayM14kdVYpQLMrn8yuRZ84Dk-UPQsKpt-7pknlL0An-P0xustVnexT9HWUiTD_WsdtEhyazY5aJVqv-B5ZSRXJqOAzWMB5MHjbFAdK7Q0eVlV-O1yGvEu2lKSlE9gG2xZ6y9yGNEsDZJ_RZ90QOV_BCgkbKmSif-Z0wnq8fnnGm_L4U2J7lsXBgLVo5SXLwqFZ-iB3Xa6PSj6jeI11dFsjA7Z5eNK9KE-gs8VVdmhoBrIDO9AtNZgQmyWb4gc3jyHCR-rkXH-b2zb",
    category: 'Beauty',
    subCategory: 'Sunscreen',
    rating: 5.0,
    reviews: 210,
    colors: ['#FFFFFF'],
    sizes: ['Default']
  },
  {
    id: 'p8',
    name: "Hydrating Hand Cream",
    price: 24.00,
    description: "Post-round care to keep your hands soft after hours of gripping clubs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb4hloAj15tloPhDbzekLe9rQM7lo832dKFN0Dbe6ZpI5xMQcnOye4exlXibDyko2LV0u1M576tRfE9LTxPq955zRlE4-TiiKX8bZDvdEp2CphoeWAVC8R7AzAocNT4nowWu2ydPCEXpViukWXWd0zYsXKATIxZsz14grhZgC3fO5h5h50DE4F2il33PlKTl8B8bCaKba3v1aQv0VqC7J_xZfW2s1IrhFdRjwW791r2fMI_M7rzdxP4cz-8bVPHxpx_Vfu22_Xc8nv",
    category: 'Beauty',
    subCategory: 'Skincare',
    rating: 4.4,
    reviews: 67,
    colors: ['#FFFFFF'],
    sizes: ['Default']
  }
];

export const events: GolfEvent[] = [
  {
    id: 'e1',
    title: "Annual Charity Scramble",
    date: "2024-10-15",
    month: "OCT",
    day: "15",
    location: "Oakwood Club, NY",
    description: "Join us for a day of fun, networking, and golf for a good cause at the prestigious Oakwood Club.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCla_glIP87J-yTok3z7DUbKeXU1Zfq4SBqoTK5IXM3LlVJJP0mWnfWZbd5uGOpWZzsNToPlO7W2XJ5O9tcxdyJs8h8rC_iQFHTnjuqlnwncunBYLD1vhRUeehB7nsML7orXbDXKF6Gs5puDw2roFuO0vVDE1wYlCAPmU5e51Y2nCQXYUWCNTBMWkRC2Pt_UrbwVBftqtTWI090JUV2vGu2u81KVwe9iOfqk4OiV98lQh2Tb2epdo08BrDbMePCkj2Y21rt5Ie38edx"
  },
  {
    id: 'e2',
    title: "Women's Swing Clinic",
    date: "2024-11-02",
    month: "NOV",
    day: "02",
    location: "Palm Springs, CA",
    description: "Perfect your swing mechanics with LPGA certified instructors. All skill levels welcome.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGC1eC2vkHwxQqAbItXoRRqN3JApWhGZQG4Pk-_i9KYIr_WhZ4Wdj-2NkKD7_7yAZMfYq9m_YCWwZQxKQxmFea_Slw4tVvjylxBeervTHDyjsTd1T2Q8qDre3U6awvzvClSZ3Mxc7Zp5UKLrSaX6FPhtb5j6nhgcWJoAEu_W5HSBxZiBgoiedldNqHC5EmzCAiMQ3I4q_Bo6sPdEl4V4RmkqSC-9FJMZhHKQiu6j2tTVwSKZZmXyzuj8t9ffTyL6-1imn-kcOJMsvI"
  },
  {
    id: 'e3',
    title: "Golf & Gala Evening",
    date: "2024-11-18",
    month: "NOV",
    day: "18",
    location: "Miami, FL",
    description: "An elegant evening of cocktails, dinner, and awards celebrating the season's achievements.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhcG8rhYXw1NpoKIDUh3cd3y5d0XfTAz5t4z062CmJok5ITRCJiHuIEVBw2Q58U0h1Jb19V-YLgJfjf1IeL8e3FFmP5qVcIpx7snWYMsaJMDQXgxrGGi_k9YiKy-YzoBORc8LA2EdSpkIDC42vuOqKKXeyirBcxrN0mquULvI_okloqdJB4Jcoe2VlsOxis2rnit3HKCiTkLfBWZk02u2f3cY4xnNtWXWwTycBUo3i9bHxQ_K8OT7eq-Kd6Pwdfa3uW738Ai7GTDqq"
  }
];
