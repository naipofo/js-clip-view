# JS clip view
 *JS clip view* is a simple web app to display and change the contents of your clipboard. It uses [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). 

## Screenshots
 ![basic UI](https://raw.githubusercontent.com/naipofo/js-clip-view/main/media/screenshot-light.png)

 ![software displaying html](https://raw.githubusercontent.com/naipofo/js-clip-view/main/media/screenshot-html.png)

 ![dark mode](https://raw.githubusercontent.com/naipofo/js-clip-view/main/media/screenshot-dark.png)

## How to enable raw clipboard acces
 Without enabling unsanitized acces to the clipboard, only [supported formats](https://w3c.github.io/clipboard-apis/#reading-from-clipboard) can be read.
 To enable it, go to `about://flags/#raw-clipboard` and set the flag to `Enabled` (chrominium browsers only).
 This can be potentially dangerous, see [position of mozilla and webkit](https://github.com/WICG/raw-clipboard-access/blob/master/explainer.md#stakeholder-feedback--opposition) about the feature.

 Status  of raw clipboard acces feature in chrominium: [\[link\]](https://www.chromestatus.com/feature/5682768497344512)
