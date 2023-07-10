
import express from "express";
import Quiz from "../models/quiz.model.js";



const router = express.Router();




const index = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find();
        return res.json(quizzes);
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const quizzesByCourse = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find({ 'course': req.params.id });
        return res.json(quizzes);
    } catch (error) {
        return res.json({ message: "error" })
    }
}
const init = async (req, res, next) => {
    let quiz1 = new Quiz({
        title: "React quiz",
        level: "hard",
        description: "advanced React quiz",
        course: "645b99c7e4d372b41cddf1fb",
        questions: [
            {
                text: "What is the full form of HTTP?",
                reponses: [
                    { text: "Hyper text transfer package" },
                    { text: "Hyper text transfer protocol", correct: true },
                    { text: "Hyphenation text test program" },
                    { text: "None of the above" }
                ]
            },
            {
                text: "HTML document start and end with which tag pairs?",
                reponses: [
                    { text: "HTML", correct: true },
                    { text: "WEB" },
                    { text: "HEAD" },
                    { text: "BODY" }
                ]
            },
            {
                text: "Which tag is used to create body text in HTML?",
                reponses: [
                    { text: "HEAD" },
                    { text: "BODY", correct: true },
                    { text: "TITLE" },
                    { text: "TEXT" }
                ]
            },
            {
                text: "Outlook Express is _________",
                reponses: [
                    { text: "E-Mail Client", correct: true },
                    { text: "Browser" },
                    {
                        text: "Search Engine"
                    },
                    { text: "None of the above" }
                ]
            },
            {
                text: "What is a search engine?",
                reponses: [
                    { text: "A hardware component " },
                    {
                        text: "A machinery engine that search data"
                    },
                    { text: "A web site that searches anything", correct: true },
                    { text: "A program that searches engines" }
                ]
            },
            {
                text:
                    "What does the .com domain represents?",
                reponses: [
                    { text: "Network" },
                    { text: "Education" },
                    { text: "Commercial", correct: true },
                    { text: "None of the above" }
                ]
            },
            {
                text: "In Satellite based communication, VSAT stands for? ",
                reponses: [
                    { text: " Very Small Aperture Terminal", correct: true },
                    { text: "Varying Size Aperture Terminal " },
                    {
                        text: "Very Small Analog Terminal"
                    },
                    { text: "None of the above" }
                ]
            },
            {
                text: "What is the full form of TCP/IP? ",
                reponses: [
                    { text: "Telephone call protocol / international protocol" },
                    { text: "Transmission control protocol / internet protocol", correct: true },
                    { text: "Transport control protocol / internet protocol " },
                    { text: "None of the above" }
                ]
            },
            {
                text:
                    "What is the full form of HTML?",
                reponses: [
                    { text: "Hyper text marking language" },
                    { text: "Hyphenation text markup language " },
                    { text: "Hyper text markup language", correct: true },
                    { text: "Hyphenation test marking language" }
                ]
            },
            {
                text: "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
                reponses: [
                    { text: "Browsers " },
                    { text: "Search Engines", correct: true },
                    { text: "News Group" },
                    { text: "None of the above" }
                ]
            }
        ]
    })

    await quiz1.save()

    return res.json({ message: "database init" })
}

const getById = async (req, res, next) => {
    Quiz.findOne({ '_id': req.params.id })
        .then((quiz) => { return res.json(quiz) })
        .catch((reason) => { return res.status(201).send(JSON.stringify({ status: 'error', message: "error" })) })
}

router.get('/', index)
router.get('/quizzesByCourse/:id', quizzesByCourse)
router.get('/init', init)
router.get('/:id', getById)

export default router;