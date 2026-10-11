import type { Components } from "react-markdown";
import type appIds from "@/data/app-ids.json";

export interface IRightColumn {
    CONTENT?: string;
    IMG_SRC?: string;
    IMG_ALT?: string;
    IS_HIGH?: boolean;
}

export interface ILeftColumn {
    ICON?: string;
    CONTENT?: string;
    AUDIO_URL?: string;
    BG_IMAGE?: string;
    IMG_ALT?: string;
}

export interface IMediaPanel {
    TITLE?: string;
    CONTENT: string;
    IMG_SRC: string;
    IMG_ALT: string;
    IMG_POSITION: "left" | "right";
    IMG_FIRST_ON_MOBILE?: boolean;
    BG_COLOR?: string;
    CARD_COLOR?: string;
    LIST_STYLE?: "check";
    DECOR_SRC?: string;
    WIDE_CONTENT?: boolean;
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
  LEFT_COLUMN?: ILeftColumn;
  COMPARISON_CARDS?: IArticleComparison[];
  MEDIA_PANEL?: IMediaPanel;
  IS_SMALL?: boolean;
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
  CALL_TO_ACTION?: IArticleCallToAction;
}

export interface IArticleComparison {
  TITLE: string;
  CONTENT: string;
  BG_COLOR?: string | null;
  IMG_SRC?: string;
  IMG_ALT?: string;
  BG_IMAGE?: string;
  BG_IMAGE_MOBILE?: string;
  APP?: keyof typeof appIds;
  LIST_STYLE?: "check";
}