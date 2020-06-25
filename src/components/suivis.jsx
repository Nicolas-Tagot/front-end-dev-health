import React from "react";
import "./css.css";

class Suivis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          {this.props.id}
          {this.props.historique.map((item) => (
            <div>
              {item.sante === 1 ? (
                <div className="etatG">{item.response}</div>
              ) : null}
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default Suivis;
