import {
  ScopedObjectState,
} from '@open-system/core-data-access';

export interface Rate extends ScopedObjectState {
  contentId: string;
  rate: number;
}

export interface TotalRate extends Rate {
  rate: number;
  count: number;
}