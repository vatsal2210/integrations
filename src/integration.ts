export interface Integration {
  //  Slugified integration name
  name: string;

  // Fetch new data and update
  update: () => Promise<void>;

  // Generate data summary for API
  summary: () => Promise<void>;

  // start - Start date to fetch data from in YYYY-MM-DD format
  legacy: (start: string) => Promise<void>;

  // cli methods to export
  cli: {
    [index: string]: (...params: any[]) => Promise<void>;
  };
}
