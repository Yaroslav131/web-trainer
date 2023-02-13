import Exercise from "./Execirse";

export default class CssSelectorExercise extends Exercise {
    title: string
    syntax: string
    hint: string
    examples: string[]

    constructor(
        imgUrl: string,
        task: string,
        name: string,
        isCompleted: boolean,
        title: string,
        syntax: string,
        hint: string,
        examples: string[]) {
        super(imgUrl, name, task, isCompleted);
        this.title = title;
        this.syntax = syntax;
        this.hint = hint;
        this.examples = examples;
    }
}