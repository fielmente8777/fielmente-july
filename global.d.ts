export {};

// declare global {
//   interface Window {
//     dataLayer: Record<string, any>[];
//   }
// }

interface DataLayerEvent {
  event: string;
  page?: string;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}