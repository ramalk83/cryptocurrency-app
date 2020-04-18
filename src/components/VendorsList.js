import React, { Component } from "react";
import { View, Text, FlatList, Button,StyleSheet } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

class VendorsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      search: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setResult(json);
    } catch (e) {
      this.setState({ error: 'Error Loading content', loading: false });
    }
  };

  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false
    });
  }

  renderHeader = () => {
    return <SearchBar placeholder="Search Here..."
      lightTheme round editable={true}
      value={this.state.search}
      onChangeText={this.updateSearch} />;
  };

  updateSearch = search => {
    this.setState({ search }, () => {
      if ('' == search) {
        this.setState({
          data: [...this.state.temp]
        });
        return;
      }

      this.state.data = this.state.temp.filter(function (item) {
        return item.name.toLowerCase().match(search.toLowerCase());
        //return item.name.toLowerCase().indexOf(search.toLowerCase()!== -1);
      }).map(function ({ id, name, email }) {
        return { id, name, email };
      });
    });
  };

  renderDetails({ name, email }) {
    return (
      <View>
        <Text style={styles.titleContainer}>{name}</Text>
        <Text style={styles.dataContainer}>{email}</Text>
        <Text style={styles.iconContainer}>See more...</Text>
        <Text style={styles.iconContainer}>Edit</Text>
        <Text style={styles.deleteContainer}>Delete</Text>
      </View>
    )
  }

  render() {
    return (
      this.state.error != null ?
        <View style={styles.container}>
          <Text>{this.state.error}</Text>
          <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload" />
        </View> :
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={this.state.data}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            /*             <ListItem
                          roundAvatar
                          title={`${item.name}`}
                          subtitle={item.email}
                        /> */
            this.renderDetails(item)
          )}
        />
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {

    },
    titleContainer:{
      fontSize:20,
    },
    dataContainer:{
      fontSize:16,
    },
    iconContainer:{
      flexDirection:'row',
      color: 'blue',
    },
    deleteContainer:{
      flexDirection:'row',
      color: 'blue',
      marginBottom:20
    },
  })

export default VendorsList;
