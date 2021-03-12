import React, {useState} from "react";
import './App.css';
import Header from "./Header"

function Travel() {
  const [data, setData] = useState({
    IntentName: " ",
    TrianingPhrases: " ",
    Responses: " ",
  });
  const {IntentName,TrianingPhrases,Responses} = data

  const handleChange = (e) =>{
    setData({ ...data, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/extremer/google_sheets/CmGEOEDJXcISiyew?tabId=แผ่น1",{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify([[IntentName,TrianingPhrases,Responses,new Date().toLocaleString()],
        ]),
        }
      );
        await response.jason();
        setData({ ...data,IntentName: "",TrianingPhrases: "",Responses: ""});
    } catch (err) {
      console.log(err)
    }
  }


  return (    
  
  <form className="card shadow-lg mt-5 p-5 form " onSubmit={handleSubmit}>
      <Header/>
      <br/>
      <h3 className="text-center mb-5">
        สถานที่ท่องเที่ยวทั้วไป
      </h3>
      <div className="fom-group">
        <label htmlFor="name">
          IntentName
        </label>
        <input
        type="text"
        className="form-control"
        name="IntentName"
        autoComplete="off"
        value={IntentName}
        onChange={handleChange}
        />
      </div>
      <div className="fom-group">
        <label htmlFor="TrainingPhrases">
          TrianingPhrases
        </label>
        <input
        type="text"
        className="form-control"
        name="TrianingPhrases"
        autoComplete="off"
        value={TrianingPhrases}
        onChange={handleChange}
        />
      </div>
      <div className="fom-group">
        <label htmlFor="Responses">
          Responses
        </label>
        <textarea
          name="Responses"
          rows="5"
          className="form-control"
          name="Responses"
          value={Responses}
          onChange={handleChange}
        />
      </div>
      <div className="text-center mt-2">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default Travel;
