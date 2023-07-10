import { QuestionModel } from "./question.model"

export interface QuizModel {
    _id: string
    title: string
    description: string
    level: string
    questions: QuestionModel[]
    createdAt: string
  }