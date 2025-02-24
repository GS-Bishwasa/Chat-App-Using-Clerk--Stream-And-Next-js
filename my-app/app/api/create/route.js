import { StreamChat } from "stream-chat";
const api_key = "6ttekduwe5yd";
const api_secret = "7wbadrzs7tgr7dxn4k3v99v7r2s43m9nuc253sgqwqh7mnhh4kednm2fpkzybdqg";
const user_id = "user_2tRs6Mz8MZ3nyfANczT53vxlsYu";

export async function GET() {
    /// Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log(token)
    return Response.json({ message: 'Hello World' })
}