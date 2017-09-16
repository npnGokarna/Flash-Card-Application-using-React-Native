import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';


class libraryList extends Component {

  componentWillMount() {
  const datSrc = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = datSrc.cloneWithRows(this.props.dataFromReducer);
}

renderRow(individualItem) {
  return <ListItem individualItem={individualItem} />;
}

render() {
  return (
    <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
  );
}
}

const mapStateToProps = state => {
return { dataFromReducer: state.libraries };
};

export default connect(mapStateToProps)(libraryList);
