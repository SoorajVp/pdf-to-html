import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react"; // tinymce-react is imported as an ES module
import "./App.css";

export default function App() {
  const editorRef = useRef(null);
  const API_KEY = "<TINYMCE_API_KEY>"

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey={API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={`
              <header>
                  <h1>Welcome to My Website</h1>
                  <p>This is a simple HTML document.</p>
              </header>

              <main>
                  <section>
                      <h2>About</h2>
                      <p>This section contains information about the website.</p>
                  </section>

                  <section>
                      <h2>Contact</h2>
                      <p>Email: example@example.com</p>
                  </section>
              </main>

              <footer>
                  <p>&copy; 2024 My Website. All rights reserved.</p>
              </footer>
        `}
        init={{
          height: 500,
          menubar: false,
          plugins:
            "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave",
          toolbar:
            "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
          height: "700px",
          toolbar_sticky: true,
          icons: "thin",
          skin: "material-classic",
          icons: "material",
          content_style: "material-classic",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}