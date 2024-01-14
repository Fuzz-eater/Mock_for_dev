import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getErrorMessage } from "@/lib/error";

export async function GET(
  req: NextRequest,
  {params}: {params:{slug:string[]}}
){
  const searchParam = req.nextUrl.searchParams
  const mockEndpoint:string = params.slug.join('/')
  const numberPtn:RegExp = new RegExp('[0-9]+')
  let count:string|null = searchParam.get('count')
  let mockValues = []

  if (count!==null && !numberPtn.test(count)) {
    return NextResponse.json({message:"type of count is must number"},{status:400})
  }

  try {
    let mockValue = await prisma.api.findUnique({where:{endpoint:mockEndpoint},select:{value:true},})

    if (mockValue===null){
      return NextResponse.json({message:"Record is not found"},{status:404})
    }

    if (count===null || count==='' || count==='1') {
      return NextResponse.json(mockValue,{status:200})
    }

    for(let i=0;i<Number(count);i++){
      mockValues.push(mockValue['value'])
    }
    mockValue['value'] = mockValues
    return NextResponse.json(mockValue,{status:200})
  }catch(e){
    return NextResponse.json({message:getErrorMessage(e)},{status:500})
  }
}
