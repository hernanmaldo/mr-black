
import * as React from "react";

/*
interface RouterProps {
  currentRoute: string;
  children: ReactNode;
}

interface RouteProps {
  path: string;
  children: ReactNode;
}

export function Router({ currentRoute, children }: RouterProps) {
  return <>{children}</>;
}

export function Route({ path, children }: RouteProps) {
  return <>{children}</>;
}
*/

export function useRouter(initialRoute: string = '/') {
  // Inicializamos desde la URL real
  const [currentRoute, setCurrentRoute] = React.useState(
    window.location.pathname || initialRoute
  );

  const navigate = (path: string) => {
    setCurrentRoute(path);
    window.history.pushState(null, '', path);
  };

  // Escuchar atrás/adelante del navegador
  React.useEffect(() => {
    const onPopState = () => setCurrentRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return { currentRoute, navigate };
}