/* eslint-disable @typescript-eslint/no-explicit-any */
import tinycolor from "tinycolor2";
import convertMeasurement from "../../../libs/size-manipulation";
import { FontToken, TextStyleToken } from "../../../types";
import { FormatTokenType, OptionsType } from "../to-tailwind.parser";
import {
  ColorsFormat,
  TailwindMappingTypes,
  TextStyleMapping,
} from "../to-tailwind.type";
import { Utils } from "./index";

export class TextStyle extends TextStyleToken {
  token: Partial<TextStyleToken>;
  constructor(token: Partial<TextStyleToken>) {
    super(token);
    this.token = token;
  }

  private getFontWeight() {
    return this.value.font.value.fontWeight;
  }
  private getLetterSpacing() {
    const ls = this.value.letterSpacing;
    if (ls?.value || (this.value?.font?.value as any)?.ls) {
      return `${
        ls?.value?.measure ?? (this.value?.font?.value as any)?.ls ?? 0
      }${ls?.value?.unit ?? "%"}`;
    }

    return undefined;
  }
  private getLineHeight() {
    const lh = this.value.lineHeight;
    return `${
      lh?.value?.measure ?? (this.value?.font?.value as any)?.lineHeight ?? 0
    }${lh?.value?.unit ?? "px"}`;
  }
  private getColor(format: ColorsFormat) {
    if (this.value.color?.value) {
      return tinycolor(this.value.color?.value).toString(format);
    }
  }
  private getOpacity() {
    if (this.value.color?.value?.a && this.value.color?.value?.a < 1) {
      return `${this.value.color.value.a}`;
    }
    return undefined;
  }

  private getFontFamily() {
    return (
      (this?.value?.font as FontToken)?.name ??
      this.value?.font?.value?.fontPostScriptName
    );
  }

  private getFontSize(fontFormat: FormatTokenType["fontSizeFormat"]) {
    const fontSize = this.value.fontSize;
    if (fontFormat?.unit && fontSize?.value?.unit !== fontFormat?.unit) {
      fontSize.value = convertMeasurement(fontSize.value, fontFormat?.unit);
    }
    return `${
      fontSize?.value?.measure ??
      (this.value?.font?.value as any)?.fontSize ??
      0
    }${fontSize?.value?.unit ?? "px"}`;
  }

  generate(options: OptionsType): TextStyleMapping {
    const result: TextStyleMapping = {};

    result.fontSize = Utils.go<ConstructorParameters<typeof TextStyleToken>[0]>(
      this.token,
      options,
      "fontSize",
      this.getFontSize(options?.formatTokens?.fontSizeFormat)
    );

    const letterSpacing = this.getLetterSpacing();
    if (letterSpacing) {
      result.letterSpacing = Utils.go<
        ConstructorParameters<typeof TextStyleToken>[0]
      >(this.token, options, "letterSpacing", letterSpacing);
    }

    const lineHeight = this.getLineHeight();
    result.lineHeight = Utils.go<
      ConstructorParameters<typeof TextStyleToken>[0]
    >(this.token, options, "lineHeight", lineHeight);

    const textColor = this.getColor(
      options?.formatTokens?.colorFormat?.format || "hex"
    );
    if (textColor) {
      result.textColor = Utils.go<
        ConstructorParameters<typeof TextStyleToken>[0]
      >(this.token, options, "textColor", textColor);
    }

    const textOpacity = this.getOpacity();
    if (textOpacity) {
      result.textOpacity = Utils.go<
        ConstructorParameters<typeof TextStyleToken>[0]
      >(this.token, options, "textOpacity", textOpacity);
    }

    const fontFamily = this.getFontFamily();
    result.fontFamily = Utils.go<
      ConstructorParameters<typeof TextStyleToken>[0]
    >(this.token, options, "fontFamily", [fontFamily, "sans-serif"]);

    const fontWeight = this.getFontWeight();
    result.fontWeight = Utils.go<
      ConstructorParameters<typeof TextStyleToken>[0]
    >(this.token, options, "fontWeight", fontWeight);

    return result;
  }

  static afterGenerate(TailwindTokens: TailwindMappingTypes) {
    if (TailwindTokens.fontSize)
      TailwindTokens.fontSize = Utils.sortObjectByValue(
        TailwindTokens.fontSize
      );

    if (TailwindTokens.fontWeight)
      TailwindTokens.fontWeight = Utils.sortObjectByValue(
        TailwindTokens.fontWeight
      );

    if (TailwindTokens.lineHeight)
      TailwindTokens.lineHeight = Utils.sortObjectByValue(
        TailwindTokens.lineHeight
      );

    if (TailwindTokens.letterSpacing)
      TailwindTokens.letterSpacing = Utils.sortObjectByValue(
        TailwindTokens.letterSpacing
      );

    if (TailwindTokens.textColor)
      TailwindTokens.textColor = Utils.sortObjectByValue(
        TailwindTokens.textColor
      );

    if (TailwindTokens.textOpacity)
      TailwindTokens.textOpacity = Utils.sortObjectByValue(
        TailwindTokens.textOpacity
      );

    return TailwindTokens;
  }
}
