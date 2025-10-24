import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifySession } from '@/lib/auth';

const updatesFilePath = path.join(process.cwd(), 'src/data/updates.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(updatesFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read updates' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Check authentication
  const isAuthenticated = await verifySession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const newUpdate = await request.json();
    const fileContents = fs.readFileSync(updatesFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Add new update at the beginning
    data.updates.unshift(newUpdate);
    data.metadata.totalUpdates = data.updates.length;
    data.metadata.lastUpdate = newUpdate.date;
    
    // Write back to file
    fs.writeFileSync(updatesFilePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save update' }, { status: 500 });
  }
}

