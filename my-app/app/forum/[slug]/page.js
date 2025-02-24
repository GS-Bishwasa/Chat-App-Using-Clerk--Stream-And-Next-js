import Chatforum from '@/components/ChatForum';

export default async function Page({ params }) {
    const slug = (await params).slug

   return <Chatforum slug={slug}/>
  }