const Product = require("./models/product.model");
require("./config/db.config");

Product.insertMany([
  {
    id: 1,
    name: "Kozarci",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 99,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Pribor",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 89,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Krozniki",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 79,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",

        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 4,
    name: "Hladilnik",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 599,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 5,
    name: "Omarice",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 399,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 6,
    name: "Napa",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 29,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 7,
    name: "Miza",
    category: "Kuhinja",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 9,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 8,
    name: "Stol",
    category: "Vrt",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 4,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1421098518790-5a14be02b243?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff70edd02988d22f0e70a4683bd4f133&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 9,
    name: "Lopata",
    category: "Vrt",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 109,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 10,
    name: "Zoga",
    category: "Sport",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 19,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",

        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",

        active: false,
      },

      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 11,
    name: "Caj",
    category: "Relax",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 29,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },
      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },

      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
  {
    id: 12,
    name: "Rotor",
    category: "Drugo",
    shortDesc:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    longDesc:
      "Unique and meaningful product descriptions have an effect on the visibility in search engines and on the behavior of users in an online shop. Create quality product descriptions that highlight benefits to effectively boost the conversion rate and shopping cart size! AX Semantics content automation software offers you all the features you need to create meaningful product descriptions faster than ever before.",
    price: 229,
    stock: 50,
    sold: 0,
    fotoImg: [
      {
        id: 1,
        lnk:
          "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: true,
      },

      {
        id: 2,
        lnk:
          "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 3,
        lnk:
          "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
      {
        id: 4,
        lnk:
          "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
        active: false,
      },
    ],
  },
])
  .then(() => {
    console.log("Products added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });
