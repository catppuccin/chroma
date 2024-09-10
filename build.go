package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/alecthomas/chroma/v2"
	"github.com/alecthomas/chroma/v2/formatters/html"
	"github.com/catppuccin/chroma/styles"
)

func main() {
	err := os.RemoveAll("dist")
	if err != nil {
		panic(err)
	}
	err = os.MkdirAll("dist", os.ModePerm)
	if err != nil {
		panic(err)
	}

	formatter := html.New(html.WithClasses(true))

	styleMap := map[string]*chroma.Style{
		"latte":     styles.Latte,
		"mocha":     styles.Mocha,
		"frappe":    styles.Frappe,
		"macchiato": styles.Macchiato,
	}

	for name, style := range styleMap {
		filePath := filepath.Join("dist", fmt.Sprintf("%s.css", name))

		file, err := os.Create(filePath)
		if err != nil {
			panic(err)
		}
		defer file.Close()

		err = formatter.WriteCSS(file, style)
		if err != nil {
			panic(err)
		}

		fmt.Printf("CSS for %s written to %s\n", name, filePath)
	}
}
