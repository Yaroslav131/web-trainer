export default class Exercise {
    htmlCompelateCode:Object[]
    cssCompelateCode:string
    type: string
    name: String;
    task: String;
    title: string
    hint: string
    examples: string[]
    helpText: string
    isCompleted: boolean;
    answer: string;
    htmlCodeOutput: string
    cssCodeOutput: string
  
    imgURL: string
    constructor(
        htmlCompelateCode:Object[],
        cssCompelateCode:string,
        type: string,
        name: string,
        task: string,
        title: string,
        hint: string,
        examples: string[],
        helpText: string,
     
        isCompleted: boolean,
        answer: string,
        htmlCodeOutput: string,
        cssCodeOutput: string,
        imgURL: string,

    ) {
        this.htmlCompelateCode=htmlCompelateCode;
        this.cssCompelateCode=cssCompelateCode;
        this.type = type;
        this.name = name;
        this.task = task;
        this.title = title;
        this.hint = hint;
        this.examples = examples;
        this.helpText = helpText;
        this.isCompleted = isCompleted;
        this.answer = answer;
        this.htmlCodeOutput = htmlCodeOutput;
        this.cssCodeOutput = cssCodeOutput;
      
        this.imgURL = imgURL;
    }
}