/**
 * Interface representing a drug entity.
 */
export interface Drug {
  id: number;
  name: string;
  image: string;
  description: string;
  addictionLevel: number;
  usage: number;
  symptoms: string[];
}