import React,{Component} from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity,FlatList} from 'react-native'
import colors from '../../styles/colors'
import Button from '../../Component/Button'
import Loader from '../../Component/Loader'
import actions from '../../redux/actions'
import { find_text } from '../../redux/actions/action'
import Test from '../../Component/Test'
import { ActivityIndicator } from 'react-native-paper'

export default class Stores extends Component{
    state={
        name:'',
        search:[],
        isLoading:false,
        
    }
    
    apicall = () => {
        const {name} = this.state;
        find_text(name)
          .then(res => {
            console.log(res.data, 'name');
            this.setState({search: [...res.data]});
          })
          .catch(err => {
            console.log(err);
          });
      };

      onChangeText = val => {
          let{name} = this.state
        this.setState({name: val});
        console.log(name)
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
             this.apicall()
            
        }, 600);
      };
    

    render(){
        const {isLoading,search}=this.state
        return(
            <View style={styles.container}>
                <Text style={styles.input}>Stores</Text>
                <View style={styles.search}>
            <TextInput placeholder='Search here...' style={{width:190,borderWidth:0.2,borderRadius:10,height:40,marginTop:2}} onChangeText={this.onChangeText}/>
            <TouchableOpacity>
                <Text style={{margin:10,borderWidth:0.2,width:70,height:20,textAlign:'center',borderRadius:10,backgroundColor:'#dcdcdc'}}>Search</Text>
            </TouchableOpacity>
            <ActivityIndicator style={{position:'absolute',marginLeft:80,marginTop:10}}/>
          </View>
          <FlatList
            data={search}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={key => key}
            renderItem={({item})=>(
                <Test profiles={item}/>
            )}
          />
          <Loader isLoading={isLoading}/>
            </View>
        )
    }
}

// StyleSheet
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        flex:1,  
    },
    input:{
        textAlign:'center',
        fontSize:20,
        marginTop:20
    },
    search:{
        marginLeft:30,
        marginTop:30,
        marginBottom:10,
        flexDirection:'row'
      }
})