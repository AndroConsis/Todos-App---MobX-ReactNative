import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard, ScrollView } from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
    onFilterChange = value => {
        this.props.store.filter = value
    }

    onSearchPress = () => {
        if (this.props.store.searchVisible) {
            this.props.store.searchVisible = false;
            Keyboard.dismiss();
        } else {
            this.props.store.searchVisible = true;
        }
    }

    render() {
        const {
            createTodo,
            filter,
            filteredTodos,
            newTodo,
            searchVisible,
        } = this.props.store;

        return <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.welcome}>
                Todos
            </Text>
            <Button
                style={styles.searchButton}
                title={searchVisible ? "Close" : "Search"}
                onPress={this.onSearchPress}
            />
            </View>
            {searchVisible ? <TextInput
                ref={ref => {this.refs["searchInput"] = ref}}
                onChangeText={this.onFilterChange}
                value={filter}
                style={styles.input}
                placeholder={"search"}
            /> :
                <TextInput
                    value={newTodo}
                    onChangeText={val => { this.props.store.newTodo = val }}
                    blurOnSubmit={true}
                    returnKeyType={"done"}
                    onSubmitEditing={createTodo}
                    style={styles.input}
                    placeholder={"add new todo"}
                />}
            <ScrollView>
                {filteredTodos.map(item => <View style={styles.listItem}>
                    <Text style={styles.instructions}>{item}</Text>
                </View>)}
            </ScrollView>
        </View >
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    searchButton: {
        backgroundColor: "red"
    },
    welcome: {
        fontSize: 28,
        margin: 20,
        marginBottom: 10,
        paddingVertical: 20,
        color: '#333333',
    },
    instructions: {
        color: '#555555',
        fontSize: 18,
        paddingBottom: 10
    },
    listItem: {
        margin: 15,
        marginBottom: 0,
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "gray"
    },
    input: {
        borderColor: "#777777",
        borderWidth: 1,
        marginBottom: 20,
        marginHorizontal: 15,
        padding: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        fontSize: 18,
        color: '#777777',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
};

