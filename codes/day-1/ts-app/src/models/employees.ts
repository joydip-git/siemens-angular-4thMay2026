import { Developer } from "./developer";
import { Employee } from "./employee";
import { Hr } from "./hr";

export const employees: Employee[] = [
    new Developer(1, 'anil', 1000, 2000, 3000, 4000),
    new Hr(2, 'sunil', 1500, 2500, 3500, 4500)
]