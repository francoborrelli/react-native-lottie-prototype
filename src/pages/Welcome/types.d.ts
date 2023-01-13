import { ListRenderItemInfo } from 'react-native';

export type AnimationType =
  | string
  | AnimationObject
  | {
      uri: string;
    };

export type Slide = {
  key: number;
  text: string;
  title: string;
  speed?: number;
  textColor?: string;
  actions?: ReactNode;
  backgroundColor?: string;
  backgroundAnimation?: { speed?: number; source: AnimationType };
  animation?: { speed?: number; source: AnimationType; autoPlay: boolean };
};

export type RenderItemInterface = ListRenderItemInfo<Slide>;

export interface SliderItemInterface {
  item: Slide;
}
