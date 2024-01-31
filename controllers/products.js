const Product = require("../models/product")

const getAllProducts = async (req, res) => {

    const { category, select } = req.query;

    const queryObject = {}
    let apiData = Product.find(queryObject);

    if (category) {
        queryObject.category = { $regex: category, $options: "i" };
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 9;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData
    console.log(req.query);
    res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find({})
    res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
