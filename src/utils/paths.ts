const rawBase = import.meta.env.BASE_URL || "/";

export const basePath =
  rawBase === "/" ? "/" : `${rawBase.replace(/\/+$/, "")}/`;

const externalUrlPattern = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

export function withBase(path = "/"): string {
  if (externalUrlPattern.test(path) || path.startsWith("#")) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, "");

  return cleanPath ? `${basePath}${cleanPath}` : basePath;
}

export function stripBase(pathname: string): string {
  if (basePath === "/") {
    return pathname || "/";
  }

  const baseWithoutTrailingSlash = basePath.slice(0, -1);

  if (pathname === baseWithoutTrailingSlash) {
    return "/";
  }

  if (pathname.startsWith(`${baseWithoutTrailingSlash}/`)) {
    return pathname.slice(baseWithoutTrailingSlash.length) || "/";
  }

  return pathname || "/";
}
