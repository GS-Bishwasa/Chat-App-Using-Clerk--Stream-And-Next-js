import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'


const api_key = "6ttekduwe5yd";
const api_secret = "7wbadrzs7tgr7dxn4k3v99v7r2s43m9nuc253sgqwqh7mnhh4kednm2fpkzybdqg";
// const user_id = "user_2tRs6Mz8MZ3nyfANczT53vxlsYu";


export async function POST(request) {
    /// Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    console.log("Received User Data:", user);

    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token)

    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })

    // Give access to this user for all chats
    const slugs = [
        "Python-Discussion-New",
        "Javascript-Discussion-New",
        "CPP-Discussion-New",
        "Java-Discussion-New",
        "Django-Discussion-New",
        "React-Discussion-New"
    ];
    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: item,
            created_by_id: user.data.id,
            // members: [userId],
        });
        await channel.create([user.data.id])
    })
    return Response.json({ message: 'Hello World' })
}