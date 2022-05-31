import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import {Colors} from 'react-native-paper';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
  },
});

class PeopleList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'user'} size={50} color={'#f08e25'} />
    ),
  };

  renderInitialView() {
    if (this.props.detailView === true) {
      return (
        <PeopleDetail
          navigateToPeopleList={() => this.props.navigation.navigate('People')}
          navigateToAddPerson={() =>
            this.props.navigation.navigate('Add Person')
          }
        />
      );
    }

    return (
      <FlatList
        data={this.props.people}
        renderItem={({item}) => <PeopleItem people={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  render() {
    return <View style={styles.container}>{this.renderInitialView()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView,
    toUpdate: state.toUpdate,
  };
};

export default connect(mapStateToProps)(PeopleList);
