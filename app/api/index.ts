const BASE_URL = 'http://34.222.120.47:8000';

export async function healthCheck() {
  const response = await fetch(`${BASE_URL}/healthCheck`);
  const responseJson = await response.json();
  return responseJson;
}

export async function uploadImage(data: FormData) {
  const response = await fetch(`${BASE_URL}/upload`, {
    body: data,
    method: 'POST',
  });

  const responseJson = await response.json();

  return responseJson;
}

export async function genericPredictions(requestBody: any) {
  const response = await fetch(`${BASE_URL}/genericPredictions`, {
    body: requestBody,
    method: 'POST',
  });

  const responseJson = await response.json();

  return responseJson;
}

export async function realityCheck(imageUrl: string) {
  const response = await fetch(
    `${BASE_URL}/realityCheck?imageUrl=${imageUrl}`,
    {
      method: 'POST',
    }
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function generateAiImage(imageurl: string) {
  const response = await fetch(
    `${BASE_URL}/generateAiImage?imageurl=${imageurl}`,
    {
      method: 'POST',
    }
  );

  const responseJson = await response.json();
  return responseJson;
}

export async function matchImageMeta(meta: unknown) {
  const response = await fetch(`${BASE_URL}/matchImageMeta`, {
    method: 'POST',
    body: JSON.stringify(meta),
  });

  const responseJson = await response.json();
  return responseJson;
}
