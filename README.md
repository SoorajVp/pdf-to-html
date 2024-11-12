# PDF URL to HTML Converter

This Node.js project converts a PDF document from a URL to an HTML file using the PDF.co API. The output HTML file maintains the structure and design of the original PDF document.

## Requirements
- Node.js
- PDF.co API Key (sign up at [PDF.co](https://pdf.co/) to get an API key)

## Setup
1. **Clone the repository** or create a new Node.js project.
2. **Install Dependencies** (if needed): This project uses `https`, `fs`, and `path`, which are built-in Node.js modules, so no external dependencies are required.
3. **Set up your PDF.co API Key** by replacing the placeholder `<PDFCO_API_KEY>` with your actual API key.

## Configuration
- Open the file and update the following variables:
  - `API_KEY`: Set this to your PDF.co API key.
  - `SourceFileUrl`: URL of the PDF file you want to convert.
  - `DestinationFile`: The path where the output HTML file will be saved.
  - `PlainHtml` and `ColumnLayout`: Set to `true` or `false` depending on whether you want plain HTML without CSS or if the document has a column layout (like a newspaper).

## Usage
Run the script to start the conversion process:
```bash
git clone https://github.com/SoorajVp/pdf-to-html.git

cd pdf-to-html

node index.js
