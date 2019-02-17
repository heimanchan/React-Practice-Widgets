import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({tabIndex: num});
  }

  render() {
    const tab = this.props.panes[this.state.tabIndex];
    return(
      <div className="tabs-box widget-box">
        <h1>Shiba Colors</h1>
        <div className="tabs">
          <Headers
            tabIndex={this.state.tabIndex}
            onTabChosen={this.selectTab}
            panes={this.props.panes}
          >
          </Headers>
          <div className="tab-content">
            <article>
              {tab.content}
            </article>
          </div>
        </div>
      </div>
    )
  }
}

class Headers extends React.Component {
  render() {
    const selected = this.props.tabIndex;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const chosen = index === selected ? 'active' : '';
      return (
        <li
          key={index}
          className={chosen}
          onClick={() => this.props.onTabChosen(index)}
        >
          {title}
        </li>
      );
    });

    return (
      <ul className="tab-header">
        {headers}
      </ul>
    );
  }
}