import { type NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  if (!params?.name) {
    return NextResponse.json(
      { error: "The Component name is required." },
      { status: 400 }
    );
  }

  try {
    const baseDir = `./src/components/recipes/${params.name}`;

    const [tsxContent, scssContent] = await Promise.all([
      fs.readFile(path.join(baseDir, "index.tsx"), "utf-8"),
      fs.readFile(path.join(baseDir, "index.scss"), "utf-8")
    ]);

    return NextResponse.json({
      tsx: tsxContent,
      scss: scssContent
    });
  } catch (error) {
    console.error(`Error loading source from: "${params.name}".\n`, error);
    return NextResponse.json(
      { error: `Failed to load component source from: "${params.name}".` },
      { status: 500 }
    );
  }
}
