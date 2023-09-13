import { NextRequest, NextResponse } from 'next/server';

import courses from 'api/courses/data.json';
import { ICourse } from 'share/interfaces/course';

export async function GET(request: NextRequest): Promise<NextResponse<ICourse[]>> {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredCourses = query ? courses.filter((course: ICourse) => course.title.toLowerCase().includes(query?.toLowerCase())) : courses;

  return NextResponse.json(filteredCourses);
}
