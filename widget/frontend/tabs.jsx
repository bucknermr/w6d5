import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.setIndex = this.setIndex.bind(this);
    document.querySelector(".tab-title").classList.add("selected");
  }

  setIndex(e) {
    e.preventDefault();
    let index = this.state.index;
    this.props.tabs.forEach(function(tab, idx) {
      if (tab.title === e.currentTarget.innerHTML) {
        index = idx;
      }
    });
    document.querySelectorAll(".tab-title").forEach((el) => {
      el.classList.remove("selected");
    });
    e.currentTarget.classList.add("selected");
    this.setState({ index });
  }

  render(){
    return (
      <div className="container tabs">
        <ul className="tab-titles">
          {
            this.props.tabs.map((tab) => (<h1 key={tab.title} className="tab-title" onClick={this.setIndex}>
              {tab.title}
            </h1>)
          )
          }
        </ul>
        <p className="tab-content">{this.props.tabs[this.state.index].content}</p>
      </div>
    );
  }
}

export default Tabs;
