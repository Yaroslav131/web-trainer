export default class Exercise {
    name: String;
    isCompleted: Boolean;
    task:String;
    imgURL:string
    constructor(imgURL:string,task:string,name: string, isCompleted: boolean) {
        this.name = name;
        this.imgURL=imgURL;
        this.task=task;
        this.isCompleted = isCompleted;
    }
}