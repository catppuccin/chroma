<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/alecthomas/chroma">Chroma</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/chroma/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/chroma?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/chroma/issues"><img src="https://img.shields.io/github/issues/catppuccin/chroma?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/chroma/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/chroma?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="assets/previews/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/previews/latte.webp">
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/previews/frappe.webp">
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/previews/macchiato.webp">
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/previews/mocha.webp">
</details>


## Usage

### Chroma CLI

#### CSS Styles
	- Specify the output format as `html` when invoking `chroma` with `chroma -f html`.
	- Clear out the styles from the generated output, i.e. delete everything in between the opening and closing `<style>` tags.
	- Then just copy and paste the contents of `dist/{flavor}-chroma-style.css` in the cleared space.
	- You might need to adjust the body's text and background color yourself.

#### XML Styles
	- Specify the path (on your device) to the `dist/{flavor}-chroma-style.xml` when invoking `chroma` with the `-s` flag.

### Hugo 🛠️
	- Set `markup.highlight.noClasses` to `false` in your Hugo config.
	- Include the desired stylesheet — `dist/{flavor}-chroma-style.css` in your layouts, e.g. in a `head` partial to make it available on all pages.

## 💝 Thanks to

- [Aniket Teredesai](https://github.com/icy-comet)
- [JSS Project](https://github.com/cssinjs/jss)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>