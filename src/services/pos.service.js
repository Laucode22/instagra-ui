import { UserService } from "./user.service";
import environment from '../environments/index'

export class PostService {
   static feed(){
     return fetch( environment.apiUrl + '/post?sort=-1', {
         headers:{
             Authorization: UserService.getToken()
         }
     })
          .then(res => res.json());
    }

    static async get(id){
        
          const res = await fetch(environment.apiUrl + '/post/' + id, {
              headers: {
                  Authorization: UserService.getToken()
              }
          });
           return res.json();
    }

    static async addComment(postId, content){
        const res = await fetch(environment.apiUrl + '/post/' + postId + '/comment', {
            method: 'PUT',
            headers: {
                Authorization: UserService.getToken(),
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ content })
        });
         return res.json();
    }

    static async getComments(postId){
        const res = await fetch(environment.apiUrl + '/post/' + postId + '/comment',{
           headers: {
               Authorization: UserService.getToken()
           }
        });
        return res.json();
    }
}