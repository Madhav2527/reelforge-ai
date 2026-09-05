import { headers } from "next/headers"
import VideoMakerClient from "./VideoMakerClient"

export const dynamic = 'force-dynamic'

export default function VideoPage() {
  const headersList = headers()
  const country = headersList.get('x-vercel-ip-country') || 'US'
  
  const isIndia = country === 'IN'
  const currencySymbol = isIndia ? '₹' : '$'
  const price = isIndia ? '99' : '9'

  return <VideoMakerClient currencySymbol={currencySymbol} price={price} country={country} />
}
