const isActive = (pathname: string, pagePath: string) => {
  if (pathname === pagePath) return true;
  if (pathname.startsWith(`${pagePath}/`)) return true;
  return false;
};

export default isActive;
