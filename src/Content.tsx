
import { Box, Chip, FormControl, Grid, IconButton, MenuItem, Select, Stack, Typography } from "@mui/material"
import { useSetState } from "ahooks"
import React, { useRef } from "react"
import ContentEditable from 'react-contenteditable'
import CloseIcon from "@mui/icons-material/Close";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";



const langs = [
  { label: '自动检测', value: 'auto' },
  { label: '中文（简体）', value: 'zh' },
  { label: '中文（繁体）', value: 'zh-Hant' },
  { label: '英文', value: 'en' },
  { label: '日语', value: 'jp' }
]

export default function() {

  const words = ['Extra Soft', 'Soft', 'Medium', 'Hard', 'test', 'push', 'Push']
  const contentEditable = useRef(null)

  const [lang, setLang] = useSetState({});
  const [state, setState] = useSetState({
    html: 'Edit me !'
  })

  const handleChange = (e) => {
    console.log(e)
  }

  const handlePaste = (event) => {
    // 取消默认粘贴行为
    event.preventDefault();

    // 获取剪贴板中的文本
    const plainText = (event.clipboardData || window?.clipboardData).getData(
      'text/plain'
    );

    // 插入文本到 contentEditable 元素中
    document.execCommand('insertText', false, plainText);
  }

  const onWordClick = (e) => {
    console.log(e)
  }

  return (
    <Stack className="translater-wrapper"
      sx={{ height: '100%' }}
    >
      <Grid container className="translater-header" justifyContent='start'>
        <Grid item container alignItems='center' >
          <FormControl sx={{ m: 1 }} size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value='auto'
              onChange={handleChange}
            >
              {
                langs.map(({ label, value }) => <MenuItem key={label} value={value}>{label}</MenuItem>)
              }
            </Select>
          </FormControl>
          <IconButton aria-label="swap">
            <SwapHorizIcon />
          </IconButton>
          <FormControl sx={{ m: 1 }} size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value='zh'
              onChange={handleChange}
            >
              {
                langs.map(({ label, value }) => <MenuItem key={label} value={value}>{label}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box
        sx={{
          height: '50%',
          position: 'relative'
        }}
      >
        <ContentEditable
          onPaste={handlePaste}
          onChange={handleChange}
          className="translater-editor"
          innerRef={contentEditable}
          html={state.html} // innerHTML of the editable div
          disabled={false}  // use true to disable editing
        />
        <IconButton
          aria-label="close"
          className="clear-btn"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ p: 2, borderTop: '1px rgba(0, 0, 0, 0.12) solid' }}>
        <Typography gutterBottom variant="body1">
          单词
        </Typography>
        <Box>
          {words.map((word) => <Chip key={word} sx={{
            m: '4px'
          }} variant='outlined' label={word} onClick={onWordClick} />)}
        </Box>
      </Box>
    </Stack>
  )
}
