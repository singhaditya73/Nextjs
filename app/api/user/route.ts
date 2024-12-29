import { NextRequest, NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client"
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await client.user.create({
      data : {
        email:body.email,
        password: body.password
      }
    })
  
    return NextResponse.json({
      message: "You are logged in",
    });
  } catch (e) {
    return NextResponse.json({
      message: "error",
    },{ status:404});
  }
}
