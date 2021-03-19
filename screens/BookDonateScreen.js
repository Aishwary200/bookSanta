import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader'

export default class BookDonateScreen extends Component {
    constructor() {
        super()
        this.state = {
            requestedBookList: []
        }
        this.requestRef = null
    }
    getRequestedBookList = () => {
        this.requestRef = db.collection('requested_books')
            .onSnapshot((snapshot) => {
                var requestedBookList = snapshot.docs.map(document => document.data())
                this.setState({
                    requestedBookList: requestedBookList
                })
            })
    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item, i }) => {
        return (
            <ListItem
                key={i}
                title={item.book_name}
                subtitle={item.reason_to_request}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={<TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('ReceiverDetails', { 'Details': item })
                }}>
                    <Text style={{ color: '#ffff' }}>View</Text>
                </TouchableOpacity>}
                bottomDivider
            />
        )
    }
    componentDidMount() {
        this.getRequestedBookList()
    }
    componentWillUnmount() {
        this.requestRef()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader title='Donate Books' />
                <View style={{ flex: 1 }}>
                    {this.state.requestedBookList.length === 0 ? (
                        <View style={styles.subContainer}>
                            <Text style={{ fontSize: 20 }}>List of all requested books</Text>
                        </View>
                    ) : (
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.requestedBookList}
                            renderItem={this.renderItem}
                        />
                    )}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ subContainer: { flex: 1, fontSize: 20, justifyContent: 'center', alignItems: 'center' }, button: { width: 100, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } })
