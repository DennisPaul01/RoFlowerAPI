import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const JavascriptExamplePage = () => {
  const codeStringFetch = `fetch('https://nekos.best/api/v2/neko').then(response =>
    response.json()).then(json =>
    console.log(json.results[0].url))`;

  const codeStringAsync = `async function getNeko() {
        const response = await fetch('https://nekos.best/api/v2/neko')
        const json = await response.json()
        console.log(json.results[0].url)
    }
    await getNeko()`;

  return (
    <div className="endpoints-container">
      <div className="endpoint">
        <h3>Javascript</h3>
        <div className="endpoint-example">
          <p>
            <span> Folosind fetch </span>
          </p>

          <div className="endpoint-response">
            <SyntaxHighlighter language="javascript" style={dark}>
              {codeStringFetch}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="endpoint-example">
          <p>
            <span> Folosind async </span>
          </p>

          <div className="endpoint-response">
            <SyntaxHighlighter language="javascript" style={dark}>
              {codeStringAsync}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="about">
        <h4>Despre</h4>
        <p>
          Creat de{" "}
          <a href="https://github.com/DennisPaul01">Mucioiu Denis Paul</a>
        </p>
        <p>
          Codul sursa se poate gasi pe{" "}
          <a href="https://github.com/DennisPaul01/RoFlowerAPI">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default JavascriptExamplePage;
