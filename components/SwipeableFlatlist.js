import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native'
import db from '../config'
import { SwipeListView } from 'react-native-swipe-list-view'
import { ListItem, Icon } from 'react-native-elements'

export default class SwipeableFlatlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allNotifications: this.props.allNotifications,

        }
    }
    updateMarkAsRead = notification => {
        db.collection('all_notifications')
            .doc(notification.doc_id)
            .update({
                notification_status: 'read'
            })
    }
    renderItem = data => (
        <ListItem
            leftElement={<Icon name='book' type='font-awesome' color='#696969' />}
            title={data.item.book_name}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            subtitle={data.item.message}
            bottomDivider
        />
    )
    renderHiddenItem = () => {
        <View style={styles.rowBack}>
            <View style={styles.backRightBtn, styles.backRightBtnRight}>
                <Text style={styles.backTextWhite}></Text>
            </View>
        </View>
    }
    onSwipeValueChange = swipeData => {
        var allNotifications = this.state.allNotifications
        const { key, value } = swipeData
        if (value < -Dimensions.get(window).width) {
            const newData = [...allNotifications]
            this.updateMarkAsRead(allNotifications[key])
            newData.splice(key, 1)
            this.setState({
                allNotifications: newData
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SwipeListView
                    disableRightSwipe
                    data={this.state.allNotifications}
                    renderItem={this.renderItem}
                    renderHiddenItem={this.renderHiddenItem}
                    rightOpenValue={-Dimensions.get('window').width}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onSwipeValueChange={this.onSwipeValueChange}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white", flex: 1
    },
    backTextWhite: {
        color: "#FFF", fontWeight: "bold", fontSize: 15, textAlign: "center", alignSelf: "flex-start"
    },
    rowBack: {
        alignItems: "center", backgroundColor: "#29b6f6", flex: 1, flexDirection: "row", justifyContent: "space-between", paddingLeft: 15
    },
    backRightBtn: {
        alignItems: "center", bottom: 0, justifyContent: "center", position: "absolute", top: 0, width: 100
    },
    backRightBtnRight: {
        backgroundColor: "#29b6f6", right: 0
    }
});
