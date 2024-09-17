import { auth } from "@/server/auth";
import { UserButton } from "./user-button";

export default async function Nav(){
    const session = await auth()
    console.log(session);
    return (
        <header>
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>
                       <UserButton expires={session?.expires} user={session?.user} />
                    </li>
                </ul>
            </nav>
        </header>
    )   
}