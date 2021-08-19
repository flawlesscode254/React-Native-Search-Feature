import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Search = () => {
    const [search, setSearch] = useState('')

    const data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

    return (
        <View style={{
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <TextInput 
                placeholder="Enter to search..." 
                value={search}
                style={{
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5
                }}
                onChangeText={text => setSearch(text)}
            />
            {data.filter((val) => {
                if (search === '') {
                }
                else if (val.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((val) => (
                <Text>{val}</Text>
            ))}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
