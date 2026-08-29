import { NextResponse } from "next/server";
import { profileData } from "@/data/profile";

export function GET() {
  const securityPolicy = `Contact: mailto:${profileData.socials.email}
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://saurabhrawat.dev/.well-known/security.txt
Policy: Please practice responsible disclosure. We investigate all legitimate vulnerability reports.
`;

  return new NextResponse(securityPolicy, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
