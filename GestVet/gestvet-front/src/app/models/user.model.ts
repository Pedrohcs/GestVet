import { Role } from "./role.model";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
}