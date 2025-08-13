export interface IArticleHeader {
  TITLE: string;
  IMG_URL?: string;
  HEADER_BODY: { [key: string]: string }; // Объект вместо строки
  ALT: string;
  ACCENT_COLOR: string;
}

export interface IArticleSection {
   // Каждый объект массива отдельаная секция
  TITLE: string;
  IMG_URL?: string | null; // can be null
  CONTENT: string; // MD text
  ACCENT_COLOR: string; // Цвет булет поинтов или сноски 
  BG_COLOR?: string | null; // Цвет фона секции, может быть Null для прозрачной секции
}

export interface IArticleCallToAction {
  TITLE: string;
  SUBTITLE: string;
  IMG_URL: string;
  ALT: string;
}

export interface IArticleModel {
  HEADER: IArticleHeader;
  TITLE: string;
  IMG_URL?: string | null;
  IMG_ALT: string;
  BODY: IArticleSection[];
  CALL_TO_ACTION: IArticleCallToAction;
}