import { ReponseModel } from "./reponse.model"

export interface QuestionModel {
    text: string
    reponses: ReponseModel[]
    _id: string
  }