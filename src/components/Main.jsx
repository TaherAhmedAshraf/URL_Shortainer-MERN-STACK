import "../App.css";
import { BiLinkAlt } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "@material-ui/lab/Alert";

function Main() {
  const [Alise, setAlise] = useState("");
  const [url, setURL] = useState("");
  const [status, setStatus] = useState(null);
  const [shorturl, setShorturl] = useState(null);

  const PostData = async (e) => {
    if (!url) {
      setStatus(<Alert severity="error">Empity field</Alert>);
      return;
    }
    if (Alise === "" || Alise === " " || Alise.length === 0) {
      const code = uuidv4();
      setAlise(code);
    }
    // url.replace("https", "http");

    // if (!url.startsWith("http://www.")) {
    //   console.log("error");
    // }
    fetch("/create", {
      method: "POST",
      body: JSON.stringify({
        _id: Alise,
        url,
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then((response) => {
      console.log(response.body );
      if (response.status == 200) {
        setStatus(<Alert severity="success">Sucessfull</Alert>);
        setAlise("");
        setURL("");
        setShorturl(`http://localhost:3000/${Alise}`);
      } else {
        setStatus(<Alert severity="error">Failed</Alert>);
        setAlise("");
        setURL("");
      }
    });
  };

  return (
    <div className="holder">
      <div className="card">
        <div>{status}</div>
        <h5>
          <span>
            <BiLinkAlt />
          </span>
          Enter a long URL to make a TinyURL
        </h5>
        <input
          type="text"
          name=""
          id=""
          placeholder="URL"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <h5>
          <span>
            <ImMagicWand />
          </span>
          Customize your link
        </h5>
        <input
          type="text"
          name=""
          id=""
          placeholder="Alise"
          value={Alise}
          onChange={(e) => setAlise(e.target.value)}
        />
        <button onClick={PostData}>generate</button>
        {!shorturl ? null : (
          <input className="padding-top" type="text" value={shorturl} />
        )}
      </div>
    </div>
  );
}

export default Main;
