const isActive = (pathname: string, pagePath: string) => {
  return pathname === pagePath || pathname.startsWith(`${pagePath}/`);
};

export default isActive;
