// SVG モジュール型定義
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

// SCSS モジュール型定義
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

// SCSS 型定義
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
