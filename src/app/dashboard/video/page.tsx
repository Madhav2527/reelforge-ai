import { headers } from "next/headers"
import VideoMakerClient from "./VideoMakerClient"

export default function VideoPage() {
  const headersList = headers()
  // Vercel automatically injects this header based on the visitor's IP address
  const country = headersList.get('x-vercel-ip-country') || 'US'
  
  // Dynamic Pricing Logic
  const isIndia = country === 'IN'
  const currencySymbol = isIndia ? '₹' : '$'
  const price = isIndia ? '99' : '9'

  return <VideoMakerClient currencySymbol={currencySymbol} price={price} country={country} />
}
