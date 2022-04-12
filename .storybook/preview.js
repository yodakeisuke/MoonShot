import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from 'components/Theme';

import { RecoilRoot } from 'recoil';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {/* @ts-expect-error: recoilアップデート→0.7により発生。原因不明。 */}
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </ThemeProvider>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
