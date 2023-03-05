import Exercise from "./Execirse";

export default class CssExercise extends Exercise {
    title: string
    syntax: string
    hint: string
    examples: string[]

    constructor(
        helpText:string,
        answer:string[],
        imgUrl: string,
        task: string,
        name: string,
        isCompleted: boolean,
        title: string,
        syntax: string,
        hint: string,
        examples: string[]) {
        super(helpText,answer,imgUrl, name, task, isCompleted);
        this.title = title;
        this.syntax = syntax;
        this.hint = hint;
        this.examples = examples;
    }
}