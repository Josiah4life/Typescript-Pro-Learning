import type { Brand } from "./brand";


type UserId = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;

type Password = Brand<string, "Password">
type Email = Brand<string, "Email">

const verifyPassword = (password: Password) => {
    // @ts-expect-error Not branded value
    verifyPassword("jjjj")
}

const password = "1245" as Password
const email = "mpo@gmail.com" as Email

let passwordSlot: Password

// @ts-expect-error
passwordSlot = "asfeesfe"
passwordSlot = "error" as Password


function getUserById(id: UserId) { ... }

const userId = "abc123" as UserId;
const productId = "xyz789" as ProductId;

getUserById(userId);      // OK
getUserById(productId);   // Type error — not a UserId



type UserObject = Brand<
{
    id: string;
    name: string;
},
"User"
>
type UserObjec = Brand<
{
    id: string;
    name: string;
},
"User"
>

const user: UserObject = {
    id: "jboy",
    name: "Jboy",
} as UserObjec