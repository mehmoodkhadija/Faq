import React from 'react'

const App = () => {
  return (
<div className='container-lg'>
    <div style={{width:800}}>
      <div style={{fontSize: 18, fontWeight:"bold", textAlign: "center"}}>FAQs</div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can we negotiate on prices?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>Yes! Please inbox me and feel free to negotiate on prices & work if there is budget issue. I will love to help you in this regard. Thanks</p>
             
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
          What do I need to provide to start working with you?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>In order to get started with the creative process, I will need your: business information, content, plus any relevant files (documents, website references, and branding visual elements).</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             How many revisions do you offer?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>I offer 3 big revisions, unlimited small revisions within the order timeframe. If you need more after the order timeframe I can send an extension with an overtime fee. Will send over an extension on me if first draft doesn't leave much days for revisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default App