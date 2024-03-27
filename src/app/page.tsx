import Main from '@/app/main/page'
import { auth } from '@/auth'

export default async function Home() {

  const session = await auth();
  
  return <Main session={session} />
}
