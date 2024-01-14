import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { getErrorMessage } from "@/lib/error";

export async function POST(
  req: NextRequest,
){
  const params = await req.json()
  const {endpoint, apiValue, apiSettings} = params
  const indentPtn = /\n/g
  try{
    if(!endpoint||!apiValue||!apiSettings) {
      return NextResponse.json(
        {message:"Parameter Error: endpoint, apiValue and apiSettings are required"},
        {status:400}
      )
    }

    let apiValueJson = JSON.parse(apiValue.replaceAll(indentPtn, ''))
    let apiSettingsJson = JSON.parse(apiSettings.replaceAll(indentPtn, ''))

    await prisma.api.create({
      data: {
        endpoint: endpoint,
        value: apiValueJson,
        settings: apiSettingsJson
      }
    })
  }catch(e){
    return NextResponse.json({message:getErrorMessage(e)},{status:500})
  }
  return NextResponse.json({status:200})
}
