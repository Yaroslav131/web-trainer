export default class Exercise {
    htmlСompilationCode: Object[]
    cssСompilationCode: string
    ExerciseType: string
    name: String;
    task: String;
    title: string
    hint: string
    examples: string[]
    helpText: string
    isCompleted: boolean;
    answer: string;
    htmlCodeOutput: string[]
    cssCodeOutput: string[]

    imgURL: string
    constructor(
        htmlСompilationCode: Object[],
        cssСompilationCode: string,
        ExerciseType: string,
        name: string,
        task: string,
        title: string,
        hint: string,
        examples: string[],
        helpText: string,

        isCompleted: boolean,
        answer: string,
        htmlCodeOutput: string[],
        cssCodeOutput: string[],
        imgURL: string,

    ) {
        this.htmlСompilationCode = htmlСompilationCode;
        this.cssСompilationCode = cssСompilationCode;
        this.ExerciseType = ExerciseType;
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