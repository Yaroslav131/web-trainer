import Exercise from "./Execirse";

export default class CssSelectorExercise extends Exercise {
    title: string
    syntax: string
    hint: string
    examples: string[]

    constructor(
        name: string,
        isCompleted: boolean,
        title: string,
        syntax: string,
        hint: string,
        examples: string[]) {
        super(name, isCompleted);
        this.title = title;
        this.syntax = syntax;
        this.hint = hint;
        this.examples = examples;
    }
}