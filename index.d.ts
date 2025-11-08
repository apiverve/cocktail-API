declare module '@apiverve/cocktail' {
  export interface cocktailOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface cocktailResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class cocktailWrapper {
    constructor(options: cocktailOptions);

    execute(callback: (error: any, data: cocktailResponse | null) => void): Promise<cocktailResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: cocktailResponse | null) => void): Promise<cocktailResponse>;
    execute(query?: Record<string, any>): Promise<cocktailResponse>;
  }
}
