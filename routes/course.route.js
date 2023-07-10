import Course from "../models/course.model.js";
import express from "express";
import { Role } from "./auth.route.js";
import { securedWithToken } from "../middlewares/jwt.js";
import Participation from "../models/participation.model.js";
import { ParticipationStatus } from "../models/participation-status.js";
import mongoose from "mongoose";
import fileUploadMiddleware from "../middlewares/upload-middleware.js";

const router = express.Router();




const index = async (req, res, next) => {
    try {
        let courses = [];

        if (req.user.role === Role.admin) {
            courses = await Course.find().populate('formateur').populate('category');
        } else if (req.user.role === Role.formateur) {
            courses = await Course.find({ 'formateur': req.user.id }).populate('formateur').populate('category');
        }
        return res.json(courses);
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find().populate('formateur').populate('category');
        return res.json(courses);
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const getCourseById = async (req, res, next) => {
    try {
        const course = await Course.findOne({ '_id': req.params.id }).populate('formateur').populate('category');
        const participation = await Participation.findOne({ 'course': req.params.id, 'etudiant': req.user.id });

        const isUserParticipated = (participation) ? participation.approved : ParticipationStatus.isNotSubscribed

        return res.json({ ...course._doc, isParticipated: isUserParticipated });
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const getCoursesByEtudiant = async (req, res, next) => {
    try {
        const participations = await Participation
            .find({ 'etudiant': req.user.id })
            .populate({
                path: 'course',
                populate: [
                    { path: 'formateur' },
                    { path: 'category' }
                ]
            });
        return res.json(participations);
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const getCoursesByFormateur = async (req, res, next) => {
    try {
        const participations = await Participation
            .find({ 'formateur': req.user.id })
            .populate('etudiant')
            .populate({
                path: 'course',
                populate: [
                    { path: 'formateur' },
                    { path: 'category' }
                ]
            });
        return res.json(participations);
    } catch (error) {
        return res.json({ message: "error" })
    }
}


const enrollCourse = async (req, res, next) => {

    const course = await Course.findOne({ '_id': req.params.courseId }).populate('formateur').populate('category');
    let participation = new Participation({
        course: req.params.courseId,
        formateur: course._doc.formateur,
        etudiant: req.user.id,
        approved: ParticipationStatus.pending
    })
    participation.save()
        .then(async result => {
            return res.status(200).send(JSON.stringify({
                status: "success",
                message: "Course enrolled!"
            }))
        })
        .catch(error => {
            console.log(error)
            res.status(201).send(JSON.stringify({
                status: "error",
                message: "An error occured when adding participation!"
            }))
        })

}

const handlePartipation = async (req, res, next) => {
    const { approved } = req.body
    Participation.findOneAndUpdate({ '_id': req.params.id }, { $set: { approved: approved } })
        .then((result) => {
            return res.status(200).send(JSON.stringify({ status: 'success', message: 'participation udpated successfully' }))
        })
        .catch((reason) => {
            return res.status(201).send({ status: 'error', message: 'something went wrong' })
        })
}

const add = (req, res, next) => {

    let course = new Course({
        title: req.body.title,
        description: req.body.description,
        images: req.files.map(file => file.filename),
        price: req.body.price,
        formateur: req.user.id,
        category: req.body.category,
        lectures: [],
        duration: req.body.duration,
        level: req.body.level,
    })
    course.save()
        .then(async result => {
            const course = await Course.findOne({ _id: result._id }).populate('formateur').populate('category');
            return res.status(200).send(JSON.stringify(course))
        })
        .catch(error => {
            console.log(error)
            res.status(201).send(JSON.stringify({
                status: "error",
                message: "An error occured when adding course!"
            }))
        })

}

const addlectureToCourse = (req, res, next) => {

    Course.findOne({ '_id': req.params.id })
        .then(async (course) => {
            const newLecture = {
                _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId for the lecture
                title: req.body.title,
                description: req.body.description,
                attachments: []
            };
            course.lectures.push(newLecture)
            await course.save();
            return res.status(200).send(JSON.stringify(newLecture))
        })
        .catch((reason) => {
            console.log(reason)
            return res.status(201).send({ status: 'error', message: 'something went wrong' })
        })

}

const update = (req, res, next) => {
    const updated = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        duration: req.body.duration,
        level: req.body.level,
        category: req.body.category._id
    }
    Course.findOneAndUpdate({ '_id': req.params.id }, { $set: updated })
        .then(async (course) => {
            return res.status(200).send(JSON.stringify({ status: 'success', message: 'course updated successfully' }))
        })
        .catch((reason) => {
            console.log(reason)
            return res.status(201).send({ status: 'error', message: 'something went wrong' })
        })

}

const deleteLectureFromCourse = (req, res, next) => {
    Course.findOne({ '_id': req.params.courseId })
        .then(async (course) => {
            const lectureId = req.params.lectureId;
            const lectureIndex = course.lectures.findIndex(lecture => lecture._id.toString() === lectureId);

            if (lectureIndex === -1) {
                return res.status(404).send({ status: 'error', message: 'Lecture not found' });
            }

            course.lectures.splice(lectureIndex, 1);
            await course.save();

            return res.status(200).send({ status: 'success', message: 'Lecture deleted successfully' });
        })
        .catch((reason) => {
            return res.status(500).send({ status: 'error', message: 'Something went wrong' });
        });
}

const init = async (req, res, next) => {
    let course1 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b8a56dfcea71f076fb38b",
        category: "644a8a79c53062f495102207"
    })
    let course2 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b8a56dfcea71f076fb38b",
        category: "644a8a79c53062f495102207"
    })
    let course3 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b8a56dfcea71f076fb38b",
        category: "644a8a79c53062f495102207"
    })
    let course4 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b8a56dfcea71f076fb38b",
        category: "644a8a79c53062f495102207"
    })
    let course5 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b967c2cb35dac77bd9eeb",
        category: "644a8a79c53062f495102207"
    })
    let course6 = new Course({
        title: "title",
        description: "description",
        images: ["images", "images", "images"],
        price: "price",
        formateur: "645b967c2cb35dac77bd9eeb",
        category: "644a8a79c53062f495102207"
    })
    await course1.save()
    await course2.save()
    await course3.save()
    await course4.save()
    await course5.save()
    await course6.save()

    return res.json({ message: "database init" })
}

const wipe = async (req, res, next) => {
    Course.deleteMany()
        .then(value => {
            return res.json({ message: 'deleted' })
        })
        .catch(error => {
            console.log('error :', error)
            return res.json({ message: 'error when deleting users' })
        })
}

router.get('/', securedWithToken, index)
router.get('/getAllCourses', getAllCourses)
router.get('/getCoursesByEtudiant', securedWithToken, getCoursesByEtudiant)
router.get('/getCoursesByFormateur', securedWithToken, getCoursesByFormateur)

router.get('/enrollCourse/:courseId', securedWithToken, enrollCourse)
router.put('/handlePartipation/:id', securedWithToken, handlePartipation)
router.get('/:id', securedWithToken, getCourseById);
router.post('/add', securedWithToken, fileUploadMiddleware, add)
router.put('/addlectureToCourse/:id', addlectureToCourse)
router.delete('/deleteLectureFromCourse/:courseId/:lectureId', deleteLectureFromCourse)

router.put('/update/:id', update)
router.get('/init', init)
router.get('/wipe', wipe)
export default router;