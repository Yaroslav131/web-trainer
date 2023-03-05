export default class Exercise {
    helpText:string
    name: String;
    isCompleted: boolean;
    task: String;
    imgURL: string
    answer: string[]
    constructor(helpText:string,answer: string[], imgURL: string, task: string, name: string, isCompleted: boolean) {
        this.helpText=helpText;
        this.answer = answer;
        this.name = name;
        this.imgURL = imgURL;
        this.task = task;
        this.isCompleted = isCompleted;
    }
}