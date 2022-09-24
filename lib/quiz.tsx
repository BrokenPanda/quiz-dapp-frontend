import QuizData from "../types/Quiz";
const QUIZ_URI = process.env.NEXT_PUBLIC_QUIZ_API_URI;

export async function getQuizData(): Promise<QuizData[] | undefined> {
    if (QUIZ_URI !== undefined) {
        console.log("fetching data");
        const res = await fetch(QUIZ_URI.toString());
        const data = await res.json();
        console.log("data", data);
        return data;
    }
    else {
        console.log("data fetching undefined");
        return;
    }
}