import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import Event from './Event.js';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: this.props.data,
      video: this.props.video
    };
  }

  render() {
    return (
      <div className="col-xs-4 eventList">
      <VideoPlayer video={ this.props.video } />
        <section>
          <div className="events-header"></div>
          {this.props.data.map((event, i) =>
            <Event key={i} data={event} />
          )}
        </section>
      </div>
    );
  }
}

EventList.propTypes = { data: React.PropTypes.array.isRequired };

export default EventList;
