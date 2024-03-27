import Main from '@/app/main/page'
import { auth } from '@/auth'

type MainProps = {
  searchParams?: { q: string, f?: string, pf?: string };
}

export default async function Home({searchParams} : MainProps) {

  const session = await auth();
  
  return <Main session={session} searchParams={searchParams} />
}
