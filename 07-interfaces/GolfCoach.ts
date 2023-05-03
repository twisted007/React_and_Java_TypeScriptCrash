import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    
    getDailyWorkout(): string {
        return "Go hit at least 100 balls at the range today!";
    }
    
}