import { NextRequest, NextResponse } from "next/server";
import courses from "./data.json";

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
  const { title, description, level, link } = await request.json();
  const newCourse = {
    id: Math.floor(Math.random() * 100),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json({ message: "Course created" });
}
