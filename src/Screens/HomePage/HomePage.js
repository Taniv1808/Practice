import React,{Component} from 'react'
import {View,StyleSheet, FlatList,RefreshControl,ActivityIndicator, TextInput} from 'react-native'
import Test from '../../Component/Test';
import WrapperContainer from '../../Component/WrapperContainer';
import actions from '../../redux/actions';
import { find_text, scrollApi } from '../../redux/actions/action';
import colors from '../../styles/colors';

const LIMIT='10'

export default class Login extends Component{
    state={
        profiles:[],
        isLoading:true,
        skip:0,
        isLoadingMore: false,
        isNoMoreData: false,
        isListEnd:false,
        refreshing: false,
    }
   

    componentDidMount = () => {
        this.getData();
      };
    
      getData = (onEndReachCall = false) => {
        const {skip, profiles, isListEnd} = this.state;
    
        let calcSkip = onEndReachCall ? skip + profiles.length : 0;
    
        let data = {
          searchType: 'LEADERBOARD',
          limit: LIMIT,
          skip: calcSkip.toString(),
        };
        console.log(data);
        // console.log(header);
        scrollApi(data)
          .then(res => {
            // console.log('this is the response: ', res);
            let updatedStateVar = {};
            if (res.data.length > 0) {
              let profilesData = onEndReachCall
                ? [...profiles, ...res.data]
                : res.data;
    
              updatedStateVar = {
                profiles: profilesData,
              };
            } else {
              updatedStateVar = {
                isListEnd: true,
                isNoMoreData: true,
              };
            }
    
            this.setState({
              ...updatedStateVar,
              isLoading: false,
              isLoadingMore: false,
              refreshing: false,
            });
          })
          .catch(err => {
            // console.log('this is the error: ', err);
            this.setState({isLoading: false, isLoadingMore: false});
          });
      };
    

    
onEndReached=()=>{
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.getData(true)
    
}


renderFooter = () => {
    const {isLoadingMore} = this.state;
    if (isLoadingMore) {
      return (
        <View style={{paddingBottom: 20}}>
          <ActivityIndicator color={colors.btnColor}/>
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };

  onRefresh = () => {
    this.setState({refreshing: true, isNoMoreData: false});
    this.getData();
  };

  // searchAPi
  search_api=()=>{
    let {isLoading}=this.state;
    find_text({

    })
  }
  onChange(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
    render(){
        
    const { profiles, refreshing,isLoading} = this.state;
        // const{data}=this.state;
        // console.log(data);
        
        return(
          <WrapperContainer isLoading={isLoading} >
           
           <View style={styles.search}>
            <TextInput placeholder='Search here...' style={{width:290,borderWidth:0.2,borderRadius:10}} onChangeText={this.onChange}/>
          </View>
                <FlatList
                refreshControl={
                    <RefreshControl 
                    refreshing={refreshing}
                      onRefresh={this.onRefresh}
                    />
                  }
                data={profiles}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={({item, key})=>key}
                onEndReached={this.onEndReached}
                ListFooterComponent={this.renderFooter}
                ItemSeparatorComponent={()=>(
                    <View style={{marginBottom:10}}></View>)}
                    renderItem={({item})=><Test profiles={item}/>}/>
            </WrapperContainer>
        )
    }

}

// StyleSheet
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        flex:1
    },
    search:{
      marginLeft:30,
      marginTop:10,
      marginBottom:10
    }

})

