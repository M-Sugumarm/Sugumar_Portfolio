declare module 'kute.js' {
  export interface KuteOptions {
    duration?: number;
    delay?: number;
    repeat?: number;
    yoyo?: boolean;
    [key: string]: any;
  }

  export interface KuteInstance {
    start(): void;
    stop(): void;
  }

  export function fromTo(
    element: Element | null,
    fromProps: object,
    toProps: object,
    options?: KuteOptions
  ): KuteInstance;
} 