import { unauthorized } from 'next/navigation'

async function getData() {
  unauthorized()
}

export default async function Unauthorized() {
  await getData()

  return <div>this should not be rendered</div>
}
