// TODO: move to utils.ts
export function makeUrl(...uris: string[]): string {
  uris = uris.map(uri => {
    if(uri.startsWith('/')) {
      uri = uri.slice(1);
    }

    if(uri.endsWith('/')) {
      uri = uri.slice(0, uri.length - 1);
    }

    return uri;
  });

  return uris.join('/');
}
