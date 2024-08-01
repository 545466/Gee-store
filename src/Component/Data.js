const Data = [
  {
    id: 1,
    Title: "English wear",
    Category: "Fashion",
    Price: "₦5,000.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692733670%2FJD%2Fusers%2F64e506dd1d49b0553146c420%2Fproduct%2FProducts_2F874DE3DF-0C02-49EE-ABD8-23017C62D4BF.png&w=1080&q=75",
  },
  {
    id: 2,
    Title: "Ankara",
    Category: "Fashion",
    Price: "₦15,450.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1714643539%2FJD%2Fusers%2F66335cec47487ac75e6c5232%2Fproduct%2FProducts_2FIMG-20240502-WA0148.jpg&w=1080&q=75",
  },
  {
    id: 3,
    Title: "Classy bag",
    Category: "Bag",
    Price: "₦9,300.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1691856520%2FJD%2Fusers%2F64d7a9e12f5f553562e78809%2Fproduct%2FProducts_2FIMG-20230812-WA0201.jpg&w=1080&q=75",
  },
  {
    id: 4,
    Title: "Stripe Sneakers",
    Category: "Shoes",
    Price: "₦61,800.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1707516717%2FJD%2Fusers%2F64c393fc778e62425349e688%2Fproduct%2FProducts_2FIMG-20240205-WA0059.jpg&w=1080&q=75",
  },
  {
    id: 5,
    Title: "Phone case",
    Category: "Accessories",
    Price: "₦2,100.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690994791%2FJD%2Fusers%2F64c3246ad253ace301b6faca%2Fproduct%2FProducts_2FBFB4DB30-2692-4929-B72F-7BFFA4506555.jpg&w=1080&q=75",
  },
  {
    id: 6,
    Title: "Fully boxed Gucci bag",
    Category: "Bag",
    Price: "₦16,500.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690760680%2FJD%2Fusers%2F64c6e1bd35e1d1a62f4f7fc2%2Fproduct%2FProducts_2FIMG_6015.jpg&w=1080&q=75",
  },
  {
    id: 7,
    Title: "Versace",
    Category: "Shoes",
    Price: "₦139,050.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692086961%2FJD%2Fusers%2F64db2d041d49b055313ee556%2Fproduct%2FProducts_2FIMG-20230714-WA0012.jpg&w=1080&q=75",
  },
  {
    id: 8,
    Title: "Treadmill",
    Category: "Sport",
    Price: "₦247,200.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1718892898%2FJD%2Fusers%2F666e2c618068a0917f6e7883%2Fproduct%2FProducts_2Fe47566ee4dba4301a58f172f8ba47e4a.jpg&w=1080&q=75",
  },
  {
    id: 9,
    Title: "iPhone 11 65gb",
    Category: "Phones",
    Price: "₦566,500.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1710631143%2FJD%2Fusers%2F64c3246ad253ace301b6faca%2Fproduct%2FProducts_2FIMG_2929.jpg&w=1080&q=75",
  },
  {
    id: 10,
    Title: "Zara",
    Category: "Fragrance",
    Price: "₦1,650.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692981266%2FJD%2Fusers%2F64cfa5b8ba98adbd18acd18c%2Fproduct%2FProducts_2F1_20_10.jpg&w=1080&q=75",
  },
  {
    id: 11,
    Title: "Thick Luxury Shirt",
    Category: "Fashion",
    Price: "₦16,000.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1694199924%2FJD%2Fusers%2F64fb6bf52744e6ffdce676f2%2Fproduct%2FProducts_2F3715b46627c34f31978b441d6eab0a55.jpg&w=1080&q=75",
  },
  {
    id: 12,
    Title: "English wear",
    Category: "Fashion",
    Price: "₦33,500.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692733670%2FJD%2Fusers%2F64e506dd1d49b0553146c420%2Fproduct%2FProducts_2F874DE3DF-0C02-49EE-ABD8-23017C62D4BF.png&w=1080&q=75",
  },
  {
    id: 13,
    Title: "Ladies Corporate Shoe",
    Category: "Shoes",
    Price: "₦978,500.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1706383627%2FJD%2Fusers%2F65b555b7a70634ceedc4944b%2Fproduct%2FProducts_2FIMG-20240127-WA0036.jpg&w=1080&q=75",
  },
  {
    id: 14,
    Title: "Men's Corporate Shoe",
    Category: "Shoes",
    Price: "₦40,200.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1691781101%2FJD%2Fusers%2F64d684812f5f553562e5ec99%2Fproduct%2FProducts_2FIMG-20230811-WA0057.jpg&w=1080&q=75",
  },
  {
    id: 15,
    Title: "Oil Perfume",
    Category: "Fragrance",
    Price: "₦6,000",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692212621%2FJD%2Fusers%2F64da5478b21a0845ef838a96%2Fproduct%2FProducts_2FScreenshot_20230629-092826.png&w=1080&q=75",
  },
  {
    id: 16,
    Title: "Tote Bag",
    Category: "Bag",
    Price: "₦5,700.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1693074241%2FJD%2Fusers%2F64e916f31d49b055314bdff5%2Fproduct%2FProducts_2FInShot_20230815_162619889.jpg&w=1080&q=75",
  },
  {
    id: 17,
    Title: "Denim Bag",
    Category: "Bag",
    Price: "₦10,300.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690759768%2FJD%2Fusers%2F64c6e1bd35e1d1a62f4f7fc2%2Fproduct%2FProducts_2FIMG_5994.jpg&w=1080&q=75",
  },
  {
    id: 18,
    Title: "Tom Ford",
    Category: "Fragrance",
    Price: "₦1,550.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1696668012%2FJD%2Fusers%2F64c6e1bd35e1d1a62f4f7fc2%2Fproduct%2FProducts_2FIMG_9217.jpg&w=1080&q=75",
  },
  {
    id: 19,
    Title: "Clothes",
    Category: "Fashion",
    Price: "₦29,750.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690976301%2FJD%2Fusers%2F64c6e3be35e1d1a62f4f892f%2Fproduct%2FProducts_2FIMG-20230801-WA0065.jpg&w=1080&q=75",
  },
  {
    id: 20,
    Title: "Unisex Sport boxer",
    Category: "Fashion",
    Price: "₦15,450.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1714633697%2FJD%2Fusers%2F6633290f47487ac75e67feb7%2Fproduct%2FProducts_2F1.jpg&w=1080&q=75",
  },
  {
    id: 21,
    Title: "Samsung s9",
    Category: "Phones",
    Price: "₦190,550.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1710465029%2FJD%2Fusers%2F64c3246ad253ace301b6faca%2Fproduct%2FProducts_2FIMG_2968.jpg&w=1080&q=75",
  },
  {
    id: 22,
    Title: "Infinx S5 Lite",
    Category: "Phones",
    Price: "₦499,550.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1692049841%2FJD%2Fusers%2F64c393fc778e62425349e688%2Fproduct%2FProducts_2FIMG-20230814-WA0370.jpg&w=1080&q=75",
  },
  {
    id: 23,
    Title: "Gucci Bag",
    Category: "Bag",
    Price: "₦12,400.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690760058%2FJD%2Fusers%2F64c6e1bd35e1d1a62f4f7fc2%2Fproduct%2FProducts_2FIMG_5950.jpg&w=1080&q=75",
  },
  {
    id: 24,
    Title: "Long Sleeve Thrifts",
    Category: "Fashion",
    Price: "₦29,750.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1701237200%2FJD%2Fusers%2F654e1791655675bfa5194ac4%2Fproduct%2FProducts_2F20231127_220411.jpg&w=1080&q=75",
  },
  {
    id: 25,
    Title: "Google pixel 8",
    Category: "Phones",
    Price: "₦176,150.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1699619167%2FJD%2Fusers%2F654e1791655675bfa5194ac4%2Fproduct%2FProducts_2FIMG-20231110-WA0017.jpg&w=1080&q=75",
  },
  {
    id: 26,
    Title: "T-Shirts",
    Category: "Fashion",
    Price: "₦10,300.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1718947674%2FJD%2Fusers%2F66750d058068a0917fed0f0a%2Fproduct%2FProducts_2FWhatsApp_20Image_202024-05-08_20at_2013.36.55_1ba4157e.jpg&w=1080&q=75",
  },

  {
    id: 27,
    Title: "2TB flash drive",
    Category: "Accessories",
    Price: "₦9,800.00",
    Image:
      "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1690986576%2FJD%2Fusers%2F64c393fc778e62425349e688%2Fproduct%2FProducts_2FIMG_20230802_152344_785.jpg&w=1080&q=75",
  },
  {
    id: 28,
    Title:
      "Apple Watch Series 3 42mm",
    Category: "Accessories",
    Price: "₦257,500.00",
    Image: "https://justdeal.ng/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fjustdeal%2Fimage%2Fupload%2Fw_400%2Cq_auto%2Cf_auto%2Fv1699875936%2FJD%2Fusers%2F64c3246ad253ace301b6faca%2Fproduct%2FProducts_2F74E97617-D521-41EE-B859-D665FE80E178.jpg&w=1080&q=75",
  },
];

export default Data;
