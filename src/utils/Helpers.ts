export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'UrlDecode', href: '/urldecode' },
  { name: 'Base64Decode', href: '/base64decode' },
  { name: 'JwtDecode', href: '/jwtdecode' },
  { name: 'FormatJson', href: '/json-format' },
];
