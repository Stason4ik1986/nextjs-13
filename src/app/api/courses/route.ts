import { NextRequest, NextResponse } from 'next/server';

import courses from 'api/courses/data.json';
import { ICourse } from 'share/interfaces/course';

import { v4 as uuidv4 } from 'uuid';

export async function GET(): Promise<NextResponse<ICourse[]>> {
  return NextResponse.json(courses);
}

export async function POST(request: NextRequest): Promise<NextResponse<ICourse[]>> {
  const { description, level, link, title } = await request.json();
  const newCourse = {
    id: uuidv4(),
    description,
    level,
    link,
    title,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}
