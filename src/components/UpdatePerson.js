import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {TextInput, Button, Headline} from 'react-native-paper';
import {orange100} from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  updateButton: {
    marginTop: 20,
  },
});

class UpdatePerson extends Component {
  state = {
    firstName: this.props.person.firstName,
    lastName: this.props.person.lastName,
    phone: this.props.person.phone,
    email: this.props.person.email,
    company: this.props.person.company,
    project: this.props.person.project,
    notes: this.props.person.notes,
    id: this.props.person.id,
  };

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name={'plus'} size={50} color={red} />,
  };

  formUpdate({prop, value}) {
    this.setState(prevState => ({...prevState, [prop]: value}));
  }

  onUpdatePress() {
    const {firstName, lastName, phone, email, company, project, notes, id} =
      this.state;

    this.props.updatePersonData({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
      id,
    });

    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      project: '',
      notes: '',
      id: '',
    });

    this.props.backToPeopleList();
  }

  onCancelPress() {
    this.props.noneSelected();
    this.props.backToPeopleList();
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Headline style={styles.headline}>Update contact</Headline>
          <TextInput
            style={styles.inputField}
            label="First name"
            value={this.state.firstName}
            onChangeText={value => this.formUpdate({prop: 'firstName', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Last name"
            value={this.state.lastName}
            onChangeText={value => this.formUpdate({prop: 'lastName', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Phone number"
            value={this.state.phone}
            onChangeText={value => this.formUpdate({prop: 'phone', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Email"
            value={this.state.phone}
            onChangeText={value => this.formUpdate({prop: 'email', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Company"
            value={this.state.company}
            onChangeText={value => this.formUpdate({prop: 'company', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Project"
            value={this.state.project}
            onChangeText={value => this.formUpdate({prop: 'project', value})}
          />
          <TextInput
            style={styles.inputField}
            label="Notes"
            value={this.state.notes}
            onChangeText={value => this.formUpdate({prop: 'notes', value})}
          />
          <View style={styles.updateButton}>
            <Button
              color={'white'}
              style={{backgroundColor: 'grey'}}
              mode="contained"
              onPress={this.onUpdatePress.bind(this)}>
              Update
            </Button>
          </View>
          <View style={styles.updateButton}>
            <Button
              color={'white'}
              style={{backgroundColor: 'grey'}}
              mode="contained"
              onPress={this.onCancelPress.bind(this)}>
              Cancel
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.personSelected,
  };
};

export default connect(mapStateToProps, actions)(UpdatePerson);
