 
// import Vue from 'vue'
// import Axios from 'axios';
import authlist from "../../api/authlist.js" 
 
const logins = {
    state : {
        user:sessionStorage.getItem('USER'),
        role:sessionStorage.getItem('ROLE'),
        router:[]
    }, mutations: {
        SET_USER(state,user){
            this.state.user = user;
        },
        SET_ROLE(state,role){
            this.state.role = role;
        },
        SET_ROUTER(state,router){
            this.state.router = router;
        }
    },actions: {
        Logins({commit},obj){
            
            return new Promise((resolve,reject)=>{
                let data={};
             
                // Axios.post('/servers/login',{
                //     user: obj.user,
                //     password: obj.password
                // }).then(function (response) {
                //     commit('SET_USER',obj.user);  //将username和role进行存储
                //     sessionStorage.setItem('USER', obj.user); //存入 session 
                //     commit('SET_ROLE',obj.user);  //将username和role进行存储
                //     sessionStorage.setItem('ROLE', response.role); //存入 session 
                //     data = {user:obj.user,role: response.role};
                //     resolve(data);
                // }).catch(function (error) {
                //     return data;
                //     resolve(data);
                // });
                 
                authlist.map(function(item){
                    console.log(obj.user+" "+item.user);
                    if(obj.user == item.user){
                        commit('SET_USER',item.user);  //将username和role进行存储
                        sessionStorage.setItem('USER', item.user); //存入 session 
                        commit('SET_ROLE',item.role);  //将username和role进行存储
                        sessionStorage.setItem('ROLE', item.role); //存入 session 
                        return data = {user:item.user,role: item.role};
                    }else{
                        return data;
                    }
                })
                 resolve(data);
                 
             }).catch(error=>{
                 debugger;
                reject(error);
            })
        },
        Logouts({commit,state}){
            return new Promise((resolve,reject)=>{
                commit('SET_USER',"");  //将username和role进行存储
                sessionStorage.setItem('USER',""); //存入 session 
                commit('SET_ROLE',"");  //将username和role进行存储
                sessionStorage.setItem('ROLE',""); //存入 session 
                location.reload();
                resolve();
             }).catch(error=>{
                reject(error);
            })
        },
        Roles({commit},newrouter){
            return new Promise((resolve, reject) => {
                commit('SET_ROUTER',newrouter); //存储最新路由
                resolve(newrouter);
          }).catch(error => {
              reject(error);
          });
        }
    }   
}

export default logins;
 