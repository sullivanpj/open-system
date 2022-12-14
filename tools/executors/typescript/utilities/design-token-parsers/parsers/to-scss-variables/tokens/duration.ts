import { DurationToken } from '../../../types';

export class Duration extends DurationToken {
  constructor(token: Partial<DurationToken>) {
    super(token);
  }

  toScss() {
    const { duration, unit } = this.value;
    return `${duration}${unit}`;
  }
}
