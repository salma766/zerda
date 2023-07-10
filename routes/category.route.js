import Category from "../models/category.model.js";
import express from "express";

const router = express.Router();




const index = async (req, res, next) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
    } catch (error) {
        return res.json({ message: "error" })
    }
}


const init = async (req, res, next) => {
    let item1 = new Category({
        title: "UI/UX",
        description: "description",
    })

    let item2 = new Category({
        title: "Marketing digital",
        description: "description",
    })
    let item3 = new Category({
        title: "dev",
        description: "description",
    })
    let item4 = new Category({
    title: "Anglais",
        description: "description",
    })

    await item1.save()
    await item2.save()
    await item3.save()
    await item4.save()
    return res.json({ message: "Categories init" })
}

const wipe = async (req, res, next) => {
    Category.deleteMany()
        .then(value => {
            return res.json({ message: 'deleted' })
        })
        .catch(error => {
            console.log('error :', error)
            return res.json({ message: 'error when deleting users' })
        })
}

router.get('/', index)
router.get('/init', init)
router.get('/wipe', wipe)
export default router;