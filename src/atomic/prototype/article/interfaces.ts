import type { Components } from "react-markdown";

export interface IRightColumn {
    CONTENT?: string;
    IMG_SRC?: string;
    IMG_ALT?: string;
}

export interface IArticleHeader {
  TITLE: string;
  IMG_URL?: string;
  HEADER_BODY: { [key: string]: string }; 
  ALT: string;
  ACCENT_COLOR: string;
}

export interface IArticleSection {
  TITLE: string;
  IMG_URL?: string | null; 
  CONTENT: string; 
  ACCENT_COLOR: string; 
  BG_COLOR?: string | null; 
  IMG_SRC?: string | null;
  IMG_ALT: string;
  components?: Components;
  RIGHT_COLUMN?: IRightColumn;
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
  IMG_SRC: string;
  BODY: IArticleSection[];
  CALL_TO_ACTION: IArticleCallToAction;
}