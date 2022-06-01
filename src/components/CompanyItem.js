import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Card, Title, Paragraph, Avatar} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 100,
    fontSize: 24,
  },
  image: {
    height: 100,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
    paddingBottom: 5,
    paddingTop: 5,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  companyItemContainer: {
    margin: 10,
  },
  employeeName: {
    fontSize: 16,
    margin: 2,
  },
});

const CompanyItem = props => {
  return (
    <View style={styles.companyItemContainer}>
      <Card>
        <Card.Title
          title={props.companies.company}
          left={props => (
            <Avatar.Icon
              {...props}
              color={'white'}
              style={{backgroundColor: 'grey'}}
              icon="group"
            />
          )}
        />
        <Card.Content>
          {props.companies.names.map((name, key) => {
            return (
              <Text style={styles.employeeName} key={key}>
                {name.firstName} {name.lastName}
              </Text>
            );
          })}
        </Card.Content>
      </Card>
    </View>
  );
};

export default CompanyItem;
