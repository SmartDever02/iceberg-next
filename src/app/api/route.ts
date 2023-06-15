import { NextResponse } from 'next/server';

export function getBackendServerEndpoint(path: string) {
  return process.env.backendBaseUrl + path;
}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(getBackendServerEndpoint('/user-data'), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await res.json();

  return NextResponse.json(response);
}

{
  /* 
    I actually should use DELETE method here, but since v 13.4.1 is in experimental phase, it's not working properly.

    https://github.com/vercel/next.js/discussions/48072
  */
}

export async function PUT(request: Request) {
  const body = await request.json();
  const res = await fetch(getBackendServerEndpoint('/user-data/remove'), {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const response = await res.json();

  return NextResponse.json(response);
}
