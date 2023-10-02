import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';
import { getAllUser } from './user-store';
import {emulateLongProcess} from './emulate-long-process'
import { promises } from 'fs';

export const getUsersBadge = async ( user: User ):Promise <Icon | null> => {

  const {solutionCount} = user;

    await emulateLongProcess();
    if ( solutionCount > 2000 ) return Icon.BADGE_GODLIKE;
    if ( solutionCount > 100 )  return Icon.BADGE_PLATINUM;
    if ( solutionCount >= 50 )  return Icon.BADGE_GOLD;
    if ( solutionCount >= 25 )  return Icon.BADGE_SILVER;
    if ( solutionCount >= 5)    return Icon.BADGE_BRONZE;
    if ( solutionCount > 1)     return Icon.BADGE_STARTER;
    if ( solutionCount < 0)     return Icon.BADGE_BADASS;
    return null ;
};



// shoot the first 20 promises in there
//whenever a promise fullfills, load the next promise


function stacker(stack: any, maxStack: number = 20): Promise<any>{
  let currentStack = 0

  let promiseStack: any = [];
  function update(user: User, result: any):any{

    return getUsersBadge(user).then( d =>
      {
        if(stack.length > 0 ){
          return update(stack.shift(), [...result,d])
        }
        else{
          return Promise.resolve([...result,d])
        }
        })
  }
    while (currentStack < maxStack){
      promiseStack.push(update(stack.shift(), []))
      currentStack++
    }

  return Promise.all(promiseStack).
    then(res => res.flat())
};



async function calculateUsersStatistics() {
  const allUsers = await getAllUser()
  let userBadges = stacker(allUsers);
  console.log("number of users: ", allUsers.length)
  console.log("average userCount: ", allUsers.reduce( (sum, d) => sum + d.solutionCount,0) / allUsers.length )
  console.log("top five users: ", allUsers.sort((a,b) => b.solutionCount - a.solutionCount ).slice(0,5) )

  let badgeCount = userBadges.then(res => res.reduce( (acc: any, curr: any) =>
                        acc.has(curr) ? acc.set(curr, acc.get(curr)+ 1) : acc.set(curr,1),
                        new Map()))


    badgeCount.then( badgeCount =>
    console.log("badge count: ", [...badgeCount.entries()]
    .reduce((a, e ) => e[1] > a[1] ? e : a)[0]))
    .catch(error => console.log(error))

  console.log("code further down the road")


}

calculateUsersStatistics();
