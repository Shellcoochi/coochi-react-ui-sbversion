import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import storyTheme from './storyTheme';

addons.setConfig({
//   theme: themes.dark,
theme: storyTheme,
});