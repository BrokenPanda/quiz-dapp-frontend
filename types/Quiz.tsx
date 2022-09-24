export default interface QuizData {
    id: number,
    question: string,
    answers: [
        { id: number, text: string, isCorrect: boolean }
    ]
}