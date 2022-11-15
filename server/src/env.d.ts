declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    AIRBRAKE_PROJECT_ID: string;
    AIRBRAKE_PROJECT_KEY: string;
  }
}
