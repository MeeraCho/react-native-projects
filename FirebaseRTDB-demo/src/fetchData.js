import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { db } from '../config';
import { onValue, ref, set } from 'firebase/database';

const FetchData = () => {
    const [todoData, setTododData] = useState([]);

    //when the data is updated 
    useEffect(() => {
        const startCountRef = ref(db, 'posts/');
        onValue(startCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key => ({
                id:key,
                ...data[key]
            }));
            console.log(newPosts);
            setTododData(newPosts);
        })
    })

    return (
        <View>
            <Text>FetchData</Text>
        </View>
    )
}

export default FetchData