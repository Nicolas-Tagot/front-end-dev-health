import React from "react";
import "./css.css";
import moment from 'moment';

class AppliWiewed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
        <div className="patientName">
          Patient : {this.props.id}
          </div>
          {this.props.historique.map((item) => (
            <div className="listingDatas">
              {item.medic === 1 ? (
                <div className="etatG">{moment(item.heure).format('DD/MM/YYYY')} : {item.response}</div>
              ) : null}
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default AppliWiewed;
