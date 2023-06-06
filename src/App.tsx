import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.scss';
import { useSetState } from 'ahooks';
import Aside from './Aside';
import Content from './Content';
import { Grid } from '@mui/material';

const themeDic = {
  light: createTheme({
    typography: {
      fontFamily: 'system-ui'
    },
    palette: {
      mode: 'light'
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableFocusRipple: true
        }
      }
    }
  }),
  dark: createTheme({
    typography: {
      fontFamily: 'system-ui'
    },
    palette: {
      mode: 'dark'
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableFocusRipple: true
        }
      }
    }
  })
};


export default () => {

  const defaultState = {
    code: 'passwords',
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  };

  const [state, setState] = useSetState(defaultState);

  useEffect(() => {
    /* // 进入插件
    window.utools.onPluginEnter(({ code, type, payload }) => {
      this.setState({ code })
    })
    // 退出插件
    window.utools.onPluginOut(() => {
      this.setState({ code: '' })
    }) */
    // 主题切换事件
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        setState({ theme: e.matches ? 'dark' : 'light' });
      });
  })

  return (
    <Grid container >
      <Grid item xs={7} md={7} sx={{
        'border-right': '1px solid rgb(242, 243, 245)'
      }}>
        <Aside />
      </Grid>
      <Grid item xs={5} md={5}>
        <Content />
      </Grid>
    </Grid >
  );
}
