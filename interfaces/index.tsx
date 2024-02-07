import { ReactNode } from 'react';

export interface ITheme {
  type: string;
}

export interface ThemeContextType {
  theme: ITheme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface LayoutProps {
  children: ReactNode;
}

// TODO: Move this to separate types folder?
export type StrObject = {
  [key: string]: string;
};

// Reference: https://www.npmjs.com/package/react-vertical-timeline-component
export interface TimelineParentConfig {
  animate?: boolean;
  className?: string;
  layout?: string;
  lineColor?: string;
}

export type TimeLineUIConfig = {
  className?: string;
  contentArrowStyle?: StrObject;
  contentStyle?: StrObject;
  date?: string;
  dateClassName?: string;
  icon?: string;
  iconClassName?: string;
  iconStyle?: string;
};

export type TimelineFields = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
};

export type TimelineItem = {
  data: TimelineFields[];
  uiConfig: TimeLineUIConfig[];
};
