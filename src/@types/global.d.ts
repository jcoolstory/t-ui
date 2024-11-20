declare module "*.pdf" 
declare module "*.png"
declare module "*.jpg"

declare module "*.json" {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const content: any;
  export default content;
}