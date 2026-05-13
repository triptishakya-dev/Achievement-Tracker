import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const yearId = parseInt(id);

  if (isNaN(yearId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const achievements = await prisma.achievement.findMany({
      where: { yearId },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(achievements);
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
