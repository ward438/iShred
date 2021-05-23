const router = require('express').Router();


router.get('/range', async(req, res) => {
    console.log("range")
    res.json({})
        // find all categories
        // be sure to include its associated Products
        // try {
        //     const getAllCategories = await Category.findAll({


    //     });

    //     const categories = getAllCategories.map((product) =>
    //         product.get({ plain: true })
    //     );
    //     res.json({ "categories": categories })

    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

router.get('/', async(req, res) => {
    try {
        let workouts = []; // todo - get from mongo
        res.json(workouts)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    res.json({})
        // find one category by its `id` value
        // be sure to include its associated Products
        // try {
        //     const getAllCategories = await Category.findAll({
        //         where: {
        //             id: req.params.id
        //         }
        //     });
        //     const categories = getAllCategories.map((product) =>
        //         product.get({ plain: true })
        //     );
        //     res.json({ "categories": categories });

    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

router.post('/', async(req, res) => {
    res.json({})
        // create a new category
        // categoryObject = Category.build({ "category_name": req.body.category_name });
        // categoryObject.save();
        // res.status(200).json('200');
});

router.put('/:id', async(req, res) => {
    res.json({})
        // try {
        //     const categoryObject = await Category.findOne({
        //         where: {
        //             id: req.params.id
        //         }
        //     });
        //     categoryObject.category_name = req.body.category_name
        //     categoryObject.save();
        //     res.json({ 'category': categoryObject })
        // } catch (err) {
        //     console.log(err);
        //     res.status(500).json('err');
        // }

});

router.delete('/:id', (req, res) => {
    res.json({})
        // delete a category by its `id` value
});

module.exports = router;