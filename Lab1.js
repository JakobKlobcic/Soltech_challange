import { StyleSheet, Switch, Text, View, Button } from 'react-native';
import Moment from 'moment';
import React, { useState, useEffect } from 'react';

export default function Lab1() {

    const [date, setDate] = useState(new Date())
    const [count, setCount] = useState(0)
    const [switchState, setSwitchState] = useState(false)
    const [changeBy, setChangeBy] = useState(1)

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            setInterval(() => setDate(new Date()), 10000);
        }
        return () => {
            isCancelled = true;
        };
    }, []);
    function changeCount(change) {
        if (change == "plus") {
            setCount(count + changeBy)
        } else if (change == "minus") {
            setCount(count - changeBy)
        }
    }

    function handleSwitch(){        
        if(switchState){
            setChangeBy(1)
        }else{
            setChangeBy(2)
        }
        setSwitchState(!switchState);
        setCount(0)
        

    }

    return (
        <View style={[styles.container, { flexDirection: "column" }]}>
            <Text style={[styles.time, { flex: 1 }]}>{Moment(date).format("hh:mm:ss a")}</Text>
            <View style={[styles.container, { justifyContent: "flex-end" }]}>
                <View style={[styles.container, { flexDirection: "row", padding: 0 }]}>
                    <Text>1</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switchState ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={handleSwitch}
                        value={switchState}
                    />
                    <Text>2</Text>
                </View>
                <View style={[styles.container, { flexDirection: "row", padding: 0  }]}>

                    <Button title=" - " onPress={() => changeCount("minus")} />
                    <Text style={styles.counter}>{count}</Text>
                    <Button title=" + " onPress={() => changeCount("plus")} />
                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    time: {
        fontSize: 50,
        fontWeight: "bold"
    },

    counter: {
        fontSize: 30,
        padding: 20,
        fontWeight: "bold"
    }
});

/*
export default class Lab1 extends React.Component {
    render() {
        const[date, setDate] = useState(new Date())

        useEffect(() => {
            setInterval(() => setDate(new Date()), 30000);
        }, []);

      return (
        <View style={styles.container}>
            <Text>{Moment(date).format("hh:mm:ss a")}</Text>
        </View>
      );
    }
};*/