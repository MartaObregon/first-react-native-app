import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Todo = ({title, id}) => {

const handleDelete = (title) =>{
    console.log(title)
}
    return (
        <View>
            <Text>{title}</Text>
            <Button onPress={handleDelete} title='Delete'></Button>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})

