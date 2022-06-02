import React from 'react';
import { Text, View } from "react-native-web";


export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create a Post</Text>
            </View>
        )
    }
}
