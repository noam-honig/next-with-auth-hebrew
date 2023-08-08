import ably from "ably/promises"
import { NextResponse } from "next/server"

export async function POST() {
  const token = await new ably.Rest(
    process.env["ABLY"]!
  ).auth.createTokenRequest({
    capability: {
      "*": ["subscribe"],
    },
  })
  return NextResponse.json(token)
}
