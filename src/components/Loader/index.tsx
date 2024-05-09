import "../../styles/loader.css";

interface LoaderProps<T> {
  isLoading: boolean;
  data: T | undefined;
  loadingComponent: React.ReactNode;
  error?: string;
  render: (data: T) => React.ReactNode;
}

export default function Loader<T>({
  data,
  isLoading,
  error,
  loadingComponent,
  render,
}: Readonly<LoaderProps<T>>) {
  if (isLoading) {
    return <div className="loader">{loadingComponent}</div>;
  }

  if (error) {
    return <div className="loader">{error}</div>;
  }

  if (data) {
    return <>{render(data)}</>;
  }

  return null;
}
