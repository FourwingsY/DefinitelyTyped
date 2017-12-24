// Type definitions for luxon 0.2
// Project: https://github.com/moment/luxon#readme
// Definitions by: Colby DeHart <https://github.com/colbydehart>
//                 Hyeonseok Yang <https://github.com/FourwingsY>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'luxon' {
    namespace luxon {
        type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

        type ZoneOptions = {
            keepCalendarTime?: boolean;
        };

        type ToFormatOptions = DateTimeFormatOptions & {
            round?: boolean;
        };

        type ISOTimeOptions = {
            suppressMilliseconds?: boolean;
            suppressSeconds?: boolean;
            includeOffset?: boolean;
        };

        type LocaleOptions = {
            locale?: string;
            outputCalendar?: string;
            numberingSystem?: string;
        };

        type DateTimeOptions = LocaleOptions & {
            zone?: string | Zone;
            setZone?: boolean;
        };

        type DateTimeJSOptions = LocaleOptions & {
            zone?: string | Zone;
        };

        type DateObjectUnits = {
            year?: number;
            month?: number;
            day?: number;
            ordinal?: number;
            weekYear?: number;
            weekNumber?: number;
            weekday?: number;
            hour?: number;
            minute?: number;
            second?: number;
            millisecond?: number;
        };

        type DateObject = DateObjectUnits & LocaleOptions & {
            zone?: string | Zone;
        };

        type DiffOptions = {
            conversionAccuracy?: string;
        };

        class DateTime {
            static DATETIME_FULL: DateTimeFormatOptions;
            static DATETIME_FULL_WITH_SECONDS: DateTimeFormatOptions;
            static DATEIME_HUGE: DateTimeFormatOptions;
            static DATEIME_HUGE_WITH_SECONDS: DateTimeFormatOptions;
            static DATETIME_MED: DateTimeFormatOptions;
            static DATETIME_MED_WITH_SECONDS: DateTimeFormatOptions;
            static DATETIME_SHORT: DateTimeFormatOptions;
            static DATETIME_SHORT_WITH_SECONDS: DateTimeFormatOptions;
            static DATE_FULL: DateTimeFormatOptions;
            static DATE_HUGE: DateTimeFormatOptions;
            static DATE_MED: DateTimeFormatOptions;
            static DATE_SHORT: DateTimeFormatOptions;
            static TIME_24_SIMPLE: DateTimeFormatOptions;
            static TIME_24_WITH_LONG_OFFSET: DateTimeFormatOptions;
            static TIME_24_WITH_SECONDS: DateTimeFormatOptions;
            static TIME_24_WITH_SHORT_OFFSET: DateTimeFormatOptions;
            static TIME_SIMPLE: DateTimeFormatOptions;
            static TIME_WITH_LONG_OFFSET: DateTimeFormatOptions;
            static TIME_WITH_SECONDS: DateTimeFormatOptions;
            static TIME_WITH_SHORT_OFFSET: DateTimeFormatOptions;
            static fromHTTP(text: string, options?: DateTimeOptions): DateTime;
            static fromISO(text: string, options?: DateTimeOptions): DateTime;
            static fromJSDate(
                date: Date,
                options?: DateTimeJSOptions
            ): DateTime;
            static fromMillis(ms: number, options?: DateTimeOptions): DateTime;
            static fromObject(obj: DateObject): DateTime;
            static fromRFC2822(
                text: string,
                options?: DateTimeOptions
            ): DateTime;
            static fromString(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): DateTime;
            static fromStringExplain(
                text: string,
                format: string,
                options?: DateTimeOptions
            ): object;
            static invalid(reason: any): DateTime;
            static local(
                year?: number,
                month?: number,
                day?: number,
                hour?: number,
                minute?: number,
                second?: number,
                millisecond?: number
            ): DateTime;
            static max(...dateTimes: DateTime[]): DateTime | undefined;
            static min(...dateTimes: DateTime[]): DateTime | undefined;
            static utc(
                year?: number,
                month?: number,
                day?: number,
                hour?: number,
                minute?: number,
                second?: number,
                millisecond?: number
            ): DateTime;
            day: number;
            daysInMonth: number;
            daysInYear: number;
            hour: number;
            invalidReason: string;
            isInDST: boolean;
            isOffsetFixed: boolean;
            isValid: boolean;
            locale: string;
            millisecond: number;
            minute: number;
            month: number;
            monthLong: string;
            monthShort: string;
            numberingSystem: string;
            offset: number;
            offsetNameLong: string;
            offsetNameShort: string;
            ordinal: number;
            outputCalendar: string;
            second: number;
            weekNumber: number;
            weekYear: number;
            weekday: number;
            weekdayLong: string;
            weekdayShort: string;
            year: number;
            zoneName: string;
            diff(
                other: DateTime,
                unit?: string | string[],
                options?: DiffOptions
            ): Duration;
            diffNow(unit?: string | string[], options?: DiffOptions): Duration;
            endOf(unit: string): DateTime;
            equals(other: DateTime): boolean;
            get(unit: string): number;
            hasSame(other: DateTime, unit: string): boolean;
            minus(duration: Duration | number | DurationObject): DateTime;
            plus(duration: Duration | number | DurationObject): DateTime;
            reconfigure(properties: LocaleOptions): DateTime;
            resolvedLocaleOpts(options?: ToFormatOptions): LocaleOptions;
            set(values: DateObjectUnits): DateTime;
            setLocale(locale: any): DateTime;
            setZone(zone: string | Zone, options?: ZoneOptions): DateTime;
            startOf(unit: string): DateTime;
            toFormat(format: string, options?: ToFormatOptions): string;
            toHTTP(): string;
            toISO(options?: ISOTimeOptions): string;
            toISODate(): string;
            toISOTime(options?: ISOTimeOptions): string;
            toISOWeekDate(): string;
            toJSDate(): Date;
            toJSON(): string;
            toLocal(): DateTime;
            toLocaleParts(options?: DateTimeFormatOptions): any[];
            toLocaleString(options?: DateTimeFormatOptions): string;
            toObject(options?: { includeConfig?: boolean }): DateObject;
            toRFC2822(): string;
            toString(): string;
            toUTC(offset?: number, options?: ZoneOptions): DateTime;
            until(other: DateTime): Duration;
            valueOf(): number;
        }

        type DurationOptions = {
            locale?: string;
            numberingSystem?: string;
            conversionAccuracy?: string;
        };

        type DurationObjectUnits = {
            years?: number;
            months?: number;
            weeks?: number;
            days?: number;
            hours?: number;
            minutes?: number;
            seconds?: number;
            milliseconds?: number;
        };

        type DurationObject = DurationObjectUnits & DurationOptions;

        class Duration {
            static fromISO(text: string, options?: DurationOptions): Duration;
            static fromMillis(
                count: number,
                options?: DurationOptions
            ): Duration;
            static fromObject(
                Object: DurationObject
            ): Duration;
            static invalid(reason?: string): Duration;
            days: number;
            hours: number;
            invalidReason: string;
            isValid: boolean;
            locale: string;
            milliseconds: number;
            minutes: number;
            months: number;
            numberingSystem: string;
            seconds: number;
            weeks: number;
            years: number;
            as(unit: string): number;
            equals(other: Duration): boolean;
            get(unit: string): number;
            minus(duration: Duration | number | DurationObject): Duration;
            negate(): Duration;
            normalize(): Duration;
            plus(duration: Duration | number | DurationObject): Duration;
            reconfigure(objectPattern: DurationOptions): Duration;
            set(values: DurationObjectUnits): Duration;
            shiftTo(...units: string[]): Duration;
            toFormat(format: string, options?: ToFormatOptions): string;
            toISO(): string;
            toJSON(): string;
            toObject(options?: {
                includeConfig?: boolean;
            }): DurationObject;
            toString(): string;
        }

        type EraLength = 'short' | 'long';
        type UnitLength = EraLength | 'numeric' | '2-digit' | 'narrow';
        type UnitOptions = InfoOptions & {
            numberingSystem?: string;
            outputCalendar?: string;
        };

        type InfoOptions = {
            locale?: string;
        };

        type Features = {
            intl: boolean;
            intlTokens: boolean;
            timezones: boolean;
        };

        class Info {
            static eras(length?: EraLength, options?: InfoOptions): string[];
            static features(): Features;
            static hasDST(zone: string | Zone): boolean;
            static meridiems(options?: InfoOptions): string[];
            static months(length?: UnitLength, options?: UnitOptions): string[];
            static monthsFormat(length?: UnitLength, options?: UnitOptions): string[];
            static weekdays(length?: UnitLength, options?: UnitOptions): string[];
            static weekdaysFormat(
                length?: UnitLength,
                options?: UnitOptions
            ): string[];
        }

        type IntervalObject = {
            start: DateTime;
            end: DateTime;
        };

        class Interval {
            static after(
                start: DateTime | DateObject | Date,
                duration: Duration | number | DurationObject
            ): Interval;
            static before(
                end: DateTime | DateObject | Date,
                duration: Duration | number | DurationObject
            ): Interval;
            static fromDateTimes(
                start: DateTime | DateObject | Date,
                end: DateTime | DateObject | Date
            ): Interval;
            static fromISO(string: string, options?: DateTimeOptions): Interval;
            static invalid(reason?: string): Interval;
            static merge(intervals: Interval[]): [Interval];
            static xor(intervals: Interval[]): [Interval];
            end: DateTime;
            invalidReason: string;
            isValid: boolean;
            start: DateTime;
            abutsEnd(other: Interval): boolean;
            abutsStart(other: Interval): boolean;
            contains(dateTime: DateTime): boolean;
            count(unit?: string): number;
            difference(...intervals: Interval[]): Interval;
            divideEqually(numberOfParts?: number): Interval[];
            engulfs(other: Interval): boolean;
            equals(other: Interval): boolean;
            hasSame(unit: string): boolean;
            intersection(other: Interval): Interval;
            isAfter(dateTime: DateTime): boolean;
            isBefore(dateTime: DateTime): boolean;
            isEmpty(): boolean;
            length(unit?: string): number;
            overlaps(other: Interval): boolean;
            set(values: IntervalObject): Interval;
            splitAt(...dateTimes: DateTime[]): Interval[];
            splitBy(duration: Duration | DurationObject | number): Interval[];
            toDuration(
                unit: string | string[],
                options?: DiffOptions
            ): Duration;
            toFormat(
                dateFormat: string,
                options?: {
                    seperator?: string;
                }
            ): string;
            toISO(options?: ISOTimeOptions): string;
            toString(): string;
            union(other: Interval): Interval;
        }

        class Settings {
            static defaultLocale: string;
            static defaultNumberingSystem: string;
            static defaultOutputCalendar: string;
            static readonly defaultZone: Zone;
            static defaultZoneName: string;
            static throwOnInvalid: boolean;
            static now: () => number;
            static resetCache(): void;
        }

        type ZoneOffsetOptions = {
            format?: 'short' | 'long';
            localeCode?: string;
        };

        class Zone {
            static offsetName(ts: number, options?: ZoneOffsetOptions): string;
            static isValid: boolean;
            static name: string;
            static type: string;
            static universal: boolean;
            equals(other: Zone): boolean;
            offset(ts: number): number;
        }
    }

    export = luxon;
}
