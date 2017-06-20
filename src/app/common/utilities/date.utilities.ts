import * as moment from 'moment';

import { JsObjUtilities } from '.';

export class DateUtilities {
  private static readonly ArgusnetDateTimeFormat = 'DD.MM.YYYY HH:mm';

  public static toArgusnetDateDescription(date: Date | undefined | null): string {
    if (JsObjUtilities.isNullOrUndefined(date)) {
      return 'Undefined';
    }

    const result = moment(date!).format(this.ArgusnetDateTimeFormat);
    return result;
  }
}
