import { Redirect } from "expo-router";


const Index = () =>{
          const isLoggedIn = true;

          if(isLoggedIn){
                    return <Redirect href="/home" />
          }else{
                    return <Redirect href="/auth/login" />
          }

}

export default Index;