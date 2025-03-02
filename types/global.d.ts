export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      userId: String;
    };
  }
}
