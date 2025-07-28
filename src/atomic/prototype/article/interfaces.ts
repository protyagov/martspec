export interface IArticleHeader {
  title: string;
  imgUrl: string;
  body: string; // Текст с \n символами,каждая строка булет поинт  
  appId: string;
}

export interface IArticleSection {
   // Каждый объект массива отдельаная секция
  title: string;
  imgUrl?: string | null; // can be null
  content: string; // MD text
  accentColor: string; // Цвет булет поинтов или сноски 
  bgColor?: string | null; // Цвет фона секции, может быть Null для прозрачной секции
}

export interface IArticleCallToAction {
  title: string;
  subtitle: string;
  imgUrl: string;
  appId: string;
}

export interface IArticleModel {
  header: IArticleHeader;
  body: IArticleSection[];
  callToAction: IArticleCallToAction;
}