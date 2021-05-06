const Category = require("./models/category.model");
require("./config/db.config");

Category.insertMany([
  {
    id: 1000,
    categoryName: "KUHINJA",
    categoryDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categoryImg:
      "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
  },
  {
    id: 1001,
    categoryName: "VRT",
    categoryDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categoryImg:
      "https://images.unsplash.com/photo-1547854760-f580559a870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
  },
  {
    id: 1002,
    categoryName: "SPORT",
    categoryDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categoryImg:
      "https://images.unsplash.com/photo-1605666711391-4797967287aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
  },
  {
    id: 1003,
    categoryName: "RELAX",
    categoryDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categoryImg:
      "https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
  },
  {
    id: 1004,
    categoryName: "DRUGO",
    categoryDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categoryImg:
      "https://images.unsplash.com/photo-1421098518790-5a14be02b243?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff70edd02988d22f0e70a4683bd4f133&auto=format&fit=crop&w=1778&q=80",
  },
])
  .then(() => {
    console.log("Categories added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding: ", err);
  });
