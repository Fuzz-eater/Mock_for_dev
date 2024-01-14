import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { getErrorMessage } from "@/lib/error";

export async function GET(
  req: NextRequest,
  {params}: {params:{slug:string}}
){
  const id = Number(params.slug)
  try{
    let result = await prisma.api.findUnique({where: {id: id}})
    if (result===null){
      return NextResponse.json({message:"Record is not found"},{status:404})
    }
    return NextResponse.json({data: result},{status:200})
  }catch(e){
    return NextResponse.json({message:getErrorMessage(e)},{status:500})
  }
}

export async function PUT(
  req: NextRequest,
  {params}: {params:{slug:string}}
){
  const id = Number(params.slug)
  let reqParams = await req.json()
  let {endpoint, apiValue, apiSettings} = reqParams

  try{
    if(!endpoint||!apiValue||!apiSettings) {
      return NextResponse.json(
        {message:"endpoint, apiValue and apiSettings are required"},
        {status:400}
      )
    }

    apiValue = JSON.parse(apiValue.replaceAll(/[\n\s]/g, ''))
    apiSettings = JSON.parse(apiSettings.replaceAll(/[\n\s]/g, ''))

    await prisma.api.update({
      where: {
        id: id
      },
      data: {
        endpoint: endpoint,
        value: apiValue,
        settings: apiSettings
      }
    })

    return NextResponse.json({status:200})
  }catch(e){
    return NextResponse.json({message: getErrorMessage(e)},{status:500})
  }
}
