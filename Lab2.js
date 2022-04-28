import { StyleSheet, ActivityIndicator, View } from 'react-native';
import Moment from 'moment';
import React, { useState, useEffect } from 'react';
import { LineChart, Grid } from 'react-native-svg-charts'
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import 'react-native-gesture-handler';




const Lab2 = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  const getData = async () => {
    var dt;
    try {
      const response = await fetch('https://api.coronavirus.data.gov.uk/v1/data?' +
        'filters=areaType=nation;areaName=england&' +
        'structure={"date":"date","newCases":"newCasesByPublishDate"}');
      const json = await response.json();

      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    //if(!isLoading)
    getData()
    console.log('useEffectr')
    setInterval(() => {

      if(data.length!=0){
        console.log(''+data.length)
        var reformedData={}
        data.forEach((item)=>{
          reformedData.push({x:moment(item.date), y:newCases})
        });
        cancelWait();
        clearInterval(this)
      }

    }, 10000);

    const cancelWait = () => {clearInterval(intervalId);}

  }, []);


  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <Chart
          style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
          xDomain={{ min: -2, max: 10 }}
          yDomain={{ min: -2, max: 20 }}
          padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
        >
          <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
          <HorizontalAxis tickCount={3} />
          <Line data={data} smoothing="none" theme={{ stroke: { color: 'red', width: 1 } }} />
      </Chart>)}
    </View>
  );

}
export default Lab2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

