import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from 'native-base'
import {COLORS} from '../common/Colors';

export default class AppHeader extends Component {
    render() {
        return (
            
            <Header translucent={ false } androidStatusBarColor={ COLORS.PRIMARY} style={{ backgroundColor: COLORS.DARK }}>
                { this.props.children }
            </Header>

            // <Header iosBarStyle = {COLORS.DARK} style={{borderBottomWidth: 1, borderBottomColor: '#999'}}>
            // <Text>Sneha</Text>
            // </Header>
       
        )
    }
}

const styles = StyleSheet.create({})