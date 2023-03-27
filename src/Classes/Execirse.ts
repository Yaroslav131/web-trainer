export default class Exercise {
    reactObj:Object
    type: string
    name: String;
    task: String;
    title: string
    hint: string
    examples: string[]
    helpText: string
    isCompleted: boolean;
    answer: string;
    htmlCode: string
    cssCode: string
  
    imgURL: string
    constructor(
        reactObj:Object,
        type: string,
        name: string,
        task: string,
        title: string,
        hint: string,
        examples: string[],
        helpText: string,
     
        isCompleted: boolean,
        answer: string,
        htmlCode: string,
        cssCode: string,
        imgURL: string,

    ) {
        this.reactObj=reactObj;
        this.type = type;
        this.name = name;
        this.task = task;
        this.title = title;
        this.hint = hint;
        this.examples = examples;
        this.helpText = helpText;
        this.isCompleted = isCompleted;
        this.answer = answer;
        this.htmlCode = htmlCode;
        this.cssCode = cssCode;
      
        this.imgURL = imgURL;
    }
}