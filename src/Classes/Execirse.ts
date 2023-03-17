export default class Exercise {
    type: string
    name: String;
    task: String;
    title: string
    syntax: string
    hint: string
    examples: string[]
    helpText: string
    isCompleted: boolean;
    answer: string;
    htmlCode: string
    cssCode: string
    imgURL: string
    constructor(
        type: string,
        name: string,
        task: string,
        title: string,
        syntax: string,
        hint: string,
        examples: string[],
        helpText: string,
        isCompleted: boolean,
        answer: string,
        htmlCode: string,
        cssCode: string,
        imgURL: string,

    ) {
        this.type = type;
        this.name = name;
        this.task = task;
        this.title = title;
        this.syntax = syntax;
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