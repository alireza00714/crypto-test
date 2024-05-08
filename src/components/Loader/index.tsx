interface LoaderProps<T> {
  isLoading: boolean;
  data: T | undefined;
  loadingComponent: React.ReactNode;
  render: (data: T) => React.ReactNode;
}

export default function Loader<T>({
  data,
  isLoading,
  loadingComponent,
  render,
}: Readonly<LoaderProps<T>>) {
  if (isLoading) {
    return <>{loadingComponent}</>;
  }

  if (data) {
    return <>{render(data)}</>;
  }

  return null;
}
