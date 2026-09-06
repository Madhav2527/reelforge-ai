import { headers } from "next/headers"
import DashboardClient from "./DashboardClient"

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const headersList = headers()
  const country = headersList.get('x-vercel-ip-country') || 'US'
  
  const isIndia = country === 'IN'
  const currencySymbol = isIndia ? '₹' : '$'
  const price = isIndia ? '49' : '4.99'
  const pricePerGen = isIndia ? '9' : '0.99'

  return <DashboardClient currencySymbol={currencySymbol} price={price} pricePerGen={pricePerGen} country={country} />
}
