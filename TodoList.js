import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
    onFilterChange = value => {
        this.props.store.filter = value
    }

    render() {
        const {
            createTodo,
            filter,
            filteredTodos,
            newTodo,
            searchVisible,
            toggleSearch
        } = this.props.store;

        return <View style={styles.container}>
            <Text
                style={styles.searchButton}
                onPress={toggleSearch}
            >{searchVisible ? "Close" : "Search"}</Text>
            <Text style={styles.welcome}>
                Todos
            </Text>
            {searchVisible ? <TextInput
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
            {filteredTodos.map(item => <View style={styles.listItem}>
                <Text style={styles.instructions}>{item}</Text>
            </View>)}
        </View >
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    searchButton: {
        fontSize: 16,
        margin: 20,
        marginBottom: 10,
        paddingVertical: 20,
        color: '#333333',
        position: "absolute",
        top: 0,
        right: 0
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
    }
};

