import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { useEffect } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, Text, Button, TextInput, View, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Todo from './components/Todo';


export default function App() {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0)
  const [gigs, setGigs] = useState([
    {
      description: 'Freelance job with Qazi',
      amount: 499.99
    }
  ]);
 

  useEffect(()=>{
    setTotal(gigs.reduce((total, gig)=>total+Number(gig.amount), 0));
    
  }, [gigs])

  const addGig = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount
    }])
    setDescription('');
    setAmount('');
  }



  return (
      <SafeAreaView>
      <ScrollView>

      
        <View >
      <Text style={styles.title} >List</Text>
    </View>
    <Text>Total Income: ${total}</Text>
    <TextInput
        style={styles.todoInput}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder='Enter description'
      />
      
      <TextInput
        style={styles.todoInput}
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType='numeric'
        placeholder= 'Enter the amount you made'
      />
      <Button disabled={!amount && !description} onPress={addGig} title="Add Gig"></Button>
    
      {gigs.map((gig)=>(
        <View>
          <Text>{gig.description}</Text>
          <Text>${gig.amount}</Text>
        </View>
      ))}

      <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["27/11/2020", "28/11/2020"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
           
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
</ScrollView>
      </SafeAreaView>
      
  
    
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight:"bold", 
    fontSize: 30,
  },
  todoInput:{
    margin:20,
    borderColor:'red',
    height:40,
    borderWidth:1
  }
});
