import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as Actions from '../actions';

class listItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const {individualItem, expanded} = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style = {{color:'#331E35', flex: 1}}>
            {individualItem.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const {titleTextStyle} = styleObj;
    const {id, title} = this.props.individualItem;

    return (
      <TouchableWithoutFeedback onPress= {()=> this.props.selectIndividualItem(id)}>
        <View>
          <CardSection>
            <Text style={titleTextStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styleObj = {

  titleTextStyle: {
    color: '#012E3B',
    fontSize: 18,
    paddingLeft: 15
  }

};

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedItemId === ownProps.individualItem.id;
  return {expanded};
  //return { selectedItemId: state.selectedItemId };
};

export default connect(mapStateToProps, Actions)(listItem);
