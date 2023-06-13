export const ApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://localhost:44385';
export const baseUrl =
  process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000';

export const oidcConfig = {
  authority: ApiBaseUrl,
  client_id: 'FieldSurvey_Web',
  client_secret: '1q2w3e*',
  redirect_uri: baseUrl + '/redirect/',
  scope: 'FieldSurvey',
};
