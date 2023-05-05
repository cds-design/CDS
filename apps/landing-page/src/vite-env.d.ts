/// <reference types="vite/client" />

declare module "*.glb" {
  const url: string;
  export default url;
}
