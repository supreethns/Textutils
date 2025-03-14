import React, { useState } from 'react' 

const About = () => {
    const [myStyle, setMyStyle] = useState(
        {
            color:'white',
            backgroundColor:'black'
        });
        const [btntext, setBtntext] = useState("Enable Light Mode");
        
        const togglestyle=()=>{
            if(myStyle.color==='white'){
             setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'3px solid black'
            })
            setBtntext("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                 border:'4px solid white'
            })
            setBtntext("Enable Light Mode");
        }
        }
    return (
        <>
        <div className="container" style={myStyle}>
            <h1 className="my-4">About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyse your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils gives you a way to analyse your text quickly and efficiently.Be it count,character count.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils is a free charecter counter tool that provides instant character counter tool that provides instant cahrecter count & word count statistics for a given text. TextUtils reports the numbver of words & characters. THus it is suitable for writting text with word/charecter  limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       this word counter software works in any web browser such as chrome,firefox, internet explorer, safari,opera.it suits to count charecters in faceboook,blogs,books,excel document,df document,essaya,etc.
       
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button type="button"onClick={togglestyle} className="btn btn-dark">{btntext}</button>
</div>
        </div>
        </>
    );
}

export default About;

