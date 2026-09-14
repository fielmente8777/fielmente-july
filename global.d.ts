

// interface DataLayerEvent {
//   event: string;
//   page?: string;
//   button_text?: string;
// }

// declare global {
//   interface Window {
//     dataLayer: DataLayerEvent[];
//   }
// }

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export {};